#!/usr/bin/env node
/**
 * SEO verification script — Googlebot-simulating audit.
 *
 * Confirms the indexing fixes from the RZLT audit shipped correctly:
 *  - canonical and og:url match the request URL on every page
 *  - <meta name="robots"> declares index, follow
 *  - blog post URLs are ISR-cached (no `no-store`, x-nextjs-prerender: 1,
 *    second request returns x-vercel-cache: HIT)
 *
 * Usage:
 *   node scripts/seo-verify.mjs                          # defaults to https://totofinance.co
 *   SEO_VERIFY_BASE=http://localhost:3000 node scripts/seo-verify.mjs
 *   node scripts/seo-verify.mjs https://staging.example.com
 *
 * Exits non-zero if any check fails so it can be wired into CI later.
 */

const GOOGLEBOT_UA =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

const baseArg = process.argv[2] || process.env.SEO_VERIFY_BASE || "https://totofinance.co";
const BASE = baseArg.replace(/\/$/, "");
const IS_LOCAL = /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\.)/i.test(BASE);

const PATHS = [
  "/",
  "/insights",
  "/insights/copper-tokenization",
  "/tokenized-gold-assets",
  "/tokenized-copper-assets",
  "/tokenized-diamond-assets",
  "/tokenized-yttrium-asset",
  "/about-us",
  "/contact-us",
  "/rare-earth",
  "/vision",
  "/product",
  "/toto-ecosystem",
  "/docs",
  "/toto-privacy-policy",
  "/toto-terms-and-condition",
  "/open-careers",
];

const BLOG_POST_PATHS = PATHS.filter(
  (p) => p.startsWith("/insights/") && p !== "/insights",
);

const styles = {
  pass: "\x1b[32mPASS\x1b[0m",
  fail: "\x1b[31mFAIL\x1b[0m",
  warn: "\x1b[33mWARN\x1b[0m",
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

async function fetchPage(path) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    redirect: "manual",
    headers: { "User-Agent": GOOGLEBOT_UA, Accept: "text/html" },
  });
  const text = await res.text();
  return { url, status: res.status, headers: res.headers, html: text };
}

function findMeta(html, attr, value) {
  const re = new RegExp(
    `<meta[^>]+${attr}=["']${value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][^>]*>`,
    "i",
  );
  const m = html.match(re);
  if (!m) return null;
  const contentMatch = m[0].match(/content=["']([^"']*)["']/i);
  return contentMatch ? contentMatch[1] : null;
}

function findCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  if (!m) return null;
  const href = m[0].match(/href=["']([^"']+)["']/i);
  return href ? href[1] : null;
}

function expectedAbsoluteUrl(path) {
  if (path === "/") return `${BASE}/`;
  return `${BASE}${path}`;
}

function normalizeUrl(u) {
  if (!u) return u;
  return u.replace(/\/$/, "") || "/";
}

function urlMatchesPath(actual, path) {
  if (!actual) return false;
  const expected = expectedAbsoluteUrl(path);
  return normalizeUrl(actual) === normalizeUrl(expected);
}

const results = [];

function record(path, check, ok, detail = "") {
  results.push({ path, check, ok, detail });
  const tag = ok ? styles.pass : styles.fail;
  const line = `  ${tag} ${check}${detail ? ` ${styles.dim(`(${detail})`)}` : ""}`;
  console.log(line);
}

async function checkPage(path) {
  console.log(`\n${path}`);
  let res;
  try {
    res = await fetchPage(path);
  } catch (err) {
    record(path, "network", false, err.message);
    return;
  }

  record(path, `HTTP ${res.status}`, res.status === 200);

  const canonical = findCanonical(res.html);
  record(
    path,
    "canonical matches URL",
    urlMatchesPath(canonical, path),
    canonical || "(missing)",
  );

  const ogUrl = findMeta(res.html, "property", "og:url");
  record(
    path,
    "og:url matches URL",
    urlMatchesPath(ogUrl, path),
    ogUrl || "(missing)",
  );

  const robots = findMeta(res.html, "name", "robots");
  const robotsOk =
    typeof robots === "string" && /index/i.test(robots) && /follow/i.test(robots);
  record(path, "robots: index, follow", robotsOk, robots || "(missing)");

  if (BLOG_POST_PATHS.includes(path)) {
    // x-nextjs-prerender is set in both dev and prod when the route uses ISR.
    // cache-control and x-vercel-cache are production-only signals; on dev/
    // localhost we report them as informational and don't fail the run.
    const prerender = res.headers.get("x-nextjs-prerender");
    record(
      path,
      "x-nextjs-prerender present",
      prerender === "1",
      prerender || "(missing)",
    );

    if (IS_LOCAL) {
      const cc = res.headers.get("cache-control") || "(missing)";
      console.log(
        `  ${styles.warn} cache-control on dev: ${styles.dim(cc)} (production check skipped)`,
      );
      return;
    }

    const cc = res.headers.get("cache-control") || "";
    const noStore = /no-store/i.test(cc);
    record(path, "cache-control has no no-store", !noStore, cc || "(missing)");

    let res2;
    try {
      res2 = await fetchPage(path);
    } catch (err) {
      record(path, "second-request fetch", false, err.message);
      return;
    }
    const cache = res2.headers.get("x-vercel-cache");
    const cacheOk = cache === "HIT" || cache === "STALE" || cache === "PRERENDER";
    record(
      path,
      "x-vercel-cache HIT/STALE/PRERENDER on retry",
      cacheOk,
      cache || "(missing)",
    );
  }
}

async function main() {
  console.log(`SEO verify against ${BASE}`);
  console.log(`User-Agent: ${GOOGLEBOT_UA}\n`);

  for (const path of PATHS) {
    // eslint-disable-next-line no-await-in-loop
    await checkPage(path);
  }

  const total = results.length;
  const failed = results.filter((r) => !r.ok);
  console.log(`\nSummary: ${total - failed.length}/${total} checks passed`);
  if (failed.length > 0) {
    console.log(`\nFailures:`);
    for (const f of failed) {
      console.log(`  - ${f.path}: ${f.check}${f.detail ? ` -> ${f.detail}` : ""}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});

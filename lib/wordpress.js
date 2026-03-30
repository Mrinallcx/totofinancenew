/** WordPress REST API — blog.totofinance.co */

export const WP_JSON_BASE = "https://blog.totofinance.co/wp-json";

const POSTS_ENDPOINT = `${WP_JSON_BASE}/wp/v2/posts`;
const CATEGORIES_ENDPOINT = `${WP_JSON_BASE}/wp/v2/categories`;
const MEDIA_ENDPOINT = `${WP_JSON_BASE}/wp/v2/media`;

const LIST_FIELDS =
  "id,slug,date,title,excerpt,featured_media,categories,tags";

function stripTags(html) {
  if (!html || typeof html !== "string") return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtml(text) {
  if (!text) return "";
  let s = text
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/gi, "…")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) =>
      String.fromCharCode(parseInt(h, 16))
    );
  s = s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
  return s;
}

function cleanExcerpt(text) {
  if (!text) return "";
  // WordPress auto-excerpts often end with "[…]" or "[...]".
  return text
    .replace(/\s*\[\s*(?:…|\.{3})\s*\]\s*$/g, "")
    .trim();
}

function wordCount(html) {
  const plain = stripTags(html);
  if (!plain) return 0;
  return plain.split(/\s+/).filter(Boolean).length;
}

function getTerms(post, taxonomy) {
  const embedded = post._embedded?.["wp:term"];
  if (!Array.isArray(embedded)) return [];
  return embedded.flat().filter((t) => t?.taxonomy === taxonomy);
}

function featuredImageUrlFromEmbedded(post) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media?.source_url) return null;
  return media.source_url;
}

/**
 * @param {object} post — WP REST post object
 * @param {{ categoryById: Map<number, {slug: string, name: string}>, mediaById: Map<number, string> } | null} maps — omit when `_embedded` is present (single post)
 */
function normalizePostList(post, maps = null) {
  let categories;
  let tags;
  let image;

  if (maps) {
    categories = (post.categories || [])
      .map((id) => maps.categoryById.get(id))
      .filter(Boolean);
    tags = [];
    image = post.featured_media
      ? maps.mediaById.get(post.featured_media) ?? null
      : null;
  } else {
    categories = getTerms(post, "category").map((c) => ({
      slug: c.slug,
      name: decodeHtml(c.name || ""),
    }));
    tags = getTerms(post, "post_tag").map((t) => ({
      slug: t.slug,
      name: decodeHtml(t.name || ""),
    }));
    image = featuredImageUrlFromEmbedded(post);
  }

  const title = decodeHtml(stripTags(post.title?.rendered || ""));
  const excerptRaw = post.excerpt?.rendered || "";
  const excerpt = cleanExcerpt(decodeHtml(stripTags(excerptRaw)));
  const words = wordCount(
    post.content?.rendered || post.excerpt?.rendered || ""
  );
  const readMinutes = Math.max(1, Math.round(words / 200));

  return {
    id: post.id,
    slug: post.slug,
    title,
    excerpt,
    image,
    date: post.date,
    categories,
    categorySlugs: categories.map((c) => c.slug),
    categoryLabel: categories[0]?.name || "Article",
    readTimeLabel: `${readMinutes} min`,
    tags,
  };
}

async function fetchJson(url, revalidate) {
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) {
    throw new Error(`WordPress request failed: ${res.status} ${url}`);
  }
  return res.json();
}

function chunkIds(ids, size) {
  const out = [];
  for (let i = 0; i < ids.length; i += size) {
    out.push(ids.slice(i, i + size));
  }
  return out;
}

function slugifyTagLabel(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractTrailingTagsBlock(html) {
  if (!html || typeof html !== "string") {
    return { contentHtml: "", tagsFromContent: [] };
  }
  let out = html.trim();

  // Some WP posts include a final "Tags: a, b, c" paragraph in content.
  // We render tags as badges in the article header, so remove that trailing block.
  const trailingTagsRegex =
    /(?:<!--\s*wp:[\s\S]*?-->\s*)?<p[^>]*>\s*(?:<strong[^>]*>)?\s*tags?\s*:?(?:<\/strong>)?\s*([\s\S]*?)<\/p>\s*(?:<!--\s*\/wp:[\s\S]*?-->\s*)?$/i;

  const match = out.match(trailingTagsRegex);
  if (!match) {
    return { contentHtml: out.trim(), tagsFromContent: [] };
  }

  const rawTagText = decodeHtml(stripTags(match[1] || ""));
  const tagsFromContent = rawTagText
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .map((name) => ({ slug: slugifyTagLabel(name), name }));

  out = out.replace(trailingTagsRegex, "");
  return { contentHtml: out.trim(), tagsFromContent };
}

/**
 * @param {{ perPage?: number, revalidate?: number }} [options]
 */
export async function fetchWordPressPosts(options = {}) {
  const perPage = options.perPage ?? 100;
  const revalidate = options.revalidate ?? 120;

  const listUrl = `${POSTS_ENDPOINT}?per_page=${perPage}&orderby=date&order=desc&_fields=${LIST_FIELDS}`;
  const data = await fetchJson(listUrl, revalidate);
  if (!Array.isArray(data) || data.length === 0) return [];

  const catIds = new Set();
  const mediaIds = new Set();
  for (const p of data) {
    for (const id of p.categories || []) {
      catIds.add(id);
    }
    if (p.featured_media) mediaIds.add(p.featured_media);
  }

  const categoryById = new Map();
  for (const batch of chunkIds([...catIds], 80)) {
    if (batch.length === 0) continue;
    const url = `${CATEGORIES_ENDPOINT}?include=${batch.join(",")}&per_page=100&_fields=id,slug,name`;
    const cats = await fetchJson(url, revalidate);
    if (Array.isArray(cats)) {
      for (const c of cats) {
        categoryById.set(c.id, {
          slug: c.slug,
          name: decodeHtml(c.name || ""),
        });
      }
    }
  }

  const mediaById = new Map();
  for (const batch of chunkIds([...mediaIds], 80)) {
    if (batch.length === 0) continue;
    const url = `${MEDIA_ENDPOINT}?include=${batch.join(",")}&per_page=100&_fields=id,source_url`;
    const medias = await fetchJson(url, revalidate);
    if (Array.isArray(medias)) {
      for (const m of medias) {
        if (m.source_url) mediaById.set(m.id, m.source_url);
      }
    }
  }

  const maps = { categoryById, mediaById };
  return data.map((p) => normalizePostList(p, maps));
}

function normalizePostArticle(post) {
  const base = normalizePostList(post, null);
  const rawContent = post.content?.rendered || "";
  const { contentHtml, tagsFromContent } = extractTrailingTagsBlock(rawContent);

  const mergedTags = [];
  const seen = new Set();

  for (const tag of base.tags || []) {
    const key = tag.slug || tag.name;
    if (!key || seen.has(key)) continue;
    seen.add(key);
    mergedTags.push(tag);
  }

  for (const tag of tagsFromContent) {
    const key = tag.slug || tag.name;
    if (!key || seen.has(key)) continue;
    seen.add(key);
    mergedTags.push(tag);
  }

  return {
    ...base,
    tags: mergedTags,
    contentHtml,
  };
}

/**
 * @param {string} slug
 * @param {{ revalidate?: number }} [options]
 */
const SITEMAP_MAX_PAGES = 50;

/**
 * Paginated slug list for sitemap (minimal payload).
 * @param {{ revalidate?: number }} [options]
 * @returns {Promise<{ slug: string, modified: string }[]>}
 */
export async function fetchWordPressPostUrlsForSitemap(options = {}) {
  const revalidate = options.revalidate ?? 300;
  const out = [];

  try {
    for (let page = 1; page <= SITEMAP_MAX_PAGES; page += 1) {
      const url = `${POSTS_ENDPOINT}?page=${page}&per_page=100&status=publish&_fields=slug,modified,date`;
      const res = await fetch(url, { next: { revalidate } });
      if (!res.ok) break;
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) break;
      for (const row of data) {
        if (row?.slug) {
          out.push({
            slug: row.slug,
            modified: row.modified || row.date,
          });
        }
      }
      if (data.length < 100) break;
    }
  } catch {
    return out;
  }

  return out;
}

export async function fetchWordPressPostBySlug(slug, options = {}) {
  const revalidate = options.revalidate ?? 120;
  const url = `${POSTS_ENDPOINT}?slug=${encodeURIComponent(slug)}&_embed`;
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) {
    throw new Error(`WordPress post failed: ${res.status}`);
  }
  const data = await res.json();
  if (!Array.isArray(data) || data.length === 0) return null;
  return normalizePostArticle(data[0]);
}

export function stripForMetaDescription(html, maxLen = 160) {
  const plain = decodeHtml(stripTags(html || ""));
  if (plain.length <= maxLen) return plain;
  return `${plain.slice(0, maxLen - 1).trim()}…`;
}

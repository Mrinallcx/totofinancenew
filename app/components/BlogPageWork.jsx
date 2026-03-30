"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./BlogPageWork.css";

const CARDS_PER_ROW = 3;
const ROWS_PER_PAGE = 3;
const POSTS_PER_PAGE = CARDS_PER_ROW * ROWS_PER_PAGE;

function chunkPosts(posts, size) {
  const rows = [];
  for (let i = 0; i < posts.length; i += size) {
    rows.push(posts.slice(i, i + size));
  }
  return rows;
}

function parsePageParam(searchParams) {
  const raw = searchParams.get("page");
  const n = raw ? parseInt(raw, 10) : 1;
  if (!Number.isFinite(n) || n < 1) return 1;
  return n;
}

function visiblePageItems(current, total) {
  if (total <= 1) return [];
  if (total <= 9) {
    return Array.from({ length: total }, (_, i) => ({
      type: "page",
      value: i + 1,
    }));
  }
  const set = new Set([1, total, current, current - 1, current + 1]);
  const sorted = [...set].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < sorted.length; i += 1) {
    const p = sorted[i];
    if (i > 0 && p - sorted[i - 1] > 1) {
      out.push({ type: "ellipsis", key: `gap-${sorted[i - 1]}-${p}` });
    }
    out.push({ type: "page", value: p });
  }
  return out;
}

function BlogPager({
  page,
  totalPages,
  onPageChange,
  disabled,
}) {
  const pagesToShow = useMemo(
    () => visiblePageItems(page, totalPages),
    [page, totalPages]
  );

  if (totalPages <= 1) return null;

  return (
    <nav
      className={`blogwork__pager ${disabled ? "blogwork__pager--pending" : ""}`}
      aria-label="Blog pagination"
    >
      <div className="blogwork__pager-inner">
        <button
          type="button"
          className="blogwork__pager-btn blogwork__pager-btn--prev"
          onClick={() => onPageChange(page - 1)}
          disabled={disabled || page <= 1}
          aria-label="Previous page"
        >
          Previous
        </button>

        <ul className="blogwork__pager-pages">
          {pagesToShow.map((item) =>
            item.type === "ellipsis" ? (
              <li key={item.key} className="blogwork__pager-ellipsis" aria-hidden>
                …
              </li>
            ) : (
              <li key={item.value}>
                <button
                  type="button"
                  className={`blogwork__pager-page ${item.value === page ? "blogwork__pager-page--current" : ""}`}
                  onClick={() => onPageChange(item.value)}
                  disabled={disabled}
                  aria-label={`Page ${item.value}`}
                  aria-current={item.value === page ? "page" : undefined}
                >
                  {item.value}
                </button>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          className="blogwork__pager-btn blogwork__pager-btn--next"
          onClick={() => onPageChange(page + 1)}
          disabled={disabled || page >= totalPages}
          aria-label="Next page"
        >
          Next
        </button>
      </div>
      <p className="blogwork__pager-meta">
        Page {page} of {totalPages}
      </p>
    </nav>
  );
}

function BlogPageWorkBody({
  posts,
  page,
  totalPages,
  onPageChange,
  pagerDisabled,
  emptyMessage,
}) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);
  const rows = chunkPosts(pagePosts, CARDS_PER_ROW);

  return (
    <section className="blogwork" id="blog-posts" aria-label="Blog articles">
      <div className="blogwork__shell">
        <div className="blogwork__panel">
          <div className="blogwork__panel-spacer blogwork__panel-spacer--top" aria-hidden />
          <div className="blogwork__work">
            <div className="blogwork__cards-stage">
              {posts.length === 0 ? (
                <p className="blogwork__empty">
                  {emptyMessage || "No articles loaded. Check the WordPress connection or try again later."}
                </p>
              ) : (
                <>
                  <div className="blogwork__matrix">
                    {rows.map((rowPosts, rowIndex) => (
                      <div
                        key={`${page}-${rowIndex}`}
                        className="blogwork__row"
                        role="list"
                      >
                        {rowPosts.map((post) => (
                          <a
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="blogwork__card-link"
                            role="listitem"
                          >
                            <article className="blogwork__card">
                              <div
                                className={`blogwork__card-image-wrap ${post.image ? "" : "blogwork__card-image-wrap--placeholder"}`}
                              >
                                {post.image ? (
                                  <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="blogwork__card-image"
                                    sizes="(max-width: 600px) 100vw, (max-width: 991px) 50vw, 33vw"
                                  />
                                ) : null}
                              </div>
                              <div className="blogwork__card-body">
                                <h2 className="blogwork__card-title">
                                  {post.title}
                                </h2>
                                <div className="blogwork__card-meta">
                                  <span>{post.categoryLabel}</span>
                                  <span className="blogwork__card-dot" aria-hidden>
                                    ·
                                  </span>
                                  <span>{post.readTimeLabel}</span>
                                </div>
                              </div>
                            </article>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                  <BlogPager
                    page={page}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    disabled={pagerDisabled}
                  />
                </>
              )}
            </div>
          </div>
          <div className="blogwork__panel-spacer blogwork__panel-spacer--bottom" aria-hidden />
        </div>
      </div>
    </section>
  );
}

function BlogSearch({ query, onSearch }) {
  const [isOpen, setIsOpen] = useState(!!query);
  const [value, setValue] = useState(query);
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    setValue(query);
    if (query) setIsOpen(true);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        if (!value) setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, value]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(value.trim());
    },
    [onSearch, value]
  );

  const handleClear = useCallback(() => {
    setValue("");
    onSearch("");
    setIsOpen(false);
  }, [onSearch]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        if (value) {
          setValue("");
          onSearch("");
        }
        setIsOpen(false);
      }
    },
    [onSearch, value]
  );

  return (
    <div ref={wrapRef} className={`blogsearch ${isOpen ? "blogsearch--open" : ""}`}>
      {/* Icon toggle button */}
      <button
        type="button"
        className="blogsearch__toggle"
        aria-label="Search articles"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
          <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" fill="currentColor" />
        </svg>
      </button>

      {/* Expandable search form */}
      <form
        className="blogsearch__form"
        role="search"
        aria-label="Search articles"
        aria-hidden={!isOpen}
        onSubmit={handleSubmit}
      >
        <div className="blogsearch__inner">
          <input
            ref={inputRef}
            type="search"
            className="blogsearch__input"
            placeholder="Search articles…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Search articles"
            autoComplete="off"
            spellCheck={false}
            tabIndex={isOpen ? 0 : -1}
          />
          {value ? (
            <button
              type="button"
              className="blogsearch__clear"
              onClick={handleClear}
              aria-label="Clear search"
              tabIndex={isOpen ? 0 : -1}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          ) : null}
          <button
            type="submit"
            className="blogsearch__submit"
            tabIndex={isOpen ? 0 : -1}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

function filterPosts(posts, query) {
  if (!query) return posts;
  const q = query.toLowerCase();
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt?.toLowerCase().includes(q) ||
      p.categoryLabel?.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.name.toLowerCase().includes(q))
  );
}

function BlogPageWorkSynced({ posts = [] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";

  const filtered = useMemo(() => filterPosts(posts, query), [posts, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));

  const page = useMemo(() => {
    const p = parsePageParam(searchParams);
    return Math.min(p, totalPages);
  }, [searchParams, totalPages]);

  useEffect(() => {
    const raw = parsePageParam(searchParams);
    if (raw <= totalPages || filtered.length === 0) return;
    const params = new URLSearchParams(searchParams.toString());
    if (totalPages <= 1) params.delete("page");
    else params.set("page", String(totalPages));
    const q = params.toString();
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
  }, [pathname, filtered.length, router, searchParams, totalPages]);

  const onSearch = useCallback(
    (newQuery) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("page");
      if (newQuery) params.set("q", newQuery);
      else params.delete("q");
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const onPageChange = useCallback(
    (next) => {
      const clamped = Math.min(Math.max(1, next), totalPages);
      const params = new URLSearchParams(searchParams.toString());
      if (clamped <= 1) params.delete("page");
      else params.set("page", String(clamped));
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
      requestAnimationFrame(() => {
        document
          .getElementById("blog-posts")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    [pathname, router, searchParams, totalPages]
  );

  return (
    <>
      <div className="blogwork__search-shell">
        <BlogSearch query={query} onSearch={onSearch} />
        {query ? (
          <p className="blogwork__search-count">
            {filtered.length === 0
              ? "No articles found"
              : `${filtered.length} article${filtered.length === 1 ? "" : "s"} found`}
          </p>
        ) : null}
      </div>

      <BlogPageWorkBody
        posts={filtered}
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
        pagerDisabled={false}
        emptyMessage={query ? `No articles match "${query}".` : undefined}
      />
    </>
  );
}

export default function BlogPageWork({ posts = [] }) {
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  return (
    <Suspense
      fallback={
        <>
          <div className="blogwork__search-shell">
            <div className="blogsearch blogsearch--skeleton" aria-hidden />
          </div>
          <BlogPageWorkBody
            posts={posts}
            page={1}
            totalPages={totalPages}
            onPageChange={() => {}}
            pagerDisabled
          />
        </>
      }
    >
      <BlogPageWorkSynced posts={posts} />
    </Suspense>
  );
}

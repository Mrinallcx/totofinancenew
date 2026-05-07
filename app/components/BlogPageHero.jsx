"use client";

import { useCallback } from "react";
import "./BlogPageHero.css";

export default function BlogPageHero() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Wire to newsletter API / WordPress when ready
  }, []);

  return (
    <section className="bloghero" id="blog-hero">
      <div className="bloghero__wrapper">
        <h1 className="bloghero__title">
          Stories, thoughts and insights on tokenized commodities
        </h1>

        <div className="bloghero__input-block">
          <form
            className="bloghero__form"
            method="post"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="bloghero__input"
              autoComplete="email"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Email for newsletter"
            />
            <div className="bloghero__submit-slot">
              <button type="submit" className="bloghero__submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <p className="bloghero__hint">
          No spam, just certified good stuff
        </p>
      </div>
    </section>
  );
}

"use client";

import NavBar from "./NavBar";
import Footer from "./Footer";
import "./PlaceholderPageContent.css";

export default function PlaceholderPageContent({ title }) {
  return (
    <main>
      <NavBar pageTitle={title} />
      <section className="placeholder-page" aria-labelledby="placeholder-heading">
        <div className="placeholder-page__inner">
          <h1 id="placeholder-heading" className="placeholder-page__title">
            {title}
          </h1>
          <p className="placeholder-page__lead">This page is coming soon.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

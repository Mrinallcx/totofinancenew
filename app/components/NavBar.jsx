"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import "./HeroSection.css";

const GLOBAL_LINKS = [
  { label: "About us", href: "/about-us" },
  { label: "Products", href: "/product" },
];

const FLYOUT_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about-us" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact us", href: "/contact-us" },
    ],
  },
];

const EXPLORE_PRODUCTS = [
  { label: "Gold", image: "/product card/Gold.webp", href: "/marketplace" },
  { label: "Silver", image: "/product card/Silver.webp", href: "/marketplace" },
  { label: "Platinum", image: "/product card/Platinum.webp", href: "/marketplace" },
  { label: "Diamond", image: "/product card/Diamond.webp", href: "/marketplace" },
  { label: "Sapphire", image: "/product card/Sapphire.webp", href: "/marketplace" },
  { label: "Carbon Credit", image: "/product card/carbon-credit.webp", href: "/marketplace" },
  { label: "Energy", image: "/product card/energy.webp", href: "/marketplace" },
];

const ALL_PAGE_LINKS = FLYOUT_GROUPS.flatMap((g) => g.links);

const GLOBAL_NAV_HIDE_THRESHOLD = 200;
const LOCAL_NAV_SHOW_THRESHOLD = 200;

export default function NavBar({ pageTitle = "Toto Finance", localLinks = [] }) {
  const [globalHidden, setGlobalHidden] = useState(false);
  const [localVisible, setLocalVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const dropdownRef = useRef(null);
  const localnavRef = useRef(null);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setGlobalHidden(y > GLOBAL_NAV_HIDE_THRESHOLD);
    setLocalVisible(y > LOCAL_NAV_SHOW_THRESHOLD);
    if (y > GLOBAL_NAV_HIDE_THRESHOLD) setDropdownOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLocalLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setExploreOpen(false);
    }
  };

  const globalNavClass = [
    "globalnav",
    globalHidden && !mobileOpen ? "globalnav--hidden" : "",
    mobileOpen ? "globalnav--mobile-open" : "",
  ].filter(Boolean).join(" ");

  const localNavClass = [
    "localnav",
    localVisible ? "localnav--visible" : "",
    globalHidden ? "localnav--top" : "",
    exploreOpen ? "localnav--expanded" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <div className="nav-ribbon" role="region" aria-label="Site announcement">
        <div className="nav-ribbon__inner">
          <p className="nav-ribbon__text">
            {
              "We're currently updating the website to improve your experience, please check back shortly."
            }
          </p>
        </div>
      </div>

      {/* Layer 1: Global Nav */}
      <header className={globalNavClass}>
        <nav className="globalnav__nav">
          <div className="globalnav__inner">
            <a href="/" className="globalnav__logo" aria-label="Toto Finance Home">
              <img
                className="globalnav__logo-img globalnav__logo-img--white"
                src="/totofinance-white.svg"
                alt="Toto Finance"
              />
              <img
                className="globalnav__logo-img globalnav__logo-img--dark"
                src="/totofinance-dark.svg"
                alt="Toto Finance"
              />
            </a>

            <div className="globalnav__links" ref={dropdownRef}>
              {GLOBAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="globalnav__link">
                  {link.label}
                </a>
              ))}
              <button
                className={`globalnav__link globalnav__link--dropdown ${dropdownOpen ? "globalnav__link--dropdown-open" : ""}`}
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                All pages
                <svg className="globalnav__dropdown-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <a href="/global-market" className="globalnav__cta">
              Global Market
            </a>

            <button
              className={`globalnav__hamburger ${mobileOpen ? "globalnav__hamburger--open" : ""}`}
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span className="globalnav__hamburger-line" />
              <span className="globalnav__hamburger-line" />
            </button>
          </div>
        </nav>

        <div className={`globalnav__flyout ${dropdownOpen ? "globalnav__flyout--open" : ""}`}>
          <div className="globalnav__flyout-content">
            {FLYOUT_GROUPS.map((group) => (
              <div key={group.title} className="globalnav__flyout-group">
                <h3 className="globalnav__flyout-header">{group.title}</h3>
                <ul className="globalnav__flyout-list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="globalnav__flyout-link"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </header>

      {dropdownOpen && typeof document !== "undefined" &&
        createPortal(
          <div
            className="globalnav__curtain"
            onClick={() => setDropdownOpen(false)}
          />,
          document.body
        )
      }

      {/* Layer 2: Local Nav */}
      {localLinks.length > 0 && (
        <div className={localNavClass} ref={localnavRef}>
          {/* Collapsed bar */}
          <div className="localnav__collapsed">
            <div className="localnav__inner">
              <a href="/" className="localnav__logo" aria-label="Toto Finance Home">
                <img
                  className="localnav__logo-img"
                  src="/totofinance-dark.svg"
                  alt="Toto Finance"
                />
              </a>
              <ul className="localnav__cta-buttons">
                <li>
                  <button
                    className={`localnav__explore-btn ${exploreOpen ? "localnav__explore-btn--open" : ""}`}
                    type="button"
                    onClick={() => setExploreOpen((prev) => !prev)}
                    aria-label={exploreOpen ? "Close explore" : `Explore ${pageTitle}`}
                  >
                    <span className="localnav__explore-label">Explore</span>
                    <div className="localnav__explore-close-wrap">
                      <svg viewBox="0 0 20 20" className="localnav__explore-x">
                        <path d="M12.12 10l3.44-3.44a1.5 1.5 0 1 0-2.12-2.12L10 7.88 6.56 4.44a1.5 1.5 0 1 0-2.12 2.12L7.88 10l-3.44 3.44a1.5 1.5 0 1 0 2.12 2.12L10 12.12l3.44 3.44a1.495 1.495 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12L12.12 10z" fill="currentColor"/>
                      </svg>
                    </div>
                  </button>
                </li>
                <li>
                  <a href="/contact-us" className="localnav__buy-btn">Buy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Expanded explore panel */}
          <div
            className={`localnav__expand ${exploreOpen ? "localnav__expand--open" : ""}`}
            role="dialog"
            aria-label="Explore navigation"
          >
            {/* Product list (like Apple's product carousel) */}
            <nav className="localnav__product-list-wrap" aria-label="Products">
              <button
                className="localnav__paddlenav localnav__paddlenav--left"
                aria-label="Scroll left"
                type="button"
                onClick={() => {
                  const list = localnavRef.current?.querySelector(".localnav__product-list");
                  if (list) list.scrollBy({ left: -200, behavior: "smooth" });
                }}
              >
                <svg viewBox="0 0 36 36" width="20" height="20">
                  <path d="M20 25c-.384 0-.768-.146-1.06-.44l-5.5-5.5a1.5 1.5 0 0 1 0-2.12l5.5-5.5a1.5 1.5 0 1 1 2.12 2.12L16.622 18l4.44 4.44A1.5 1.5 0 0 1 20 25z" fill="currentColor"/>
                </svg>
              </button>
              <ul className="localnav__product-list">
                {EXPLORE_PRODUCTS.map((product) => (
                  <li key={product.label} className="localnav__product-wrap">
                    <a
                      href={product.href}
                      className="localnav__product-link"
                      onClick={() => setExploreOpen(false)}
                    >
                      <img
                        src={product.image}
                        alt={product.label}
                        className="localnav__product-image"
                        draggable="false"
                      />
                      <span className="localnav__product-name">{product.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="localnav__paddlenav localnav__paddlenav--right"
                aria-label="Scroll right"
                type="button"
                onClick={() => {
                  const list = localnavRef.current?.querySelector(".localnav__product-list");
                  if (list) list.scrollBy({ left: 200, behavior: "smooth" });
                }}
              >
                <svg viewBox="0 0 36 36" width="20" height="20">
                  <path d="M22.56 16.938l-5.508-5.5a1.493 1.493 0 0 0-2.116.003 1.502 1.502 0 0 0 .004 2.121L19.384 18l-4.444 4.438A1.502 1.502 0 0 0 15.996 25c.382 0 .764-.145 1.056-.438l5.508-5.5a1.502 1.502 0 0 0 0-2.125z" fill="currentColor"/>
                </svg>
              </button>
            </nav>

            {/* Product action (page title) */}
            <div className="localnav__product-action">
              <div className="localnav__product-name-wrap">
                <h2 className="localnav__product-title">{pageTitle}</h2>
              </div>
            </div>

            {/* Section tabs (like Apple's Overview > Highlights, Design...) */}
            <nav className="localnav__product-options" aria-label="Sections">
              <ul className="localnav__option-links">
                <li className="localnav__option-wrap localnav__option-wrap--overview">
                  <span className="localnav__option-overview">Overview</span>
                  <ul className="localnav__option-tabs">
                    {localLinks.map((link, i) => (
                      <li key={link.label} className="localnav__option-tab-wrap">
                        <a
                          href={link.href}
                          className={`localnav__option-tab ${i === 0 ? "localnav__option-tab--selected" : ""}`}
                          onClick={(e) => handleLocalLinkClick(e, link.href)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="localnav__option-extras">
                    <a href="/global-market" className="localnav__option-extra">
                      <span>Global Market</span>
                      <svg className="localnav__option-extra-arrow" width="12" height="12" viewBox="0 0 256 256" fill="currentColor">
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                      </svg>
                    </a>
                    <a href="/whitepaper" className="localnav__option-extra">
                      <span>Mica Ready Whitepaper</span>
                      <svg className="localnav__option-extra-arrow" width="12" height="12" viewBox="0 0 256 256" fill="currentColor">
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {exploreOpen && typeof document !== "undefined" &&
        createPortal(
          <div
            className="localnav__curtain"
            onClick={() => setExploreOpen(false)}
          />,
          document.body
        )
      }

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__scroll">
          <ul className="mobile-menu__list">
            {ALL_PAGE_LINKS.map((link) => (
              <li key={link.label} className="mobile-menu__item">
                <a
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mobile-menu__link-text">{link.label}</span>
                  <svg className="mobile-menu__chevron" height="48" viewBox="0 0 9 48" width="9">
                    <path d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z" fill="currentColor"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

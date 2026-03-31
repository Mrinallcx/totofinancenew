"use client";

import "./AskAI.css";

const AI_LINKS = [
  { name: "ChatGPT", href: "#", logo: "/chatgpt.svg" },
  { name: "Claude", href: "#", logo: "/claude.svg" },
  { name: "Perplexity", href: "#", logo: "/perplexity-color.svg" },
];

export default function AskAI() {
  return (
    <section className="askai">
      <div className="askai__shell">
        <div className="askai__panel">
          <p className="askai__heading">Ask AI about Toto Finance</p>
          <div className="askai__links">
            {AI_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="askai__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.logo}
                  alt={link.name}
                  className="askai__link-logo"
                  width={18}
                  height={18}
                />
                <span className="askai__link-name">{link.name}</span>
                <span className="askai__link-arrow" aria-hidden>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function SplitWords({ text, startDelay = 0.1, stagger = 0.05, className = "sr-word" }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className={className} style={{ animationDelay: `${startDelay + i * stagger}s` }}>
      {word}
    </span>
  ));
}

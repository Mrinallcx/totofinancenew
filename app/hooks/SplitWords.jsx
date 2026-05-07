"use client";

export default function SplitWords({ text, startDelay = 0.1, stagger = 0.05, className = "sr-word" }) {
  const words = text.split(" ");
  return words.map((word, i) => (
    <span key={i}>
      <span className={className} style={{ animationDelay: `${startDelay + i * stagger}s` }}>
        {word}
      </span>
      {i < words.length - 1 ? " " : ""}
    </span>
  ));
}

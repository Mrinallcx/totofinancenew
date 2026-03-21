"use client";

import { useEffect, useRef } from "react";
import "./SpinCube.css";

const PAIRS = [
  ["SLOW", "FAST"],
  ["MANUAL", "AUTOMATED"],
  ["INTERMEDIARIES", "ON-CHAIN"],
  ["DELAYS", "INSTANT"],
];
const LAYER_COUNT = 8;
const PAUSE_MS = 1400;
const FLIP_MS = 400;
const CASCADE_DELAY = 80;

export default function SpinCube({ className = "" }) {
  const setupRef = useRef(null);

  useEffect(() => {
    const el = setupRef.current;
    if (!el) return;

    const layers = el.querySelectorAll(".sc__layer");
    const step = new Array(LAYER_COUNT).fill(0);
    const timers = [];

    const flipLayer = (i) => {
      step[i] += 1;
      layers[i].style.transform = `rotateY(${step[i] * -90}deg)`;
    };

    const flipAll = () => {
      for (let i = 0; i < LAYER_COUNT; i++) {
        const t = setTimeout(() => flipLayer(i), i * CASCADE_DELAY);
        timers.push(t);
      }
    };

    const totalCycle = PAUSE_MS + FLIP_MS + (LAYER_COUNT - 1) * CASCADE_DELAY;
    flipAll();
    const interval = setInterval(flipAll, totalCycle);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className={`sc ${className}`}>
      <div className="sc__setup" ref={setupRef}>
        {Array.from({ length: LAYER_COUNT }, (_, i) => (
          <div key={i} className="sc__layer">
            {PAIRS.map((pair, faceIdx) => {
              const faceClass =
                faceIdx === 0 ? "sc__face--front" :
                faceIdx === 1 ? "sc__face--right" :
                faceIdx === 2 ? "sc__face--back" :
                "sc__face--left";
              return (
                <div key={faceIdx} className={`sc__face ${faceClass}`}>
                  <span className="sc__text sc__text--old">{pair[0]}</span>
                  <span className="sc__divider" />
                  <span className="sc__text sc__text--new">{pair[1]}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

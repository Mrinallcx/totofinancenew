"use client";

import "./AboutMission.css";

const STATS = [
  { value: "27", suffix: "%", label: "Clients Satisfaction" },
  { value: "12", suffix: "+", label: "Years Of Experience" },
  { value: "16", suffix: "+", label: "Advanced Members" },
];

export default function AboutMission() {
  return (
    <section className="abtmission">
      <div className="abtmission__container">
        <h2 className="abtmission__heading">
          Toto Finance is building the digital infrastructure for tokenized
          commodities — enabling{" "}
          <span className="abtmission__inline-icon">
            <img
              src="/totofinance-dark.svg"
              alt=""
              width={48}
              height={48}
            />
          </span>{" "}
          asset-backed ownership, instant settlement, and{" "}
          <span className="abtmission__inline-icon">
            <img
              src="/totofinance-dark.svg"
              alt=""
              width={48}
              height={48}
            />
          </span>{" "}
          compliant global trade.
        </h2>

        <div className="abtmission__video-wrap">
          <video
            src="https://framerusercontent.com/assets/bk3cwqGy2n0qgkAsWNg2FWGm7jA.mp4"
            loop
            preload="auto"
            muted
            playsInline
            autoPlay
            className="abtmission__video"
          />
        </div>

        <div className="abtmission__stats">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="abtmission__stat">
              <div className="abtmission__stat-value">
                <span>{stat.value}</span>
                <span className="abtmission__stat-suffix">{stat.suffix}</span>
              </div>
              <div className="abtmission__stat-divider" />
              <h6 className="abtmission__stat-label">{stat.label}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

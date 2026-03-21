import "./AboutUs.css";

const STATS = [
  {
    value: "92%",
    desc: "Of clients report measurable performance improvements within year.",
  },
  {
    value: "$50M",
    desc: "In revenue growth generated across client portfolios in the last 3 years.",
  },
  {
    value: "100+",
    desc: "Businesses advised across industries from tech startups to established enterprises.",
  },
  {
    value: "15+",
    desc: "Years of combined expertise guiding business strategy and execution.",
  },
];

export default function AboutUs() {
  return (
    <section className="aboutus" id="about">
      <div className="aboutus__container">
        <div className="aboutus__content">
          <div className="aboutus__tag">
            <span className="aboutus__tag-dot" />
            <span className="aboutus__tag-text">About us</span>
          </div>
          <h2 className="aboutus__heading">
            Toto Finance <em>tokenizes</em> diamonds and{" "}
            <em>global commodities</em>, unlocking transparent,{" "}
            <em>compliant access</em> to physical assets and{" "}
            <em>inground reserves</em>.
          </h2>
        </div>

        <div className="aboutus__stats">
          {STATS.map((stat) => (
            <div key={stat.value} className="aboutus__stat-card">
              <span className="aboutus__stat-value">{stat.value}</span>
              <p className="aboutus__stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

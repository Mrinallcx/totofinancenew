import "./AboutImpact.css";

const CARDS = [
  {
    value: "100+",
    title: "Closed Projects",
    description:
      "We've successfully delivered energy projects, from solar installations to wind farms, helping communities reduce their carbon footprint.",
  },
  {
    value: "50,000",
    title: "Tons of CO\u2082 Saved",
    description:
      "Our clean-energy solutions have helped cut greenhouse emissions, actively supporting a healthier planet for future generations.",
  },
  {
    value: "20+",
    title: "Industry Awards",
    description:
      "Recognized globally for our strong commitment to innovation and sustainability, we\u2019ve earned over 20 awards in green energy.",
  },
  {
    value: "12+",
    title: "Trusted Expertise",
    description:
      "With a decade of proven expertise in renewable energy, we proudly continue to lead the way in implementing impactful solutions.",
  },
];

export default function AboutImpact() {
  return (
    <section className="abtimpact">
      <div className="abtimpact__container">
        <h2 className="abtimpact__heading">
          Toto Finance transforms commodities with tokenized solutions, building
          a more transparent, efficient future through on-chain systems that
          empower global participants.
        </h2>

        <div className="abtimpact__grid">
          {CARDS.map((card) => (
            <div key={card.title} className="abtimpact__card">
              <span className="abtimpact__card-value">{card.value}</span>
              <div className="abtimpact__card-body">
                <h5 className="abtimpact__card-title">{card.title}</h5>
                <p className="abtimpact__card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

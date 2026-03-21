import "./ProductsCases.css";

const CASES = [
  {
    title: "EcoWare industries smart freight optimization",
    stats: [
      { value: "200+", label: "Reduction in logistics costs" },
      { value: "15%", label: "Improved delivery efficiency" },
    ],
    image:
      "https://framerusercontent.com/images/rfvg8t1wjVVI72PSQa90RcL851w.jpg?width=770&height=950",
    href: "#",
  },
  {
    title: "UrbanNest home greening last-mile delivery",
    stats: [
      { value: "50%", label: "Average reduction in energy costs" },
      { value: "15%", label: "10,000 tons CO₂ reduced" },
    ],
    image:
      "https://framerusercontent.com/images/eDp1DB9UYKGTjTwzkIevINItXgA.webp?width=770&height=950",
    href: "#",
  },
];

export default function ProductsCases() {
  return (
    <section className="prodcases" id="products-commodities">
      <div className="prodcases__container">
        <div className="prodcases__header">
          <div className="prodcases__header-left">
            <span className="prodcases__badge">CASE STUDIES</span>
            <h2 className="prodcases__heading">
              Sustainability delivered Impactful{" "}
              <span className="prodcases__heading--muted">case studies</span>{" "}
              from our clients
            </h2>
          </div>
          <div className="prodcases__header-right">
            <a href="#" className="prodcases__cta">
              <span>See all case studies</span>
              <span className="cta__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="prodcases__grid">
          {CASES.map((caseItem) => (
            <a
              key={caseItem.title}
              href={caseItem.href}
              className="prodcases__card"
            >
              <div className="prodcases__card-left">
                <div className="prodcases__card-top">
                  <h2 className="prodcases__card-title">{caseItem.title}</h2>
                  <div className="prodcases__card-info">
                    {caseItem.stats.map((stat, i) => (
                      <div key={stat.value + i} className="prodcases__stat-row">
                        {i > 0 && <div className="prodcases__stat-divider" />}
                        <div className="prodcases__stat">
                          <span className="prodcases__stat-value">
                            {stat.value}
                          </span>
                          <span className="prodcases__stat-label">
                            {stat.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="prodcases__card-action">
                  <span>View case</span>
                </div>
              </div>
              <div className="prodcases__card-right">
                <div className="prodcases__card-image-wrap">
                  <img
                    className="prodcases__card-image"
                    src={caseItem.image}
                    alt={caseItem.title}
                    width={770}
                    height={950}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

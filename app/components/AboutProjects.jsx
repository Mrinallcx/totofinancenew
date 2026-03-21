import Image from "next/image";
import "./AboutProjects.css";

const PROJECTS = [
  {
    title: "Eco Factory Transformation",
    description:
      "Integration of energy-efficient technologies into the production process of a food manufacturing factory. The project featured renewable energy systems and waste heat recovery.",
    image:
      "https://framerusercontent.com/images/yH1q2XHHegiGQ9Ie9qOjt2KinP0.jpg?scale-down-to=1024",
    href: "/projects/eco-factory-transformation",
  },
  {
    title: "Solar Future Project",
    description:
      "Development and installation of solar panels for a residential complex consisting of 50 houses. The project included designing custom solar solutions and integrating them with existing electrical systems.",
    image:
      "https://framerusercontent.com/images/5qa8ZakJTH0inFeN7CbEx0MBc8.jpg?scale-down-to=1024",
    href: "/projects/solar-future-project",
  },
  {
    title: "Wind Power for Community",
    description:
      "Installation of a wind power plant to supply electricity to a small village with 1,000 residents. The project included assessing wind conditions, selecting optimal turbine locations, and training local staff for maintenance.",
    image:
      "https://framerusercontent.com/images/JaqFUHBBZfS471xmQx9iM7uDLIY.jpg?scale-down-to=1024",
    href: "/projects/wind-power-for-community",
  },
];

export default function AboutProjects() {
  return (
    <section className="abtproj" id="about-projects">
      <div className="abtproj__container">
        <div className="abtproj__grid">
          <div className="abtproj__header">
            <h2 className="abtproj__heading">
              Explore our{" "}
              <span className="abtproj__heading-accent">
                innovative projects
              </span>{" "}
              that drive sustainability, reduce carbon footprints, and transform
              energy systems worldwide.
            </h2>
            <a href="/projects" className="abtproj__cta">
              <span>View Our Projects</span>
              <span className="abtproj__cta-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="abtproj__card"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
                className="abtproj__card-img"
              />
              <div className="abtproj__card-overlay" />

              <div className="abtproj__card-content">
                <h4 className="abtproj__card-title">{project.title}</h4>
                <p className="abtproj__card-desc">{project.description}</p>
              </div>

              <span className="abtproj__card-link">
                <span>View more</span>
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1l6 6m0 0l-6 6m6-6H1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

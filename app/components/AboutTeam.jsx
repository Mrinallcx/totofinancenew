"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./AboutTeam.css";

const TEAM = [
  {
    name: "Dr. Elara Wells",
    role: "Holistic Wellness Consultant",
    image:
      "https://framerusercontent.com/images/BKN2xjvqhSyX22YsUl2OxfQbpHY.jpg?scale-down-to=1024",
  },
  {
    name: "Naya Hart",
    role: "Nutrition Specialist",
    image:
      "https://framerusercontent.com/images/m5QDkK8NzSKbTL3gmy7yLe1tYVc.jpg?scale-down-to=1024",
    imagePosition: "50.7% 21.2%",
  },
  {
    name: "Sofia Green",
    role: "Lifestyle Coach",
    image:
      "https://framerusercontent.com/images/p0D3veR8Fg6mu2XDD9xgWnlyqM.jpg?scale-down-to=1024",
  },
  {
    name: "Amara Lee",
    role: "Mindfulness Therapist",
    image:
      "https://framerusercontent.com/images/ItVzC9IZ39d1vBjCv8zOwKplKxc.jpg?scale-down-to=1024",
  },
];

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="currentColor">
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,0v64a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
  </svg>
);

export default function AboutTeam() {
  const sectionRef = useScrollReveal();

  return (
    <section className="abtteam" id="about-team" ref={sectionRef}>
      <div className="abtteam__container">
        <div className="abtteam__header">
          <p className="abtteam__label sr-item" style={{ animationDelay: "0s" }}>Team</p>
          <h2 className="abtteam__heading">
            <SplitWords text="Meet the Consultant" startDelay={0.1} stagger={0.06} />
          </h2>
        </div>

        <div className="abtteam__grid">
          {TEAM.map((member) => (
            <div key={member.name} className="abtteam__card">
              <div className="abtteam__card-img-wrap">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 50vw, 25vw"
                  className="abtteam__card-img"
                  style={{
                    objectPosition: member.imagePosition || "center center",
                  }}
                />
              </div>
              <div className="abtteam__card-content">
                <div className="abtteam__card-text">
                  <h4 className="abtteam__card-name">{member.name}</h4>
                  <p className="abtteam__card-role">{member.role}</p>
                </div>
                <div className="abtteam__card-socials">
                  <a href={member.linkedin || "https://linkedin.com"} target="_blank" rel="noopener noreferrer" className="abtteam__social-link">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

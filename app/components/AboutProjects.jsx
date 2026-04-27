"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./AboutProjects.css";

const PROJECTS = [
  {
    title: "Tokenization Infrastructure",
    description:
      "Issuance of asset-backed digital commodities with integrated KYC/AML, transfer controls, and regulatory compliance built into the protocol.",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777030477/toto_finance_infrastructure_mtly2j.webp",
    href: "/how-it-works",
  },
  {
    title: "Compliance and Custody Layer",
    description:
      "Structured custody, independent audits, and on-chain proof of reserves connecting every token to a verified physical asset.",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777030729/Compliance_and_Custody_Layer_ixrdbt.webp",
    href: "/product",
  },
  {
    title: "Institutional Asset Access",
    description:
      "Infrastructure built for producers, investors, and financial institutions to access, trade, and settle tokenized commodities globally.",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777031091/Instituional_asset_access_obfszb.webp",
    href: "/marketplace",
  },
];

export default function AboutProjects() {
  const sectionRef = useScrollReveal();

  return (
    <section className="abtproj" id="about-projects" ref={sectionRef}>
      <div className="abtproj__container">
        <div className="abtproj__grid">
          <div className="abtproj__header">
            <h2 className="abtproj__heading">
              <SplitWords
                text="Build on the infrastructure layer powering the next generation of tokenized commodities for global markets."
                startDelay={0.1}
                stagger={0.04}
              />
            </h2>
            <a
              href="https://app.totofinance.co/"
              className="abtproj__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Explore Marketplace →</span>
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

"use client";

import NavBar from "../components/NavBar";
import AboutHero from "../components/AboutHero";
import AboutImpact from "../components/AboutImpact";
import AboutProcess from "../components/AboutProcess";
import AboutTeam from "../components/AboutTeam";
import AboutProjects from "../components/AboutProjects";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const ABOUT_LOCAL_LINKS = [
  { label: "Overview", href: "#about-overview" },
  { label: "Projects", href: "#about-projects" },
  { label: "Process", href: "#about-process" },
  { label: "Team", href: "#about-team" },
];

export default function AboutPageContent() {
  return (
    <main>
      <NavBar pageTitle="About" localLinks={ABOUT_LOCAL_LINKS} />
      <AboutHero />
      <AboutImpact />
      <AboutProjects />
      <AboutProcess />
      <AboutTeam />
      <CtaImage />
      <Footer />
    </main>
  );
}

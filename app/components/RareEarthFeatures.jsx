"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import "./RareEarthFeatures.css";

const FEATURES = [
  {
    key: "assets-covered",
    title: "The Minerals",
    body: "Lithium, copper, nickel, and rare earth concentrates. The materials powering AI infrastructure, EVs, batteries, and the global energy transition.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="remfeat__svg">
        <path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "participation-models",
    title: "The Structure",
    body: "Three ways to participate. Reserve-backed, inventory-based, or cash-flow-linked tokens, structured to match each asset's stage, from in-ground to deliverable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="remfeat__svg">
        <path d="M80-40v-80h800v80H80Zm80-120v-240q-33-54-51-114.5T91-638q0-61 15.5-120T143-874q8-21 26-33.5t40-12.5q31 0 53 21t18 50l-11 91q-6 48 8.5 91t43.5 75.5q29 32.5 70 52t89 19.5q60 0 120.5 12.5T706-472q45 23 69.5 58.5T800-326v166H160Zm80-80h480v-86q0-24-12-42.5T674-398q-41-20-95-31t-99-11q-66 0-122.5-27t-96-72.5Q222-585 202-644.5T190-768q-10 30-14.5 64t-4.5 66q0 58 20.5 111.5T240-422v182Zm127-367q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm169.5-56.5Q560-687 560-720t-23.5-56.5Q513-800 480-800t-56.5 23.5Q400-753 400-720t23.5 56.5Q447-640 480-640t56.5-23.5ZM320-160v-37q0-67 46.5-115T480-360h160v80H480q-34 0-57 24.5T400-197v37h-80Zm160-80Zm0-480Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "access-models",
    title: "The Access",
    body: "Institutional and industrial only. Available to qualified investors and industrial buyers, with eligibility verified by jurisdiction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="remfeat__svg">
        <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "settlement",
    title: "The Settlement",
    body: "Instant. On-chain. Compliant. Stablecoin settlement, whitelisted wallets, and compliance rules enforced automatically at the protocol level.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remfeat__svg">
        <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function RareEarthFeatures() {
  const sectionRef = useScrollReveal();

  return (
    <section className="remfeat" aria-label="Features" ref={sectionRef}>
      <div className="remfeat__inner">
        <div className="remfeat__left">
          <ul className="remfeat__cards">
            {FEATURES.map((f) => (
              <li key={f.key} className="remfeat__card">
                <div className="remfeat__icon-wrap">
                  {f.icon}
                </div>
                <div className="remfeat__card-text">
                  <h6 className="remfeat__card-title">{f.title}</h6>
                  <p className="remfeat__card-body">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="remfeat__right">
          <Image
            src="https://res.cloudinary.com/dusinlidl/image/upload/v1777478493/vault_etcmpw.jpg"
            alt=""
            fill
            sizes="(max-width: 899px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

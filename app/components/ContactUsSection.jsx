"use client";

import { useEffect, useRef, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./ContactUsSection.css";

const CONTACT_ITEMS = [
  {
    label: "Email Address",
    value: "hello@kuato.agency",
    href: "mailto:hello@kuato.agency",
  },
  {
    label: "Phone",
    value: "+44 20 7946 0345",
    href: "tel:+442079460345",
  },
];

const SERVICES = [
  "Strategy & Positioning",
  "Performance Marketing",
  "SEO & Content",
  "Social Media",
  "Creative Design",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true">
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}

function ContactLink({ href, children }) {
  return (
    <a href={href} className="contactus__link" target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span className="contactus__link-icon">
        <ArrowIcon />
      </span>
    </a>
  );
}

export default function ContactUsSection() {
  const sectionRef = useScrollReveal(0.1);
  const [selectedService, setSelectedService] = useState("");
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServiceOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsServiceOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section className="contactus" id="contact-overview" ref={sectionRef}>
      <div className="contactus__inner">
        <div className="contactus__left">
          <div className="contactus__heading">
            <p className="contactus__eyebrow sr-item">Contact Us</p>
            <h1 className="contactus__title sr-item">Let&apos;s start building something extraordinary</h1>
            <p className="contactus__desc sr-item">
              We&apos;d love to hear from you. Whether you&apos;re ready to start a project or simply want
              to explore ideas, our team is here to help you grow your brand with strategy, creativity,
              and measurable results.
            </p>
          </div>

          <div className="contactus__list sr-item">
            <div className="contactus__quick-links">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="contactus__list-item">
                  <p className="contactus__label">{item.label}</p>
                  <ContactLink href={item.href}>{item.value}</ContactLink>
                </div>
              ))}
            </div>

            <div className="contactus__details-row">
              <div className="contactus__list-item">
                <p className="contactus__label">Location</p>
                <p className="contactus__text">
                  Brooklyn, New York
                  <br />
                  123 Wythe Avenue, Suite 4B
                  <br />
                  Brooklyn, NY 11249
                </p>
              </div>

              <div className="contactus__list-item">
                <p className="contactus__label">Hours</p>
                <p className="contactus__text">Monday - Friday</p>
                <p className="contactus__text">9:00 AM - 6:00 PM (EST)</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contactus__form sr-item" id="contact-form">
          <label className="contactus__field">
            <span className="contactus__field-label">Name</span>
            <input type="text" name="name" placeholder="Jane Smith" />
          </label>

          <label className="contactus__field">
            <span className="contactus__field-label">Company</span>
            <input type="text" name="company" placeholder="Kuato Inc." />
          </label>

          <label className="contactus__field">
            <span className="contactus__field-label">Email</span>
            <input type="email" name="email" placeholder="jane@framer.com" />
          </label>

          <label className="contactus__field">
            <span className="contactus__field-label">Phone</span>
            <input type="tel" name="phone" placeholder="+44 20 7946 0345" />
          </label>

          <label className="contactus__field contactus__field--select">
            <span className="contactus__field-label">I&apos;m interest in ...</span>
            <div
              className={`contactus__select-wrap ${isServiceOpen ? "contactus__select-wrap--open" : ""}`}
              ref={dropdownRef}
            >
              <button
                type="button"
                className="contactus__select-trigger"
                onClick={() => setIsServiceOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isServiceOpen}
              >
                <span className={selectedService ? "" : "contactus__select-placeholder"}>
                  {selectedService || "Select a service"}
                </span>
              </button>
              <input type="hidden" name="service" value={selectedService} />
              <div className="contactus__select-menu" role="listbox">
                {SERVICES.map((service) => (
                  <button
                    type="button"
                    key={service}
                    className={`contactus__select-option ${
                      selectedService === service ? "contactus__select-option--selected" : ""
                    }`}
                    onClick={() => {
                      setSelectedService(service);
                      setIsServiceOpen(false);
                    }}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </label>

          <label className="contactus__field">
            <span className="contactus__field-label">Tell us about your project.</span>
            <textarea name="message" placeholder="Write something concise ..." rows={5} />
          </label>

          <button type="submit" className="contactus__submit">
            <span>Submit</span>
            <span className="cta__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

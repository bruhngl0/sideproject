import React, { useState } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/footer.scss";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const navLinks = [
    { label: "Nerd Labs", href: "/" },
    { label: "Contact", href: "/enquiry" },
    { label: "Bulk Orders", href: "/bulkOrders" },
    { label: "Buy Guide", href: "/buyGuide" },
  ];

  const serviceLinks = [
    { label: "Bespoke", href: "/bespokeint" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return & Exchange", href: "/return-policy" },
    { label: "Terms of Trade", href: "/return-policy" },
    { label: "Privacy Policy", href: "/return-policy" },
    { label: "Care Instructions", href: "/care-instructions" },
  ];

  const popularLinks = [
    { label: "Planters", href: "/test-comp" },
    { label: "Desk Planters", href: "/test-comp2" },
    { label: "Breeze Blocks", href: "/breezeBlocks" },
    { label: "Tables", href: "/test-comp4" },
  ];

  return (
    <footer className="footer-main">
      {/* Scrolling band */}
      <div className="footer-band">
        <span className="footer-band-text">
          HANDCRAFTED · BANGALORE · NERD LABS · CONCRETE & CRAFT · HANDCRAFTED ·
          BANGALORE · NERD LABS · CONCRETE & CRAFT · HANDCRAFTED · BANGALORE ·
          NERD LABS · CONCRETE & CRAFT ·
        </span>
      </div>

      {/* Main grid */}
      <div className="footer-grid">
        {/* Col 1 — Brand */}
        <div className="footer-col footer-brand footer-section">
          <div
            className="section-header"
            onClick={() => toggleSection("brand")}
          >
            <div className="brand-wordmark">Nerd Labs</div>
            <IoIosArrowDown
              className={`arrow-icon ${expandedSection === "brand" ? "expanded" : ""}`}
            />
          </div>
          <div
            className={`section-content ${expandedSection === "brand" ? "expanded" : ""}`}
          >
            <address className="footer-address">
              KSSIDC Industrial Estate, 74
              <br />
              Bommasandra
              <br />
              Bangalore, India
            </address>
            <div className="footer-social">
              <span className="social-label">Follow</span>
              <div className="social-icons">
                <a
                  href="mailto:info@studiomason.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="social-link"
                >
                  <IoMailSharp size={20} />
                </a>
                <a
                  href="https://www.instagram.com/studiomason_blr?igsh=b3Z3eWo3NGo5YWt4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-link"
                >
                  <FaSquareInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2 — Mason */}
        <div className="footer-col footer-section">
          <div
            className="section-header"
            onClick={() => toggleSection("mason")}
          >
            <p className="col-label">
              <em>01</em> Mason
            </p>
            <IoIosArrowDown
              className={`arrow-icon ${expandedSection === "mason" ? "expanded" : ""}`}
            />
          </div>
          <div
            className={`section-content ${expandedSection === "mason" ? "expanded" : ""}`}
          >
            <nav className="footer-nav">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">
                  <span className="link-arrow">→</span>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Col 3 — Customer Service */}
        <div className="footer-col footer-section">
          <div
            className="section-header"
            onClick={() => toggleSection("service")}
          >
            <p className="col-label">
              <em>02</em> Service
            </p>
            <IoIosArrowDown
              className={`arrow-icon ${expandedSection === "service" ? "expanded" : ""}`}
            />
          </div>
          <div
            className={`section-content ${expandedSection === "service" ? "expanded" : ""}`}
          >
            <nav className="footer-nav">
              {serviceLinks.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">
                  <span className="link-arrow">→</span>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Col 4 — Popular */}
        <div className="footer-col footer-section">
          <div
            className="section-header"
            onClick={() => toggleSection("popular")}
          >
            <p className="col-label">
              <em>03</em> Popular
            </p>
            <IoIosArrowDown
              className={`arrow-icon ${expandedSection === "popular" ? "expanded" : ""}`}
            />
          </div>
          <div
            className={`section-content ${expandedSection === "popular" ? "expanded" : ""}`}
          >
            <nav className="footer-nav">
              {popularLinks.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">
                  <span className="link-arrow">→</span>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Col 5 — CTA */}
        <div className="footer-col footer-cta footer-section">
          <div className="section-header" onClick={() => toggleSection("cta")}>
            <p className="cta-headline">
              Reach out.
              <br />
              Save 10% on everything new.
            </p>
            <IoIosArrowDown
              className={`arrow-icon ${expandedSection === "cta" ? "expanded" : ""}`}
            />
          </div>
          <div
            className={`section-content ${expandedSection === "cta" ? "expanded" : ""}`}
          >
            <p className="cta-sub">
              Connect with us directly — we'd love to hear from you.
            </p>
            <div className="cta-actions">
              <a
                href="mailto:info@studiomason.in"
                className="cta-btn"
                aria-label="Email us"
              >
                <IoMailSharp size={18} />
                <span>Email</span>
              </a>
              <a
                href="https://wa.me/+919980547044"
                className="cta-btn cta-btn--whatsapp"
                aria-label="WhatsApp"
              >
                <IoLogoWhatsapp size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} Nerd Labs. All rights reserved.
        </span>
        <span className="footer-tagline">Made with concrete & care.</span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <section className="contact-card">
        <div className="header-label">
          {/* Using a simple SVG for the chat icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>Get in touch</span>
        </div>

        <h1 className="main-heading">
          If you’re not sure whether your company is a fit for us,
          <a href="#send" className="underlined">
            {" "}
            send it our way.
          </a>
          <br />
          We'll get back to you
          <a href="#time" className="underlined">
            {" "}
            within 24 hours
          </a>
        </h1>

        <div className="cta-buttons">
          <a href="mailto:hello@odinscrow.com" className="cta-link">
            <div className="left-content">
              <span className="icon">✉</span>
              <span>Email us</span>
            </div>
            <span className="arrow">→</span>
          </a>

          <a href="tel:+123456789" className="cta-link">
            <div className="left-content">
              <span className="icon">📞</span>
              <span>Call us</span>
            </div>
            <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <div className="decorative-lines">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="line" />
        ))}
      </div>

      <footer className="footer-bottom">
        <span className="brand">NERD LABS</span>
        <span className="copyright">© {currentYear}</span>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="des-footer">
      <div className="des-footer__inner">
        <p className="des-footer__label">Menu:</p>
        <nav className="des-footer__menu" aria-label="Footer menu">
          <a
            className="des-footer__menu-item des-footer__menu-item--muted"
            href="#home"
          >
            Home
          </a>
          <a className="des-footer__menu-item" href="#practice">
            Practice
          </a>
          <a className="des-footer__menu-item" href="#seasons">
            Seasons <sup>(03)</sup>
          </a>
          <a className="des-footer__menu-item" href="#about">
            About
          </a>
        </nav>
      </div>
      <div className="des-footer__inner des-footer__inner--social">
        <p className="des-footer__label">Social Media:</p>
        <div className="des-footer__social-list">
          <a className="des-footer__social-item" href="#instagram">
            <span>Instagram</span>
            <span className="des-footer__arrow">{"↗\uFE0E"}</span>
          </a>
          <a className="des-footer__social-item" href="#youtube">
            <span>Youtube</span>
            <span className="des-footer__arrow">{"↗\uFE0E"}</span>
          </a>
          <a className="des-footer__social-item" href="#twitter">
            <span>X (Twitter)</span>
            <span className="des-footer__arrow">{"↗\uFE0E"}</span>
          </a>
          <a className="des-footer__social-item" href="#tiktok">
            <span>TikTok</span>
            <span className="des-footer__arrow">{"↗\uFE0E"}</span>
          </a>
        </div>
      </div>
      <div className="des-footer__inner des-footer__inner--meta">
        <p className="des-footer__policy">
          <a href="#privacy">Privacy Policy</a> &amp;{" "}
          <a href="#legal">Legal Terms</a>
        </p>
        <p className="des-footer__copyright">
          ©Design Education Series® 2026
        </p>
        <p className="des-footer__credit">
          Designed by <a href="#obys">Obys</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

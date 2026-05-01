import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project";
import Footer from "./Footer";
import "../styles/desscroll.scss";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ObysIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4h32l20 20v32L56 76H24L4 56V24L24 4z"
        stroke="#111"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M30 4h20l18 18v4L52 10H28L10 28V52L28 70H52L68 52v4L48 76H32L12 56V24L30 4z"
        fill="#111"
        opacity="0.15"
      />
      <circle
        cx="40"
        cy="40"
        r="22"
        stroke="#111"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="40" cy="40" r="14" fill="#111" opacity="0.12" />
      <line x1="40" y1="4" x2="40" y2="18" stroke="#111" strokeWidth="2.5" />
      <line x1="40" y1="62" x2="40" y2="76" stroke="#111" strokeWidth="2.5" />
      <line x1="4" y1="40" x2="18" y2="40" stroke="#111" strokeWidth="2.5" />
      <line x1="62" y1="40" x2="76" y2="40" stroke="#111" strokeWidth="2.5" />
    </svg>
  );
}

const GRID_COLOURS = [
  "--teal",
  "--rust",
  "--coral",
  "--sand",
  "--slate",
  "--olive",
  "--amber",
  "--muted",
];
const GRID_LABELS = [
  "Ep. 01",
  "Ep. 02",
  "Ep. 03",
  "Ep. 04",
  "Ep. 05",
  "Ep. 06",
  "Ep. 07",
  "Ep. 08",
];

export default function DESScroll() {
  const outerRef = useRef(null);
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Keep header pinned until panel reaches it, then let it scroll away.
      ScrollTrigger.create({
        trigger: outerRef.current,
        scroller: outerRef.current,
        start: "top top",
        endTrigger: panelRef.current,
        end: () => `top top+=${headerRef.current?.offsetHeight || 0}`,
        pin: headerRef.current,
        pinSpacing: false,
        pinType: "fixed",
        pinReparent: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      // 2. Animate grid items when they enter view
      gsap.from(".des-panel__grid-item", {
        scrollTrigger: {
          trigger: ".des-panel__grid",
          scroller: outerRef.current,
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
      });
    }, outerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  useEffect(() => {
    document.body.classList.toggle("theme-dark", isDarkMode);
    return () => document.body.classList.remove("theme-dark");
  }, [isDarkMode]);

  return (
    <div className={`des-wrapper ${isDarkMode ? "des-wrapper--dark" : ""}`}>
      <div className="des-outer" ref={outerRef}>
        {/* Header pins at top, then releases when panel reaches it */}
        <header ref={headerRef} className="des-header">
          <nav className="des-nav">
            <div className="des-nav__hamburger">
              <span />
              <span />
            </div>
            <div className="des-nav__actions">
              <a className="des-nav__login" href="#login">
                Log In
              </a>
              <button
                type="button"
                className="des-nav__theme-toggle"
                aria-label="Toggle dark mode"
                aria-pressed={isDarkMode}
                onClick={(e) => {
                  e.preventDefault();
                  setIsDarkMode((prev) => !prev);
                }}
              >
                <span className="des-nav__theme-toggle-dot" />
              </button>
            </div>
          </nav>

          <div className="des-header__logo-row">
            <h1 className="des-header__wordmark">NerdLabs</h1>
            <ObysIcon className="des-header__icon" />
          </div>
          <p className="des-header__tagline">
            Design Education Series® by Obys®
          </p>
        </header>

        {/* This spacer creates the 'gap' for the fixed header to be seen */}
        <div className="des-spacer" style={{ height: "30vh" }} />

        <section ref={panelRef} className="des-panel">
          <div className="des-panel__intro-row">
            <p className="des-panel__intro-text">
              Original Series by
              <br />
              Obys® about the main
              <br />
              design principles
            </p>
            <a className="des-panel__trailer-link" href="#trailer">
              Watch Trailer
            </a>
          </div>

          <div className="des-panel__grid">
            {GRID_COLOURS.map((mod, i) => (
              <div
                key={i}
                className={`des-panel__grid-item des-panel__grid-item${mod}`}
              >
                <span className="des-panel__grid-label">{GRID_LABELS[i]}</span>
              </div>
            ))}
          </div>

          <p className="des-panel__about-label">(About Series)</p>

          <section className="des-story">
            <p className="des-story__lead">
              ① Nerd Labs is an AI-powered digital products and solutions
              studio. We build what the future runs on by focusing on
              production-grade systems that are built to scale and last.{" "}
              <a href="#ai-agents">AI Agents</a>,{" "}
              <a href="#chatbots">Conversational AI</a>,{" "}
              <a href="#apps">Apps & Websites</a> are core areas where we ship
              practical, high-impact products.
            </p>

            <p className="des-story__body">
              At Nerd Labs, we partner with founders and teams who want their
              ideas at the center of the coming AI shift. Bring us your vision,
              and we help architect the product, automate the workflow, and
              deploy a reliable system that performs in real business
              environments.
            </p>

            <p className="des-story__body">
              From voice and video agents to RAG applications, AI
              infrastructure, SaaS platforms, and business automation, our work
              is designed to reduce repetitive effort and unlock scale. We blend
              speed, clarity, and deep technical execution so every release is
              useful from day one.
            </p>

            <a className="des-story__cta" href="#about-us">
              More About Us
            </a>

            <div className="des-story__projects">
              <p className="des-story__projects-label">Projects:</p>
              <a className="des-story__project-item" href="#ai-agents">
                <span>AI Agents & Smart Automation</span>
                <span className="des-story__arrow">↗</span>
              </a>
              <a className="des-story__project-item" href="#chatbots">
                <span>Chatbots & Conversational AI</span>
                <span className="des-story__arrow">↗</span>
              </a>
              <a className="des-story__project-item" href="#automation">
                <span>Business Automation at Scale</span>
                <span className="des-story__arrow">↗</span>
              </a>
              <a className="des-story__project-item" href="#automation">
                <span>Web & Mobile Apps</span>
                <span className="des-story__arrow">↗</span>
              </a>
            </div>
          </section>
        </section>
        {/*
        <div>
          <img
            src="art2.png"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
         */}
        <Project />
        <Footer />
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "AI AGENT SYSTEM",
    type: "Production * Interactive * 3D",
    year: "2026",
  },
  {
    id: "02",
    title: "CLOUD KITCHEN SIMULATOR",
    type: "Interactive * Web App",
    year: "2026",
  },
  {
    id: "03",
    title: "NERDROOMS",
    type: "Branding * Website * Product",
    year: "2026",
  },
  {
    id: "04",
    title: "RADIO ALICE",
    type: "Experimental * Interface",
    year: "2025",
  },
  {
    id: "05",
    title: "ARIOSTEA",
    type: "3D * Visual System",
    year: "2025",
  },
  {
    id: "06",
    title: "ZEGNA OASI",
    type: "Web * Campaign",
    year: "2024",
  },
];

const Work = () => {
  const [time, setTime] = useState("");
  const [showImages, setShowImages] = useState(true);
  const itemRefs = useRef([]);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.25 },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  useEffect(() => {
    let headerHeight = 0;
    const updateHeaderHeight = () => {
      if (headerRef.current && listRef.current) {
        headerHeight = headerRef.current.getBoundingClientRect().height;
        listRef.current.style.setProperty("--header-height", `${headerHeight}px`);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    updateHeaderHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);



  return (
    <main className="work-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .work-page {
          min-height: 100vh;
          background: #e8e8e8;
          color: #0b0b0b;
          font-family: Arial, Helvetica, sans-serif;
        }

        .work-hero {
          position: relative;
          height: 100vh;
          background: #e8e8e8;
          overflow: hidden;
        }

        .work-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .work-pattern__cluster {
          position: absolute;
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: 2px 8px;
          color: #111;
          line-height: 1;
          letter-spacing: 0.12em;
          font-weight: 400;
          transform: translate(-50%, -50%);
          user-select: none;
        }

        .work-hero__top {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr 0.8fr 0.6fr;
          align-items: start;
          padding: 18px 28px;
          font-size: clamp(16px, 1.25vw, 24px);
          line-height: 1.05;
        }

        .work-hero__intro {
          max-width: 320px;
        }

        .work-hero__clock {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .work-dot {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #0b0b0b;
          display: inline-block;
        }

        .work-hero__brand {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: -2vw;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          gap: 6vw;
          font-size: clamp(96px, 13.5vw, 260px);
          font-weight: 500;
          line-height: 0.75;
          letter-spacing: -0.08em;
          white-space: nowrap;
        }

        .work-hero__brand sup {
          font-size: 0.18em;
          letter-spacing: 0;
          position: relative;
          top: -0.45em;
          margin-left: 0.04em;
        }

        .work-scroll-text {
          position: absolute;
          z-index: 2;
          left: 50%;
          bottom: 6.5vw;
          transform: translateX(-50%);
          font-size: clamp(18px, 1.4vw, 28px);
        }

        .work-content {
          position: relative;
          z-index: 5;
          background: #e8e8e8;
        }

        .work-sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: #e8e8e8;
          border-bottom: 1px solid #111;
        }

        .work-nav {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr 0.8fr 0.6fr;
          align-items: center;
          padding: 8px 28px 0;
          font-size: clamp(16px, 1.25vw, 24px);
          line-height: 1;
        }

        .work-nav a {
          color: inherit;
          text-decoration: none;
        }

        .work-brand-bar {
          display: flex;
          align-items: flex-end;
          gap: 6vw;
          padding: 0 28px;
          font-size: clamp(92px, 13vw, 245px);
          font-weight: 500;
          line-height: 0.78;
          letter-spacing: -0.08em;
          white-space: nowrap;
          overflow: hidden;
          margin-top: 1rem;
        }

        .work-brand-bar sup {
          font-size: 0.18em;
          letter-spacing: 0;
          position: relative;
          top: -0.45em;
          margin-left: 0.04em;
        }

        .work-controls {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr 0.8fr 0.6fr;
          align-items: center;
          padding: 4px 28px 8px;
          font-size: clamp(15px, 1.1vw, 22px);
        }

        .work-toggle {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .work-toggle button {
          padding: 0;
          border: 0;
          background: transparent;
          font: inherit;
          cursor: pointer;
          color: #111;
        }

        .work-toggle span {
          color: #999;
        }

        .work-list {
          position: relative;
          padding-top: var(--header-height, 0px);
        }

        .work-item {
          position: sticky;
          top: var(--header-height, 0px);
          height: calc(100vh - var(--header-height, 0px));
          background: #e8e8e8;
          z-index: 1;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #111;
        }

        .work-item__bar {
          height: 42px;
          display: grid;
          grid-template-columns: 44px 1.3fr 0.9fr 0.6fr 0.4fr;
          align-items: center;
          gap: 12px;
          padding: 0 28px;
          background: #e8e8e8;
          border-bottom: 1px solid #111;
        }

        .work-item__number {
          font-size: clamp(13px, 0.9vw, 18px);
        }

        .work-item__title {
          font-size: clamp(24px, 1.8vw, 38px);
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }

        .work-item__type {
          font-size: clamp(14px, 1vw, 20px);
        }

        .work-item__year {
          font-size: clamp(24px, 1.8vw, 38px);
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .work-item__marker {
          justify-self: end;
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: #ff6a2a;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .work-item.is-active .work-item__marker {
          opacity: 1;
        }

        .work-item__image {
          flex: 1;
          background:
            linear-gradient(135deg, rgba(0,0,0,0.04), rgba(0,0,0,0.12)),
            #d7d7d7;
          position: relative;
          overflow: hidden;
        }

        .work-item__image::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          opacity: 0.5;
        }

        .work-item__placeholder-text {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(14px, 1vw, 20px);
          color: rgba(0,0,0,0.28);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .work-item__image.is-hidden {
          display: none;
        }

        @media (max-width: 768px) {
          .work-hero {
            height: 100vh;
          }

          .work-hero__top {
            grid-template-columns: 1fr auto;
            padding: 20px 20px;
            font-size: 24px;
          }

          .work-hero__location,
          .work-hero__clock {
            display: none;
          }

          .work-hero__intro {
            max-width: 260px;
          }

          .work-hero__brand {
            left: 18px;
            right: 18px;
            bottom: -4px;
            gap: 12px;
            font-size: clamp(58px, 16vw, 90px);
            line-height: 0.82;
            letter-spacing: -0.075em;
          }

          .work-scroll-text {
            bottom: 78px;
            font-size: 24px;
          }

          .work-nav {
            grid-template-columns: 1fr auto;
            padding: 18px 20px 0;
            font-size: 24px;
          }

          .work-nav__location,
          .work-nav__clock {
            display: none;
          }

          .work-brand-bar {
            padding: 4px 20px 8px;
            gap: 12px;
            font-size: clamp(32px, 11vw, 90px);
            line-height: 0.85;
            letter-spacing: -0.075em;
          }

          .work-controls {
            grid-template-columns: 1fr auto;
            padding: 8px 20px 10px;
            font-size: 23px;
          }

          .work-controls > :nth-child(2),
          .work-controls > :nth-child(3) {
            display: none;
          }

          .work-item__bar {
            height: 40px;
            grid-template-columns: 30px 1fr auto;
            gap: 8px;
            padding: 0 20px;
          }

          .work-item__number {
            font-size: 18px;
          }

          .work-item__title {
            font-size: 28px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .work-item__type {
            display: none;
          }

          .work-item__year {
            font-size: 28px;
          }

          .work-item__marker {
            display: none;
          }

          .work-item {
            height: auto;
          }

          .work-item__image {
            flex: none;
            height: 35vh;
          }
        }

        @media (max-width: 480px) {
          .work-hero__top,
          .work-nav {
            font-size: 16px;
          }

          .work-brand-bar,
          .work-hero__brand {
            font-size: clamp(24px, 10vw, 52x);
          }

          .work-item__bar {
            padding: 0 18px;
          }

          .work-item__title,
          .work-item__year {
            font-size: 16px;
          }

          .work-item__image {
            height: 300px;
          }

          .work-controls {
            padding: 8px 18px 10px;
            font-size: 16px;
          }
        }
      `}</style>

      <section className="work-content">
        <header ref={headerRef} className="work-sticky-header">
          <nav className="work-nav">
            <div>
              <a href="/">Home</a>
            </div>

            <div className="work-nav__location">Manywhere on Internet</div>

            <div className="work-nav__location">(not boring)</div>

            <div className="work-nav__clock">
              <span className="work-dot" />
              <span>{time}</span>
            </div>
          </nav>

          <div className="work-brand-bar">
            <span>
              NerdLabs<sup>®</sup>
            </span>
            <span>Studio</span>
          </div>

          <div className="work-controls">
            <div>Work</div>
            <div></div>
            <div></div>

            <div className="work-toggle">
              <button type="button" onClick={() => setShowImages(true)}>
                Show
              </button>
              <span>—</span>
              <button type="button" onClick={() => setShowImages(false)}>
                Hide
              </button>
            </div>
          </div>
        </header>

        <div id="work" className="work-list" ref={listRef}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-project-id={project.id}
              className={`work-item ${index === 0 ? "show" : ""}`}
            >
              <div className="work-item__bar">
                <div className="work-item__number">{project.id}</div>
                <h2 className="work-item__title">{project.title}</h2>
                <div className="work-item__type">{project.type}</div>
                <div className="work-item__year">( {project.year} )</div>
                <div className="work-item__marker" />
              </div>

              <div
                className={`work-item__image ${showImages ? "" : "is-hidden"}`}
              >
                <div className="work-item__placeholder-text">
                  Image Placeholder
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Work;

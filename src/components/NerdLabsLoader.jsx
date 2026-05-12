import React, { useEffect, useState } from "react";

const styles = `
  .nl-loader-root {
    position: fixed;
    inset: 0;
    background: #f2f2f2;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: Helvetica, Arial, sans-serif;
  }

  /* --- LOGO WRAP --- */
  .nl-logo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    animation: nl-fade-in 0.4s ease forwards;
  }

  /* --- SVG MARK: paths draw in via stroke-dashoffset, then fill --- */
  .nl-svg-mark {
    width: 90px;
    height: 93px;
  }

  .nl-svg-mark path {
    fill: transparent;
    stroke: #111;
    stroke-width: 18;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 1400;
    stroke-dashoffset: 1400;
  }

  .nl-svg-mark path:nth-child(1) { animation: nl-draw 0.5s ease 0.05s forwards, nl-fill 0.25s ease 0.6s forwards; }
  .nl-svg-mark path:nth-child(2) { animation: nl-draw 0.5s ease 0.15s forwards, nl-fill 0.25s ease 0.7s forwards; }
  .nl-svg-mark path:nth-child(3) { animation: nl-draw 0.5s ease 0.25s forwards, nl-fill 0.25s ease 0.8s forwards; }
  .nl-svg-mark path:nth-child(4) { animation: nl-draw 0.5s ease 0.35s forwards, nl-fill 0.25s ease 0.9s forwards; }
  .nl-svg-mark path:nth-child(5) { animation: nl-draw 0.5s ease 0.45s forwards, nl-fill 0.25s ease 1.0s forwards; }
  .nl-svg-mark path:nth-child(6) { animation: nl-draw 0.5s ease 0.55s forwards, nl-fill 0.25s ease 1.1s forwards; }
  .nl-svg-mark path:nth-child(7) { animation: nl-draw 0.5s ease 0.65s forwards, nl-fill 0.25s ease 1.2s forwards; }
  .nl-svg-mark path:nth-child(8) { animation: nl-draw 0.5s ease 0.75s forwards, nl-fill 0.25s ease 1.3s forwards; }
  .nl-svg-mark path:nth-child(9) { animation: nl-draw 0.5s ease 0.85s forwards, nl-fill 0.25s ease 1.4s forwards; }

  /* --- WORDMARK --- */
  .nl-wordmark {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .nl-brand {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 42px;
    letter-spacing: -1px;
    color: #111;
    line-height: 1;
    opacity: 0;
    transform: translateY(8px);
    animation: nl-rise 0.5s ease 0.8s forwards;
  }

  .nl-tagline {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 9px;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: rgba(0,0,0,0.38);
    opacity: 0;
    animation: nl-rise 0.5s ease 1.0s forwards;
  }

  /* --- PROGRESS BAR --- */
  .nl-progress-wrap {
    margin-top: 52px;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    opacity: 0;
    animation: nl-rise 0.4s ease 1.1s forwards;
  }

  .nl-progress-track {
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,0.12);
    position: relative;
    overflow: hidden;
  }

  .nl-progress-fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #111;
    transition: width 0.08s linear;
  }

  .nl-progress-label {
    display: flex;
    justify-content: space-between;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 8px;
    letter-spacing: 2px;
    color: rgba(0,0,0,0.3);
    text-transform: uppercase;
  }

  .nl-counter {
    color: rgba(0,0,0,0.5);
    font-weight: 700;
    transition: color 0.2s;
  }

  .nl-counter.done {
    color: #111;
  }

  /* --- STATUS LINES --- */
  .nl-status {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 200px;
    opacity: 0;
    animation: nl-rise 0.4s ease 1.2s forwards;
  }

  .nl-status-line {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 8px;
    letter-spacing: 1.5px;
    color: rgba(0,0,0,0.18);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;
  }

  .nl-status-line.active   { color: rgba(0,0,0,0.55); }
  .nl-status-line.complete { color: rgba(0,0,0,0.2);  }

  .nl-status-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    flex-shrink: 0;
  }

  /* --- EXIT --- */
  .nl-loader-root.nl-exit {
    animation: nl-exit 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .nl-curtain {
    position: absolute;
    inset: 0;
    background: #f2f2f2;
    transform-origin: right center;
    transform: scaleX(0);
    z-index: 5;
  }

  .nl-loader-root.nl-exit .nl-curtain {
    animation: nl-curtain-wipe 0.65s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }

  .nl-loader-root.nl-exit .nl-logo-wrap,
  .nl-loader-root.nl-exit .nl-progress-wrap,
  .nl-loader-root.nl-exit .nl-status {
    animation: nl-content-fade 0.25s ease forwards;
  }

  /* --- KEYFRAMES --- */
  @keyframes nl-draw {
    to { stroke-dashoffset: 0; }
  }

  @keyframes nl-fill {
    from { fill: transparent; stroke-width: 18; }
    to   { fill: #111;        stroke-width: 0;  }
  }

  @keyframes nl-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes nl-rise {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0);   }
  }

  @keyframes nl-exit {
    0%   { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes nl-curtain-wipe {
    0%   { transform-origin: left center; transform: scaleX(1); }
    100% { transform-origin: left center; transform: scaleX(0); }
  }

  @keyframes nl-content-fade {
    to { opacity: 0; transform: scale(0.97); }
  }
`;

const STATUS_STEPS = [
  { label: "Initializing AI core", threshold: 0 },
  { label: "Loading secure modules", threshold: 25 },
  { label: "Connecting workspace", threshold: 55 },
  { label: "Ready", threshold: 88 },
];

const NerdLabsLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const tick = () => {
      const remaining = 100 - current;
      const increment = Math.max(0.4, remaining * 0.045);
      current = Math.min(100, current + increment);
      setProgress(Math.floor(current));

      if (current < 100) {
        setTimeout(tick, 30 + Math.random() * 20);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            setHidden(true);
            onComplete?.();
          }, 700);
        }, 350);
      }
    };

    // Wait for SVG draw animation to mostly finish before starting progress
    const start = setTimeout(tick, 1300);
    return () => clearTimeout(start);
  }, [onComplete]);

  if (hidden) return null;

  const activeStep = [...STATUS_STEPS]
    .reverse()
    .find((s) => progress >= s.threshold);

  return (
    <>
      <style>{styles}</style>
      <div className={`nl-loader-root${exiting ? " nl-exit" : ""}`}>
        <div className="nl-curtain" />

        <div className="nl-logo-wrap">
          {/* Real NerdLabs SVG — paths draw in staggered, then fill solid */}
          <svg
            className="nl-svg-mark"
            viewBox="0 0 756 778"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M190.713 769.3C153.213 728.1 119.013 677.2 94.2129 625.6C65.4129 565.5 43.3129 488.5 39.9129 436C39.2129 426.3 38.8129 425.3 47.0129 450.5C67.0129 511.6 99.8129 564.4 147.313 612.1C200.713 665.7 259.913 702.6 345.113 735.5C351.813 738.1 357.313 740.6 357.313 740.9C357.313 741.8 340.413 749.9 330.313 753.8C290.713 769.3 247.413 778 210.213 778H198.713L190.713 769.3Z" />
            <path d="M128.813 771.9C102.113 766.2 70.1128 756.1 44.6128 745.4L28.3128 738.6L24.8128 727.5C12.4128 687.8 5.2128 650.8 1.2128 607C-0.387197 589.8 -0.387197 535.4 1.1128 518.5C3.5128 493.2 6.4128 472.3 10.4128 452.5C12.7128 441.5 14.9128 431.8 15.3128 431C15.8128 430.2 15.9128 434 15.6128 439.5C14.9128 452.1 16.8128 484.7 19.4128 505C29.2128 581.9 57.8128 653.1 110.313 731.5C118.713 744 131.713 762.4 137.713 770.3C141.013 774.6 141.113 774.6 128.813 771.9Z" />
            <path d="M495.413 696.6C495.613 696.3 499.913 694 504.813 691.4C584.613 649.5 653.413 575.8 700.313 482.1C711.513 459.5 719.713 441.2 725.313 425.7C727.713 419.2 730.013 414.3 730.413 414.7C731.913 416.3 739.613 442 743.813 459.4C748.913 480.5 751.713 495.4 753.813 513.5C756.313 535.1 757.513 531.9 740.613 549.2C672.813 618.3 595.213 666.9 512.513 692.1C496.513 696.9 494.513 697.4 495.413 696.6Z" />
            <path d="M395.713 692.5C348.513 686.4 297.413 668.7 256.013 644.1C223.813 624.9 196.813 603.6 167.313 574.1C142.913 549.6 126.713 529.5 105.813 498C89.8129 473.8 80.0129 456.9 68.7129 433.5C60.2129 416.1 49.6129 389.4 50.6129 388.3C50.9129 388.1 54.7129 393.2 59.2129 399.7C81.6129 432.6 108.313 460.3 140.813 484.3C204.013 531.1 291.213 562.3 384.313 571.5C396.013 572.6 431.813 574.8 440.713 575C442.713 575 439.013 609.7 435.213 626.5C430.713 646.5 421.613 672 413.613 687.3C409.613 694.9 411.013 694.5 395.713 692.5Z" />
            <path d="M447.313 680.6C447.313 680.4 449.113 676.5 451.213 671.9C467.913 636.1 479.413 589.4 483.413 542C484.713 526.7 484.013 475.6 482.313 462C475.413 405.9 457.513 351.7 420.813 276.2C414.513 263.2 409.313 252 409.313 251.4C409.313 248.7 446.413 235 469.813 229C493.913 222.9 525.713 218.1 528.013 220.4C528.613 221 531.413 227.7 534.213 235.3C554.613 290.4 563.613 346.7 560.513 399.8C558.613 431.4 555.513 452.2 547.813 483.7C531.513 550.7 497.413 620.8 457.013 670.2C449.213 679.9 447.313 681.9 447.313 680.6Z" />
            <path d="M488.413 671.3C489.113 670.3 492.513 666.6 495.813 663C549.613 604.5 585.313 527.2 598.213 441C605.313 393.6 605.313 331.9 598.213 281.2C596.213 266.7 592.713 246 591.713 242.8C591.413 241.8 591.613 241 592.113 241C593.513 241 616.513 258.2 627.313 267.3C645.313 282.6 661.713 299.7 678.013 320.5C687.613 332.7 705.313 359 705.313 360.9C705.313 363.3 697.213 388.7 691.813 403.5C670.513 462 632.313 527.8 591.413 576.5C561.413 612.3 532.913 639.9 502.313 662.9C489.213 672.7 485.613 674.9 488.413 671.3Z" />
            <path d="M139.213 437.2C120.813 425.1 99.9127 406.6 85.8127 390C77.4127 380.1 61.3127 358.3 61.3127 356.8C61.3127 355.4 74.7127 338.1 86.1127 325C97.5127 311.8 117.913 291.6 130.313 281.4C177.513 242.1 244.113 211.2 312.313 196.7C363.513 185.8 426.013 183.2 472.613 190C489.613 192.5 503.513 195.1 503.013 195.7C502.713 195.9 496.713 196.5 489.713 197.1C417.713 202.5 343.413 233.7 277.113 286.5C263.213 297.5 233.013 327.5 220.113 343C198.113 369.5 178.313 396.4 159.313 425.8C153.513 434.7 148.313 442 147.713 442C147.113 442 143.213 439.8 139.213 437.2Z" />
            <path d="M47.3127 283.2C47.3127 277 49.8127 257.5 52.4127 243.5C56.7127 220.4 64.9127 193.1 75.0127 168.5C79.8127 156.7 92.9127 130.5 94.9127 129C98.3127 126.1 151.513 117.3 182.813 114.3C208.213 111.9 266.613 112 288.813 114.3C355.913 121.6 418.913 138.2 470.313 162.4C477.113 165.6 476.213 165.6 463.113 162.6C450.113 159.6 432.013 156.4 417.813 154.8C400.613 152.8 346.413 153.1 328.313 155.3C259.813 163.8 194.313 187.1 131.313 225.3C109.213 238.7 86.6127 255.1 62.6127 275.2L47.3127 288V283.2Z" />
            <path d="M473.813 137.3C437.313 114.5 384.613 94.1 337.413 84.5C299.613 76.8 281.313 75 238.313 74.3C201.413 73.7 177.113 75 144.213 79C135.313 80.1 127.813 80.8 127.513 80.5C126.813 79.9 136.513 68.8 150.313 54.6C167.813 36.6 190.713 17.3 209.913 4.6L216.913 0L238.613 5.4C297.813 20.4 351.213 43.5 402.213 76.2C428.113 92.8 462.313 120 480.313 138.4C483.813 142 486.513 145 486.313 144.9C486.013 144.9 480.413 141.5 473.813 137.3Z" />
          </svg>

          {/* Wordmark */}
          <div className="nl-wordmark">
            <div className="nl-brand">NerdLabs</div>
            <div className="nl-tagline">AI Powered Digital Products</div>
          </div>
        </div>

        {/* Progress */}
        <div className="nl-progress-wrap">
          <div className="nl-progress-track">
            <div
              className="nl-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="nl-progress-label">
            <span>Booting</span>
            <span className={`nl-counter${progress === 100 ? " done" : ""}`}>
              {progress}%
            </span>
          </div>
        </div>

        {/* Status lines */}
        <div className="nl-status">
          {STATUS_STEPS.map((step) => {
            const isActive = activeStep?.label === step.label;
            const isComplete = progress >= step.threshold && !isActive;
            return (
              <div
                key={step.label}
                className={`nl-status-line${isActive ? " active" : ""}${isComplete ? " complete" : ""}`}
              >
                <div className="nl-status-dot" />
                {step.label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NerdLabsLoader;

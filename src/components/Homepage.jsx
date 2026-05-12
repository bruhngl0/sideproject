import React, { useState } from "react";
import Desscroll from "./Desscroll";
import NerdLabsLoader from "./NerdLabsLoader";

const Homepage = () => {
  const [loaded, setLoaded] = useState(false);
  const [animReady, setAnimReady] = useState(false);

  const handleComplete = () => {
    setLoaded(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimReady(true));
    });
  };

  return (
    <div style={{ position: "relative" }}>
      {/* DESScroll is always mounted, just hidden until loader finishes */}
      <div style={{ visibility: loaded ? "visible" : "hidden" }}>
        <Desscroll animReady={animReady} />
      </div>

      {!loaded && <NerdLabsLoader onComplete={handleComplete} />}
    </div>
  );
};

export default Homepage;

import React, { useState } from "react";
import Desscroll from "./Desscroll";
import NerdLabsLoader from "./NerdLabsLoader";

const Homepage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && <NerdLabsLoader onComplete={() => setLoaded(true)} />}
      <Desscroll />
    </div>
  );
};

export default Homepage;

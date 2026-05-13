import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./components/Work.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Work />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

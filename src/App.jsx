import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Sabera from "./components/Sabera";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sabera" element={<Sabera />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

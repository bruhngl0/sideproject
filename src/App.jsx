import React from "react"
import Homepage from "./components/Homepage"
import { BrowserRouter as Router, Routes , Route  } from "react-router-dom"
import Test from "./components/Test"
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <route to= "/" element = {<Test/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App

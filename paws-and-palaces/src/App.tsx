//import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

// PAGES
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          element={<Home />}
          path="/" 
        />
        <Route 
          element={<Services />}
          path="/services" 
        />
        <Route 
          element={<About />}
          path="/about" 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

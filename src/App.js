import React from "react";
// import "./index.css"
import "./App.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
      
        
      </Routes>
      </Router>

    </div>
  );
}

export default App;

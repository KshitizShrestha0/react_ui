import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes } from "react-router";
import { Route } from "react-router";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />



      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

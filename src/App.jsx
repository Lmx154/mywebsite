import React, { useEffect } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./App.css";

function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      const targetId = event.target.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <div id="home" className="content">
        <Home />
      </div>
      <div id="about" className="content">
        <About />
      </div>
      <div id="contact" className="content">
        <Contact />
      </div>
    </div>
  );
}

export default App;

// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/styles.css";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

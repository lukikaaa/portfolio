import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero-section"
    >
      <h1>Hello I'm Muslih Akbar</h1>
      <p>Desainer Web & Pengembang Frontend</p>
    </motion.div>
  );
};

export default HeroSection;

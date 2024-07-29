import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "PT Dynaplat",
      year: "(2018-2019)",
      description:
        "Makes sure the right amount of plastic raw materials get into the injection machine",
      image: "/images/dynaplast.png",
      link: "https://drive.google.com/file/d/1NE4GCzA1KoIYl8Vt0zxr1wC9YI8c6oXI/view",
    },
    {
      title: "PT. Mitsubishi Motors Kramayudha Indonesia",
      year: "(2019-2021)",
      description:
        "The process of welding or joining metal materials using CO and spot welding methods.",
      image: "/images/mitsubishi.jpeg",
      link: "https://drive.google.com/file/d/1gbRq_NjpZoPVf2R_IV9fi6ZQ0Fp_ward/view?usp=sharing",
    },
    {
      title: "PT. Multi Usage Indonesia",
      year: "(2022)",
      description:
        "The objective is to perform chromium plating on plastic materials using chemical substances and liquids.",
      image: "/images/mui.png",
      link: "https://drive.google.com/file/d/1qzBm42WHp5XVkym42wC966kNa38LOPqi/view?usp=sharing",
    },
    {
      title: "PT. Progress Diecast",
      year: "(2022-Present)",
      description:
        "The operator is able to utilize the diecasting machine and diagnose and resolve any issues that may arise with the machine.",
      image: "/images/progress.png",
      link: "https://linkproyek2.com",
    },
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className="project-year">{project.year}</p>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Certificates
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

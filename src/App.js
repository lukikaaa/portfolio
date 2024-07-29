import React from "react";
import LazyLoad from "react-lazyload";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Proyek 1",
      description: "Deskripsi singkat proyek 1.",
      image: "/images/project1.jpg",
      link: "https://linkproyek1.com",
    },
    {
      title: "Proyek 2",
      description: "Deskripsi singkat proyek 2.",
      image: "/images/project2.jpg",
      link: "https://linkproyek2.com",
    },
    // Tambahkan lebih banyak proyek jika diperlukan
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <LazyLoad height={200} offset={100}>
              <img src={project.image} alt={project.title} />
            </LazyLoad>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Lihat Proyek
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

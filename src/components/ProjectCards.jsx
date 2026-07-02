// src/components/ProjectCards.jsx
import React from "react";
import "../styles/projectCard.css";
export default function ProjectCards({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="overlay">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
            View Details
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

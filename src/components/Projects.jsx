// src/components/Projects.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCards from "./ProjectCards";
import projectsData from "../data/projectsData";
import "../styles/projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "React", "Node", "Design", "MongoDB", "CSS"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {categories.map(cat => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.div
        className="projects-grid"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCards project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}


import { skillsData } from "../data/skillsData.js"
import SkillCard from "../components/SkillCard.jsx"
import "../styles/skills.css"
import { motion } from "framer-motion"

export default function Skills() {
  const categories = [...new Set(skillsData.map(skill => skill.category))]

  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Technical <span>Skills</span>
        </h2>
        <p>
          Technologies I use to build fast, scalable and visually stunning web
          applications.
        </p>
      </motion.div>

      {categories.map(category => (
        <div key={category} className="skills-group">
          <h3 className="category-title">{category}</h3>

          <div className="skills-grid">
            {skillsData
              .filter(skill => skill.category === category)
              .map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
          </div>
        </div>
      ))}
    </section>
  )
}

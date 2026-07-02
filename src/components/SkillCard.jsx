import { motion } from "framer-motion"

export default function SkillCard({ skill }) {
  const Icon = skill.icon

  return (
    <motion.div
      className="skill-card"
      whileHover={{ y: -10, scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="skill-header">
        <Icon className="skill-icon" style={{ color: skill.color }} />
        <span className="skill-exp">{skill.experience}</span>
      </div>

      <h3>{skill.name}</h3>

      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          style={{ background: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <span className="skill-percent">{skill.level}%</span>
    </motion.div>
  )
}
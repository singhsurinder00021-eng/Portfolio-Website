import { motion } from "framer-motion";
import { profile } from "../data/profileData";
import "../styles/hero.css";
import profileImg from "../assets/images/Photo.png";
import resumePdf from "../assets/images/surinder (2).pdf";

export default function Hero() {
  // Container animation configuration to delay children sequentially
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <motion.div 
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-greeting" variants={itemVariants}>
            👋 Welcome to my portfolio
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Hi, I’m <span>{profile.name}</span>
          </motion.h1>

          <motion.p variants={itemVariants}>
            {profile.role}
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.a
              href={resumePdf}
              download
              className="hero-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT (IMAGE) */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Main animated background blobs for light theme depth */}
          <div className="image-glow-1"></div>
          <div className="image-glow-2"></div>
          
          <motion.div 
            className="image-wrapper"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={profileImg} alt={profile.name} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
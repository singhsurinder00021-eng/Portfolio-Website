import "../styles/about.css";
import { profile } from "../data/profileData";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
};

export default function About() {
  useReveal();

  return (
    <section id="about" className="about-section reveal">
      <div className="container">

        {/* LEFT */}
        <div className="about-left">
          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          <p className="about-description">
            {profile.about}
            <span className="highlight"> Let’s build something impactful.</span>
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>{profile.projects}+</h3>
              <p>Projects Completed</p>
            </div>
          </div>

          {/* Updated Hire Me link with an automatic email subject */}
          <a 
            href="mailto:singhsurinder00021@gmail.com?subject=Job%20Opportunity%20-%20MERN%20Stack%20Developer" 
            className="btn-primary"
          >
            Hire Me
          </a>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="profile-card">
            <img src={profile.image} alt="Profile" />
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>

            <div className="social-links">
              {profile.social?.map((item) => (
                <a
                  key={item.platform}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {iconMap[item.platform]}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
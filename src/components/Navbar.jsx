import { useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">Surinder Singh</h2>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

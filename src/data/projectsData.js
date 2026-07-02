// src/data/projectsData.js
import { DiJavascript } from "react-icons/di";
import calculatorImg from "../assets/images/calculator.png";
import doctor from "../assets/images/Screenshot 2026-07-03 003443.png"
import blinkit from "../assets/images/Screenshot 2026-07-03 004637.png"
const projectsData = [
  
  {
    id: 1,
    title: "CALAULATOR",
    description: "A premium CALCULATOR",
    image:calculatorImg,
    tech: ["HTML5", "CSS3","Javascript","ReactJs"],
    link: "https://calculator-6761.netlify.app/"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Fully responsive e-commerce platform with cart, product filtering, and modern design.",
    image:blinkit,
    tech: ["HTML5", "CSS3","Javascript","ReactJs","NodeJs","ExpressJs","MongoDB","cloudinary"],
    link: "https://blinkit-umber-seven.vercel.app/login"
  },
    {
    id: 5,
    title: "NextStep Education Website",
    description: "A premium education consultancy landing page with modern UI, animations, and responsive design.",
    image:doctor,
    tech: ["HTML5", "CSS3","Javascript","ReactJs"],
    link: "https://nse-collage-pj02ddg89-singhsurinder00021-engs-projects.vercel.app"
  },
];

export default projectsData;

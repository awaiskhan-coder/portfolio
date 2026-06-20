import auth from "../assets/images/auth.png";
import restaurant from "../assets/images/restaurant.png";
import currency from "../assets/images/currency.png";

const projects = [
  {
    title: "MERN Authentication",
    description:
      "Secure authentication system built using React, Node.js, Express, MongoDB and JWT.",
    image: auth,
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://mern-authentication-three.vercel.app/",
    github: "https://github.com/awaiskhan-coder/mern-authentication.git",
  },

  {
    title: "Restaurant Website",
    description:
      "Responsive restaurant landing page with modern UI and smooth user experience.",
    image: restaurant,
    technologies: ["HTML", "Tailwind", "JavaScript"],
    live: "https://awaiskhan-coder.github.io/Resturent-project/",
    github: "https://github.com/awaiskhan-coder/Resturent-project.git",
  },

  {
    title: "Currency Converter",
    description:
      "Real-time currency converter using Exchange Rate API.",
    image: currency,
    technologies: ["JavaScript", "API", "CSS"],
    live: "https://awaiskhan-coder.github.io/Currency-Converter/",
    github: "https://github.com/awaiskhan-coder/Currency-Converter.git",
  },
];

export default projects;
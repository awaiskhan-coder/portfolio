import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";
import {
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaLaptopCode size={28} />,
      title: "20+ Projects",
      desc: "Personal & MERN Projects",
    },
    {
      icon: <FaCode size={28} />,
      title: "Tech Stack",
      desc: "React • Node • MongoDB",
    },
    {
      icon: <FaGraduationCap size={28} />,
      title: "Learning",
      desc: "Always Improving Skills",
    },
    {
      icon: <FaBriefcase size={28} />,
      title: "Available",
      desc: "Open For Freelance",
    },
  ];

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="About Me"
          title="Know More About Me"
          description="I'm a passionate Full Stack MERN Developer who enjoys building modern, responsive and scalable web applications. I love solving real-world problems through clean code and continuously learning new technologies."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 duration-300"
            >
              <div className="text-blue-500">{card.icon}</div>

              <h3 className="text-xl font-semibold mt-5">{card.title}</h3>

              <p className="text-slate-400 mt-3">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaCloud,
  FaRocket,
} from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";

function Timeline() {
  const timeline = [
    {
      year: "2024",
      title: "Started Web Development",
      description:
        "Began my journey by learning HTML, CSS and JavaScript, building the foundation of web development.",
      icon: <FaLaptopCode />,
    },
    {
      year: "2025",
      title: "Frontend Development",
      description:
        "Learned React.js, Tailwind CSS and built multiple responsive frontend projects.",
      icon: <FaReact />,
    },
    {
      year: "2026",
      title: "Full Stack MERN",
      description:
        "Developed full stack applications using React, Node.js, Express.js and MongoDB with authentication and REST APIs.",
      icon: <FaServer />,
    },
    {
      year: "Now",
      title: "Learning Cloud Computing",
      description:
        "Currently learning cloud technologies and deployment to build scalable production-ready applications.",
      icon: <FaCloud />,
    },
    {
      year: "Goal",
      title: "Full Stack + Cloud Engineer",
      description:
        "My goal is to become a professional Full Stack Engineer with strong Cloud Computing skills.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section id="journey" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          subtitle="Journey"
          title="Learning Timeline"
          description="Every project helped me become a better developer."
        />

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 w-1 h-full bg-slate-700"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Icon */}
                <div className="absolute left-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl border-4 border-slate-950">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300">
                  <span className="text-blue-400 font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                  <p className="text-slate-400 mt-4 leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

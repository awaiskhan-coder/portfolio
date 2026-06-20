import { motion } from "framer-motion";
import projects from "../data/projects";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";

function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
          description="Some of my recent work built using modern technologies."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((item) => (
                    <span
                      key={item}
                      className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
                  >
                    <FaArrowRight />
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-slate-700 px-5 py-2 rounded-lg hover:border-blue-500"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

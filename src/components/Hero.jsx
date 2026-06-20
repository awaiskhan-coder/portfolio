import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import Button from "./common/Button";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -top-20 -left-20"></div>

      <div className="absolute w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full mb-8 mt-30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for Work
          </div>

          <h1 className="text-5xl font-bold mb-10">AWAIS AHMAD KHAN</h1>

          <h2 className="text-2xl lg:text-4xl font-semibold text-blue-400 mt-6">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Cloud Computing Learner",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </h2>

          <p className="text-slate-400 mt-8 leading-8 max-w-xl">
            I build modern, scalable and secure web applications using React,
            Node.js, Express.js and MongoDB.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-slate-800">
              MERN Stack
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-800">
              REST APIs
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-800">Cloud</span>

            <span className="px-4 py-2 rounded-full bg-slate-800">
              Responsive
            </span>
          </div>

          <div className="flex flex-wrap gap-5 mt-10">
            <Button href="#projects" icon={<FaArrowRight />}>
              View Projects
            </Button>

            <Button
              href="/resume.pdf"
              download
              variant="outline"
              icon={<FaDownload />}
            >
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 mt-10 text-2xl">
            <a
              href="https://github.com/awaiskhan-coder"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/awais-ahmad-khan-137951363"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="hover:text-blue-500 duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-[90px] opacity-40 rounded-full"></div>

            <img
              src={profile}
              alt="Awais"
              className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] object-cover rounded-full border-4 border-blue-500"
            />

            {/* React */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-5 -left-6 bg-slate-900 border border-slate-700 p-3 rounded-xl text-cyan-400 text-2xl"
            >
              <FaReact />
            </motion.div>

            {/* Node */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 -right-6 bg-slate-900 border border-slate-700 p-3 rounded-xl text-green-500 text-2xl"
            >
              <FaNodeJs />
            </motion.div>

            {/* MongoDB */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute bottom-16 -left-8 bg-slate-900 border border-slate-700 p-3 rounded-xl text-green-400 text-2xl"
            >
              <SiMongodb />
            </motion.div>

            {/* Express */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="absolute bottom-5 -right-8 bg-slate-900 border border-slate-700 p-3 rounded-xl text-gray-300 text-2xl"
            >
              <SiExpress />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

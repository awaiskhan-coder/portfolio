import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
          >
            <h2 className="text-3xl font-bold text-blue-500">
              Awais.
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Full Stack MERN Developer passionate about building modern,
              responsive and scalable web applications.
            </p>

          </motion.div>

          {/* Links */}

          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:.15 }}
            viewport={{ once:true }}
          >

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><a href="#home" className="hover:text-blue-400">Home</a></li>

              <li><a href="#about" className="hover:text-blue-400">About</a></li>

              <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>

              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>

              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>

            </ul>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:.3 }}
            viewport={{ once:true }}
          >

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/awaiskhan-coder"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/awais-ahmad-khan-137951363/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                className="hover:text-blue-500 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            <a
              href="#home"
              className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
            >
              <FaArrowUp />
              Back to Top
            </a>

          </motion.div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 text-center text-slate-500">

          © {currentYear} Awais Ahmad Khan. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
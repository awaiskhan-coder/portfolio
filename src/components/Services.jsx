import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={32} />,
      title: "Frontend Development",
      desc: "Modern, responsive and interactive React applications.",
    },
    {
      icon: <FaServer size={32} />,
      title: "Backend Development",
      desc: "REST APIs with Node.js, Express.js and JWT Authentication.",
    },
    {
      icon: <FaDatabase size={32} />,
      title: "Database Design",
      desc: "MongoDB database design and optimization.",
    },
    {
      icon: <FaCloud size={32} />,
      title: "Deployment",
      desc: "Deploy applications using Vercel, Railway and Render.",
    },
    {
      icon: <FaMobileAlt size={32} />,
      title: "Responsive Design",
      desc: "Websites that work perfectly on every device.",
    },
    {
      icon: <FaCode size={32} />,
      title: "Clean Code",
      desc: "Maintainable, scalable and reusable code structure.",
    },
  ];

  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Services"
          title="What I Can Do"
          description="Helping businesses build modern digital experiences."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-3 duration-300"
            >
              <div className="text-blue-500 group-hover:scale-110 duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">{service.title}</h3>

              <p className="text-slate-400 mt-4 leading-7">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

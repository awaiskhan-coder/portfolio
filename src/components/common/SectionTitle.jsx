import { motion } from "framer-motion";

function SectionTitle({ subtitle, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="uppercase tracking-[4px] text-blue-400 font-medium">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        {title}
      </h2>

      {description && (
        <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
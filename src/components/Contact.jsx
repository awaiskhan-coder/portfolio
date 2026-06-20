import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";
import Button from "./common/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.log(error);
    }

    setLoading(false);
  };
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Contact"
          title="Let's Work Together"
          description="Have a project or opportunity? Feel free to contact me."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Email</h3>

                  <p className="text-slate-400">awaisahmadkhan098@email.com</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  <FaGithub />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">GitHub</h3>

                  <p className="text-slate-400">github.com/awaiskhan-coder</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  <FaLinkedin />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">LinkedIn</h3>

                  <p className="text-slate-400">
                    https://www.linkedin.com/in/awais-ahmad-khan-137951363/
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:border focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:border focus:border-blue-500"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:border focus:border-blue-500 resize-none"
            />

            <Button
              disabled={loading}
              className="w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Have a project in mind, collaboration, or just want to say hi?  
          Feel free to reach out — I’d love to connect!
        </motion.p>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <motion.a
            href="https://github.com/sheddy146"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub size={24} className="text-blue-400" />
            <span className="text-gray-300">github.com/sheddy146</span>
          </motion.a>

          <motion.a
            href="mailto:shedracknliam@gmail.com"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope size={24} className="text-red-400" />
            <span className="text-gray-300">shedracknliam@gmail.com</span>
          </motion.a>

          <motion.a
            href="tel:+2349018882761"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone size={24} className="text-green-400" />
            <span className="text-gray-300">+234 901 888 2761</span>
          </motion.a>
        </div>

        {/* Formspree Contact Form */}
        <motion.form
          action="https://formspree.io/f/xwpwgkkj"
          method="POST"
          className="bg-gray-800 rounded-2xl p-8 max-w-lg mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <label className="block mb-4">
            <span className="text-gray-300">Your Name</span>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-300">Your Email</span>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-300">Your Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </label>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.p
          className="text-gray-500 mt-10 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I’ll get back to you as soon as possible 🚀
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;

"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-blue-400">
            Sheddis Media & Technologies
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Built with 💙 by Shedrack Nliam (Sheddy De Coder)
          </p>
        </motion.div>

        {/* Middle Links */}
        <motion.ul
          className="flex flex-wrap justify-center gap-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <li>
            <a
              href="/about"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </motion.ul>

        {/* Right Section - Socials */}
        <motion.div
          className="flex justify-center md:justify-end gap-5 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/sheddy146"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nliam-shedrack-856980309"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:shedracknliam@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="tel:+2349018882761"
            className="hover:text-blue-400 transition"
          >
            <FaPhone />
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center mt-8 text-sm text-gray-500 border-t border-gray-800 pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        © {new Date().getFullYear()} Sheddis Media & Technologies. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-to-b from-gray-950 via-gray-900 to-gray-800 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-4"
      >
        Hi, I’m <span className="text-blue-500">Shedrack Nliam</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-2xl text-gray-300 mb-6"
      >
        Also known as <span className="text-blue-400 font-semibold">Sheddy De Coder</span> 👨🏽‍💻
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed mb-8"
      >
        I’m a passionate Full-Stack Developer, Designer & Tech Enthusiast.  
        I build interactive web experiences, modern UIs, and digital solutions that connect people and technology.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-500 hover:border-blue-400 rounded-full font-medium transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Technologia",
    description:
      "A futuristic social media ecosystem and AI-powered SMM platform that connects creativity, innovation, and automation. Built with React, TailwindCSS, and Supabase.",
    tech: ["React", "Tailwind", "Supabase", "AI"],
    link: "#", // replace with your live link or demo later
  },
  {
    title: "Sheddis Media",
    description:
      "A full-scale digital media brand offering social media management, branding, and web solutions. Designed to help businesses grow through creativity and technology.",
    tech: ["Next.js", "Node.js", "Canva", "Marketing"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg text-left hover:shadow-blue-500/20 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaExternalLinkAlt />
                  <span>View Project</span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCode />
                  <span>View Code</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

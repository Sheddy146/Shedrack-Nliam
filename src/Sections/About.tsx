"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPenNib,
  FaGitAlt,
  FaGithub,
  FaGlobe,
  FaBullhorn,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSupabase,
  SiCanva,
  SiGoogleads,
} from "react-icons/si";

import { useState, useEffect } from "react";


const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-2xl" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-400 text-2xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-2xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300 text-2xl" /> },
  { name: "Website Deployment", icon: <FaGlobe className="text-blue-400 text-2xl" /> },
  { name: "Website Hosting", icon: <FaGlobe className="text-green-400 text-2xl" /> },
  { name: "Website Management", icon: <FaGlobe className="text-cyan-400 text-2xl" /> },
  { name: "Facebook Ads", icon: <FaBullhorn className="text-blue-500 text-2xl" /> },
  { name: "Google Ads", icon: <SiGoogleads className="text-yellow-500 text-2xl" /> },
  { name: "Canva", icon: <SiCanva className="text-sky-400 text-2xl" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500 text-2xl" /> },
  { name: "Social Media Strategy", icon: <FaPenNib className="text-gray-400 text-2xl" /> },
  { name: "Script / Content Writing", icon: <FaPenNib className="text-white text-2xl" /> },
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/assets/react.svg", // replace with your real image paths
    "/images/about2.jpg",
    "/images/about3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-32 pb-20 px-6 md:px-20 bg-gray-900 text-gray-200">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-blue-500 mb-4">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Hi, I’m <span className="text-white font-semibold">Shedrack Nliam</span> — also
          known as <span className="text-blue-400">Sheddy De Coder</span>. I’m a{" "}
          <span className="text-blue-400">Full-Stack Developer</span>,{" "}
          <span className="text-blue-400">Graphic Designer</span>,{" "}
          <span className="text-blue-400">Social Media Manager</span>, and{" "}
          <span className="text-blue-400">AI Enthusiast</span>.  
          I build sleek, high-performing web experiences that merge creativity with
          functionality. I also leverage AI tools and prompt engineering to optimize
          workflows, generate intelligent solutions, and create futuristic digital experiences.
        </p>
      </motion.div>

      {/* Image Carousel Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative max-w-3xl mx-auto mt-12 overflow-hidden rounded-2xl shadow-lg"
      >
        <img
  src={images[currentImage]}
  alt="Shedrack portfolio"
  className="w-full h-80 object-cover transition-all duration-1000 ease-in-out"
/>


        {/* Role Overlay */}
        <div className="absolute bottom-0 w-full bg-black/50 py-4 flex justify-center gap-6 text-sm md:text-base text-gray-100 font-semibold">
          <span className="hover:text-blue-400 transition">Full-Stack Developer</span>
          <span className="hover:text-blue-400 transition">Social Media Manager</span>
          <span className="hover:text-blue-400 transition">AI & Prompt Engineer</span>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Skills & Tools</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
            {skills.map((skill, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 px-4 py-3 rounded-xl flex items-center gap-3 justify-center border border-gray-700 hover:border-blue-500 transition-all"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Journey Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">My Journey</h2>
          <p className="text-gray-300 leading-relaxed">
            My journey into tech began with pure curiosity — the kind that made me stay up late,
            experimenting with code just to understand how websites truly work. Over time, that
            curiosity grew into passion and consistency, leading me to master the foundations of{" "}
            <span className="text-blue-400">HTML</span>,{" "}
            <span className="text-blue-400">CSS</span>, and{" "}
            <span className="text-blue-400">JavaScript</span>.  
            As I progressed, I explored modern tools like{" "}
            <span className="text-blue-400">React</span> and{" "}
            <span className="text-blue-400">Tailwind CSS</span> — building sleek, responsive, and
            futuristic web experiences that reflect creativity and precision.  

            <br /><br />
            Beyond development, I discovered the power of digital influence — helping brands grow
            through{" "}
            <span className="text-blue-400">social media management</span>,{" "}
            <span className="text-blue-400">content strategy</span>, and targeted{" "}
            <span className="text-blue-400">Facebook</span> and{" "}
            <span className="text-blue-400">Google Ads</span>.  
            This combination of tech and media inspired the creation of{" "}
            <span className="text-blue-400">Sheddis Media & Technologies</span> — a digital ecosystem
            built to empower businesses and individuals through design, innovation, and technology.  

            <br /><br />
            I’ve also worked on exciting projects like{" "}
            <span className="text-blue-400">Technologia</span>, a multi-feature platform that blends
            automation, AI, and SMM solutions, and{" "}
            <span className="text-blue-400">Sheddis Media</span>, a creative space for branding,
            social growth, and digital excellence.  

            <br /><br />
            Every line of code I write and every design I create is driven by one goal — to inspire
            and build solutions that truly make an impact in this digital age.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="/projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white font-semibold transition-all"
        >
          View My Projects
        </a>
      </motion.div>
    </section>
  );
};

export default About;

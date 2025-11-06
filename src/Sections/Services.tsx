import { Code2, Palette, Share2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-blue-500" />,
    title: "Web Development",
    description: "I build fast, responsive, and modern websites using React, TailwindCSS, and JavaScript frameworks.",
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-500" />,
    title: "Graphic Design",
    description: "I create visually stunning designs, logos, and brand materials that make your business stand out.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-green-500" />,
    title: "Social Media Management",
    description: "I help brands grow and engage audiences effectively through creative social media strategies.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Branding & Strategy",
    description: "I develop strong brand identities and marketing strategies to elevate your online presence.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I provide a range of creative and technical services to help brands grow and make a lasting impact online.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-800 hover:border-blue-500"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

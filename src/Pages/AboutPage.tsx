import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import About from "../Sections/About";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <motion.main
        className="bg-gray-900 text-white min-h-screen flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <About />
      </motion.main>
    </>
  );
};

export default AboutPage;

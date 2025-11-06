import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState, type SetStateAction } from "react";

import img1 from "../assets/chair-studio.jpg";
import img2 from "../assets/Smt-image.jpg";
import img3 from "../assets/white-hoodie.jpg";
import img4 from "../assets/Snapchat-1617809687.jpg";
import img5 from "../assets/Eyes=closed.jpg";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  // Parallax movement
  useEffect(() => {
    const handleScroll = () => {
      const bg = document.querySelector(".hero-bg");
      const offset = window.scrollY * 0.3;
      if (bg) (bg as HTMLElement).style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* 🔹 Background Image Slider */}
      <div className="absolute inset-0 hero-bg z-0">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onSlideChange={(swiper: { realIndex: SetStateAction<number>; }) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 flex items-center justify-center bg-black"
              >
                <img
                  src={img}
                  alt={`Hero Slide ${index + 1}`}
                  className="w-full h-full object-contain object-center brightness-90 transition-all duration-1000"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔹 Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-1"></div>

      {/* 🔹 Hero Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mt-20 md:mt-0"
      >
        <div className="relative inline-block">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          >
            Hi, I’m{" "}
            <span className="relative text-blue-500 font-extrabold">
              Shedrack Nliam
              <motion.span
                className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full"
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.span>
            </span>
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-gray-300 mb-6 mt-4"
        >
          Also known as{" "}
          <span className="text-blue-400 font-semibold">
            Sheddy De Coder
          </span>{" "}
          👨🏽‍💻
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed mb-10"
        >
          I’m a passionate Full-Stack Developer, Designer & Tech Enthusiast.  
          I craft immersive digital experiences — merging creativity, code, and
          technology to connect people and ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-600/30"
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
      </motion.div>
    </section>
  );
};

export default Hero;

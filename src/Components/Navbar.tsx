"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links for your pages
 const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];


  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-bold text-white tracking-wide cursor-pointer"
        >
          <NavLink to="/" className="text-white">
            <span className="text-blue-500">SDC</span> — Sheddy De Coder
          </NavLink>
        </motion.h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-blue-500" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
              {/* Animated underline */}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu (hamburger icon placeholder) */}
        <div className="md:hidden text-gray-300 text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

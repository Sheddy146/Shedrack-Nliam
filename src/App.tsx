import { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop"; // ✅ Added this

// Pages
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  return (
    <StrictMode>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col overflow-x-hidden">
        {/* Navbar (Always visible) */}
        <Navbar />

        {/* ✅ Automatically scrolls to top on route change */}
        <ScrollToTop />

        {/* Main content area */}
        <main className="grow mt-20">
          <Routes>
            {/* Main landing page */}
            <Route path="/" element={<Home />} />

            {/* Standalone pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer (Always visible) */}
        <Footer />
      </div>
    </StrictMode>
  );
};

export default App;

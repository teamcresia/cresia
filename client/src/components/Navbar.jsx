import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ onViewChange, currentView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (currentView !== "home") {
      onViewChange("home");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || currentView === "pro-bono"
          ? "bg-neutral-950/80 backdrop-blur-md py-4 border-b border-neutral-800"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => onViewChange("home")}
          className="text-2xl font-bold tracking-tighter text-white z-50 focus:outline-none font-serif"
        >
          CRESIA<span className="text-amber-600">.</span>
        </button>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] font-sans"
            >
              {link.name}
            </button>
          ))}
          <motion.button
            onClick={() => handleNavClick("#contact")}
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest transition-colors font-sans"
          >
            Start Building
          </motion.button>
        </div>

        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-neutral-950 flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl text-neutral-300 hover:text-white font-light tracking-widest uppercase font-sans"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-lg font-bold text-amber-500 uppercase tracking-widest mt-8 border-b-2 border-amber-500 pb-1 font-sans"
            >
              Start Building
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

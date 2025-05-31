import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo animado suavemente */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={logo} alt="Foodream Logo" className="w-10 h-10 md:w-12 md:h-12" />
          <span className="text-xl md:text-2xl font-bold text-white">Foodream</span>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#specials" className="hover:underline">Specials</a>
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#location" className="hover:underline">Location</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#founders" className="hover:underline">Team Members</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile nav animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden px-4 pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#home" className="block py-2">Home</a>
            <a href="#specials" className="block py-2">Specials</a>
            <a href="#menu" className="block py-2">Menu</a>
            <a href="#location" className="block py-2">Location</a>
            <a href="#about" className="block py-2">About</a>
            <a href="#founders" className="block py-2">Team Members</a>
            <a href="#contact" className="block py-2">Contact</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

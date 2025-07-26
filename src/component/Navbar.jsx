import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Flame aura effects */}
        <div className="absolute left-6 md:left-10 top-2 w-20 h-20 md:w-24 md:h-24 bg-indigo-500 opacity-30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute right-6 md:right-10 bottom-0 w-12 h-12 md:w-16 md:h-16 bg-pink-500 opacity-30 rounded-full blur-2xl animate-ping" />

        {/* Logo */}
        <motion.h1
          className="text-lg md:text-xl lg:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg z-10"
          whileHover={{ scale: 1.1 }}
        >
          Protofolio
        </motion.h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-4 md:space-x-6 text-white font-medium z-10">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group cursor-pointer"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-all duration-200"
              >
                {item}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300 rounded-full blur-sm"></span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

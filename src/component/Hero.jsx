import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import bg from "../assets/bg.jpg"; // Make sure your image is in the correct path

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center mt-15 mb-5">
      {/* Background Image - full shown */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Glowing Flame Effects (Aura) */}
      <div className="absolute top-20 left-1/4 w-52 h-52 bg-indigo-500 opacity-50 rounded-full blur-3xl animate-ping" />
      <div className="absolute bottom-20 right-1/4 w-44 h-44 bg-purple-500 opacity-40 rounded-full blur-2xl animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm Hardeep
        </motion.h1>

        <motion.h3
          className="mt-3 text-lg md:text-2xl text-purple-300 font-semibold animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Shadow Monarch | React Developer | Anime Lover
        </motion.h3>

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I create stylish and responsive interfaces inspired by anime energy and smooth transitions.
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          See My Projects
        </motion.a>

        {/* Social Icons */}
        <motion.div
          className="mt-10 flex justify-center gap-10 text-5xl" // increased icon size
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-transform hover:scale-125"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

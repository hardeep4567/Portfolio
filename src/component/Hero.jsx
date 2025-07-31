import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import bg from "../assets/bg.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - face visible */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-top mt-10 mb-10"
      />

      {/* Flame Effects */}
      <div className="absolute top-[10%] left-[20%] w-44 h-44 lg:w-60 lg:h-60 bg-indigo-500 opacity-50 rounded-full blur-3xl animate-ping" />
      <div className="absolute bottom-[10%] right-[20%] w-40 h-40 lg:w-56 lg:h-56 bg-purple-500 opacity-40 rounded-full blur-2xl animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 lg:px-0 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm Hardeep
        </motion.h1>

        <motion.h3
          className="mt-3 text-lg md:text-2xl lg:text-3xl  font-semibold animate-pulse drop-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
           Mern Stack Developer 
        </motion.h3>

        <motion.p
          className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I create stylish, responsive, and animated web interfaces — inspired by anime energy, flame effects, and smooth UX.
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-base md:text-lg font-semibold rounded-full shadow-xl hover:scale-105 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          See My Projects
        </motion.a>

        {/* Social Icons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-8 text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://github.com/hardeep4567"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 hover:scale-125 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/hardeep-singh-3762ab2ba"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-125 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 hover:scale-125 transition-transform"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 hover:scale-125 transition-transform"
          >
            <FaWhatsapp />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

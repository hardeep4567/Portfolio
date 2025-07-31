import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="w-full py-16 px-6 bg-[#0f0f0f] text-white flex flex-col items-center justify-center text-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Resume
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-300 mb-8 text-base sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Download my resume to explore my skills, education, work experience,
        and projects. I'm passionate about web development, especially using
        React, TailwindCSS, and Node.js!
      </motion.p>

      <motion.a
        href="/resume.pdf"  // ✅ Correct path if file is in public/
        download="resume.pdf"
        className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:scale-105 hover:opacity-90 transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
}

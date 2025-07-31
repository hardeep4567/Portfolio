import React from "react";
import background from "../assets/bg2.jpg";
import { motion } from "framer-motion";

// Variants for container (to stagger children)
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

// Variant for each word
const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Helper to split text into words and wrap in motion.span
const AnimatedText = ({ text }) => {
  return (
    <motion.div
      className="text-lg leading-relaxed text-gray-300 flex flex-wrap justify-center"
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariant}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function About() {
  const paragraph = `
    I'm a passionate MERN Stack Developer with strong experience in building full-stack applications using MongoDB, Express.js, React.js, and Node.js.
    I love creating modern, fast, and responsive user interfaces with TailwindCSS, integrating backend APIs, and managing complex app states with Redux.
    I'm also well-versed in implementing secure authentication using JWT, working with RESTful APIs, and deploying projects on platforms like Vercel or Render.
    Inspired by the aesthetics and determination of Solo Leveling, I always aim to level up my coding skills and deliver impactful digital experiences that stand out — just like Sung Jin-Woo rising from the shadows.
  `;

  return (
    <section
      id="about"
      className="py-32 px-6 text-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-white max-w-4xl mx-auto">
        <motion.h3
          className="text-4xl font-extrabold mb-6 tracking-widest uppercase text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h3>

        <AnimatedText text={paragraph} />
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio", desc: "Personal website built with React & Tailwind", url: "#" },
  { title: "Node with Sequelize", desc: "Built using Node.js, SQL, Sequelize, Express.js", url: "https://github.com/hardeep4567/industry-code" },
  { title: "Node with MongoDB", desc: "Built using Node.js, MongoDB, Mongoose, Express.js", url: "https://github.com/hardeep4567/NodeWithMongoDB" },
  { title: "Basic Server in Node", desc: "Built using Node.js, MongoDB, Mongoose, Express.js", url: "https://github.com/hardeep4567/nodeServerWithMongoosee" },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white relative z-10">
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h3>

      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            className="backdrop-blur-md bg-white/5 border border-purple-500/30 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          >
            <h4 className="text-2xl font-bold text-purple-400">{p.title}</h4>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <a
              href={p.url}
              className="inline-block mt-4 text-purple-400 hover:text-purple-300 underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

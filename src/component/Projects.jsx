import React from "react";

const projects = [
  { title: "Portfolio", desc: "Personal website built with React & Tailwind", url: "#" },
  { title: "Node with sequialize", desc: "Built using node.js,SQL,sequialize,express.js", url: "https://github.com/hardeep4567/industry-code" },
   { title: "Node with mongodb", desc: "Built using node.js,mongodb,mongoose,express.js,", url: "https://github.com/hardeep4567/NodeWithMongoDB" },
   { title: "Basic Server in Node", desc: "Built using node.js,mongodb,mongoose,express.js,", url: "https://github.com/hardeep4567/nodeServerWithMongoosee" },


];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white relative z-10">
      <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]">
        Projects
      </h3>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="backdrop-blur-md bg-white/5 border border-purple-500/30 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          >
            <h4 className="text-2xl font-bold text-purple-400">{p.title}</h4>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <a
              href={p.url}
              className="inline-block mt-4 text-purple-400 hover:text-purple-300 underline underline-offset-4"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

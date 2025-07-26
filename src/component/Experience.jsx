import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto text-white">
      <h3 className="text-4xl font-extrabold text-center mb-10 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
        Experience
      </h3>

      <div className="space-y-12">
        {/* Current Role */}
        <div className="bg-gradient-to-r from-purple-800/40 to-transparent p-6 rounded-lg border border-purple-700/40 shadow-lg">
          <h4 className="text-2xl font-bold text-purple-300">
            Full Stack Developer – Apptechies
          </h4>
          <p className="text-sm text-gray-400 mb-2">Jan 2025 – Present</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>
              Focused on building dynamic and user-friendly UIs using React.js and TailwindCSS.
            </li>
            <li>
              Developed robust RESTful APIs using Node.js and Express for scalable backends.
            </li>
            <li>
              Worked on both MongoDB and SQL databases, ensuring clean data handling and schema design.
            </li>
            <li>
              Followed modern UI/UX principles and implemented reusable components.
            </li>
            <li>
              Practiced agile development and deployed full-stack applications on cloud platforms.
            </li>
          </ul>
        </div>

        {/* Internship */}
        <div className="bg-gradient-to-r from-gray-800/40 to-transparent p-6 rounded-lg border border-gray-600/40 shadow-md">
          <h4 className="text-2xl font-bold text-purple-200">
            MERN Stack Intern
          </h4>
          <p className="text-sm text-gray-400 mb-2">2023 – 2024</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>
              Improved UI/UX using HTML, CSS, JavaScript, and React.js.
            </li>
            <li>
              Used React Router, Hooks, and functional components for dynamic app flows.
            </li>
            <li>
              Integrated Redux and Context API for smooth state management.
            </li>
            <li>
              Built and optimized APIs with Node.js and Express, using MongoDB and Mongoose.
            </li>
            <li>
              Applied MongoDB Aggregation Pipeline for efficient data operations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

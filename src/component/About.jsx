import React from "react";
import background from "../assets/bg2.jpg"; // Ensure this path is correct

export default function About() {
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

      <div className="relative z-10 animate__animated animate__fadeInUp text-white max-w-3xl mx-auto">
        <h3 className="text-4xl font-extrabold mb-6 tracking-widest uppercase text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          About Me
        </h3>

        <p className="text-lg leading-relaxed text-gray-300">
          I'm a passionate <span className="text-purple-300 font-semibold">MERN Stack Developer</span> with strong experience in building full-stack applications using MongoDB, Express.js, React.js, and Node.js.
          <br /><br />
          I love creating modern, fast, and responsive user interfaces with <span className="text-purple-300 font-semibold">TailwindCSS</span>, integrating backend APIs, and managing complex app states with tools like <span className="text-purple-300 font-semibold">Redux</span>. 
          I'm also well-versed in implementing secure authentication using <span className="text-purple-300 font-semibold">JWT</span>, working with RESTful APIs, and deploying projects on platforms like Vercel or Render.
          <br /><br />
          Inspired by the aesthetics and determination of *Solo Leveling*, I always aim to level up my coding skills, face challenges head-on, and deliver impactful digital experiences that stand out — just like Sung Jin-Woo rising from the shadows.
        </p>
      </div>
    </section>
  );
}

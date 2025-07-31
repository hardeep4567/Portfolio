import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center relative z-10 border-t border-purple-800/30">
      <h4 className="text-xl font-semibold drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
        Connect with Me
      </h4>

      <div className="flex justify-center gap-6 mt-4 text-purple-400 text-xl">
        <a
          href="https://github.com/hardeep4567"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hardeep-singh-3762ab2ba/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="singh123hardeep546l@gmail.com"
          className="hover:text-white transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}

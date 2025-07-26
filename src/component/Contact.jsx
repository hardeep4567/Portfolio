import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white relative z-10">
      <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]">
        Contact Me
      </h3>

      <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2 text-sm sm:text-base">
        {/* Email */}
        <div className="flex items-center gap-4 p-4 rounded-lg border border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
          <FaEnvelope className="text-purple-400 text-xl" />
          <a href="mailto:youremail@example.com" className="hover:underline text-gray-300">
            youremail@example.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 p-4 rounded-lg border border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
          <FaPhoneAlt className="text-purple-400 text-xl" />
          <a href="tel:+911234567890" className="hover:underline text-gray-300">
            +91 12345 67890
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4 p-4 rounded-lg border border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
          <FaGithub className="text-purple-400 text-xl" />
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-gray-300"
          >
            github.com/yourusername
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 p-4 rounded-lg border border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
          <FaLinkedin className="text-purple-400 text-xl" />
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-gray-300"
          >
            linkedin.com/in/yourusername
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 p-4 rounded-lg border border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition md:col-span-2">
          <FaMapMarkerAlt className="text-purple-400 text-xl" />
          <p className="text-gray-300">New Delhi, India</p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";
import profilePic from "../../../public/profile.jpg";
import { TiltCard } from "@/components/shared/TiltCard";

const roles = [
  "Chief Librarian",
  "Research Support Specialist",
  "Bibliometrics Expert",
  "Digital Library Manager",
  "Information Literacy Educator",
];

function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="font-poppins font-semibold text-xl md:text-2xl gradient-text">
      {displayed}
      <span className="cursor-blink text-primary-500">|</span>
    </span>
  );
}



export function Hero() {
  const scrollToNext = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 dark:opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E3A8A" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid)" />
          </svg>
        </div>
        {/* Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text */}
          <div className="py-16 lg:py-0">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Research Collaboration
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 dark:text-white mb-3 leading-tight"
            >
              Mr. Rajashekara
              <br />
              <span className="gradient-text">S N</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4 h-8 flex items-center"
            >
              <TypingEffect />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl"
            >
              Library &amp; Information Science Professional with{" "}
              <strong className="text-primary-700 dark:text-primary-300">9+ years</strong> of experience.
    
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="rajashekara_Resumne.pdf"
                download
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-900 to-secondary text-white font-semibold font-inter shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Download size={18} />
                Download CV
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-primary-700 dark:border-primary-500 text-primary-700 dark:text-primary-400 font-semibold font-inter hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">Connect:</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors text-sm font-medium"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
              >
                <Mail size={16} />
                Email
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex gap-8 border-t border-gray-200 dark:border-gray-800 pt-8"
            >
              {[
                { value: "9+", label: "Years Exp." },
                { value: "5+", label: "Publications" },
                { value: "1000+", label: "Students" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold font-poppins gradient-text">{stat.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-inter">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-primary-200/40 dark:border-primary-700/20 animate-spin" style={{ animationDuration: "20s" }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-glow-accent" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full border border-primary-200/30 dark:border-primary-700/10" />
            </div>

            {/* Profile image container */}
            <div className="relative z-10 float-animation" style={{ transformStyle: "preserve-3d" }}>
              {/* Glow bg */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary blur-2xl opacity-30 dark:opacity-20 scale-90" />

              {/* Image frame */}
              <TiltCard className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden" maxRotate={15}>
                <div 
                  className="relative w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/30 flex items-center justify-center"
                  style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={profilePic}
                    alt="Mr. Rajashekara S N - Chief Librarian"
                    fill
                    className="object-cover object-top scale-105"
                    priority
                  />
                </div>
              </TiltCard>

              {/* Floating info card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 md:-right-8 top-6 glass rounded-2xl p-3 md:p-4 shadow-xl border border-white/30 dark:border-white/10"
                style={{ transform: "translateZ(45px)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-lg">
                    🏆
                  </div>
                  <div>
                    <p className="text-xs font-bold font-poppins text-gray-900 dark:text-white">Best Paper</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">ICLIS-2024</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -left-4 md:-left-10 bottom-10 glass rounded-2xl p-3 md:p-4 shadow-xl border border-white/30 dark:border-white/10"
                style={{ transform: "translateZ(45px)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-500/10 flex items-center justify-center text-lg">
                    📚
                  </div>
                  <div>
                    <p className="text-xs font-bold font-poppins text-gray-900 dark:text-white">MSc LIS</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Tumkur University</p>
                  </div>
                </div>
              </motion.div>

              {/* Institution badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-6 left-1/2 z-20 glass rounded-2xl px-5 py-3 shadow-xl border border-white/30 dark:border-white/10 text-center min-w-56"
                style={{ z: 45 }}
              >
                <p className="text-xs font-semibold font-poppins text-primary-700 dark:text-primary-300 whitespace-nowrap">
                  Jyothy Institute of Commerce
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">&amp; Management, Bengaluru</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
        >
          <span className="text-xs font-inter tracking-wider uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

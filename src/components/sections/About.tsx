"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { personalInfo } from "@/data/portfolio";


const highlights = [
  { icon: "🎓", label: "Master of Science in Library & Information Science" },
  { icon: "📅", label: "8+ Years Professional Experience" },
  { icon: "🔬", label: "Research Support Specialist" },
  { icon: "💻", label: "Digital Library Management" },
  { icon: "📊", label: "Scientometrics & Bibliometrics Research" },
];

export function About() {
  return (
    <section id="about" className="section bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Who I Am"
          title="About"
          highlight="Me"
          description="Passionate about connecting people with knowledge."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image with decorations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <Image
                src="/profile.jpg"
                alt="Mr. Rajashekara S N"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold font-poppins text-lg">Mr. Rajashekara S N</p>
                <p className="text-primary-200 text-sm">Chief Librarian · Jyothy Institute</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary/20 -z-10 rotate-12" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-accent/20 to-orange-300/20 -z-10 -rotate-6" />

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 glass rounded-2xl p-4 shadow-xl border border-white/30 dark:border-white/10 text-center"
            >
              <p className="text-4xl font-black font-poppins gradient-text">8+</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 font-inter leading-tight">Years of<br/>Experience</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
                  Library & Information Science Professional
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-700/50 transition-all group"
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-snug">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex-1 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/30">
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-1 font-inter">Institution</p>
                  <p className="text-sm font-semibold font-poppins text-gray-900 dark:text-white">Jyothy Institute of Commerce & Management</p>
                </div>
                <div className="flex-1 p-4 rounded-xl bg-accent/10 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30">
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1 font-inter">Contact</p>
                  <p className="text-sm font-semibold font-poppins text-gray-900 dark:text-white break-all">{personalInfo.email}</p>
                </div>
              </div>

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-900 to-secondary text-white font-semibold font-inter shadow-lg hover:shadow-glow transition-all"
              >
                Let&apos;s Connect
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { certificationCategories } from "@/data/portfolio";
import { X, ZoomIn, Award } from "lucide-react";

// Placeholder certification cards with emoji icons since no real images are available
const certifications = [
  { id: 1, title: "ICLIS 2024 – Best Paper Award", category: "Awards", year: "2024", icon: "🏆", color: "from-amber-500/20 to-yellow-500/10", issuer: "Jain University, Bengaluru" },
  { id: 2, title: "LinkedIn Learning: Communication Skills", category: "Certifications", year: "2023", icon: "💬", color: "from-blue-500/20 to-blue-600/10", issuer: "LinkedIn Learning" },
  { id: 3, title: "LinkedIn Learning: Leadership Development", category: "Certifications", year: "2023", icon: "🚀", color: "from-purple-500/20 to-purple-600/10", issuer: "LinkedIn Learning" },
  { id: 4, title: "LinkedIn Learning: Digital Tools", category: "Certifications", year: "2023", icon: "💻", color: "from-emerald-500/20 to-emerald-600/10", issuer: "LinkedIn Learning" },
  { id: 5, title: "LinkedIn Learning: Academic Support Systems", category: "Certifications", year: "2024", icon: "🎓", color: "from-cyan-500/20 to-cyan-600/10", issuer: "LinkedIn Learning" },
  { id: 6, title: "Training: Library Automation & ILMS", category: "Workshops", year: "2022", icon: "⚙️", color: "from-rose-500/20 to-rose-600/10", issuer: "Professional Development" },
  { id: 7, title: "Training: Digital Library Management", category: "Workshops", year: "2022", icon: "🗄️", color: "from-indigo-500/20 to-indigo-600/10", issuer: "Professional Development" },
  { id: 8, title: "Training: Advanced Research Methodology", category: "Workshops", year: "2023", icon: "📊", color: "from-teal-500/20 to-teal-600/10", issuer: "Professional Development" },
  { id: 9, title: "Training: Bibliometric & Scientometric Analysis", category: "Workshops", year: "2023", icon: "📈", color: "from-pink-500/20 to-pink-600/10", issuer: "Professional Development" },
  { id: 10, title: "Training: Academic Database Searching & Discovery", category: "Workshops", year: "2023", icon: "🔍", color: "from-orange-500/20 to-orange-600/10", issuer: "Professional Development" },
  { id: 11, title: "Training: Conducting Information Literacy Programs", category: "Workshops", year: "2024", icon: "📖", color: "from-gray-500/20 to-gray-600/10", issuer: "Professional Development" },
  { id: 12, title: "Training: Artificial Intelligence Applications in Libraries", category: "Workshops", year: "2024", icon: "🤖", color: "from-violet-500/20 to-violet-600/10", issuer: "Professional Development" },
];

type Cert = typeof certifications[0];

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Cert | null>(null);

  const filtered = activeCategory === "All"
    ? certifications
    : certifications.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="section bg-white dark:bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Credentials"
          title="Certifications"
          highlight="Gallery"
          description="A collection of professional achievements, participation records, and certifications."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {certificationCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-inter transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-900 to-secondary text-white shadow-md"
                  : "bg-white dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setSelected(cert)}
                className={`group relative p-5 rounded-2xl bg-gradient-to-br ${cert.color} border border-white/50 dark:border-gray-700/50 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${i % 3 === 0 ? "md:row-span-2" : ""}`}
              >
                {/* Hover zoom overlay */}
                <div className="absolute inset-0 bg-primary-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                  <ZoomIn size={24} className="text-white" />
                </div>

                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cert.icon}</div>
                <h4 className="text-sm font-semibold font-poppins text-gray-900 dark:text-white leading-snug mb-2">
                  {cert.title}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 font-inter">{cert.category}</span>
                  <span className="text-xs text-gray-400 font-inter">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative bg-gradient-to-br ${selected.color} border border-white/20 rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl`}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                <X size={16} />
              </button>

              <div className="text-8xl mb-6">{selected.icon}</div>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 mb-4">
                {selected.category}
              </span>
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2 leading-snug">
                {selected.title}
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-sm font-semibold font-inter mb-1">Issuer: {selected.issuer}</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs font-inter">Year: {selected.year}</p>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Award size={14} />
                <span>Mr. Rajashekara S N</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

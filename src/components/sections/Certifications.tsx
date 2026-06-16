"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { certificationCategories } from "@/data/portfolio";
import { X, ZoomIn, Award, ExternalLink } from "lucide-react";
import certJainBestPaper from "../../../public/cert_jain_best_paper_2024.png";
import certIclis2025 from "../../../public/cert_iclis_2025.png";
import certJain2024 from "../../../public/cert_jain_2024.png";
import certKhsla2025 from "../../../public/cert_khsla_2025.png";
import certIsi2017 from "../../../public/cert_isi_2017.png";
import certKle2023 from "../../../public/cert_kle_2023.png";
import certPoetry2025 from "../../../public/cert_poetry_2025.png";
import certIprAppreciation from "../../../public/cert_ipr_appreciation_2025.png";
import certIimb2025 from "../../../public/cert_iimb_2025.png";
import certLibguide2024 from "../../../public/cert_libguide_2024.png";

// Placeholder certification cards with emoji icons since no real images are available
const certifications = [
  { 
    id: 1, 
    title: "ICLIS 2024 – Best Paper Award", 
    category: "Awards", 
    year: "2024", 
    icon: "🏆", 
    color: "from-amber-500/20 to-yellow-500/10", 
    issuer: "Jain University & Karnataka State Library Association (KALA)", 
    image: certJainBestPaper 
  },
  { 
    id: 2, 
    title: "ICLIS 2025 – Paper Presentation", 
    category: "Workshops", 
    year: "2025", 
    icon: "📜", 
    color: "from-blue-500/20 to-blue-600/10", 
    issuer: "Sri Lanka Library Association & University of Peradeniya", 
    image: certIclis2025 
  },
  { 
    id: 3, 
    title: "Jain University 2024 – Paper Presentation", 
    category: "Workshops", 
    year: "2024", 
    icon: "📝", 
    color: "from-purple-500/20 to-purple-600/10", 
    issuer: "Jain University & KALA", 
    image: certJain2024 
  },
  { 
    id: 4, 
    title: "KHSLA 2025 – Paper Presentation", 
    category: "Workshops", 
    year: "2025", 
    icon: "📊", 
    color: "from-teal-500/20 to-teal-600/10", 
    issuer: "Karnataka Health Sciences Library Association", 
    image: certKhsla2025 
  },
  { 
    id: 5, 
    title: "ISI 2017 – Paper Presentation", 
    category: "Workshops", 
    year: "2017", 
    icon: "📚", 
    color: "from-rose-500/20 to-rose-600/10", 
    issuer: "Indian Statistical Institute, DRTC, Bangalore", 
    image: certIsi2017 
  },
  { 
    id: 6, 
    title: "KLE Society 2023 – NEP Syllabus Orientation", 
    category: "Workshops", 
    year: "2023", 
    icon: "🏫", 
    color: "from-orange-500/20 to-orange-600/10", 
    issuer: "KLE Society's Degree College & Bangalore University", 
    image: certKle2023 
  },
  { 
    id: 7, 
    title: "World Poetry Day 2025 – Contemporary Discourses", 
    category: "Workshops", 
    year: "2025", 
    icon: "✍️", 
    color: "from-gray-500/20 to-gray-600/10", 
    issuer: "Jyothy Institute of Commerce and Management", 
    image: certPoetry2025 
  },
  { 
    id: 8, 
    title: "IPR Workshop 2025 – Organizing Committee Member", 
    category: "Workshops", 
    year: "2025", 
    icon: "⚖️", 
    color: "from-pink-500/20 to-pink-600/10", 
    issuer: "Jyothy Institute of Commerce and Management & WEGROW", 
    image: certIprAppreciation 
  },
  { 
    id: 9, 
    title: "IIM Bangalore 2025 – Centre for Public Policy Lecture", 
    category: "Workshops", 
    year: "2025", 
    icon: "🏛️", 
    color: "from-indigo-500/20 to-indigo-600/10", 
    issuer: "Indian Institute of Management Bangalore", 
    image: certIimb2025 
  },
  { 
    id: 10, 
    title: "Librarian Guide 2024 – Redefining Libraries with Digital Tools", 
    category: "Workshops", 
    year: "2024", 
    icon: "🛠️", 
    color: "from-cyan-500/20 to-cyan-600/10", 
    issuer: "Librarian Guide", 
    image: certLibguide2024 
  },
  { 
    id: 11, 
    title: "LinkedIn Learning: Communication Skills", 
    category: "Certifications", 
    year: "2023", 
    icon: "💬", 
    color: "from-emerald-500/20 to-emerald-600/10", 
    issuer: "LinkedIn Learning" 
  },
  { 
    id: 12, 
    title: "LinkedIn Learning: Leadership Development", 
    category: "Certifications", 
    year: "2023", 
    icon: "🚀", 
    color: "from-cyan-500/20 to-cyan-600/10", 
    issuer: "LinkedIn Learning" 
  },
  { 
    id: 13, 
    title: "LinkedIn Learning: Digital Tools", 
    category: "Certifications", 
    year: "2023", 
    icon: "💻", 
    color: "from-indigo-500/20 to-indigo-600/10", 
    issuer: "LinkedIn Learning" 
  },
  { 
    id: 14, 
    title: "LinkedIn Learning: Academic Support Systems", 
    category: "Certifications", 
    year: "2024", 
    icon: "🎓", 
    color: "from-violet-500/20 to-violet-600/10", 
    issuer: "LinkedIn Learning" 
  },
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

                {cert.image ? (
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 dark:border-gray-700/30 mb-3 shadow-inner bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image.src}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cert.icon}</div>
                )}
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
              className={`relative bg-gradient-to-br ${selected.color} border border-white/20 rounded-3xl p-6 md:p-8 ${selected.image ? "max-w-2xl" : "max-w-sm"} w-full text-center shadow-2xl`}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                <X size={16} />
              </button>

              {selected.image ? (
                <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden border border-white/10 dark:border-gray-800/20 shadow-md bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selected.image.src}
                    alt={selected.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="text-8xl mb-6">{selected.icon}</div>
              )}
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 mb-4">
                {selected.category}
              </span>
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2 leading-snug">
                {selected.title}
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-sm font-semibold font-inter mb-1">Issuer: {selected.issuer}</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs font-inter">Year: {selected.year}</p>

              <a
                href="https://www.linkedin.com/in/rajashekarasn/recent-activity/images/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold font-inter rounded-xl bg-gradient-to-r from-primary-900 to-secondary text-white hover:opacity-90 transition-opacity"
              >
                <span>Verify on LinkedIn</span>
                <ExternalLink size={12} />
              </a>

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

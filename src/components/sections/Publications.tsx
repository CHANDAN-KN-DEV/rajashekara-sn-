"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { publications } from "@/data/portfolio";
import { FileText, ExternalLink, Calendar, Tag } from "lucide-react";

const typeColors: Record<string, string> = {
  "Journal Article": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Conference Paper": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Book Chapter": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export function Publications() {
  const years = ["All", ...Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => parseInt(b) - parseInt(a))];
  const [activeYear, setActiveYear] = useState("All");

  const filtered = activeYear === "All" ? publications : publications.filter((p) => p.year === activeYear);

  return (
    <section id="publications" className="section bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Scholarly Work"
          title="Research"
          highlight="Publications"
          description="Contributions to Library & Information Science literature."
        />

        {/* Year filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {years.map((year) => (
            <motion.button
              key={year}
              onClick={() => setActiveYear(year)}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-inter transition-all duration-200 ${
                activeYear === year
                  ? "bg-gradient-to-r from-primary-900 to-secondary text-white shadow-md shadow-primary-500/25"
                  : "bg-white dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
              }`}
            >
              {year}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filtered.map((pub, i) => (
              <motion.article
                key={pub.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-card hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-700/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary-200 group-hover:to-primary-300 dark:group-hover:from-primary-800/40 transition-all">
                    <FileText size={22} className="text-primary-700 dark:text-primary-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${typeColors[pub.type] || "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"}`}>
                        {pub.type}
                      </span>
                      <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <Calendar size={10} />
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold font-poppins text-gray-900 dark:text-white leading-snug group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      {pub.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {pub.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 font-medium">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  {pub.doi ? (
                    <p className="text-xs text-gray-400 font-inter">DOI: {pub.doi}</p>
                  ) : (
                    <p className="text-xs text-gray-400 font-inter italic">
                      {pub.type === "Book Chapter" ? "ISBN available on request" : "DOI available on request"}
                    </p>
                  )}
                  <button className="flex items-center gap-1.5 text-xs font-semibold font-inter text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-200 transition-colors group/btn">
                    View Publication
                    <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

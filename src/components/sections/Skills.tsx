"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { skills } from "@/data/portfolio";

const categories = ["All", "Core", "Research", "Digital"];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  const getColor = (percent: number) => {
    if (percent >= 90) return "from-emerald-500 to-green-400";
    if (percent >= 80) return "from-blue-600 to-secondary";
    return "from-primary-700 to-primary-500";
  };

  return (
    <section id="skills" className="section bg-[var(--surface)]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Expertise"
          title="My"
          highlight="Skills"
          description="Technical and professional competencies built over 8+ years in academic libraries."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-inter transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-900 to-secondary text-white shadow-md"
                  : "bg-white dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-card hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-700 dark:text-primary-300">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-semibold font-poppins text-gray-900 dark:text-white text-sm">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold font-poppins gradient-text">{skill.percent}%</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                    skill.category === "Core" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                    skill.category === "Research" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" :
                    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                  }`}>
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={animated ? { width: `${skill.percent}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.07, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${getColor(skill.percent)}`}
                />
              </div>

              {/* Level label */}
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 font-inter text-right">
                {skill.percent >= 90 ? "Expert" : skill.percent >= 80 ? "Advanced" : "Proficient"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tools marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <p className="text-center text-sm font-semibold font-inter text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-6">
            Tools & Platforms
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Koha LMS", "DSpace", "OPAC", "INFLIBNET", "NDLI", "DELNET", "Web of Science", "Scopus", "ResearchRabbit", "Mendeley", "Zotero", "MS Office"].map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full text-sm font-medium font-inter bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors cursor-default shadow-sm">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

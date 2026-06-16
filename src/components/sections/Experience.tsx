"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { experience } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar, Check } from "lucide-react";

export function Experience() {
  const [activeId, setActiveId] = useState(1);
  const active = experience.find((e) => e.id === activeId)!;

  return (
    <section id="experience" className="section bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Work History"
          title="Professional"
          highlight="Experience"
          description="A journey of growth, innovation, and dedication in academic libraries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Job List */}
          <div className="lg:col-span-1 space-y-3">
            {experience.map((exp, i) => (
              <motion.button
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveId(exp.id)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 group ${
                  activeId === exp.id
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-lg shadow-primary-500/10"
                    : "border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 hover:border-primary-200 dark:hover:border-primary-700/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                    activeId === exp.id
                      ? "bg-gradient-to-br from-primary-700 to-secondary"
                      : "bg-gray-100 dark:bg-gray-700 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30"
                  }`}>
                    <Briefcase size={18} className={activeId === exp.id ? "text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-primary-600"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className={`font-semibold font-poppins text-sm leading-snug ${
                        activeId === exp.id ? "text-primary-700 dark:text-primary-300" : "text-gray-900 dark:text-white"
                      }`}>
                        {exp.role}
                      </p>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex-shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">{exp.institution}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{exp.duration}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Detail Panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-card dark:shadow-card-dark h-full"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white">
                        {active.role}
                      </h3>
                      {active.current && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                        <Briefcase size={14} className="text-primary-500" />
                        <span className="font-medium">{active.institution}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin size={14} className="text-accent" />
                        <span>{active.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={14} className="text-secondary" />
                        <span>{active.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gray-100 dark:bg-gray-700 mb-6" />

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold font-poppins uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {active.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-primary-700 dark:text-primary-400" />
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{resp}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative gradient bar */}
                <div className="mt-8 h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full origin-left rounded-full bg-gradient-to-r from-primary-700 via-secondary to-primary-400"
                    style={{ width: active.current ? "100%" : active.id === 2 ? "65%" : "40%" }}
                  />
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 font-inter">
                  {active.current ? "Currently active role" : `Served ${active.duration}`}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

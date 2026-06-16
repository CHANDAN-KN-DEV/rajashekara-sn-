"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { education } from "@/data/portfolio";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section bg-white dark:bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Academic Background"
          title="My"
          highlight="Education"
          description="The academic foundation that drives my professional excellence."
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="relative w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary-900 to-secondary flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  {i < education.length - 1 && (
                    <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-primary-500 to-transparent" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 mb-10">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-primary-50/50 dark:from-gray-800/80 dark:to-gray-900/50 border border-primary-100 dark:border-gray-700/50 shadow-card dark:shadow-card-dark hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-700/50 transition-all group">
                    {/* Type badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold font-inter rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 mb-4">
                      {edu.type}
                    </span>

                    <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      {edu.degree}
                    </h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin size={14} className="text-primary-500" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={14} className="text-accent" />
                        <span>Completed {edu.year}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Decorative accent */}
                    <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary-600 to-secondary group-hover:w-24 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

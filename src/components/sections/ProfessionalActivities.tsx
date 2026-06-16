"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { professionalActivities } from "@/data/portfolio";

export function ProfessionalActivities() {
  return (
    <section id="activities" className="section bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Community Impact"
          title="Professional"
          highlight="Activities"
          description="Going beyond the desk — actively shaping the academic library ecosystem."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {professionalActivities.map((act, i) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group p-7 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-card hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-700/40 transition-all duration-300 flex gap-5"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200/50 dark:from-primary-900/40 dark:to-primary-800/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {act.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  {act.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {act.description}
                </p>

                {/* Animated underline */}
                <div className="mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

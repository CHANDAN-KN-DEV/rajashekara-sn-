"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { researchInterests } from "@/data/portfolio";

const colors = [
  "from-blue-500/10 to-blue-600/5 border-blue-200 dark:border-blue-800/50",
  "from-purple-500/10 to-purple-600/5 border-purple-200 dark:border-purple-800/50",
  "from-emerald-500/10 to-emerald-600/5 border-emerald-200 dark:border-emerald-800/50",
  "from-amber-500/10 to-amber-600/5 border-amber-200 dark:border-amber-800/50",
  "from-rose-500/10 to-rose-600/5 border-rose-200 dark:border-rose-800/50",
  "from-cyan-500/10 to-cyan-600/5 border-cyan-200 dark:border-cyan-800/50",
];

export function ResearchInterests() {
  return (
    <section id="research" className="section bg-white dark:bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Academic Focus"
          title="Research"
          highlight="Interests"
          description="Exploring the frontiers of library science through rigorous academic inquiry."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchInterests.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${colors[i % colors.length]} border shadow-sm hover:shadow-xl transition-all duration-300 cursor-default group overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { conferences } from "@/data/portfolio";
import { MapPin, Calendar, Mic } from "lucide-react";

const typeStyles: Record<string, { dot: string; badge: string }> = {
  International: { dot: "bg-blue-500", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  National: { dot: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  Professional: { dot: "bg-purple-500", badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  Workshop: { dot: "bg-amber-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
};

export function Conferences() {
  return (
    <section id="conferences" className="section bg-white dark:bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Global Reach"
          title="Conferences &"
          highlight="Presentations"
          description="Active participation and presentations at national and international forums."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-secondary to-accent" />

          <div className="space-y-8">
            {conferences.map((conf, i) => {
              const style = typeStyles[conf.type] || typeStyles.Professional;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={conf.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 shadow-lg flex-shrink-0 z-10"
                    style={{ backgroundColor: style.dot.replace("bg-", "").includes("-") ? undefined : undefined }}
                  >
                    <div className={`w-full h-full rounded-full ${style.dot}`} />
                  </div>

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-8 md:text-right" : "md:ml-8 md:text-left"}`}>
                    <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-card hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-700/40 transition-all group">
                      <div className={`flex items-center gap-2 flex-wrap mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${style.badge}`}>
                          {conf.type}
                        </span>
                        {conf.role === "Presenter" && (
                          <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
                            <Mic size={10} />
                            Presenter
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold font-poppins text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                        {conf.name}
                      </h3>

                      <div className={`flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} className="text-primary-400" />
                          {conf.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} className="text-accent" />
                          {conf.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Year label on opposite side */}
                  <div className={`hidden md:flex md:w-[calc(50%-2rem)] items-center ${isLeft ? "md:ml-8 justify-start" : "md:mr-8 justify-end"}`}>
                    <span className="text-2xl font-black font-poppins text-gray-100 dark:text-gray-800">
                      {conf.year}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

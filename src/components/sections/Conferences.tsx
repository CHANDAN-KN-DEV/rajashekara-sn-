"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { conferences } from "@/data/portfolio";
import { MapPin, Calendar, Mic, FileText } from "lucide-react";

const typeStyles: Record<string, { dot: string; badge: string }> = {
  International: { dot: "bg-blue-500", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  National: { dot: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  Professional: { dot: "bg-purple-500", badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  Workshop: { dot: "bg-amber-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
};

const typeShadows: Record<string, string> = {
  International: "hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:border-blue-500/40 dark:hover:border-blue-400/30",
  National: "hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5 hover:border-emerald-500/40 dark:hover:border-emerald-400/30",
  Professional: "hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 hover:border-purple-500/40 dark:hover:border-purple-400/30",
  Workshop: "hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5 hover:border-amber-500/40 dark:hover:border-amber-400/30",
};

interface ConferenceItem {
  id: number;
  name: string;
  location: string;
  year: string;
  type: string;
  role: string;
  presentedPaper?: string;
  presentedPapers?: string[];
}

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
              const confTyped = conf as unknown as ConferenceItem;
              const style = typeStyles[confTyped.type] || typeStyles.Professional;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={confTyped.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 shadow-lg flex-shrink-0 z-10 bg-white dark:bg-gray-955 flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${style.dot} relative`}>
                      <span className={`absolute -inset-1 rounded-full animate-ping opacity-45 ${style.dot}`} style={{ animationDuration: "3s" }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-8 md:text-right" : "md:ml-8 md:text-left"}`}>
                    <div className={`p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-card hover:-translate-y-1 hover:shadow-xl ${typeShadows[confTyped.type] || typeShadows.Professional} transition-all duration-300 group`}>
                      <div className={`flex items-center gap-2 flex-wrap mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${style.badge}`}>
                          {confTyped.type}
                        </span>
                        {confTyped.role === "Presenter" && (
                          <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
                            <Mic size={10} />
                            Presenter
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold font-poppins text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                        {confTyped.name}
                      </h3>

                      <div className={`flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} className="text-primary-400" />
                          {confTyped.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} className="text-accent" />
                          {confTyped.year}
                        </span>
                      </div>

                      {/* Presented Papers */}
                      {confTyped.role === "Presenter" && (confTyped.presentedPaper || confTyped.presentedPapers) && (
                        <div className={`mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/50 flex flex-col gap-2 ${isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            <FileText size={11} className="text-rose-500" />
                            Presented Research
                          </p>
                          {confTyped.presentedPaper && (
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-medium font-inter leading-relaxed max-w-md italic">
                              &ldquo;{confTyped.presentedPaper}&rdquo;
                            </p>
                          )}
                          {confTyped.presentedPapers && confTyped.presentedPapers.map((paper, idx) => (
                            <p key={idx} className="text-xs text-gray-700 dark:text-gray-300 font-medium font-inter leading-relaxed max-w-md italic">
                              &ldquo;{paper}&rdquo;
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Year label on opposite side */}
                  <div className={`hidden md:flex md:w-[calc(50%-2rem)] items-center ${isLeft ? "md:ml-8 justify-start" : "md:mr-8 justify-end"}`}>
                    <span className="text-2xl font-black font-poppins text-gray-100 dark:text-gray-800">
                      {confTyped.year}
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

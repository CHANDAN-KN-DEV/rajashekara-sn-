"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { awards } from "@/data/portfolio";

export function Awards() {
  return (
    <section id="awards" className="section bg-gradient-to-br from-primary-900 via-primary-800 to-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Recognition"
          title="Awards &"
          highlight="Achievements"
          description="Honored for excellence in Library & Information Science research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {awards.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-amber-300/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                {/* Trophy icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>

                {/* Badge */}
                <div className="text-center mb-5">
                  <span className="inline-block px-4 py-1.5 text-xs font-bold font-inter rounded-full bg-accent/20 border border-accent/40 text-amber-300 uppercase tracking-wider">
                    Best Paper Award
                  </span>
                </div>

                <h3 className="text-lg font-bold font-poppins text-white text-center mb-4 leading-snug">
                  &ldquo;{award.paper}&rdquo;
                </h3>

                <div className="space-y-2 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-accent text-sm font-semibold">{award.conference}</span>
                  </div>
                  <p className="text-white/70 text-sm font-inter">{award.institution}</p>
                  <p className="text-white/50 text-xs font-inter">{award.year}</p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
              </div>
            </motion.div>
          ))}

          {/* Coming soon placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 border-dashed flex flex-col items-center justify-center min-h-64 text-center"
          >
            <div className="text-4xl mb-4 opacity-50">🌟</div>
            <p className="text-white/40 text-sm font-inter">More achievements in progress</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

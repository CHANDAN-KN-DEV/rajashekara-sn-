"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  subtitle,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-block px-4 py-1.5 text-sm font-semibold font-poppins rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4 tracking-wider uppercase"
      >
        {subtitle}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-4"
      >
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary-600 to-secondary ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}

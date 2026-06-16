"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          id="back-to-top-btn"
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-[9990] w-11 h-11 rounded-full bg-gradient-to-br from-primary-900 to-secondary text-white shadow-lg shadow-primary-900/30 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform duration-200 group"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <ChevronUp size={20} />
          </motion.span>

          {/* Tooltip */}
          <span className="absolute left-14 bg-gray-900 dark:bg-gray-700 text-white text-xs font-inter font-medium px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Back to top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User } from "lucide-react";

export function GreetingToast() {
  const [visible, setVisible] = useState(false);
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    // Determine the time-based greeting
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good afternoon");
    } else if (hour >= 17 && hour < 22) {
      setGreeting("Good evening");
    } else {
      setGreeting("Welcome");
    }

    // Show toast after 1.5s delay once loader completes
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    // Auto dismiss after 10 seconds
    const dismissTimer = setTimeout(() => {
      setVisible(false);
    }, 11500);

    return () => {
      clearTimeout(timer);
      clearTimeout(dismissTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-6 right-6 z-[9999] max-w-sm w-full bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-4 md:p-5 backdrop-blur-md"
        >
          <div className="flex gap-4 items-start">
            {/* Avatar / Icon Container */}
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary-900 to-secondary flex items-center justify-center text-white shadow-lg shadow-primary-900/20">
              <User size={20} className="animate-pulse" />
            </div>

            {/* Content */}
            <div className="flex-1 pr-2">
              <span className="text-[10px] font-bold font-inter text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-0.5">
                Greeting
              </span>
              <h4 className="text-sm font-bold font-poppins text-gray-900 dark:text-white mb-1">
                {greeting}! 👋
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-inter leading-relaxed">
                Thank you for visiting the academic portfolio of **Mr. Rajashekara S N**, Chief Librarian.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setVisible(false)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            >
              <X size={14} />
            </button>
          </div>

          {/* Quick CTA buttons */}
          <div className="mt-4 flex justify-end gap-2 border-t border-gray-100 dark:border-white/5 pt-3">
            <button
              onClick={() => setVisible(false)}
              className="px-3.5 py-1.5 text-[11px] font-bold font-inter rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              Dismiss
            </button>
            <a
              href="#about"
              onClick={() => setVisible(false)}
              className="px-3.5 py-1.5 text-[11px] font-bold font-inter rounded-lg bg-gradient-to-r from-primary-900 to-secondary text-white hover:opacity-90 transition-opacity flex items-center"
            >
              Explore Portfolio
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

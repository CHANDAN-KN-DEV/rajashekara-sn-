"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9998] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-600 via-secondary to-accent rounded-r-full shadow-glow"
        style={{ width: `${progress}%` }}
        transition={{ ease: "linear", duration: 0 }}
      />
    </div>
  );
}

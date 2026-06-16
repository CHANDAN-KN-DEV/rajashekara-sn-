"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { GreetingToast } from "@/components/shared/GreetingToast";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { Publications } from "@/components/sections/Publications";
import { Awards } from "@/components/sections/Awards";
import { Conferences } from "@/components/sections/Conferences";
import { ProfessionalActivities } from "@/components/sections/ProfessionalActivities";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Statistics } from "@/components/sections/Statistics";
import { Contact } from "@/components/sections/Contact";

function Loader() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-secondary"
    >
      {/* Animated rings */}
      <div className="relative w-24 h-24 mb-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{ scale: [1, 1.5 + i * 0.3], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
          />
        ))}
        <div className="absolute inset-0 rounded-full border-2 border-white/60 flex items-center justify-center">
          <span className="text-3xl">📚</span>
        </div>
      </div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white font-bold font-poppins text-xl mb-2"
      >
        Rajashekara S N
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-primary-200 font-inter text-sm"
      >
        Chief Librarian · Academic Portfolio
      </motion.p>

      {/* Loading bar */}
      <div className="mt-10 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <GreetingToast />
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <ResearchInterests />
            <Publications />
            <Awards />
            <Conferences />
            <ProfessionalActivities />
            <Certifications />
            <Skills />
            <Statistics />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

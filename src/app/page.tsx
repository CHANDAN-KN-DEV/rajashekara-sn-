"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { GreetingToast } from "@/components/shared/GreetingToast";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { BackToTop } from "@/components/shared/BackToTop";
import { CursorSpotlight } from "@/components/shared/CursorSpotlight";
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

function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const slides = ["/achiever_poster_1.png", "/achiever_poster_2.png"];

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  // Slideshow auto-advance every 5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-primary-950 to-gray-900 overflow-hidden font-inter select-none px-4"
    >
      {/* Dynamic Background Particle Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Main Container */}
      <div className="relative w-full max-w-[500px] flex flex-col items-center z-10">
        
        {/* Subtitle / Header info */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 tracking-wider uppercase">
            Special Announcement
          </span>
          <h2 className="text-white text-lg font-bold font-poppins mt-2">
            Teacher Achiever Recognition
          </h2>
        </motion.div>

        {/* Poster Wrapper with 3D shadow and border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black border border-white/10 group bg-gray-900"
        >
          {/* Slides */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slides[currentSlide]}
                  alt={`Teacher Achiever Poster ${currentSlide + 1}`}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Swipable Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === i ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Footer with skip option & countdown bar */}
        <div className="w-full mt-6 flex flex-col items-center gap-4">
          
          {/* Progress Timer bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 to-secondary"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 15, ease: "linear" }}
            />
          </div>

          <div className="w-full flex items-center justify-between text-xs text-gray-400 font-medium">
            <span>Automatically entering in {timeLeft}s</span>
            <button
              onClick={onComplete}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 group"
            >
              Skip to Portfolio
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <ScrollProgressBar />
      <BackToTop />
      <CursorSpotlight />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

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

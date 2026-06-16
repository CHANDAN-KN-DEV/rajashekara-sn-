"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, Tag, BookOpen, X, Info } from "lucide-react";

interface Publication {
  id: number;
  title: string;
  year: string;
  type: string;
  doi?: string;
  isbn?: string;
  description: string;
  tags: string[];
}

interface BookshelfProps {
  publications: Publication[];
}

// Map publication types to gorgeous spine gradient palettes
const spineStyles: Record<string, { bg: string; accent: string; text: string; border: string }> = {
  "Journal Article": {
    bg: "linear-gradient(to bottom, #1e3a8a, #0f172a)",
    accent: "bg-amber-400/80",
    text: "text-blue-100",
    border: "border-blue-900/50"
  },
  "Conference Paper": {
    bg: "linear-gradient(to bottom, #064e3b, #022c22)",
    accent: "bg-teal-300/80",
    text: "text-emerald-100",
    border: "border-emerald-900/50"
  },
  "Book Chapter": {
    bg: "linear-gradient(to bottom, #581c87, #3b0764)",
    accent: "bg-amber-400/80",
    text: "text-purple-100",
    border: "border-purple-900/50"
  }
};

export function Bookshelf({ publications }: BookshelfProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<Publication | null>(null);

  // Return specific width, height, and tilt to make the bookshelf look organic and natural
  const getBookPhysicals = (id: number) => {
    const configs: Record<number, { height: string; width: string; restingTilt: string }> = {
      1: { height: "h-64 sm:h-72", width: "w-11 sm:w-12", restingTilt: "rotate-[0.5deg]" },
      2: { height: "h-[250px] sm:h-[270px]", width: "w-10 sm:w-11", restingTilt: "rotate-[-1deg]" },
      3: { height: "h-[265px] sm:h-[285px]", width: "w-12 sm:w-13", restingTilt: "rotate-[1.5deg]" },
      4: { height: "h-64 sm:h-72", width: "w-[42px] sm:w-[48px]", restingTilt: "rotate-[-0.8deg]" },
      5: { height: "h-[245px] sm:h-[265px]", width: "w-[46px] sm:w-[52px]", restingTilt: "rotate-[1deg]" }
    };
    return configs[id] || { height: "h-64 sm:h-72", width: "w-11 sm:w-12", restingTilt: "rotate-0" };
  };

  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center bg-transparent select-none overflow-visible">
      {/* Decorative library background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 flex items-center justify-between px-10">
        <BookOpen size={200} className="text-primary-900 dark:text-white" />
        <BookOpen size={160} className="text-secondary dark:text-white" />
      </div>

      {/* Book Tooltip Indicator (Desktop Only) */}
      <div className="h-10 mb-4 hidden md:flex items-center justify-center">
        <AnimatePresence>
          {hoveredId !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="bg-gray-900/90 dark:bg-gray-800/95 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg border border-gray-700/50 flex items-center gap-2 max-w-lg text-center"
            >
              <Info size={14} className="text-accent flex-shrink-0" />
              <span className="truncate">
                {publications.find(p => p.id === hoveredId)?.title} ({publications.find(p => p.id === hoveredId)?.year})
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* The Books on the Shelf */}
      <div className="relative flex items-end justify-center gap-3 sm:gap-4 md:gap-5 px-6 pb-2 z-10 min-h-[320px] max-w-full overflow-x-auto scrollbar-none md:overflow-visible">
        {publications.map((book) => {
          const style = spineStyles[book.type] || spineStyles["Journal Article"];
          const { height, width, restingTilt } = getBookPhysicals(book.id);
          const isHovered = hoveredId === book.id;

          return (
            <motion.div
              key={book.id}
              className={`relative cursor-pointer flex-shrink-0 ${height} ${width} perspective-1000`}
              onMouseEnter={() => setHoveredId(book.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedBook(book)}
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                y: isHovered ? -24 : 0,
                rotateZ: isHovered ? 0 : parseFloat(restingTilt.replace("rotate-[", "").replace("deg]", "")),
                scale: isHovered ? 1.05 : 1,
                z: isHovered ? 40 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* 3D Book Spine representation */}
              <div
                style={{ background: style.bg }}
                className={`w-full h-full rounded-[4px] relative flex flex-col justify-between items-center py-5 border ${style.border} shadow-lg shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden group`}
              >
                {/* Book Spine Crease Shadow */}
                <div className="absolute top-0 bottom-0 left-1 w-0.5 bg-black/30 blur-[0.5px]" />
                <div className="absolute top-0 bottom-0 right-1 w-0.5 bg-white/10 blur-[0.5px]" />

                {/* Top Foil Band */}
                <div className="w-full flex flex-col gap-0.5 items-center opacity-70">
                  <div className={`w-3/4 h-[2px] ${style.accent}`} />
                  <div className={`w-3/4 h-[1px] ${style.accent}`} />
                </div>

                {/* Vertical Book Title text */}
                <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                  <p
                    style={{ writingMode: "vertical-rl" }}
                    className={`font-semibold font-poppins text-[10px] sm:text-xs tracking-wider uppercase select-none pointer-events-none rotate-180 text-center ${style.text}`}
                  >
                    {book.title.length > 55 ? `${book.title.substring(0, 52)}...` : book.title}
                  </p>
                </div>

                {/* Bottom Foil Band & Year */}
                <div className="w-full flex flex-col gap-1 items-center">
                  <span className="font-mono text-[9px] font-bold text-amber-300/90">{book.year}</span>
                  <div className={`w-3/4 h-[1px] ${style.accent} opacity-70`} />
                  <div className={`w-3/4 h-[2px] ${style.accent} opacity-70`} />
                </div>

                {/* Soft front spotlight shine on the spine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* The Ledge / Wood Shelf Plank */}
      <div className="w-full max-w-2xl h-5 sm:h-6 bg-gradient-to-b from-[#8B5A2B] to-[#5C3A21] rounded-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)] border-t border-[#A07040] relative z-20">
        {/* Ledge depth highlights */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#A07040] opacity-30" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#472c19]" />
        {/* Drop shadow cast by the shelf on the wall */}
        <div className="absolute top-5 inset-x-4 h-6 bg-black/40 blur-md rounded-full pointer-events-none" />
      </div>

      <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 font-inter italic text-center">
        * Hover to inspect publication titles • Click a spine to read detailed details.
      </p>

      {/* Elegant Open Book Reader Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm">
            {/* Modal backdrop closer */}
            <div className="absolute inset-0 cursor-default" onClick={() => setSelectedBook(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 dark:border-gray-800"
            >
              {/* Top border colored by type */}
              <div
                className={`h-2 w-full ${
                  selectedBook.type === "Journal Article"
                    ? "bg-blue-600"
                    : selectedBook.type === "Conference Paper"
                    ? "bg-emerald-600"
                    : "bg-purple-600"
                }`}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors hover:scale-105 z-20"
              >
                <X size={20} />
              </button>

              {/* Open Book Styled Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
                {/* Left Page (Visual & Metadata) */}
                <div className="md:col-span-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/80 dark:to-gray-900/60 p-6 md:p-8 flex flex-col justify-between border-r border-gray-200/50 dark:border-gray-800/50 relative">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          selectedBook.type === "Journal Article"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : selectedBook.type === "Conference Paper"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                            : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                        }`}
                      >
                        {selectedBook.type}
                      </span>
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <Calendar size={12} />
                        {selectedBook.year}
                      </span>
                    </div>

                    <div className="relative w-40 h-56 mx-auto mb-6 rounded-lg shadow-xl overflow-hidden perspective-1000">
                      {/* Interactive visual cover representation inside the details modal */}
                      <div
                        style={{ background: (spineStyles[selectedBook.type] || spineStyles["Journal Article"]).bg }}
                        className="w-full h-full flex flex-col justify-between items-center py-6 px-4 border border-black/35 relative"
                      >
                        <div className="absolute top-0 bottom-0 left-0 w-3 bg-black/15 shadow-inner" />
                        <BookOpen className="text-white/30" size={32} />
                        <h4 className="text-[10px] font-bold text-center text-white/80 line-clamp-4 font-poppins uppercase tracking-wider">
                          {selectedBook.title}
                        </h4>
                        <span className="text-[9px] font-mono font-bold text-amber-300/80">{selectedBook.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Tags */}
                    <div>
                      <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Subject Tags</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedBook.tags.map((tag) => (
                          <span key={tag} className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium border border-gray-200/50 dark:border-gray-700/50">
                            <Tag size={10} className="text-primary-500" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* DOI / ISBN */}
                    <div className="pt-2 border-t border-gray-200/50 dark:border-gray-800/50">
                      {selectedBook.doi ? (
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                          <span className="font-bold">DOI:</span> {selectedBook.doi}
                        </p>
                      ) : selectedBook.isbn ? (
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                          <span className="font-bold">ISBN:</span> {selectedBook.isbn}
                        </p>
                      ) : (
                        <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                          {selectedBook.type === "Book Chapter" ? "ISBN available on request" : "DOI available on request"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Page (Title & Description text) */}
                <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between bg-white dark:bg-gray-900">
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Publication Title</h5>
                      <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-900 dark:text-white leading-snug">
                        {selectedBook.title}
                      </h3>
                    </div>

                    <div className="h-px bg-gray-100 dark:bg-gray-800" />

                    <div>
                      <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Abstract & Summary</h5>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
                        {selectedBook.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-3 justify-end items-center">
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Close Details
                    </button>
                    <a
                      href="https://www.linkedin.com/in/rajashekarasn/recent-activity/images/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-900 to-secondary hover:from-primary-950 hover:to-blue-700 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                    >
                      <BookOpen size={16} />
                      Read Publication
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

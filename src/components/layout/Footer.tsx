"use client";


import { BookOpen, Mail, ArrowUp } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { navLinks, personalInfo } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const researchAreas = [
    "Scientometrics",
    "Bibliometrics",
    "AI in Libraries",
    "Research Discovery",
    "Digital Information Systems",
  ];

  return (
    <footer className="bg-gray-950 dark:bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-700 to-secondary flex items-center justify-center">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold font-poppins text-white text-sm">Rajashekara S N</p>
                <p className="text-xs text-gray-500">Chief Librarian</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Dedicated Library &amp; Information Science professional at Jyothy Institute of Commerce and Management, Bengaluru.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Mail, href: `mailto:${personalInfo.email}` },
                { icon: FiLinkedin, href: personalInfo.linkedinUrl },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary-600 border border-white/10 hover:border-primary-500 text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-poppins text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="font-semibold font-poppins text-white mb-5 text-sm uppercase tracking-wider">
              Research Areas
            </h4>
            <ul className="space-y-2.5">
              {researchAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-poppins text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm text-gray-400 hover:text-accent transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  {personalInfo.linkedin}
                </a>
              </li>
              <li>
                <p className="text-xs text-gray-500 mb-0.5">Location</p>
                <p className="text-sm text-gray-400">{personalInfo.location}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 flex items-center justify-center rounded-lg border border-white/20 group-hover:border-primary-500 group-hover:bg-primary-600/20 transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

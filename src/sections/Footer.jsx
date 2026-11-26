import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#010204] border-t border-white/10 py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand Info */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="font-extrabold text-lg tracking-wider text-white uppercase font-mono">
            {profileData.name}
          </span>
          <span className="text-xs text-neutral-400 font-mono">
            Software Engineering • Full-Stack Development • Generative AI
          </span>
        </div>

        {/* Quick Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-400">
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
          </a>
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-indigo-400" /> {profileData.contact.email}
          </a>
        </div>

        {/* Right Copyright & Back to Top */}
        <div className="flex items-center space-x-4">
          <span className="text-xs font-mono text-neutral-500">
            © 2026 Ankita Gupta
          </span>

          <button
            onClick={scrollToTop}
            data-cursor="hover"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-indigo-600/40 hover:border-indigo-500/40 transition-all duration-300"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

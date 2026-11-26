import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { profileData } from '../data/profile';
import MagneticButton from './MagneticButton';

export default function Navbar({ activeSection, isIntroFinished }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  if (!isIntroFinished) return null;

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 pointer-events-none flex justify-center px-4 pt-4 sm:pt-6"
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between w-full max-w-6xl ${
            isScrolled
              ? 'glass-pill py-2.5 px-5 sm:px-7 rounded-full shadow-2xl backdrop-blur-xl border border-white/10 bg-black/60 max-w-4xl'
              : 'py-4 px-6 bg-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-2 group cursor-pointer"
            data-cursor="hover"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-wider text-white">AG</span>
              </div>
            </div>
            <span className={`font-semibold tracking-wider text-xs sm:text-sm text-white/90 group-hover:text-white transition-opacity ${isScrolled ? 'hidden sm:inline-block' : 'inline-block'}`}>
              ANKITA GUPTA
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  data-cursor="hover"
                  className={`relative px-3 py-1.5 text-xs tracking-widest font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-indigo-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right External Links */}
          <div className="hidden sm:flex items-center space-x-3">
            <MagneticButton
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </MagneticButton>
            
            <MagneticButton
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white bg-indigo-600/30 hover:bg-indigo-600/60 border border-indigo-500/40 rounded-full backdrop-blur-sm transition-all duration-300 shadow-sm"
            >
              HIRE ME
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden pt-24"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-extrabold tracking-tight text-white/90 hover:text-indigo-400 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-sm font-mono text-neutral-500">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 flex justify-around">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
              >
                <ArrowUpRight className="w-4 h-4" /> Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

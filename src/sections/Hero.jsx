import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Code2, Mail } from 'lucide-react';
import { Linkedin } from '../components/SocialIcons';
import { profileData } from '../data/profile';
import MagneticButton from '../components/MagneticButton';

export default function Hero({ isIntroFinished }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const maskVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-8 pt-32 pb-12 overflow-hidden bg-bgDark"
    >
      {/* Background Subtle Radial Gradient & Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-perspective-grid opacity-15 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center my-auto z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntroFinished ? "visible" : "hidden"}
          className="flex flex-col items-start space-y-6 sm:space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInVariants} className="flex items-center space-x-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR SOFTWARE ENGINEERING & FULL-STACK ROLES</span>
            </div>
          </motion.div>

          {/* Large Editorial Masked Typography */}
          <div className="overflow-hidden w-full">
            <motion.h1
              variants={maskVariants}
              className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-none text-white font-sans uppercase select-none"
            >
              ANKITA
            </motion.h1>
          </div>

          <div className="overflow-hidden w-full">
            <motion.h1
              variants={maskVariants}
              className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-none text-gradient font-sans uppercase select-none -mt-2 sm:-mt-6"
            >
              GUPTA
            </motion.h1>
          </div>

          {/* Role Subtitle & Pillars */}
          <div className="overflow-hidden">
            <motion.div variants={maskVariants} className="flex flex-col space-y-3">
              <span className="text-xl sm:text-3xl font-bold tracking-widest text-neutral-200 font-mono">
                {profileData.role}
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400">
                <span className="text-indigo-300 font-medium">Full-Stack Development</span>
                <span className="text-neutral-600">•</span>
                <span className="text-indigo-300 font-medium">Generative AI</span>
                <span className="text-neutral-600">•</span>
                <span className="text-indigo-300 font-medium">Problem Solving</span>
              </div>
            </motion.div>
          </div>

          {/* Core Identity Statement */}
          <motion.p
            variants={fadeInVariants}
            className="text-base sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed border-l-2 border-indigo-500/60 pl-4 py-1 italic"
          >
            "{profileData.tagline}"
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={fadeInVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <MagneticButton
              href="#projects"
              dataCursor="hover"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-xl"
            >
              VIEW MY WORK
            </MagneticButton>

            <MagneticButton
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              dataCursor="hover"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0077b5] text-white hover:bg-[#006097] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> LINKEDIN
            </MagneticButton>

            <MagneticButton
              href="#contact"
              dataCursor="hover"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full glass-panel border border-white/20 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-white/10 hover:border-white/40 transition-all"
            >
              CONTACT ME
            </MagneticButton>
          </motion.div>

          {/* Visible Direct Email Indicator */}
          <motion.div variants={fadeInVariants} className="pt-2 flex items-center gap-2">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{profileData.contact.email}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntroFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="z-10 flex flex-col items-center justify-center space-y-2 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer pt-8"
      >
        <a href="#about" className="flex flex-col items-center space-y-2" data-cursor="hover">
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-indigo-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, AlertCircle, Check, Cpu } from 'lucide-react';
import { Github } from './SocialIcons';
import ProjectVisual from './ProjectVisual';

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40, clipPath: 'circle(15% at 50% 50%)' }}
          animate={{ opacity: 1, scale: 1, y: 0, clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#090b14] border border-white/15 rounded-2xl shadow-2xl overflow-y-auto no-scrollbar flex flex-col justify-between"
        >
          {/* Top Close Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-[#090b14]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono font-bold text-indigo-400">PROJECT {project.id}</span>
              <span className="text-sm font-extrabold text-white tracking-wider">{project.title}</span>
            </div>

            <button
              onClick={onClose}
              data-cursor="hover"
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close detail modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Main Body */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Visual Preview */}
            <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <ProjectVisual previewType={project.previewType} />
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans uppercase mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base font-mono text-indigo-300 tracking-wider">
                {project.subtitle}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-950/80 border border-white/10 space-y-3">
                <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase">
                  <AlertCircle className="w-4 h-4" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-950/80 border border-white/10 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>THE SOLUTION</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-4">
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-200 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-4">
                CORE FEATURES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Challenges */}
            {project.challenges && (
              <div className="p-6 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                <h3 className="text-xs font-mono font-bold text-indigo-300 uppercase flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> TECHNICAL APPROACH & CHALLENGES
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Repository Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-neutral-200 transition-colors"
                >
                  <Github className="w-4 h-4" /> VIEW GITHUB REPOSITORY
                </a>
              )}

              {project.secondaryGithub && (
                <a
                  href={project.secondaryGithub}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="px-6 py-3 rounded-full glass-panel border border-white/20 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" /> SECONDARY REPO
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

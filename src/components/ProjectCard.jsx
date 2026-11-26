import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Github } from './SocialIcons';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, index, total, onSelectProject }) {
  const containerRef = useRef(null);

  // Scroll progress for sticky overlap scaling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.85, 1, 0.98, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0.3, 1, 1, 0.4]);
  const translateY = useTransform(scrollYProgress, [0, 0.4, 1], [60, 0, -40]);

  return (
    <div
      ref={containerRef}
      className="sticky top-16 sm:top-24 min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center py-6"
    >
      <motion.div
        style={{ scale, opacity, y: translateY }}
        className="relative w-full max-w-6xl rounded-3xl glass-panel border border-white/15 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl bg-[#090b14]/90 backdrop-blur-3xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Info Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Numbering Badge */}
            <div className="flex items-center space-x-3">
              <span className="text-4xl sm:text-6xl font-black font-mono text-indigo-400/80">
                {project.id}
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                / 0{total} PROJECT
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans uppercase">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-indigo-300 font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              "{project.description}"
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Top 3 Key Features */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              {project.features.slice(0, 3).map((f) => (
                <div key={f} className="flex items-center space-x-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => onSelectProject(project)}
                data-cursor="project"
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                VIEW PROJECT <ArrowUpRight className="w-4 h-4" />
              </button>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="p-3 rounded-full glass-pill border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Visual Interactive Preview Column */}
          <div
            className="lg:col-span-6 h-64 sm:h-80 md:h-[420px] w-full cursor-pointer"
            onClick={() => onSelectProject(project)}
            data-cursor="project"
          >
            <ProjectVisual previewType={project.previewType} />
          </div>

        </div>
      </motion.div>
    </div>
  );
}

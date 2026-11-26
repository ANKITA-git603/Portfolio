import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Sparkles, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-8 w-full bg-bgDark relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">[ 01 ]</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            ABOUT ME
          </h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Main Paragraph Editorial Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.p variants={itemVariants} className="text-xl sm:text-3xl font-light text-neutral-200 leading-relaxed font-sans">
              "I'm a B.Tech student in Computer Science Engineering and Data Science, graduating in 2027. I enjoy turning ideas into functional software products using modern web technologies and AI."
            </motion.p>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
              "Most of my work focuses on building full-stack applications, integrating APIs, designing responsive interfaces, and experimenting with Generative AI to solve practical problems."
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-mono text-indigo-400">2027</span>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">EXPECTED GRADUATION</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-mono text-white">5+</span>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">FULL-STACK PRODUCTS</span>
              </div>
            </motion.div>
          </div>

          {/* Structured Information Blocks: EDUCATION & FOCUS */}
          <div className="lg:col-span-5 space-y-6">
            {/* EDUCATION BLOCK */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-20 h-20 text-indigo-400" />
              </div>
              <div className="flex items-center space-x-3 mb-4 text-indigo-400">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">EDUCATION</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                B.Tech – Computer Science Engineering and Data Science
              </h3>
              <p className="text-sm font-medium text-neutral-300">
                Oriental College of Technology
              </p>
              <p className="text-xs text-neutral-500 font-mono mt-1">
                Bhopal • Class of 2027
              </p>
            </motion.div>

            {/* FOCUS BLOCK */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-20 h-20 text-purple-400" />
              </div>
              <div className="flex items-center space-x-3 mb-4 text-purple-400">
                <Target className="w-5 h-5" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">FOCUS</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center space-x-2 text-sm text-neutral-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Generative AI</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Software Engineering</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Problem Solving</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

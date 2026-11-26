import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { experienceData } from '../data/achievements';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-8 w-full bg-[#06070d] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-16 sm:mb-20"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">[ 04 ]</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            EXPERIENCE & LEADERSHIP
          </h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        {/* Animated Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-white transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-white" />
              </div>

              {/* Glass Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 hover:border-indigo-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
                    {exp.role}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 break-words">{exp.institution}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
                  {exp.organization}
                </h3>

                <div className="space-y-2.5">
                  {exp.highlights.map((item) => (
                    <div key={item} className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

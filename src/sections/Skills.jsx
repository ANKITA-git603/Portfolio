import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Binary,
  Wrench,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-amber-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-pink-400" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-8 w-full bg-[#07080f] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">[ 02 ]</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            TECHNICAL SKILLS
          </h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              data-cursor="hover"
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 hover:border-indigo-500/40 hover:shadow-glass-glow transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(cat.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-white/90 uppercase">
                      {cat.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">0{idx + 1}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 group-hover:text-white group-hover:bg-indigo-950/40 group-hover:border-indigo-500/30 group-hover:translate-x-0.5 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>{cat.skills.length} TECHNOLOGIES</span>
                <span className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">PRO-LEVEL</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

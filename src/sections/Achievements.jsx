import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Flag, Flame, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export default function Achievements() {
  const getIcon = (id) => {
    switch (id) {
      case 'nifaa': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'nptel-cert': return <Award className="w-5 h-5 text-indigo-400" />;
      case 'viksit-bharat': return <Flag className="w-5 h-5 text-blue-400" />;
      case 'leetcode-streak': return <Flame className="w-5 h-5 text-orange-400" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 px-4 sm:px-8 w-full bg-[#080912] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">[ 06 ]</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            HONORS & ACHIEVEMENTS
          </h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              data-cursor="hover"
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs font-mono text-indigo-300 mb-3">{item.location}</p>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

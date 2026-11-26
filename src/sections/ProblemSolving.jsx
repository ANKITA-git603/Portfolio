import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Code2, Flame, Award, Cpu, Trophy } from 'lucide-react';
import { problemSolvingStats } from '../data/achievements';

// Animated Number Counter Component
function AnimatedCounter({ end, duration = 1.5, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ProblemSolving() {
  const { leetcode, codechef } = problemSolvingStats;

  return (
    <section id="problem-solving" className="py-24 sm:py-32 px-4 sm:px-8 w-full bg-bgDark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">[ 07 ]</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            PROBLEM SOLVING
          </h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEETCODE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl glass-panel border border-white/15 bg-slate-950/80 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <Code2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-wider font-mono">LEETCODE</h3>
                    <span className="text-[10px] font-mono text-neutral-400">JAVA & JAVASCRIPT ALGORITHMS</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 font-mono text-xs border border-amber-500/30">
                  ACTIVE
                </span>
              </div>

              {/* Stats Metrics */}
              <div className="grid grid-cols-3 gap-4 my-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-white/5 flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                    <AnimatedCounter end={leetcode.totalJava} suffix="+" />
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1">JAVA PROBLEMS</span>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-white/5 flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                    <AnimatedCounter end={leetcode.totalJS} suffix="+" />
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1">JS PROBLEMS</span>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center space-x-1 text-orange-400">
                    <Flame className="w-4 h-4 fill-orange-400" />
                    <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                      <AnimatedCounter end={leetcode.streak} />
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1">DAY STREAK</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>PRIMARY LANGUAGE: JAVA</span>
              <span className="text-amber-400 font-bold">74-DAY STREAK</span>
            </div>
          </motion.div>

          {/* CODECHEF CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl glass-panel border border-white/15 bg-slate-950/80 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
                    <Trophy className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-wider font-mono">CODECHEF</h3>
                    <span className="text-[10px] font-mono text-neutral-400">COMPETITIVE PROGRAMMING</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 font-mono text-xs border border-indigo-500/30 font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Stats Metrics */}
              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-indigo-300">
                    <AnimatedCounter end={codechef.rating} />
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1">MAX RATING</span>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                    <AnimatedCounter end={codechef.contests} />
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1">CONTESTS ATTENDED</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>COMPETITIVE PROGRAMMING</span>
              <span className="text-indigo-400 font-bold">RATING: 887 • 12 CONTESTS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, Shield, Lock, Layout, Sparkles, Layers } from 'lucide-react';
import { profileData } from '../data/profile';

export default function BrowserIntro({ onIntroComplete }) {
  const [phase, setPhase] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse tilt physics for Phase 4
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXRaw = useTransform(mouseY, [-400, 400], [6, -6]);
  const rotateYRaw = useTransform(mouseX, [-400, 400], [-8, 8]);

  const rotateX = useSpring(rotateXRaw, { damping: 25, stiffness: 200 });
  const rotateY = useSpring(rotateYRaw, { damping: 25, stiffness: 200 });

  useEffect(() => {
    // Check mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation timeline sequence
    // Phase 1 -> 2: Grid appears (0 - 0.6s)
    const t1 = setTimeout(() => setPhase(2), 600);

    // Phase 2 -> 3: Browser zooms in with 3D perspective (1.2s)
    const t2 = setTimeout(() => setPhase(3), 1600);

    // Phase 3 -> 4: Reaches center, subtle tilt pause (2.8s)
    const t3 = setTimeout(() => setPhase(4), 2800);

    // Phase 4 -> 5: Browser expands out beyond screen frame into full hero (4.2s)
    const t4 = setTimeout(() => setPhase(5), 4400);

    // Complete intro callback (5.4s)
    const t5 = setTimeout(() => {
      onIntroComplete();
    }, 5500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [mouseX, mouseY, onIntroComplete]);

  // Phase-dependent styles and motion values
  const getContainerVariants = () => ({
    1: { opacity: 0, scale: 0.6, rotateX: 18, rotateY: -12, y: 100 },
    2: { opacity: 0.4, scale: 0.65, rotateX: 12, rotateY: -8, y: 80 },
    3: { opacity: 1, scale: isMobile ? 0.9 : 0.92, rotateX: 4, rotateY: -3, y: 0 },
    4: { opacity: 1, scale: isMobile ? 0.95 : 1, rotateX: 0, rotateY: 0, y: 0 },
    5: { opacity: 0, scale: isMobile ? 1.4 : 2.6, rotateX: 0, rotateY: 0, y: -40 }
  });

  return (
    <div className="fixed inset-0 z-50 bg-[#040407] flex items-center justify-center overflow-hidden perspective-2000 select-none">
      {/* Moving 3D Perspective Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? (phase === 5 ? 0 : 0.4) : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-perspective-grid animate-grid-move pointer-events-none opacity-30"
        style={{
          transform: 'rotateX(55deg) translateY(-20%) scale(2.2)',
          transformOrigin: 'top center'
        }}
      />

      {/* Ambient Radial Gradient Glow */}
      <motion.div
        animate={{
          opacity: phase >= 3 ? (phase === 5 ? 0 : 0.6) : 0.2,
          scale: phase === 4 ? 1.2 : 1
        }}
        transition={{ duration: 1.5 }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-transparent blur-[120px] pointer-events-none"
      />

      {/* 3D Floating Glass Browser Window */}
      <motion.div
        initial={getContainerVariants()[1]}
        animate={getContainerVariants()[phase]}
        style={phase === 4 && !isMobile ? { rotateX, rotateY } : {}}
        transition={{
          duration: phase === 5 ? 1.1 : 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="relative w-[92vw] max-w-[1000px] h-[68vh] max-h-[620px] rounded-2xl glass-panel border border-white/15 shadow-2xl overflow-hidden flex flex-col transform-gpu-3d bg-slate-950/80 backdrop-blur-2xl"
      >
        {/* Browser Header Controls & Minimal Address Bar */}
        <div className="h-11 px-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/40" />
          </div>

          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1 rounded-md bg-slate-950/80 hover:bg-slate-900 border border-white/10 hover:border-indigo-500/50 text-[11px] font-mono text-neutral-400 w-auto max-w-[65%] justify-center transition-all cursor-pointer group"
            title="Open LinkedIn Profile"
          >
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate text-slate-300 group-hover:text-indigo-300">
              {profileData.contact.linkedin}
            </span>
          </a>

          <div className="flex items-center space-x-2 text-neutral-400 text-xs">
            <button
              onClick={onIntroComplete}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              title="Skip intro animation"
            >
              SKIP
            </button>
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          </div>
        </div>

        {/* Browser Content Inner Mini Portfolio Showcase */}
        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-slate-950/50 via-[#080912] to-[#04050a] relative">
          
          {/* Subtle background graphic inside browser */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Mini Header Inside Browser */}
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest text-white/90">ANKITA GUPTA</span>
            </div>
            <div className="flex items-center space-x-4 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              <span>WORK</span>
              <span>ABOUT</span>
              <span>CONTACT</span>
            </div>
          </div>

          {/* Main Typography Inside Browser */}
          <div className="my-auto py-4">
            <motion.div
              animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-indigo-400 uppercase mb-2 block">
                [ PORTFOLIO LOADING ]
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans uppercase">
                ANKITA GUPTA
              </h1>
              <p className="text-sm sm:text-lg font-medium text-neutral-400 tracking-wider mt-2 font-mono">
                SOFTWARE ENGINEER
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4 text-[10px] sm:text-xs font-mono text-indigo-300/90">
                <span className="px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-500/30">FULL-STACK</span>
                <span className="px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-500/30">GENERATIVE AI</span>
                <span className="px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-500/30">PROBLEM SOLVING</span>
              </div>
            </motion.div>

            {/* Mini Project Cards Grid Inside Browser */}
            <motion.div
              animate={{ opacity: phase >= 3 ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 mt-6 hidden sm:grid"
            >
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                  <span>01</span>
                  <Layers className="w-3 h-3 text-indigo-400" />
                </div>
                <div className="mt-3 text-xs font-bold text-white tracking-wide">EDUVERSE AI</div>
                <div className="text-[9px] text-neutral-400 truncate mt-1">Educational Platform</div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                  <span>02</span>
                  <Terminal className="w-3 h-3 text-indigo-400" />
                </div>
                <div className="mt-3 text-xs font-bold text-white tracking-wide">SMARTQ</div>
                <div className="text-[9px] text-neutral-400 truncate mt-1">Queue Management</div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                  <span>03</span>
                  <Shield className="w-3 h-3 text-indigo-400" />
                </div>
                <div className="mt-3 text-xs font-bold text-white tracking-wide">RECOVERAI</div>
                <div className="text-[9px] text-neutral-400 truncate mt-1">Revenue Recovery</div>
              </div>
            </motion.div>
          </div>

          {/* Browser Footer Status Bar */}
          <div className="flex justify-between items-center border-t border-white/5 pt-3 text-[10px] font-mono text-neutral-500">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>STATUS: READY</span>
            </div>
            <span>EXPANDING VIEWPORT...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

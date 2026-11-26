import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  BookOpen,
  Users,
  Shield,
  Bot,
  QrCode,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Code,
  Terminal,
  Sun,
  Cloud,
  Wind,
  Droplets,
  Layers,
  Send,
  Zap,
  DollarSign
} from 'lucide-react';

export default function ProjectVisual({ previewType }) {
  // States for EduVerse dashboard preview
  const [eduRole, setEduRole] = useState('student');
  const [aiPrompt, setAiPrompt] = useState('Explain React state batching');

  // State for SmartQ preview
  const [queueToken, setQueueToken] = useState(24);
  const [currentServing, setCurrentServing] = useState(19);

  // State for RecoverAI
  const [recoveryApproved, setRecoveryApproved] = useState(false);

  // State for CodePilot
  const [selectedModel, setSelectedModel] = useState('gemini-1.5-pro');

  switch (previewType) {
    case 'eduverse':
      return (
        <div className="w-full h-full bg-[#0a0c16] rounded-xl border border-white/10 p-4 sm:p-6 font-sans flex flex-col justify-between overflow-hidden shadow-2xl relative">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs font-bold text-white font-mono">EDUVERSE AI v2.4</span>
            </div>
            {/* Multi-role dashboard selector */}
            <div className="flex bg-slate-900/90 rounded-lg p-1 border border-white/10 text-[10px] font-mono">
              {['student', 'teacher', 'hod', 'govt'].map((role) => (
                <button
                  key={role}
                  onClick={() => setEduRole(role)}
                  className={`px-2 py-0.5 rounded uppercase font-medium transition-all ${
                    eduRole === role ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Main Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 overflow-hidden">
            {/* Left AI Tutor Assistant */}
            <div className="md:col-span-7 bg-slate-950/80 rounded-xl p-3 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-300">
                  <Bot className="w-4 h-4 text-indigo-400" />
                  <span>Gemini AI Tutor</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">ONLINE</span>
              </div>

              <div className="space-y-2.5 my-2 text-xs">
                <div className="bg-indigo-950/40 p-2.5 rounded-lg border border-indigo-500/20 text-indigo-100">
                  <span className="text-[9px] font-mono text-indigo-400 block mb-1">USER ({eduRole.toUpperCase()})</span>
                  "Generate a summary on Data Structures & DSA roadmap."
                </div>
                <div className="bg-slate-900 p-2.5 rounded-lg border border-white/10 text-neutral-300">
                  <span className="text-[9px] font-mono text-emerald-400 block mb-1">GEMINI AI ASSISTANT</span>
                  "Here is your personalized learning path: Arrays ➔ Hash Maps ➔ Trees ➔ Dynamic Programming."
                </div>
              </div>

              <div className="flex items-center space-x-2 bg-slate-900 rounded-lg px-2.5 py-1.5 border border-white/10 text-xs text-neutral-400">
                <input
                  type="text"
                  readOnly
                  value={aiPrompt}
                  className="bg-transparent text-white text-xs flex-1 outline-none font-mono"
                />
                <Send className="w-3.5 h-3.5 text-indigo-400 cursor-pointer" />
              </div>
            </div>

            {/* Right Marketplace & Analytics */}
            <div className="md:col-span-5 flex flex-col space-y-3">
              <div className="bg-slate-950/80 rounded-xl p-3 border border-white/10 flex-1">
                <div className="flex justify-between items-center text-xs font-bold text-white mb-2">
                  <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-purple-400" /> Marketplace</span>
                  <span className="text-[10px] font-mono text-indigo-400">12 Books</span>
                </div>
                <div className="space-y-1.5">
                  <div className="p-2 rounded bg-slate-900 border border-white/5 flex justify-between items-center text-xs">
                    <span className="text-white font-medium truncate">Data Structures in Java</span>
                    <span className="text-indigo-300 font-mono text-[10px] bg-indigo-950 px-1.5 py-0.5 rounded">PDF</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-white/5 flex justify-between items-center text-xs">
                    <span className="text-white font-medium truncate">Generative AI Handbook</span>
                    <span className="text-purple-300 font-mono text-[10px] bg-purple-950 px-1.5 py-0.5 rounded">PRO</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-950/60 to-purple-950/60 rounded-xl p-3 border border-indigo-500/30 flex justify-between items-center text-xs">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">ACTIVE DASHBOARD</div>
                  <div className="font-bold text-white capitalize">{eduRole} Portal</div>
                </div>
                <Users className="w-5 h-5 text-indigo-300" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'smartq':
      return (
        <div className="w-full h-full bg-[#080b14] rounded-xl border border-white/10 p-4 sm:p-6 font-sans flex flex-col justify-between overflow-hidden shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-white font-mono">SMARTQ ENGINE</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-400">COUNTER #03 • MAIN BRANCH</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
            {/* Live Token Ticket Card */}
            <div className="bg-gradient-to-b from-emerald-950/40 via-slate-950 to-slate-950 rounded-xl p-4 border border-emerald-500/30 flex flex-col items-center text-center">
              <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">YOUR DIGITAL TOKEN</span>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono my-2 tracking-wider">
                #{queueToken}
              </div>
              <div className="text-xs text-neutral-400">
                Current Serving: <span className="text-emerald-400 font-bold font-mono">#{currentServing}</span>
              </div>
            </div>

            {/* Live Waiting Matrix */}
            <div className="space-y-3 flex flex-col justify-between">
              <div className="bg-slate-950 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400">EST. WAITING TIME</div>
                  <div className="text-lg font-bold text-white font-mono">~ 8 MINS</div>
                </div>
                <Clock className="w-5 h-5 text-indigo-400" />
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400">QR CHECK-IN</div>
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                  </div>
                </div>
                <QrCode className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[10px] font-mono text-neutral-500">
            <span>DATABASE-BACKED QUEUE</span>
            <span>REST API ACTIVE</span>
          </div>
        </div>
      );

    case 'recoverai':
      return (
        <div className="w-full h-full bg-[#0d0914] rounded-xl border border-white/10 p-4 sm:p-6 font-sans flex flex-col justify-between overflow-hidden shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-white font-mono">RECOVERAI // RAZORPAY BUILDATHON</span>
            </div>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-500/30">
              AI ENGINE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 my-auto">
            {/* Failed Payment Audit Card */}
            <div className="md:col-span-7 bg-slate-950 p-3.5 rounded-xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-red-400 font-mono flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> FAILED WEBHOOK
                </span>
                <span className="text-[10px] font-mono text-neutral-500">#rzp_pay_8849</span>
              </div>
              <div className="text-xs text-neutral-300 space-y-1 font-mono">
                <div>Amount: <span className="text-white font-bold">$240.00</span></div>
                <div>Reason: <span className="text-amber-300">Bank Authorization Soft-Declined</span></div>
                <div className="text-[11px] text-purple-300 pt-1">
                  Gemini AI Root Cause: Card network timeout during 3DS OTP challenge.
                </div>
              </div>
            </div>

            {/* Score & Action Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-purple-950/60 to-slate-950 p-3.5 rounded-xl border border-purple-500/30 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-neutral-400">RECOVERY SCORE</div>
                <div className="text-2xl font-black text-emerald-400 font-mono">87 / 100</div>
                <div className="text-[10px] text-neutral-400">High Probability</div>
              </div>

              <button
                onClick={() => setRecoveryApproved(!recoveryApproved)}
                className={`mt-2 py-1.5 px-3 rounded text-xs font-bold font-mono transition-all flex items-center justify-center gap-1 ${
                  recoveryApproved
                    ? 'bg-emerald-600 text-white'
                    : 'bg-purple-600 hover:bg-purple-500 text-white'
                }`}
              >
                {recoveryApproved ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" /> RECOVERY LINK SENT
                  </>
                ) : (
                  <>
                    <DollarSign className="w-3.5 h-3.5" /> TRIGGER AI RETRY WORKFLOW
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-2 flex justify-between items-center text-[10px] font-mono text-neutral-500">
            <span>RAZORPAY API INTEGRATION</span>
            <span>HUMAN APPROVAL WORKFLOW</span>
          </div>
        </div>
      );

    case 'codepilot':
      return (
        <div className="w-full h-full bg-[#060913] rounded-xl border border-white/10 p-4 sm:p-6 font-mono text-xs flex flex-col justify-between overflow-hidden shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white">CODEPILOT AI EDITOR</span>
            </div>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-slate-900 border border-white/10 text-cyan-300 text-[10px] px-2 py-0.5 rounded outline-none"
            >
              <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
              <option value="gemini-flash">Gemini 1.5 Flash</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 my-2 flex-1">
            {/* Editor Side */}
            <div className="md:col-span-7 bg-slate-950 p-3 rounded-xl border border-white/10 overflow-hidden font-mono text-[11px] leading-relaxed text-neutral-300">
              <div className="text-neutral-500 text-[10px] border-b border-white/5 pb-1 mb-2">App.jsx</div>
              <div><span className="text-purple-400">const</span> <span className="text-blue-300">useAiModel</span> = () =&gt; &#123;</div>
              <div className="pl-3"><span className="text-purple-400">const</span> [model] = useState(<span className="text-emerald-300">'{selectedModel}'</span>);</div>
              <div className="pl-3"><span className="text-purple-400">return</span> &#123; query: <span className="text-yellow-300">async</span> (prompt) =&gt; ... &#125;;</div>
              <div>&#125;;</div>
            </div>

            {/* AI Assistant Output Side */}
            <div className="md:col-span-5 bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[10px] mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> AI SUGGESTION
                </div>
                <div className="text-[10px] text-neutral-300 leading-snug">
                  "Optimized state hooks to prevent re-renders on code keystroke events."
                </div>
              </div>
              <div className="bg-slate-900 p-2 rounded text-[9px] text-emerald-400 border border-white/5">
                ✓ Code compiled with zero errors
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-2 flex justify-between items-center text-[10px] text-neutral-500">
            <span>MERN PERSISTENCE</span>
            <span>DEVELOPER INTERFACE</span>
          </div>
        </div>
      );

    case 'skymet':
    default:
      return (
        <div className="w-full h-full bg-[#0a0d18] rounded-xl border border-white/10 p-4 sm:p-6 font-sans flex flex-col justify-between overflow-hidden shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-white font-mono">SKYMET WEATHER DASHBOARD</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-400">OPENWEATHERMAP API</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
            <div className="bg-gradient-to-br from-amber-950/40 to-slate-950 p-4 rounded-xl border border-amber-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-300 uppercase">BHOPAL, INDIA</span>
                <div className="text-4xl font-extrabold text-white font-mono my-1">28°C</div>
                <div className="text-xs text-neutral-300 flex items-center gap-1">
                  <Cloud className="w-3.5 h-3.5 text-blue-300" /> Scattered Clouds
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-white/10 flex flex-col justify-center">
                <span className="text-[9px] font-mono text-neutral-400 flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-blue-400" /> HUMIDITY
                </span>
                <span className="text-sm font-bold text-white font-mono mt-1">64%</span>
              </div>

              <div className="bg-slate-950 p-2.5 rounded-xl border border-white/10 flex flex-col justify-center">
                <span className="text-[9px] font-mono text-neutral-400 flex items-center gap-1">
                  <Wind className="w-3 h-3 text-cyan-400" /> WIND
                </span>
                <span className="text-sm font-bold text-white font-mono mt-1">12 km/h</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-2 flex justify-between items-center text-[10px] font-mono text-neutral-500">
            <span>REAL-TIME WEATHER DATA</span>
            <span>REACT + TAILWIND</span>
          </div>
        </div>
      );
  }
}

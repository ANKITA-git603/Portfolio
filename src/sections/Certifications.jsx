import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, Download, Eye, X, ShieldCheck, Sparkles, Building2, Calendar, FileText } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-8 w-full bg-bgDark relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-12"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">[ 05 ]</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            CERTIFICATIONS
          </h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        {/* Featured Certificate Card */}
        <div className="space-y-8">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-10 rounded-3xl glass-panel border border-white/15 bg-slate-950/70 shadow-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Certificate Info */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                      {cert.provider}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> {cert.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-neutral-400 block mb-1">
                      {cert.subProvider}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {cert.description}
                  </p>

                  {/* Score Breakdown Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-slate-900/90 p-3 rounded-xl border border-white/10 flex flex-col justify-between">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">SCORE</span>
                      <span className="text-2xl font-black font-mono text-emerald-400 mt-1">
                        {cert.consolidatedScore}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-500">CONSOLIDATED</span>
                    </div>

                    <div className="bg-slate-900/90 p-3 rounded-xl border border-white/10 flex flex-col justify-between">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">ASSIGNMENTS</span>
                      <span className="text-lg font-bold font-mono text-white mt-1">
                        {cert.assignmentsScore}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-500">ONLINE TASKS</span>
                    </div>

                    <div className="bg-slate-900/90 p-3 rounded-xl border border-white/10 flex flex-col justify-between col-span-2 sm:col-span-1">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">PROCTORED EXAM</span>
                      <span className="text-lg font-bold font-mono text-white mt-1">
                        {cert.proctoredScore}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-500">CENTER EXAM</span>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{cert.courseDuration}</span>
                    </div>
                    <div className="text-neutral-600">•</div>
                    <div>
                      Roll No: <span className="text-neutral-200">{cert.rollNo}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      data-cursor="hover"
                      className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg hover:shadow-indigo-500/25"
                    >
                      <Eye className="w-4 h-4" /> VIEW CERTIFICATE
                    </button>

                    <a
                      href={cert.pdfUrl}
                      download="Ankita_Gupta_NPTEL_Certificate.pdf"
                      data-cursor="hover"
                      className="px-6 py-3 rounded-full glass-panel border border-white/20 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      <Download className="w-4 h-4" /> DOWNLOAD OFFICIAL PDF
                    </a>
                  </div>
                </div>

                {/* Right Interactive Certificate Visual Thumbnail */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group/img cursor-pointer bg-slate-900/60"
                  data-cursor="hover"
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-auto object-cover group-hover/img:scale-105 transition-transform duration-500 filter brightness-90 group-hover/img:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold font-mono tracking-wider flex items-center gap-2 shadow-2xl">
                      <Eye className="w-4 h-4" /> CLICK TO EXPAND
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* High-Resolution Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] bg-slate-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {selectedCert.provider} • OFFICIAL CREDENTIAL
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={selectedCert.pdfUrl}
                    download="Ankita_Gupta_NPTEL_Certificate.pdf"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Certificate Image View */}
              <div className="p-4 overflow-auto max-h-[80vh] flex items-center justify-center bg-black/40">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

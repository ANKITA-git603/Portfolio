import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowUpRight, CheckCircle, Info } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { profileData } from '../data/profile';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusNotice, setStatusNotice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusNotice('Please fill in all fields before sending.');
      return;
    }

    // Mailto fallback mechanism (Factual, no fake server claim)
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
    setStatusNotice('Opening your mail app with the formatted message...');
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-8 w-full bg-[#020306] relative overflow-hidden">
      {/* Background Deep Glow Lighting Shift */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-t from-indigo-900/25 via-purple-900/15 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Hero Callout Column */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase block mb-4">
                [ 08 // CONTACT ]
              </span>
              <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white font-sans uppercase leading-none">
                LET'S BUILD
                <br />
                <span className="text-gradient">SOMETHING</span>
                <br />
                USEFUL.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-md"
            >
              "I'm interested in software engineering opportunities, internships, and projects involving full-stack development and Generative AI."
            </motion.p>

            {/* Direct Email Display Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 max-w-lg hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Direct Mail Address</div>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="text-sm sm:text-base font-mono font-semibold text-white hover:text-indigo-300 transition-colors break-all"
                  >
                    {profileData.contact.email}
                  </a>
                </div>
              </div>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/60 text-indigo-200 border border-indigo-500/30 transition-all shrink-0"
              >
                Send Mail ➔
              </a>
            </motion.div>

            {/* Quick Magnetic Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <MagneticButton
                href={`mailto:${profileData.contact.email}`}
                dataCursor="hover"
                className="px-5 py-3 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow-lg"
              >
                <Mail className="w-4 h-4" /> {profileData.contact.email}
              </MagneticButton>

              <MagneticButton
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                dataCursor="hover"
                className="px-5 py-3 rounded-full bg-[#0077b5] hover:bg-[#006097] text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"
              >
                <Linkedin className="w-4 h-4" /> DIRECT LINKEDIN
              </MagneticButton>

              <MagneticButton
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                dataCursor="hover"
                className="px-5 py-3 rounded-full glass-panel border border-white/20 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" /> GITHUB
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 p-8 sm:p-10 rounded-3xl glass-panel border border-white/15 bg-slate-950/80 shadow-2xl relative"
          >
            <h3 className="text-xl font-extrabold text-white tracking-wider uppercase mb-6 font-mono">
              SEND A DIRECT MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-2 uppercase">NAME</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-2 uppercase">EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-2 uppercase">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {statusNotice && (
                <div className="p-3 rounded-lg bg-indigo-950/60 border border-indigo-500/40 text-xs text-indigo-300 font-mono flex items-center gap-2">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>{statusNotice}</span>
                </div>
              )}

              <MagneticButton
                type="submit"
                dataCursor="hover"
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xl"
              >
                <Send className="w-4 h-4" /> SEND MESSAGE
              </MagneticButton>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

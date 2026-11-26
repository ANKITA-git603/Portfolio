import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import BrowserIntro from './components/BrowserIntro';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import ProblemSolving from './sections/ProblemSolving';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll active section observer
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'hero' ? 'home' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-bgDark text-neutral-100 font-sans selection:bg-indigo-600/40 selection:text-white">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Cinematic 3D Browser Intro */}
      {!isIntroFinished && (
        <BrowserIntro onIntroComplete={() => setIsIntroFinished(true)} />
      )}

      {/* Floating Header Navbar */}
      <Navbar activeSection={activeSection} isIntroFinished={isIntroFinished} />

      {/* Main Page Content */}
      <main className="w-full overflow-hidden">
        <Hero isIntroFinished={isIntroFinished} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <ProblemSolving />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

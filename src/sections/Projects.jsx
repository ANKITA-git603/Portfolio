import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-8 w-full bg-bgDark relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">[ 03 ]</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            FEATURED PRODUCTS
          </h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        {/* Scroll-Driven Stacked Showcase */}
        <div className="space-y-12 sm:space-y-24 relative pb-20">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              total={projectsData.length}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

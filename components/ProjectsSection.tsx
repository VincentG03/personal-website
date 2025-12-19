'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ParticleBackground from './ParticleBackground';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered tool that generates high-quality content using natural language processing and machine learning.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and analytics dashboard.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
  },
  {
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics platform with customizable widgets, data visualization, and reporting capabilities.',
    tech: ['React', 'D3.js', 'Express', 'MongoDB'],
    gradient: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || projects[0]}
      />
      
      <section
      id="projects"
      className="relative min-h-screen flex items-start justify-center px-4 bg-gradient-to-b from-[#050b15] via-[#0a1220] to-[#050b15]"
    >
      <ParticleBackground particleCount={39} colorFrom="from-[#d946ef]" colorTo="to-blue-400" fadeDirection="both" />
      
      {/* Seamless blend overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#050b15] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#050b15] pointer-events-none z-10" />
      
      <div ref={ref} className="max-w-7xl w-full relative z-10 pt-[7.5rem]">
        {/* Yellow box to highlight spacing above title - invisible but spacing preserved */}
        <div className="absolute top-0 left-0 right-0 h-[7.5rem] pointer-events-none z-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.152 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-white">My </span>
            <span className="text-blue-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            A collection of my recent work and side projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.24 + index * 0.12 }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#e879f9]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#e879f9]/20"
            >
              {/* Project Image */}
              <div 
                className="relative h-48 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 blur-sm"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Learn More
                  </button>
                  <button className="flex items-center gap-2 text-[#e879f9] hover:text-[#f0abfc] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Green box to highlight spacing at bottom - invisible but spacing preserved */}
        <div className="h-[3.75rem] pointer-events-none mt-8" />
      </div>
    </section>
    </>
  );
}

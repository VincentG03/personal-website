'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ParticleBackground from './ParticleBackground';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Data Science Handbook',
    description: 'A comprehensive Jupyter Notebook reference guide for essential data science operations in Python, featuring detailed syntax examples and practical applications using Pandas, Matplotlib, and SQL.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    features: [
      'Complete Pandas reference covering data import/export, exploration, manipulation, and transformation',
      'Matplotlib visualisation examples including scatter plots, histograms, bar charts, and heatmaps',
      'SQL syntax guide for queries, joins, aggregations, and string/date manipulation',
      'Practical examples using the Titanic dataset demonstrating real-world data analysis workflows',
      'Organised reference structure with clear explanations and usage examples for each function'
    ],
    implementation: 'Built as interactive Jupyter Notebooks (.ipynb) providing hands-on examples with the Titanic dataset from Kaggle. The handbook covers comprehensive Pandas operations from data import (read_csv, read_json, read_table) through exploration (head, tail, describe, info), missing data handling (dropna, fillna), data selection (loc, iloc), transformation (apply, replace, melt), sorting, merging, grouping, and string/date manipulation. Matplotlib section demonstrates various visualisation types with clear use cases. SQL section provides syntax reference for querying, joins, aggregations, and data manipulation.',
    challenges: 'The main challenge was structuring a comprehensive reference that balances breadth and depth while remaining accessible. Organised content into logical sections (importing, exploration, missing data, selection, transformation, etc.) with consistent formatting. Each method includes purpose, parameters, and usage examples. Used the Titanic dataset throughout to provide continuity and practical context. Kept examples concise while demonstrating key functionality, making it easy to find and apply specific syntax when needed.',
    githubUrl: 'https://github.com/VincentG03/Data-Science-Syntax'
  },
  {
    title: 'Sports Betting Arbitrage Program',
    description: 'A Python program that identifies arbitrage opportunities in sports betting markets by analysing real-time odds across multiple bookmakers and calculating optimal bet amounts to guarantee profit.',
    tech: ['Python', 'Pandas', 'The Odds API'],
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    features: [
      'Real-time odds comparison across multiple Australian bookmakers',
      'Automated arbitrage opportunity detection with implied probability calculations',
      'Optimal bet allocation calculator for guaranteed profit scenarios',
      'Customisable filters for pre-game vs live matches and detailed/summary output modes',
      'API call tracking system to monitor monthly usage limits'
    ],
    implementation: 'Built using Python with Pandas for efficient data manipulation and The Odds API for live sports betting odds. The program parses odds from multiple bookmakers, identifies the best odds for each outcome (including draw scenarios), and calculates implied probabilities. When the sum of implied probabilities is less than 1, an arbitrage opportunity exists. The system converts all times from UTC to AEDT, filters matches by commence time, and sorts opportunities by expected profit. Includes both live API integration and sample data testing modes.',
    challenges: 'The main challenge was handling edge cases such as matches with no bookmaker data, inconsistent draw odds across different sports, and timezone conversions between UTC and AEDT. Implemented robust error handling for API limits and created a flexible display system that can show detailed match-by-match results or only profitable arbitrage opportunities sorted by expected return. Optimised the calculation algorithms to process hundreds of matches efficiently within the API rate limits.',
    githubUrl: 'https://github.com/VincentG03/Sports-Betting-Arbitrage-Program'
  },
  {
    title: 'Victorian Housing Analysis (Coming Soon)',
    description: '',
    tech: [],
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
  },
  {
    title: 'My Finance Hub (Coming Soon)',
    description: '',
    tech: [],
    gradient: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
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
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#e879f9] hover:text-[#f0abfc] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Source Code
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-gray-500 cursor-not-allowed">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Source Code
                    </button>
                  )}
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

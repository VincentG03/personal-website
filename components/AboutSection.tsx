'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const skills = [
  {
    title: 'Full Stack Development',
    description: 'Experienced in building modern web applications with React, Node.js, and various databases.',
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing interfaces that users love.',
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description: 'Ensuring applications are fast, efficient, and scalable.',
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description: 'Working effectively in teams and communicating technical concepts clearly.',
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];


export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section
      id="about"
      className="relative flex items-start justify-center px-4 bg-gradient-to-b from-[#0a1220] via-[#050b15] to-[#0a1220]"
    >
      <ParticleBackground particleCount={46} colorFrom="from-blue-400" colorTo="to-[#d946ef]" fadeDirection="both" />
      
      {/* Seamless blend overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0a1220] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a1220] pointer-events-none z-10" />
      
      <div ref={ref} className="max-w-6xl w-full relative z-10 pt-[7.5rem]">
        {/* Yellow box to highlight spacing above title - invisible but spacing preserved */}
        <div className="absolute top-0 left-0 right-0 h-[7.5rem] pointer-events-none z-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.152 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-white">About </span>
            <span className="text-blue-400">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-center text-gray-400 mb-4 max-w-3xl mx-auto text-lg">
            I&apos;m a passionate developer who loves crafting elegant solutions to complex problems. With a strong foundation in both frontend and backend technologies, I specialize in building scalable applications that make a difference.
          </p>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
            <span className="text-[#d946ef] font-semibold">Bachelor of Computer Science</span> graduate from Monash University with a focus on software engineering and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.36 + index * 0.12 }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-[#e879f9]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#e879f9]/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-[#d946ef]/20 flex items-center justify-center text-blue-400 group-hover:text-[#e879f9] transition-colors">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Green box to highlight spacing at bottom - invisible but spacing preserved */}
        <div className="h-[3.75rem] pointer-events-none mt-8" />
      </div>
    </section>
  );
}

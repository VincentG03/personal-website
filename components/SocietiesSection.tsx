'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const societies = [
  {
    club: 'Computer Science Society',
    role: 'President',
    description: 'Led the largest technical society on campus, organizing hackathons, workshops, and networking events for 500+ members. Managed a team of 15 executives and coordinated with industry partners.',
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
      </svg>
    ),
  },
  {
    club: 'Entrepreneurship Club',
    role: 'Vice President',
    description: 'Organized startup pitch competitions and mentorship programs connecting students with founders. Grew club membership by 200% and secured partnerships with local accelerators.',
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
  },
  {
    club: 'Hackathon Society',
    role: 'Technical Lead',
    description: 'Coordinated technical logistics for 24-hour hackathons with 200+ participants. Mentored teams on project development and judged final presentations.',
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    ),
  },
  {
    club: 'Design Collective',
    role: 'Member',
    description: 'Collaborated with designers and developers on creative projects. Participated in design sprints and contributed to open-source design systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
    ),
  },
];

export default function SocietiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section
      id="societies"
      className="relative flex items-start justify-center px-4 bg-gradient-to-b from-[#050b15] via-[#0a1220] to-[#050b15]"
    >
      <ParticleBackground particleCount={39} colorFrom="from-[#d946ef]" colorTo="to-blue-400" fadeDirection="both" />
      
      {/* Seamless blend overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#050b15] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#050b15] pointer-events-none z-10" />
      
      <div ref={ref} className="max-w-6xl w-full relative z-10 pt-[7.5rem]">
        {/* Yellow box to highlight spacing above title - invisible but spacing preserved */}
        <div className="absolute top-0 left-0 right-0 h-[7.5rem] pointer-events-none z-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.152 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-white">Student </span>
            <span className="text-blue-400">
              Societies
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Leadership roles and contributions to campus organizations and communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {societies.map((society, index) => (
            <motion.div
              key={society.club}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.24 + index * 0.12 }}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-[#e879f9]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#e879f9]/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-[#d946ef]/20 flex items-center justify-center text-blue-400 group-hover:text-[#e879f9] transition-colors border border-blue-500/30">
                  {society.icon}
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white mb-1">{society.club}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20">
                      {society.role}
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">{society.description}</p>
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

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const societies = [
  {
    club: 'InvestEd Students\' Collective',
    role: 'Publications Lead',
    period: 'Jun 2024',
    endPeriod: 'Oct 2025',
    logo: '/images/InvestEd.jpeg',
    description: 'LinkedIn finance content, scaling the follower base from 30 to 550+ within a year. Led an "Investing 101" workshop for 40+ students, mentoring participants on pitching portfolios for diverse investor personas to improve campus financial literacy.',
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    club: 'Monash DeepNeuron',
    role: 'Industry Representative',
    period: 'Mar 2024',
    endPeriod: 'Mar 2025',
    logo: '/images/MDN.jpeg',
    description: 'Secured industry sponsorships and coordinated major events, including MCing a networking night featuring eight firms like Deloitte and Telstra. Facilitated 160+ student enrolments into industry programs through strategic stakeholder engagement.',
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    ),
  },
  {
    club: '180 Degrees Consulting',
    role: 'Project Consultant',
    period: 'Feb 2024',
    endPeriod: 'Dec 2024',
    logo: '/images/180DC.jpg',
    description: 'Received the "Best Speaker" award for pro-bono consulting performance. Pitched and executed a digital transformation for a refugee support organisation, migrating their management operations to Monday.com to enhance operational efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
  },
  {
    club: 'Monash Student Managed Fund',
    role: 'Investment Analyst',
    period: 'Jul 2023',
    endPeriod: 'Feb 2024',
    logo: '/images/MSMF.jpeg',
    description: 'Conducted industrials sector equity research using trading comparables, PEST, and SWOT frameworks. Delivered a QAN equity report and pitch at MSMF Pitch Night, later validated by a Bloomberg 76.5% buy rating three months post-conclusion.',
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
      </svg>
    ),
  },
];

const competitions = [
  {
    title: 'Global Case Competition 2024',
    date: 'Oct 2024',
    position: '1st Place',
  },
  {
    title: 'National Coding Challenge',
    date: 'Jun 2024',
    position: 'Semi-Finalist',
  },
  {
    title: 'Business Strategy Case Study',
    date: 'Mar 2024',
    position: 'Top 10',
  },
  {
    title: 'Data Science Hackathon',
    date: 'Sep 2024',
    position: '2nd Place',
  },
  {
    title: 'Finance Case Competition',
    date: 'Jul 2024',
    position: 'Finalist',
  },
  {
    title: 'Innovation Challenge',
    date: 'May 2024',
    position: '3rd Place',
  },
  {
    title: 'Investment Pitch Competition',
    date: 'Apr 2024',
    position: 'Winner',
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
            <span className="text-white">Extracurricular </span>
            <span className="text-blue-400">
              Leadership
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Leadership roles and competition achievements across campus organisations.
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
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-gray-700">
                  {society.logo ? (
                    <img 
                      src={society.logo} 
                      alt={`${society.club} logo`} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    society.icon
                  )}
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white mb-1">{society.club}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block px-3 py-1 bg-[#d946ef]/10 text-[#d946ef] rounded-full text-xs font-semibold border border-[#d946ef]/20">
                        {society.role}
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20">
                        {society.period} - {society.endPeriod}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">{society.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, delay: 0.72 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-white">Competition </span>
            <span className="text-blue-400">Achievements</span>
          </h3>
          
          {/* Scrollable container */}
          <div className="relative overflow-x-auto pb-4 scrollbar-custom">
            <div className="flex gap-6 min-w-max">
              {competitions.map((competition, index) => (
                <motion.div
                  key={competition.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.84 + index * 0.08 }}
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#e879f9]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#e879f9]/15 text-center w-[280px] flex-shrink-0"
                >
                  <h4 className="text-xl font-bold text-white mb-3">{competition.title}</h4>
                  <span className="inline-block px-3 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20 mb-4">
                    {competition.date}
                  </span>
                  <div className="text-2xl font-bold text-[#d946ef] mt-2">
                    {competition.position}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Green box to highlight spacing at bottom - invisible but spacing preserved */}
        <div className="h-[3.75rem] pointer-events-none mt-8" />
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: 'Jan 2022',
    endPeriod: 'Present',
    logo: '/logos/tech-innovations.png',
    description: 'Leading development of cloud-native applications and mentoring junior developers. Architected scalable solutions serving millions of users.',
    highlights: [
      'Reduced application load time by 60% through implementing advanced caching strategies and optimizing database queries across microservices architecture',
      'Led and mentored a team of 5 engineers, conducting code reviews and establishing best practices that improved code quality metrics by 40%',
      'Implemented comprehensive CI/CD pipeline using GitHub Actions and Docker, reducing deployment time from hours to minutes while maintaining 99.9% uptime',
    ],
  },
  {
    company: 'Growth Startup LLC',
    roles: [
      {
        role: 'Engineering Manager',
        period: 'Jun 2021',
        endPeriod: 'Dec 2021',
        description: 'Promoted to lead the engineering team. Managed technical roadmap and team growth.',
        highlights: [
          'Grew engineering team from 3 to 10 members by developing comprehensive hiring process and conducting 50+ technical interviews',
          'Established code review process and quality standards that reduced production bugs by 65% while accelerating feature delivery',
          'Increased team velocity by 40% through implementing agile methodologies and removing process bottlenecks',
        ],
      },
      {
        role: 'Senior Developer',
        period: 'Mar 2020',
        endPeriod: 'May 2021',
        description: 'Led key feature development and mentored junior developers.',
        highlights: [
          'Shipped 5 major features including real-time collaboration tools and advanced search functionality that increased user engagement by 35%',
          'Mentored 3 junior developers through pair programming sessions and weekly knowledge sharing, accelerating their growth to mid-level positions',
          'Improved test coverage from 45% to 85% by implementing automated testing strategies and training team on TDD practices',
        ],
      },
      {
        role: 'Software Developer',
        period: 'Jan 2019',
        endPeriod: 'Feb 2020',
        description: 'Contributed to core product development and infrastructure improvements.',
        highlights: [
          'Built secure authentication system with OAuth2 and JWT supporting 100k+ users with zero security incidents',
          'Optimized complex database queries and implemented proper indexing strategies, reducing average API latency by 50% across all endpoints',
          'Reduced API response times from 800ms to 400ms by refactoring inefficient code and implementing Redis caching layer',
        ],
      },
    ],
    logo: '/logos/growth-startup.png',
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: 'Jun 2017',
    endPeriod: 'Dec 2018',
    logo: '/logos/digital-solutions.png',
    description: 'Developed and maintained multiple client-facing web applications using modern JavaScript frameworks and cloud services.',
    highlights: [
      'Built and deployed 10+ production applications using React, Node.js, and AWS, serving over 50,000 daily active users',
      'Improved code quality metrics by implementing ESLint, Prettier, and comprehensive unit testing resulting in 70% fewer production bugs',
      'Integrated Stripe payment processing system handling $2M+ in annual transactions with PCI compliance and fraud detection',
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-start justify-center px-4 bg-gradient-to-b from-[#0a1220] via-[#050b15] to-[#0a1220]"
    >
      <ParticleBackground particleCount={46} colorFrom="from-blue-400" colorTo="to-purple-400" fadeDirection="both" />
      
      {/* Seamless blend overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0a1220] to-transparent pointer-events-none z-10" />
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
            <span className="text-white">Work </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            My professional journey building impactful products and leading teams.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.24 + index * 0.24 }}
              className="relative"
            >
              {/* Single role company */}
              {exp.role && (
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700 flex items-center justify-center overflow-hidden">
                        <svg className="w-12 h-12 text-blue-400/40" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-lg text-purple-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold whitespace-nowrap self-start">
                          {exp.period} - {exp.endPeriod}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="grid md:grid-cols-1 gap-3">
                        {exp.highlights?.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-400 text-base">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Multi-role company (promotions) */}
              {exp.roles && (
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700 flex items-center justify-center overflow-hidden">
                        <svg className="w-12 h-12 text-blue-400/40" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">{exp.company}</h3>
                        <p className="text-gray-400 text-sm">Multiple roles through career progression</p>
                      </div>

                      {/* Individual roles */}
                      <div className="space-y-6">
                        {exp.roles.map((role, roleIndex) => (
                          <div 
                            key={roleIndex}
                            className="ml-0 md:ml-6 pl-6 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors"
                          >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                              <h4 className="text-xl font-bold text-white">{role.role}</h4>
                              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold whitespace-nowrap self-start">
                                {role.period} - {role.endPeriod}
                              </span>
                            </div>
                            
                            <p className="text-gray-300 mb-3 text-base leading-relaxed">{role.description}</p>
                            
                            <div className="grid md:grid-cols-1 gap-2">
                              {role.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start gap-2">
                                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  <span className="text-gray-400 text-base">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Green box to highlight spacing at bottom - invisible but spacing preserved */}
        <div className="h-[3.75rem] pointer-events-none mt-8" />
      </div>
    </section>
  );
}

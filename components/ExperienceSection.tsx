'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const experiences = [
  {
    role: 'Business Analyst Intern',
    company: 'Jetstar',
    period: 'Jun 2025',
    endPeriod: 'Nov 2025',
    logo: '/images/Jetstar.jpeg',
    description: 'Coordinated cross-functional teams and translated business requirements into technical solutions for digital initiatives.',
    highlights: [
      'Led the end to end delivery of the Mishandled Baggage (MHB) digital initiative, introducing an in app reporting pathway within the Jetstar mobile app and coordinating work across designers, content writers and multiple development teams.',
      'Owned the full delivery lifecycle for the MHB initiative, from discovery through to delivery, and post release maintenance, with the feature reaching thousands of customers within three weeks, including 479 active users across 20 plus airports.',
      'Contributed to the delivery of 4 initiatives over the internship by translating business requirements into clear user stories, acceptance criteria and functional documentation, authoring and actively contributing to 60+ Jira tickets during my internship.',
    ],
  },
  {
    role: 'Data and Analytics Intern',
    company: 'Aurecon',
    period: 'Nov 2024',
    endPeriod: 'Feb 2025',
    logo: '/images/Aurecon.webp',
    description: 'Automated data workflows and developed analytics solutions to improve operational efficiency across projects.',
    highlights: [
      'Developed Python scripts (pandas, numpy, regex, re, openpyxl, os) to automate the extraction and transformation of ~260 Excel spreadsheets for a transport company, enabling SMEs to consolidate the data into a single CSV file for importing into an IRMS.',
      'Automated project data collection for 5 project managers across 15+ projects using Power Automate, streamlining email table data extraction and trigger-based workflows to ensure seamless monthly reporting.',
      'Pitched a comprehensive vertical infrastructure strategy to judges on transforming the upcoming SRL East Monash University station into a vibrant precinct beyond just a transportation hub and won the "State Government Award".',
    ],
  },
  {
    role: 'Treasury and Capital Markets Intern',
    company: 'Deloitte',
    period: 'June 2024',
    endPeriod: 'Jul 2024',
    logo: '/images/Deloitte.jpg',
    description: 'Supported financial analysis and valuation projects for ASX-listed clients, developing models and conducting technical assessments.',
    highlights: [
      'Updated the credit rating model to align with Moody\'s 2024 updates, improving accuracy for analysts who utilise it across 80+ ASX200 clients annually for credit rating and rTSR analysis.',
      'Conducted fair value and rTSR calculations for share-based payment contracts using Excel models and Deloitte\'s SBP tool to support financial reporting for ASX100 clients.',
      'Built a custom financial model to value a reward and incentive plan, providing analysts with a baseline tool that significantly improved efficiency by saving time.',
    ],
  },
  {
    company: 'Artin Education',
    roles: [
      {
        role: 'Mathematics Tutor',
        period: 'Feb 2023',
        endPeriod: 'Jan 2025',
        description: 'Delivered high-quality mathematics education.',
        showDescription: true,
        highlights: [
          'Expanded class sizes from 12 to 25+ students by conducting initial consultations and assessments, achieving a 90% enrolment rate and 100% term-to-term retention through proactive relationship management.',
          'Managed an 8 member team, ensuring key milestones were achieved and projects were delivered in a timely manner.',
          'Led the creation of topic tests and term tests for all classes, ensuring comprehensive assessment coverage.',
        ],
      },
      {
        role: 'Team Leader',
        period: 'Nov 2022',
        endPeriod: 'Apr 2023',
        description: 'Coordinated team operations and supervised educational program delivery.',
        highlights: [
          'Contributed to 110 plus individual content documents, supporting the completion of the Year 9, Year 10 and VCE General Mathematics curriculum.',
        ],
      },
      {
        role: 'Administrative Officer',
        period: 'Dec 2021',
        endPeriod: 'Nov 2022',
        description: 'Managed administrative functions.',
        showDescription: false,
        highlights: [
          'Collaborated within the Materials Development team to create tutorial notes, homework questions, bound reference material and revision content for Year 7 to VCE Mathematics.',
        ],
      },
    ],
    logo: '/images/Artin.jpeg',
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
      <ParticleBackground particleCount={46} colorFrom="from-blue-400" colorTo="to-[#d946ef]" fadeDirection="both" />
      
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
            <span className="text-blue-400">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
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
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#e879f9]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#e879f9]/15">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white border border-gray-700 flex items-center justify-center overflow-hidden p-2">
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <svg className="w-12 h-12 text-blue-400/40" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-lg text-[#d946ef] font-semibold">{exp.company}</p>
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
              {exp.roles && exp.roles.length > 0 && (
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#e879f9]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#e879f9]/15">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white border border-gray-700 flex items-center justify-center overflow-hidden p-2">
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <svg className="w-12 h-12 text-blue-400/40" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Most recent role - displayed like single role */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.roles[0].role}</h3>
                          <p className="text-lg text-[#d946ef] font-semibold">{exp.company}</p>
                        </div>
                        <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold whitespace-nowrap self-start">
                          {exp.roles[0].period} - {exp.roles[0].endPeriod}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.roles[0].description}</p>
                      
                      <div className="grid md:grid-cols-1 gap-3 mb-6">
                        {exp.roles[0].highlights?.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-400 text-base">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Previous roles - shown below with left border */}
                      {exp.roles.length > 1 && (
                        <div className="space-y-4 mt-6">
                          {exp.roles.slice(1).map((role, roleIndex) => (
                            <div 
                              key={roleIndex}
                              className="pl-6 border-l-2 border-[#e879f9]/30 hover:border-[#e879f9]/70 transition-colors"
                            >
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                                <h4 className="text-xl font-bold text-white">{role.role}</h4>
                                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold whitespace-nowrap self-start">
                                  {role.period} - {role.endPeriod}
                                </span>
                              </div>
                              {role.highlights && role.highlights.length > 0 && (
                                <>
                                  <p className="text-gray-300 mb-2 text-base leading-relaxed">{role.description}</p>
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
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
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

'use client';

import { motion } from 'framer-motion';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#050b15] via-[#0d1a30] to-[#0a1220]"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a30]/30 via-[#8b2f7e]/20 to-[#0d1a30]/30 z-0" />
      
      {/* Seamless blend overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0a1220] pointer-events-none z-10" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(33)].map((_, i) => {
          const moveX = Math.random() * 120 - 60;
          const moveY = Math.random() * 120 - 60;
          const moveX2 = Math.random() * 80 - 40;
          const moveY2 = Math.random() * 80 - 40;
          
          return (
            <motion.div
              key={i}
              className="absolute bg-blue-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
              }}
              animate={{
                x: [0, moveX, moveX2, 0],
                y: [0, moveY, moveY2, 0],
                opacity: [0.4, 0.8, 0.5, 0.4],
                scale: [1, 1.3, 0.9, 1],
              }}
              transition={{
                duration: (3 + Math.random() * 2) * 1.2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Portrait Image */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3824, delay: 0.3456 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            {/* Placeholder for portrait image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-[#d946ef] opacity-20 blur-2xl animate-pulse-slow" />
            <div className="relative w-full h-full rounded-full border-4 border-blue-500/30 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              {/* Replace this div with your image:
                  <img src="/your-portrait.jpg" alt="Vincent Giang" className="w-full h-full object-cover" />
              */}
              <div className="text-center">
                <svg className="w-32 h-32 text-blue-400/30 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-gray-500 mt-2">Add your portrait here</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Text Content */}
        <div className="order-1 md:order-2 md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3824, delay: 0.3456 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-blue-400">
                Vincent Giang
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3824, delay: 0.6912 }}
          >
            Developer • Creator • Problem Solver
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3824, delay: 0.864 }}
          >
            Turning coffee into code and ideas into reality. 
            I build things that make people&apos;s lives easier, one pixel at a time. 🚀
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center md:justify-start flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3824, delay: 1.0368 }}
          >
            <a
              href="/resume.pdf"
              download="Vincent_Giang_Resume.pdf"
              className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-gray-700/50"
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2.16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
    </section>
  );
}

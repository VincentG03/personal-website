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
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-[#d946ef] opacity-60 blur-[80px] animate-pulse-slow" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-[#e879f9] opacity-50 blur-[60px]" />
            <div className="relative w-full h-full rounded-full border-4 border-blue-500/30 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
              <img src="/images/Vincent Photo.png" alt="Vincent Giang" className="w-full h-full object-cover" />
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
            Curious • Problem Solver • Impact-Oriented
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3824, delay: 0.864 }}
          >
            Fueled by coffee and driven by curiosity, I use data to solve meaningful problems 
            and deliver measurable impact. 🚀
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center md:justify-start flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3824, delay: 1.0368 }}
          >
            <a
              href="https://www.linkedin.com/in/vincentgiang/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Let's Get in Touch!
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

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#050b15] via-[#0a1220] to-[#050b15] overflow-hidden"
    >
      {/* Animated particles forming spiral */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => {
          const angle = (i / 50) * Math.PI * 2;
          const radius = 150 + (progress / 100) * 200;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)`,
                filter: 'blur(1px)',
              }}
              animate={{
                x: [0, x],
                y: [0, y],
                scale: [0, 1, 0.5],
                opacity: [0, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.02,
              }}
            />
          );
        })}
      </div>

      {/* Central glowing orb */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl absolute inset-0 animate-pulse" />
        <div className="w-32 h-32 rounded-full border-4 border-blue-500/30 flex items-center justify-center relative">
          <motion.div
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            VG
          </motion.div>
        </div>
      </motion.div>

      {/* Loading text and progress */}
      <motion.div
        className="absolute bottom-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-gray-400 mb-4 text-sm tracking-widest">LOADING</div>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="text-gray-500 mt-2 text-xs">{progress}%</div>
      </motion.div>
    </motion.div>
  );
}

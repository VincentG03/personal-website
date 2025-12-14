'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  colorFrom?: string; // Tailwind color class
  colorTo?: string; // Tailwind color class
  fadeDirection?: 'top' | 'bottom' | 'both';
}

export default function ParticleBackground({
  particleCount = 30,
  colorFrom = 'from-purple-400',
  colorTo = 'to-blue-400',
  fadeDirection = 'both',
}: ParticleBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3, // 3-9px
      duration: Math.random() * 25 + 20, // 20-45s for more varied movement
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  const getOpacityClass = (y: number) => {
    if (fadeDirection === 'top') {
      // Fade out at the top
      return y < 20 ? 'opacity-40' : 'opacity-70';
    } else if (fadeDirection === 'bottom') {
      // Fade out at the bottom
      return y > 80 ? 'opacity-40' : 'opacity-70';
    } else {
      // Fade out at both top and bottom
      if (y < 20 || y > 80) return 'opacity-30';
      if (y < 35 || y > 65) return 'opacity-50';
      return 'opacity-70';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => {
        // Generate random movement path - doubled range (100% increase)
        const moveX = Math.random() * 120 - 60; // -60 to 60 (was -30 to 30)
        const moveY = Math.random() * 120 - 60; // -60 to 60 (was -30 to 30)
        const moveX2 = Math.random() * 80 - 40; // -40 to 40 (was -20 to 20)
        const moveY2 = Math.random() * 80 - 40; // -40 to 40 (was -20 to 20)
        
        return (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-br ${colorFrom} ${colorTo} ${getOpacityClass(particle.y)}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              filter: 'blur(1px)',
            }}
            animate={{
              x: [0, moveX, moveX2, 0],
              y: [0, moveY, moveY2, 0],
              scale: [1, 1.3, 0.9, 1],
              opacity: [0.4, 0.8, 0.5, 0.4],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}

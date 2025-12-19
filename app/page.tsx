'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SocietiesSection from '@/components/SocietiesSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Ensure the page loads properly
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.main 
      className="relative"
      initial={{ opacity: 0, backgroundColor: '#000000' }}
      animate={{ opacity: 1, backgroundColor: 'transparent' }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SocietiesSection />
      <ProjectsSection />
      <Footer />
    </motion.main>
  );
}

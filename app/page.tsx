'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SocietiesSection from '@/components/SocietiesSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the page loads properly
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <HomeSection />
          <AboutSection />
          <ExperienceSection />
          <SocietiesSection />
          <ProjectsSection />
          <Footer />
        </motion.main>
      )}
    </>
  );
}

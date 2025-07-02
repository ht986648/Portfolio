import React, { useEffect } from 'react';
import Navigation from './layout/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ScrollProgress from './ScrollProgress';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const Portfolio = () => {
  useSmoothScroll();
  useScrollAnimations();

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      
      {/* Parallax background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="parallax-bg absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
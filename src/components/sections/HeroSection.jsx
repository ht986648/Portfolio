import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { Button } from '../ui/button';
import MagneticButton from '../MagneticButton';
import ScrollReveal from '../ScrollReveal';

const HeroSection = () => {
  const heroRef = useRef(null);
  const avatarRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced floating animation for avatar
      gsap.to(avatarRef.current, {
        y: -20,
        rotationX: 5,
        rotationY: 5,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Gradient animation
      gsap.to(avatarRef.current, {
        background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
        backgroundSize: "300% 300%",
        duration: 4,
        ease: "none",
        repeat: -1,
        yoyo: true
      });

      // Text reveal animation
      gsap.fromTo('.hero-text', {
        y: 100,
        opacity: 0,
        rotationX: 90
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 0.5
      });

      // Button entrance animation
      gsap.fromTo('.hero-button', {
        y: 50,
        opacity: 0,
        scale: 0.8
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 1.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl float-element"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl float-element"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl float-element"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <ScrollReveal delay={0.2}>
          <motion.div
            ref={avatarRef}
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl avatar-3d pulse-3d"
            whileHover={{ 
              scale: 1.1,
              rotateY: 15,
              rotateX: -10,
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            HT
          </motion.div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-text text-reveal">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent gradient-text">
              Himanshu Tiwari
            </span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6}>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 hero-text">
            Full-Stack Developer & Blockchain Enthusiast
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.8}>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed hero-text">
            B.Tech CSE student at IIIT Bhagalpur (2027) • 1000+ LeetCode problems solved • 
            Building the future with code and blockchain technology
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1.0}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <MagneticButton
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg button-3d hero-button px-6 py-3 rounded-lg"
            >
              <a
                href="https://github.com/ht986648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </MagneticButton>
            
            <MagneticButton
              asChild
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white button-3d glass-morphism hero-button px-6 py-3 rounded-lg border"
            >
              <a
                href="https://www.linkedin.com/in/himanshu-tiwari-97a738291/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </MagneticButton>
            
            <MagneticButton
              asChild
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white button-3d glass-morphism hero-button px-6 py-3 rounded-lg border"
            >
              <a href="mailto:himanshu.230101059@iiitbh.ac.in" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </MagneticButton>
            
            <MagneticButton className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white button-3d glass-morphism neon-glow hero-button px-6 py-3 rounded-lg border">
              <Download className="mr-2 h-5 w-5" />
              Resume
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1.2}>
          <div className="flex justify-center">
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/50 button-3d"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ 
                scale: 1.1,
                rotateX: 5,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
              }}
            >
              <ChevronDown size={32} />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </motion.section>
  );
};

export default HeroSection;
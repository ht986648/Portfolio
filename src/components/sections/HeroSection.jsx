import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection = () => {
  const heroRef = useRef(null);
  const avatarRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for avatar
      gsap.to(avatarRef.current, {
        y: -20,
        duration: 2,
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            ref={avatarRef}
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            HT
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Himanshu Tiwari
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            Full-Stack Developer & Blockchain Enthusiast
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            B.Tech CSE student at IIIT Bhagalpur (2027) • 1000+ LeetCode problems solved • 
            Building the future with code and blockchain technology
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href="https://github.com/ht986648"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <a
              href="https://www.linkedin.com/in/himanshu-tiwari-97a738291/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            <a href="mailto:himanshu.230101059@iiitbh.ac.in">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
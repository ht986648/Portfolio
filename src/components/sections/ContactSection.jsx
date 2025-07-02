import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import ScrollReveal from '../ScrollReveal';
import ParallaxSection from '../ParallaxSection';
import MagneticButton from '../MagneticButton';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Drop me a line anytime",
      value: "himanshu.230101059@iiitbh.ac.in",
      href: "mailto:himanshu.230101059@iiitbh.ac.in",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Check out my repositories",
      value: "@ht986648",
      href: "https://github.com/ht986648",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "Himanshu Tiwari",
      href: "https://www.linkedin.com/in/himanshu-tiwari-97a738291/",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const quickLinks = [
    { name: "LeetCode Profile", href: "https://leetcode.com/u/HimanshuTiwari206123/", icon: "🧩" },
    { name: "Codeforces Profile", href: "https://codeforces.com/profile/ht976648", icon: "⚡" },
    { name: "Resume/CV", href: "#", icon: "📄" },
    { name: "Portfolio Source", href: "https://github.com/ht986648", icon: "💻" }
  ];

  return (
    <ParallaxSection speed={0.05}>
      <section ref={ref} id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 reveal-section">
        <motion.div style={{ y }} className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-reveal">
                Get In <span className="text-blue-400 gradient-text">Touch</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 lg:mb-6 max-w-3xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's build something amazing together!
              </p>
            </div>
          </ScrollReveal>

          {/* Enhanced Responsive Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Contact Methods - Takes 3 columns on XL screens */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="xl:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 stagger-cards">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 30, rotateY: 45 }}
                      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="card-item h-full"
                    >
                      <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer h-full contact-card-3d glass-morphism">
                        <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col justify-between">
                          <div>
                            <motion.div 
                              className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                              whileHover={{ 
                                scale: 1.3,
                                rotateY: 15,
                                rotateX: -10,
                                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
                              }}
                            >
                              {method.icon}
                            </motion.div>
                            <CardTitle className="text-lg sm:text-xl mb-2 group-hover:text-blue-400 transition-colors">
                              {method.title}
                            </CardTitle>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{method.description}</p>
                          </div>
                          <MagneticButton
                            asChild
                            className="border-gray-600 hover:border-blue-500 hover:text-blue-400 button-3d glass-morphism px-3 sm:px-4 py-2 rounded-lg border text-gray-300 text-sm w-full"
                          >
                            <a
                              href={method.href}
                              target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                              Connect
                            </a>
                          </MagneticButton>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Info & Links - Takes 1 column on XL screens */}
            <ScrollReveal direction="right" delay={0.4}>
              <Card className="bg-gray-800/50 border-gray-700 h-full card-3d-tilt glass-morphism xl:col-span-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: 15,
                        rotateX: -10
                      }}
                    >
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </motion.div>
                    Quick Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Location</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">IIIT Bhagalpur, Bihar, India</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Status</h4>
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-green-400 text-xs sm:text-sm">Available for opportunities</span>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Quick Links</h4>
                    <div className="space-y-2">
                      {quickLinks.map((link, index) => (
                        <MagneticButton
                          key={link.name}
                          asChild
                          className="w-full justify-start text-gray-400 hover:text-blue-400 hover:bg-gray-700/50 nav-item-3d px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm"
                        >
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <motion.span 
                              className="text-base sm:text-lg"
                              whileHover={{ 
                                scale: 1.2,
                                rotateY: 15
                              }}
                            >
                              {link.icon}
                            </motion.span>
                            <span className="truncate">{link.name}</span>
                          </a>
                        </MagneticButton>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Enhanced Call to Action */}
          <ScrollReveal delay={0.6}>
            <div className="text-center">
              <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 card-3d glass-morphism neon-glow">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-white">
                    Ready to start a project together?
                  </h3>
                  <p className="text-gray-300 mb-6 lg:mb-8 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                    I'm currently available for freelance work, internships, and full-time opportunities. 
                    Let's discuss how we can bring your ideas to life!
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <MagneticButton
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg button-3d neon-glow px-6 py-3 rounded-lg text-sm sm:text-base"
                    >
                      <a href="mailto:himanshu.230101059@iiitbh.ac.in" className="flex items-center justify-center gap-2">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                        Send Email
                      </a>
                    </MagneticButton>
                    <MagneticButton
                      asChild
                      className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white button-3d glass-morphism px-6 py-3 rounded-lg border text-sm sm:text-base"
                    >
                      <a
                        href="https://www.linkedin.com/in/himanshu-tiwari-97a738291/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        Connect on LinkedIn
                      </a>
                    </MagneticButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          {/* Enhanced Footer */}
          <ScrollReveal delay={0.8}>
            <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400 mb-4 text-xs sm:text-sm lg:text-base">
                © 2025 Himanshu Tiwari. Built with React, Tailwind CSS, Framer Motion & GSAP
              </p>
              <div className="flex justify-center gap-4">
                <MagneticButton
                  asChild
                  className="text-gray-400 hover:text-blue-400 nav-item-3d px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
                >
                  <a href="#home">Back to Top</a>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>
    </ParallaxSection>
  );
};

export default ContactSection;
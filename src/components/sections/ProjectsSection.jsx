import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Award, Clock, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import ScrollReveal from '../ScrollReveal';
import ParallaxSection from '../ParallaxSection';
import MagneticButton from '../MagneticButton';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const projects = [
    {
      title: 'Contractify',
      description: 'Decentralized legal contract platform on Ethereum with IPFS storage, handling 500+ transactions with 98% verification accuracy. Revolutionary approach to legal document management.',
      longDescription: 'A comprehensive blockchain-based platform that revolutionizes legal contract management by leveraging Ethereum smart contracts and IPFS for secure, immutable document storage.',
      techStack: ['React.js', 'Node.js', 'Web3', 'Solidity', 'Pinata', 'IPFS'],
      github: 'https://github.com/ht986648',
      demo: 'https://contractify-frontend.onrender.com/',
      image: '📜',
      category: 'Blockchain',
      achievement: {
        icon: <Award className="h-4 w-4" />,
        text: '3rd Place - IIT Patna Hackathon',
        color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      },
      highlights: [
        { icon: <Zap className="h-4 w-4" />, text: '500+ transactions handled' },
        { icon: <Users className="h-4 w-4" />, text: '98% verification accuracy' },
        { icon: <Clock className="h-4 w-4" />, text: '40% faster deployment' }
      ],
      stats: { users: '200+', transactions: '500+', uptime: '99.9%' }
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce site with dynamic routing, product listings, shopping cart, and Stripe checkout. Features OAuth authentication and responsive design.',
      longDescription: 'Modern e-commerce platform built with Next.js 15, featuring advanced authentication, payment processing, and a seamless shopping experience.',
      techStack: ['Next.js 15', 'Prisma', 'NextAuth', 'Stripe', 'Tailwind CSS', 'shadcn/ui'],
      github: 'https://github.com/ht986648',
      demo: 'https://nextjs-ecommerce-seven-brown.vercel.app/',
      image: '🛒',
      category: 'Full-Stack',
      status: {
        text: 'In Development',
        color: 'bg-green-500/20 text-green-400 border-green-500/30'
      },
      highlights: [
        { icon: <Users className="h-4 w-4" />, text: 'OAuth Google/GitHub login' },
        { icon: <Zap className="h-4 w-4" />, text: 'Stripe payment integration' },
        { icon: <Clock className="h-4 w-4" />, text: 'Responsive UI design' }
      ],
      stats: { products: '100+', orders: '50+', rating: '4.8/5' }
    },
    {
      title: 'AI-powered Resume Builder',
      description: 'Intelligent resume builder with file uploads to AWS S3, semantic search capabilities, and real-time Q&A from user data using AI technologies.',
      longDescription: 'Advanced AI-powered platform that helps users create professional resumes with intelligent suggestions and semantic search capabilities.',
      techStack: ['Next.js', 'AWS S3', 'Pinecone', 'LangChain', 'OpenAI API', 'Drizzle'],
      github: 'https://github.com/ht986648',
      demo: 'https://ai-resume-builder-kappa-seven.vercel.app/',
      image: '🤖',
      category: 'AI/ML',
      highlights: [
        { icon: <Zap className="h-4 w-4" />, text: 'AI-powered document analysis' },
        { icon: <Users className="h-4 w-4" />, text: 'Vector embeddings storage' },
        { icon: <Clock className="h-4 w-4" />, text: 'Semantic search' }
      ],
      stats: { resumes: '300+', accuracy: '95%', speed: '2s avg' }
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with current conditions and 5-day forecasts for multiple cities. SEO-optimized with fast client-side routing.',
      longDescription: 'Comprehensive weather application providing accurate forecasts with beautiful UI and optimal performance.',
      techStack: ['Next.js', 'OpenWeather API', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/ht986648',
      demo: 'https://weather-app-nextjs-seven-rho.vercel.app/',
      image: '🌤️',
      category: 'Frontend',
      highlights: [
        { icon: <Clock className="h-4 w-4" />, text: 'Real-time weather data' },
        { icon: <Zap className="h-4 w-4" />, text: '5-day forecast' },
        { icon: <Users className="h-4 w-4" />, text: 'SEO optimization' }
      ],
      stats: { cities: '1000+', requests: '10k+', speed: '<1s' }
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Blockchain': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Full-Stack': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'AI/ML': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Frontend': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <ParallaxSection speed={0.1}>
      <section ref={ref} id="projects" className="py-20 px-4 bg-gray-800/30 reveal-section">
        <motion.div style={{ y }} className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-reveal">
                Featured <span className="text-blue-400 gradient-text">Projects</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Showcasing innovative solutions built with cutting-edge technologies
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 stagger-cards">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.2}>
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group h-full overflow-hidden project-card-3d glass-morphism card-item">
                  {/* Enhanced Project Header */}
                  <div className="relative p-6 text-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <motion.div 
                      className="text-4xl mb-3 group-hover:scale-110 transition-transform"
                      whileHover={{ 
                        scale: 1.3,
                        rotateY: 15,
                        rotateX: -10,
                        textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                      }}
                    >
                      {project.image}
                    </motion.div>
                    
                    {/* Enhanced Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Badge variant="outline" className={`${getCategoryColor(project.category)} holographic`}>
                        {project.category}
                      </Badge>
                      {project.achievement && (
                        <Badge variant="outline" className={`${project.achievement.color} holographic`}>
                          {project.achievement.icon}
                          <span className="ml-1 text-xs">{project.achievement.text}</span>
                        </Badge>
                      )}
                      {project.status && (
                        <Badge variant="outline" className={`${project.status.color} holographic`}>
                          {project.status.text}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    <CardTitle className="text-xl mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Enhanced Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.highlights.map((highlight, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-2 text-sm text-gray-400"
                            whileHover={{ 
                              x: 5,
                              color: "#60a5fa"
                            }}
                          >
                            <span className="text-blue-400">{highlight.icon}</span>
                            {highlight.text}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-4 bg-gray-700" />

                    {/* Enhanced Stats */}
                    <div className="mb-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <motion.div 
                            key={key} 
                            className="bg-gray-700/50 rounded-lg p-2 stat-card-3d"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(59, 130, 246, 0.1)"
                            }}
                          >
                            <div className="text-sm font-bold text-blue-400">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <motion.div
                            key={tech}
                            whileHover={{ 
                              scale: 1.1,
                              rotateY: 5,
                              rotateX: -5
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors holographic"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <MagneticButton
                        asChild
                        className="flex-1 border-gray-600 hover:border-blue-500 hover:text-blue-400 button-3d glass-morphism px-4 py-2 rounded-lg border text-gray-300"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </MagneticButton>
                      <MagneticButton
                        asChild
                        className="flex-1 bg-blue-600 hover:bg-blue-700 button-3d neon-glow px-4 py-2 rounded-lg text-white"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </MagneticButton>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Enhanced View More Projects Button */}
          <ScrollReveal delay={0.8}>
            <div className="text-center mt-12">
              <MagneticButton
                asChild
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white button-3d glass-morphism neon-glow px-8 py-3 rounded-lg border"
              >
                <a
                  href="https://github.com/ht986648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  View All Projects on GitHub
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>
    </ParallaxSection>
  );
};

export default ProjectsSection;
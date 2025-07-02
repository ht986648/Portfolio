import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ScrollReveal from '../ScrollReveal';
import ParallaxSection from '../ParallaxSection';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: 'React.js', icon: '⚛️', level: 'Expert' },
        { name: 'Next.js', icon: '▲', level: 'Advanced' },
        { name: 'Tailwind CSS', icon: '🎨', level: 'Expert' },
        { name: 'HTML/CSS', icon: '🌐', level: 'Expert' },
        { name: 'JavaScript', icon: '🟨', level: 'Expert' },
        { name: 'TypeScript', icon: '🔷', level: 'Advanced' }
      ]
    },
    backend: {
      title: "Backend",
      icon: "🚀",
      skills: [
        { name: 'Node.js', icon: '🟢', level: 'Advanced' },
        { name: 'Express', icon: '🚀', level: 'Advanced' },
        { name: 'REST APIs', icon: '🔌', level: 'Expert' },
        { name: 'GraphQL', icon: '🔗', level: 'Intermediate' },
        { name: 'Python', icon: '🐍', level: 'Advanced' },
        { name: 'C++', icon: '💻', level: 'Expert' }
      ]
    },
    database: {
      title: "Database & Cloud",
      icon: "💾",
      skills: [
        { name: 'Prisma', icon: '🔺', level: 'Advanced' },
        { name: 'Firebase', icon: '🔥', level: 'Advanced' },
        { name: 'SQL', icon: '💾', level: 'Expert' },
        { name: 'AWS S3', icon: '☁️', level: 'Intermediate' },
        { name: 'Vercel', icon: '🚀', level: 'Advanced' },
        { name: 'MongoDB', icon: '🍃', level: 'Advanced' }
      ]
    },
    blockchain: {
      title: "Blockchain & Web3",
      icon: "⛓️",
      skills: [
        { name: 'Solidity', icon: '💎', level: 'Advanced' },
        { name: 'Web3.js', icon: '🌐', level: 'Advanced' },
        { name: 'Ethers.js', icon: '⛓️', level: 'Advanced' },
        { name: 'Hardhat', icon: '🔨', level: 'Intermediate' },
        { name: 'IPFS', icon: '📁', level: 'Intermediate' },
        { name: 'Smart Contracts', icon: '📜', level: 'Advanced' }
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: 'OpenAI API', icon: '🤖', level: 'Advanced' },
        { name: 'LangChain', icon: '🔗', level: 'Intermediate' },
        { name: 'Pinecone', icon: '🌲', level: 'Intermediate' },
        { name: 'Vector Embeddings', icon: '🧠', level: 'Intermediate' },
        { name: 'RAG Systems', icon: '📚', level: 'Intermediate' },
        { name: 'Prompt Engineering', icon: '✨', level: 'Advanced' }
      ]
    },
    tools: {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: 'Git/GitHub', icon: '📝', level: 'Expert' },
        { name: 'Figma', icon: '🎨', level: 'Intermediate' },
        { name: 'Docker', icon: '🐳', level: 'Intermediate' },
        { name: 'Linux', icon: '🐧', level: 'Advanced' },
        { name: 'VS Code', icon: '💻', level: 'Expert' },
        { name: 'Postman', icon: '📮', level: 'Advanced' }
      ]
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Advanced': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <ParallaxSection speed={0.2}>
      <section ref={ref} id="skills" className="py-20 px-4 reveal-section">
        <motion.div style={{ y }} className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-reveal">
                Skills & <span className="text-blue-400 gradient-text">Technologies</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive toolkit for building modern, scalable applications
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-gray-800/50 mb-8 glass-morphism">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white nav-item-3d"
                  >
                    <span className="mr-2">{category.icon}</span>
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsContent key={key} value={key}>
                  <Card className="bg-gray-800/30 border-gray-700 card-3d glass-morphism">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <motion.span 
                          className="text-3xl"
                          whileHover={{ 
                            scale: 1.2,
                            rotateY: 15,
                            rotateX: -10
                          }}
                        >
                          {category.icon}
                        </motion.span>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger-cards">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                            transition={{ 
                              duration: 0.5, 
                              delay: index * 0.1,
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              rotateY: 8,
                              rotateX: -8,
                              transition: { duration: 0.2 }
                            }}
                            className="card-item"
                          >
                            <Card className="bg-gray-800/50 border-gray-600 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer skill-card-3d glass-morphism">
                              <CardContent className="p-4 text-center">
                                <motion.div 
                                  className="text-2xl mb-2 group-hover:scale-110 transition-transform"
                                  whileHover={{ 
                                    rotateY: 15,
                                    rotateX: -10,
                                    scale: 1.3
                                  }}
                                >
                                  {skill.icon}
                                </motion.div>
                                <h3 className="font-semibold mb-2 text-sm text-white group-hover:text-blue-400 transition-colors">
                                  {skill.name}
                                </h3>
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${getLevelColor(skill.level)} holographic`}
                                >
                                  {skill.level}
                                </Badge>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </ScrollReveal>

          {/* Enhanced Quick Stats */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 stagger-cards">
              <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 text-center stat-card-3d glass-morphism neon-glow card-item">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                  <p className="text-gray-300 text-sm">Technologies</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30 text-center stat-card-3d glass-morphism neon-glow card-item">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">4+</div>
                  <p className="text-gray-300 text-sm">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30 text-center stat-card-3d glass-morphism neon-glow card-item">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
                  <p className="text-gray-300 text-sm">Projects Built</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 text-center stat-card-3d glass-morphism neon-glow card-item">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
                  <p className="text-gray-300 text-sm">Skill Categories</p>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>
    </ParallaxSection>
  );
};

export default SkillsSection;
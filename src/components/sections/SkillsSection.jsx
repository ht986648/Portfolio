import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-gray-800/50 mb-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <span className="mr-2">{category.icon}</span>
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <Card className="bg-gray-800/30 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <span className="text-3xl">{category.icon}</span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Card className="bg-gray-800/50 border-gray-600 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
                            <CardContent className="p-4 text-center">
                              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                                {skill.icon}
                              </div>
                              <h3 className="font-semibold mb-2 text-sm text-white group-hover:text-blue-400 transition-colors">
                                {skill.name}
                              </h3>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getLevelColor(skill.level)}`}
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
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
              <p className="text-gray-300 text-sm">Technologies</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">4+</div>
              <p className="text-gray-300 text-sm">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
              <p className="text-gray-300 text-sm">Projects Built</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
              <p className="text-gray-300 text-sm">Skill Categories</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
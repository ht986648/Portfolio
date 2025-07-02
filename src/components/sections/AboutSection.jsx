import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Code, Trophy, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsRef = useRef(null);

  useEffect(() => {
    if (isInView && statsRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".stat-number", {
          textContent: 0,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.2
        });
      }, statsRef);

      return () => ctx.revert();
    }
  }, [isInView]);

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
      title: "3rd Place - IIT Patna Hackathon",
      description: "Secured 3rd position among 200+ teams with Contractify project",
      badge: "Hackathon Winner"
    },
    {
      icon: <Target className="h-6 w-6 text-orange-400" />,
      title: "8th Nationwide - Hackoona Matata",
      description: "Top 10 finish in IIIT Kottayam's national competition",
      badge: "National Rank"
    },
    {
      icon: <Zap className="h-6 w-6 text-green-400" />,
      title: "Top 1% Global - Engineering Ring",
      description: "Elite performance in international coding competition",
      badge: "Global Top 1%"
    },
    {
      icon: <Code className="h-6 w-6 text-blue-400" />,
      title: "1000+ Problems Solved",
      description: "Consistent problem-solving across multiple platforms",
      badge: "Coding Expert"
    }
  ];

  const stats = [
    { label: "Problems Solved", value: 1000, suffix: "+", color: "text-purple-400" },
    { label: "Current CGPA", value: 8.04, suffix: "", color: "text-green-400" },
    { label: "Major Projects", value: 4, suffix: "+", color: "text-orange-400" },
    { label: "Hackathon Rank", value: 3, suffix: "rd", color: "text-red-400" }
  ];

  const skills = [
    { name: "Problem Solving", level: 95 },
    { name: "Full-Stack Development", level: 90 },
    { name: "Blockchain Development", level: 85 },
    { name: "AI/ML Integration", level: 80 }
  ];

  return (
    <section ref={ref} id="about" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science and a drive for innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate B.Tech CSE student at IIIT Bhagalpur (Batch 2027) with strong expertise 
                  in full-stack development, blockchain technologies, and AI integration. Currently maintaining 
                  a CGPA of 8.04 while actively participating in competitive programming and hackathons.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With over 1000+ coding problems solved across platforms, I've secured top rankings in 
                  national competitions and hackathons. I specialize in building scalable applications 
                  and decentralized solutions that solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">IIIT Bhagalpur</Badge>
                  <Badge variant="secondary">CSE 2027</Badge>
                  <Badge variant="secondary">8.04 CGPA</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Core Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isInView ? skill.level : 0} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={stat.label} className="bg-gray-800/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  <span className="stat-number">{stat.value}</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-700 rounded-lg group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-white">{achievement.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {achievement.badge}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
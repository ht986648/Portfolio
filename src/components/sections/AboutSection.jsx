import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { Code, Trophy, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import ScrollReveal from '../ScrollReveal';
import ParallaxSection from '../ParallaxSection';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

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

        // Animate progress bars
        gsap.utils.toArray('.progress-bar').forEach((bar) => {
          const progress = bar.querySelector('.progress-fill');
          const percentage = progress.dataset.percentage;
          
          gsap.fromTo(progress,
            { width: '0%' },
            {
              width: `${percentage}%`,
              duration: 2,
              ease: "power2.out",
              delay: 0.5
            }
          );
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
    <ParallaxSection speed={0.3}>
      <section ref={ref} id="about" className="py-20 px-4 bg-gray-800/30 reveal-section">
        <motion.div style={{ y }} className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-reveal">
                About <span className="text-blue-400 gradient-text">Me</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Passionate developer with a strong foundation in computer science and a drive for innovation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 mb-16 stagger-cards">
            <ScrollReveal direction="left" delay={0.2}>
              <Card className="bg-gray-800/50 border-gray-700 h-full card-3d glass-morphism card-item">
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
                    <Badge variant="secondary" className="holographic">IIIT Bhagalpur</Badge>
                    <Badge variant="secondary" className="holographic">CSE 2027</Badge>
                    <Badge variant="secondary" className="holographic">8.04 CGPA</Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <Card className="bg-gray-800/50 border-gray-700 h-full card-3d-tilt glass-morphism card-item">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Core Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2 progress-bar">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="progress-fill h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          data-percentage={skill.level}
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Enhanced Stats Section */}
          <ScrollReveal delay={0.6}>
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 stagger-cards">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="bg-gray-800/50 border-gray-700 text-center stat-card-3d glass-morphism neon-glow card-item">
                  <CardContent className="p-6">
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                      <span className="stat-number">{stat.value}</span>
                      <span>{stat.suffix}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          {/* Enhanced Achievements Grid */}
          <ScrollReveal delay={0.8}>
            <div className="grid md:grid-cols-2 gap-6 stagger-cards">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group card-3d glass-morphism card-item">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-2 bg-gray-700 rounded-lg group-hover:scale-110 transition-transform"
                        whileHover={{ 
                          rotateY: 15,
                          rotateX: -10,
                          scale: 1.2,
                          boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                        }}
                      >
                        {achievement.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-white">{achievement.title}</h3>
                          <Badge variant="outline" className="text-xs holographic">
                            {achievement.badge}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>
      </section>
    </ParallaxSection>
  );
};

export default AboutSection;
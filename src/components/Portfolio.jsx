import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React.js', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
    { name: 'HTML/CSS', icon: '🌐', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Express', icon: '🚀', category: 'Backend' },
    { name: 'REST APIs', icon: '🔌', category: 'Backend' },
    { name: 'Prisma', icon: '🔺', category: 'Database' },
    { name: 'Firebase', icon: '🔥', category: 'Database' },
    { name: 'SQL', icon: '💾', category: 'Database' },
    { name: 'AWS S3', icon: '☁️', category: 'Cloud' },
    { name: 'Vercel', icon: '🚀', category: 'Cloud' },
    { name: 'Solidity', icon: '💎', category: 'Blockchain' },
    { name: 'Web3.js', icon: '🌐', category: 'Blockchain' },
    { name: 'Ethers.js', icon: '⛓️', category: 'Blockchain' },
    { name: 'Hardhat', icon: '🔨', category: 'Blockchain' },
    { name: 'IPFS', icon: '📁', category: 'Blockchain' },
    { name: 'C++', icon: '💻', category: 'Languages' },
    { name: 'JavaScript', icon: '🟨', category: 'Languages' },
    { name: 'Python', icon: '🐍', category: 'Languages' },
    { name: 'Git/GitHub', icon: '📝', category: 'Tools' },
    { name: 'Figma', icon: '🎨', category: 'Tools' },
    { name: 'OpenAI API', icon: '🤖', category: 'AI/ML' },
    { name: 'LangChain', icon: '🔗', category: 'AI/ML' },
    { name: 'Pinecone', icon: '🌲', category: 'AI/ML' }
  ];

  const projects = [
    {
      title: 'Contractify',
      description: 'Decentralized legal contract platform on Ethereum with IPFS storage, handling 500+ transactions with 98% verification accuracy. Secured 3rd place at IIT Patna Hackathon.',
      techStack: ['React.js', 'Node.js', 'Web3', 'Solidity', 'Pinata', 'IPFS'],
      github: 'https://github.com/ht986648',
      demo: '#',
      image: '📜',
      achievement: '🥉 3rd Place - IIT Patna Hackathon',
      highlights: ['500+ transactions handled', '98% verification accuracy', 'Zero data loss', '40% faster deployment']
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce site with dynamic routing, product listings, shopping cart, and Stripe checkout. Features OAuth authentication and responsive design.',
      techStack: ['Next.js 15', 'Prisma', 'NextAuth', 'Stripe', 'Tailwind CSS', 'shadcn/ui'],
      github: 'https://github.com/ht986648',
      demo: '#',
      image: '🛒',
      status: 'In Development',
      highlights: ['OAuth Google/GitHub login', 'Stripe payment integration', 'Responsive UI design', 'Database consistency']
    },
    {
      title: 'AI-powered Resume Builder',
      description: 'Intelligent resume builder with file uploads to AWS S3, semantic search capabilities, and real-time Q&A from user data using AI technologies.',
      techStack: ['Next.js', 'AWS S3', 'Pinecone', 'LangChain', 'OpenAI API', 'Drizzle'],
      github: 'https://github.com/ht986648',
      demo: '#',
      image: '🤖',
      highlights: ['AI-powered document analysis', 'Vector embeddings storage', 'Multi-auth options', 'Semantic search']
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with current conditions and 5-day forecasts for multiple cities. SEO-optimized with fast client-side routing.',
      techStack: ['Next.js', 'OpenWeather API', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/ht986648',
      demo: '#',
      image: '🌤️',
      highlights: ['Real-time weather data', '5-day forecast', 'SEO optimization', 'Fast loading']
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen min-w-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Himanshu Tiwari
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
              HT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Himanshu Tiwari
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Full-Stack Developer & Blockchain Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              B.Tech CSE student at IIIT Bhagalpur (2027) • 1000+ LeetCode problems solved • Blockchain & AI enthusiast
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://github.com/ht986648"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-tiwari-97a738291/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:himanshu.230101059@iiitbh.ac.in"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                I am a passionate B.Tech CSE student at IIIT Bhagalpur (Batch 2027) with strong expertise in full-stack development, blockchain technologies, and AI integration. Currently maintaining a CGPA of 8.04.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                With over 1000+ coding problems solved across platforms, I've secured top rankings in national competitions and hackathons. I specialize in building scalable applications and decentralized solutions.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Recent Achievements:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">🥉</span>
                    <span>3rd place at IIT Patna Hackathon (200+ teams)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">🏆</span>
                    <span>8th nationwide in Hackoona Matata (IIIT Kottayam)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">📊</span>
                    <span>Top 1% global ranking in Engineering Ring competition</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://leetcode.com/u/HimanshuTiwari206123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Code size={20} />
                  LeetCode Profile
                </a>
                <a
                  href="https://codeforces.com/profile/ht976648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <Code size={20} />
                  Codeforces Profile
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-purple-400">1000+</div>
                    <div className="text-gray-400">Problems Solved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">8.04</div>
                    <div className="text-gray-400">Current CGPA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400">4+</div>
                    <div className="text-gray-400">Major Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-400">3rd</div>
                    <div className="text-gray-400">IIT Patna Rank</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors group cursor-pointer"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-semibold mb-1 text-sm">{skill.name}</h3>
                <p className="text-xs text-gray-400">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="p-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 relative">
                  <div className="text-4xl mb-2">{project.image}</div>
                  {project.achievement && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                      {project.achievement}
                    </div>
                  )}
                  {project.status && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      {project.status}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Highlights:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new opportunities and interesting projects
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:himanshu.230101059@iiitbh.ac.in"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail size={32} className="text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">himanshu.230101059@iiitbh.ac.in</p>
            </a>
            
            <a
              href="https://github.com/ht986648"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github size={32} className="text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@ht986648</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/himanshu-tiwari-97a738291/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={32} className="text-green-400 mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Himanshu Tiwari. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
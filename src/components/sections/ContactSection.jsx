import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            I'm always open to discussing new opportunities and interesting projects
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <CardTitle className="text-lg mb-2 group-hover:text-blue-400 transition-colors">
                        {method.title}
                      </CardTitle>
                      <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-600 hover:border-blue-500 hover:text-blue-400"
                      >
                        <a
                          href={method.href}
                          target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Connect
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Location</h4>
                  <p className="text-gray-400 text-sm">IIIT Bhagalpur, Bihar, India</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Available for opportunities</span>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h4 className="font-semibold text-white mb-3">Quick Links</h4>
                  <div className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <Button
                        key={link.name}
                        asChild
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-400 hover:text-blue-400 hover:bg-gray-700/50"
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="mr-2">{link.icon}</span>
                          {link.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to start a project together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm currently available for freelance work, internships, and full-time opportunities. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="mailto:himanshu.230101059@iiitbh.ac.in">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                >
                  <a
                    href="https://www.linkedin.com/in/himanshu-tiwari-97a738291/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 mb-4">
            © 2025 Himanshu Tiwari. Built with React, Tailwind CSS, Framer Motion & shadcn/ui
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-blue-400"
            >
              <a href="#home">Back to Top</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
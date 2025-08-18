import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Coffee, Database, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-mono">
            <span className="text-gray-500">~/usr/</span>about<span className="text-yellow-400 animate-pulse">_</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-600 font-mono text-sm">
              <span className="text-green-400">$</span> <span className="text-white">cat ~/profile/README.md</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Profile Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-gray-900 px-4 py-3 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Terminal size={16} className="text-gray-400 ml-2" />
                  <span className="text-white font-mono text-sm">profile_viewer.exe</span>
                </div>
                <div className="text-xs text-gray-400 font-mono">~/Documents/dev</div>
              </div>

              {/* Profile Picture as ASCII Art */}
              <div className="p-6 font-mono text-sm">
                <div className="bg-gray-900 p-4 rounded border border-gray-600 mb-4">
                  <div className="text-green-400 mb-2">
                    <span className="text-gray-500">$</span> ./display_profile_image.sh
                  </div>
                  <div className="relative">
                    <img
                      src="https://avatars.githubusercontent.com/u/110713754?v=4"
                      alt="Developer Profile"
                      className="w-48 h-48 mx-auto rounded-lg border-2 border-green-400 shadow-lg"
                    />
                    <div className="absolute inset-0 bg-green-400 opacity-10 rounded-lg"></div>
                  </div>
                </div>

                {/* System Info */}
                <div className="space-y-2 text-xs">
                  <div className="text-green-400">
                    <span className="text-gray-500">➜</span> System Information:
                  </div>
                  <div className="ml-4 space-y-1 text-gray-300">
                    <div><span className="text-blue-400">OS:</span> Developer v2024.8</div>
                    <div><span className="text-blue-400">Uptime:</span> 3+ years of coding</div>
                    <div><span className="text-blue-400">Status:</span> <span className="text-green-400">Active & Learning</span></div>
                    <div><span className="text-blue-400">Location:</span> ~/home/passionate_coder</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code Documentation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Code Block Header */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between bg-gray-900 px-4 py-3 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Code size={16} className="text-blue-400 ml-2" />
                  <span className="text-white font-mono text-sm">developer_profile.js</span>
                </div>
                <div className="text-xs text-gray-400 font-mono">JavaScript</div>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-purple-400">
                    <span className="text-purple-400">class</span> <span className="text-yellow-400">DeveloperProfile</span> <span className="text-gray-400">{'{'}</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-blue-400">
                      <span className="text-blue-400">constructor</span><span className="text-gray-400">() {'{'}</span>
                    </div>
                    <div className="ml-4 space-y-1 text-gray-300">
                      <div><span className="text-red-400">this</span>.<span className="text-green-400">name</span> = <span className="text-orange-400">"Passionate Developer"</span>;</div>
                      <div><span className="text-red-400">this</span>.<span className="text-green-400">experience</span> = <span className="text-orange-400">"3+ Years"</span>;</div>
                      <div><span className="text-red-400">this</span>.<span className="text-green-400">passion</span> = <span className="text-orange-400">"Clean Code & Innovation"</span>;</div>
                      <div><span className="text-red-400">this</span>.<span className="text-green-400">status</span> = <span className="text-orange-400">"Always Learning"</span>;</div>
                    </div>
                    <div className="text-gray-400">{'}'}</div>
                  </div>
                  <div className="text-gray-400">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800 p-4 rounded border border-gray-700 font-mono text-sm">
              <div className="text-gray-500 mb-2"># About This Developer</div>
              <div className="text-gray-300 space-y-2">
                <p>I am a Computer Science Engineering student at Galgotias University with a passion for 
software development and open-source initiatives. Skilled in CPP, Java, Flutter, and design
 tools, I have experience in organizing hackathons, database engineering, and building 
innovative projects like the Google Gemini App prototype, a Chat App, and a QR Scanner.
 I thrive in collaborative environments and am committed to creating impactful tech solutions</p>
                <p className="text-blue-400"># When not coding:</p>
                <p>Exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Coffee, title: 'Experience', value: '1+ Years', command: 'uptime' },
                { icon: Star, title: 'Total Starts', value: '113', command: 'git log --oneline | wc -l' },
                { icon: Database, title: 'Commits', value: '654', command: 'git shortlog -s -n' }
              ].map(({ icon: Icon, title, value, command }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded border border-gray-700 overflow-hidden"
                >
                  {/* Mini Terminal Header */}
                  <div className="flex items-center bg-gray-900 px-3 py-2 border-b border-gray-700">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-4 text-center">
                    <Icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="font-mono text-xs text-gray-400 mb-1">$ {command}</div>
                    <h4 className="font-semibold text-white mb-1 font-mono">{title}</h4>
                    <p className="text-green-400 font-bold font-mono">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

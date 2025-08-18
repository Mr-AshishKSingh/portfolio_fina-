import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "cout << Hello !!;";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Matrix/Binary background effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 opacity-10">
        {['<div>', '</>', '{}', '[]', '=>', 'npm', 'git', 'const', 'function', 'class'].map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-400 font-mono text-lg"
            style={{
              left: `${10 + (i * 9)}%`,
              top: `${15 + (i * 7)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gray-800 rounded-lg border border-gray-700 shadow-2xl mb-8"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-gray-700 px-4 py-3 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Terminal size={16} />
              <span>developer@portfolio:~$</span>
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-left">
            <div className="text-green-400 mb-2">
              <span className="text-gray-500">$</span> whoami
            </div>
            <div className="text-white mb-4">Ashish Kumar Singh</div>
            
            <div className="text-green-400 mb-2">
              <span className="text-gray-500">$</span> cat profile.json
            </div>
            <div className="text-gray-300 mb-4 bg-gray-900 p-4 rounded border-l-4 border-primary-500">
              <div className="text-yellow-400">&#123;</div>
              <div className="ml-4 text-blue-400">"name"<span className="text-gray-400">:</span> <span className="text-green-300">"Ashish Kumar Singh"</span>,</div>
              <div className="ml-4 text-blue-400">"role"<span className="text-gray-400">:</span> <span className="text-green-300">"Software Engineer"</span>,</div>
              <div className="ml-4 text-blue-400">"location"<span className="text-gray-400">:</span> <span className="text-green-300">"Greater Noida"</span>,</div>
              <div className="ml-4 text-blue-400">"skills"<span className="text-gray-400">:</span> [<span className="text-green-300">"CPP"</span>, <span className="text-green-300">""</span>, <span className="text-green-300">"Python"</span>],</div>
              <div className="ml-4 text-blue-400">"status"<span className="text-gray-400">:</span> <span className="text-green-300">"Available for hire"</span></div>
              <div className="text-yellow-400">&#125;</div>
            </div>

            <div className="text-green-400 mb-2">
              <span className="text-gray-500">$</span> <span className="typing-animation">{text}</span>
              {showCursor && <span className="text-white animate-pulse">|</span>}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollToNext()}
            className="px-8 py-4 bg-green-600 text-gray-900 rounded-lg font-mono font-bold hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <Code size={20} />
            <span>./view_projects.sh</span>
          </button>
          <button
            onClick={() => window.open('#', '_blank')}
            className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-mono font-bold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Terminal size={20} />
            <span>download_cv.tar.gz</span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com/Mr-AshishKSingh', label: 'GitHub', command: 'git clone' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-kumar-singh-b1ab641a5/', label: 'LinkedIn', command: 'curl -L' },
            { icon: Mail, href: 'mailto:officialwork.ashish@gmail.com', label: 'Email', command: 'sendmail' },
        
          ].map(({ icon: Icon, href, label, command }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:bg-gray-800 rounded-lg border border-gray-700 hover:border-green-400"
              aria-label={label}
              whileHover={{ y: -5 }}
            >
              <Icon size={24} />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-green-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                {command}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Terminal Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-gray-500 font-mono text-sm"
        >
          Press <span className="text-green-400">↓</span> to continue or <span className="text-green-400">Ctrl+C</span> to exit
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-green-400 transition-colors duration-300"
      >
        <ArrowDown size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      skills: [
        { name: 'React.js', level: 90, command: 'npx create-react-app' },
        { name: 'TypeScript', level: 85, command: 'tsc --init' },
        { name: 'Next.js', level: 80, command: 'npx create-next-app' },
        { name: 'Tailwind CSS', level: 95, command: 'npm install tailwindcss' },
        { name: 'Vue.js', level: 75, command: 'npm create vue@latest' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      skills: [
        { name: 'Node.js', level: 85, command: 'node server.js' },
        { name: 'Python', level: 80, command: 'python main.py' },
        { name: 'Express.js', level: 90, command: 'npm install express' },
        { name: 'PostgreSQL', level: 75, command: 'psql -U postgres' },
        { name: 'MongoDB', level: 85, command: 'mongod --dbpath' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Terminal,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
      skills: [
        { name: 'Git', level: 95, command: 'git commit -m' },
        { name: 'Docker', level: 70, command: 'docker build -t' },
        { name: 'AWS', level: 75, command: 'aws s3 cp' },
        { name: 'Linux', level: 85, command: 'sudo systemctl' },
        { name: 'CI/CD', level: 80, command: 'github-actions' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-green-400">$</span> <span className="text-white">cat</span> <span className="text-blue-400">skills.json</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> My technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gray-900 rounded-lg p-6 border ${category.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105`}
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <IconComponent size={24} className={category.color} />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded ${category.bgColor} ${category.color} font-mono`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full"
                            style={{ 
                              backgroundColor: category.color.includes('blue') ? '#60a5fa' : 
                                             category.color.includes('green') ? '#4ade80' : '#facc15' 
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        {/* Terminal Command Tooltip */}
                        <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-green-400 text-xs px-2 py-1 rounded font-mono border border-gray-700">
                          {skill.command}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Terminal Footer */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-500 font-mono flex items-center space-x-2">
                    <span className="text-green-400">➜</span>
                    <span>~/skills/{category.title.toLowerCase().replace(' ', '-')}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-lg p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">developer.js</span>
          </div>
          
          <div className="font-mono text-sm">
            <div className="text-purple-400">const <span className="text-blue-400">developer</span> = &#123;</div>
            <div className="ml-4 text-green-400">name: <span className="text-yellow-300">'John Doe'</span>,</div>
            <div className="ml-4 text-green-400">passion: <span className="text-yellow-300">'Creating amazing digital experiences'</span>,</div>
            <div className="ml-4 text-green-400">motto: <span className="text-yellow-300">'Code, Learn, Repeat'</span>,</div>
            <div className="ml-4 text-green-400">getCurrentStatus(): <span className="text-blue-400">string</span> &#123;</div>
            <div className="ml-8 text-purple-400">return <span className="text-yellow-300">'Ready to build something awesome!'</span>;</div>
            <div className="ml-4">&#125;</div>
            <div className="text-purple-400">&#125;;</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

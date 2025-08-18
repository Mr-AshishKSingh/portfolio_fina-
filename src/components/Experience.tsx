import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Terminal, GitBranch } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Developer Relation',
      company: 'Mphasis',
      location: 'Delhi',
      period: '2025 - Present',
      description: 'Building a strong bridge between a company (or project) and the developer community.',
      achievements: [
        'Led a team of 5 developers in rebuilding the main platform',
        'Improved application performance by 40%',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: [ 'AWS',  'Docker'],
      website: '#',
      command: 'git log --author="ashish.singh" --oneline | wc -l'
    },
    {
      id: 2,
      title: 'Hackathon Organiser FOSS HACK 5.0',
      company: 'FossUnited',
      location: 'Remote',
      period: 'Feb - 2025',
      description: 'Organized OpenSource Hackathon',
      achievements: [
        'Served as a hackathon organizer'
      ],
      technologies: ['Team Management' , ' Fund Management ' , ' Stage management'],
      website: '#',
      command: 'hackathon organizer'
    },
    {
      id: 3,
      title: 'Campus Ambassador - IIT BOMBAY',
      company: 'IIT Bombay',
      location: 'Remote',
      period: 'Aug 2024 - Sept 2024',
      description: 'Worked as Campus Ambassador , helped in promoting about the ECELL of IIT Bombay',
      achievements: [
        'Being in the list of top 50 Ambassador out of 2400'
      ],
      technologies: ['Public Realtion ' , 'Task management'],
      website: '#',
      command: 'webpack --mode=production --optimize-minimize'
    },
    {
      id: 4,
      title: 'Campus Ambassador - FOSS HACK',
      company: 'FossUnited',
      location: 'Remote',
      period: 'Jul 2024 ',
      description: 'Managed Public Relation , helped in promoting Hackathon',
      achievements: [
       
        'Learned and implemented responsive design principles',
        'Collaborated effectively in an agile development environment'
      ],
      technologies: ['PR' , 'Public Promotion'],
      website: '#',
      command: 'php -S localhost:8000 index.php'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-green-400">$</span> <span className="text-white">cat</span> <span className="text-blue-400">work_history.log</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Professional journey and contributions to various organizations
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Git-style Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Git Commit Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-800 z-10 flex items-center justify-center">
                <GitBranch size={12} className="text-gray-900" />
              </div>

              {/* Terminal-Style Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-900 rounded-lg border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-t-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm font-mono">
                      <Terminal size={14} />
                      <span>{experience.company.toLowerCase().replace(/\s+/g, '-')}.workplace</span>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">{experience.period}</div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-mono">
                    {/* Job Title as Command */}
                    <div className="mb-4">
                      <div className="text-green-400 text-sm mb-1">
                        <span className="text-gray-500">$</span> whoami --role
                      </div>
                      <div className="text-white font-bold text-lg">{experience.title}</div>
                    </div>

                    {/* Company Info */}
                    <div className="mb-4">
                      <div className="text-green-400 text-sm mb-1">
                        <span className="text-gray-500">$</span> pwd
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                        >
                          <span>{experience.company}</span>
                          <ExternalLink size={12} />
                        </a>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center space-x-1">
                          <MapPin size={12} />
                          <span>{experience.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <div className="text-green-400 text-sm mb-2">
                        <span className="text-gray-500">$</span> cat README.md
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm">{experience.description}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="text-green-400 text-sm mb-2">
                        <span className="text-gray-500">$</span> ls achievements/
                      </div>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start font-mono">
                            <span className="text-green-400 mr-2 mt-0.5">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="text-green-400 text-sm mb-2">
                        <span className="text-gray-500">$</span> npm list --depth=0
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-blue-400 text-xs rounded font-mono border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Command Footer */}
                    <div className="pt-3 border-t border-gray-700">
                      <div className="text-xs text-gray-500 font-mono">
                        <span className="text-green-400">➜</span> {experience.command}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

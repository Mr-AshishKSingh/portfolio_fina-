import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, ExternalLink, Terminal } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelors of Technology ',
      institution: 'Galgotias University',
      location: 'Greater Noida UP',
      period: '2022 - Ongoing',
      gpa: '8.0/10.0',
      description: 'Computer Science Engineering',
      
      courses: ['Advanced Algorithms', 'operating Systems', 'Distributed Systems', 'Software Architecture'],
     
      command: 'python -m torch.distributed.launch --nproc_per_node=8',
      credits: '45',
      projects: '12'
    },
    {
      id: 2,
      degree: '12th',
      institution: 'Delhi Public School Hathras',
      location: 'hathras',
      period: '2020-2021',
      gpa: '9 / 10',
      description: 'CBSE Board',
     
      courses: ['Physics' , 'Chemistry' , ' Maths'],
      website: '',
      command: 'gcc -O2 -Wall -std=c99 main.c -o program',
      
    }
  ];

  

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-green-400">$</span> <span className="text-white">ls</span> <span className="text-blue-400">~/education/</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Academic credentials and professional certifications
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center font-mono"
          >
            <GraduationCap className="mr-3 text-blue-400" size={28} />
            <span className="text-green-400">$</span> find ~/education -name "*.degree"
          </motion.h3>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
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
                    <span>{edu.institution.toLowerCase().replace(/\s+/g, '-')}.edu</span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">{edu.period}</div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono">
                  {/* Degree Info */}
                  <div className="mb-4">
                    <div className="text-green-400 text-sm mb-1">
                      <span className="text-gray-500">$</span> cat degree.txt
                    </div>
                    <div className="text-white font-bold text-lg">{edu.degree}</div>
                  </div>

                  {/* Institution */}
                  <div className="mb-4">
                    <div className="text-green-400 text-sm mb-1">
                      <span className="text-gray-500">$</span> echo $UNIVERSITY
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                      >
                        <span>{edu.institution}</span>
                        <ExternalLink size={12} />
                      </a>
                      <span className="text-gray-500">•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Academic Stats */}
                  <div className="mb-4 bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                    <div className="text-green-400 text-sm mb-2">
                      <span className="text-gray-500">$</span> academic_stats --summary
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div className="text-gray-300">
                        <span className="text-yellow-400">GPA:</span> {edu.gpa}
                      </div>
                      <div className="text-gray-300">
                        <span className="text-blue-400">Credits:</span> {edu.credits}
                      </div>
                      <div className="text-gray-300">
                        <span className="text-green-400">Projects:</span> {edu.projects}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <div className="text-green-400 text-sm mb-2">
                      <span className="text-gray-500">$</span> cat program_description.md
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">{edu.description}</p>
                  </div>

                  {/* Courses */}
                  <div className="mb-4">
                    <div className="text-green-400 text-sm mb-2">
                      <span className="text-gray-500">$</span> find ./courses -name "*.course"
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 bg-gray-800 text-blue-400 text-xs rounded font-mono border border-gray-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Command Footer */}
                  <div className="pt-3 border-t border-gray-700">
                    <div className="text-xs text-gray-500 font-mono">
                      <span className="text-green-400">➜</span> {edu.command}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

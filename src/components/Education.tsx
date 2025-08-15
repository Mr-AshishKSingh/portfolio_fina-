import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, ExternalLink, Terminal } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      gpa: '3.9/4.0',
      description: 'Specialized in Software Engineering and Artificial Intelligence. Focused on machine learning algorithms and distributed systems.',
      achievements: [
        'Dean\'s List for 4 consecutive semesters',
        'Research Assistant in AI Lab',
        'Published 2 papers in peer-reviewed journals'
      ],
      courses: ['Advanced Algorithms', 'Machine Learning', 'Distributed Systems', 'Software Architecture'],
      website: 'https://stanford.edu',
      command: 'python -m torch.distributed.launch --nproc_per_node=8',
      credits: '45',
      projects: '12'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      gpa: '3.7/4.0',
      description: 'Comprehensive education in computer systems, software development, and electrical engineering fundamentals.',
      achievements: [
        'Magna Cum Laude graduate',
        'President of Computer Science Club',
        'Won university-wide hackathon competition'
      ],
      courses: ['Data Structures', 'Computer Networks', 'Database Systems', 'Operating Systems'],
      website: 'https://berkeley.edu',
      command: 'gcc -O2 -Wall -std=c99 main.c -o program',
      credits: '128',
      projects: '24'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-123456',
      description: 'Professional level certification demonstrating expertise in designing distributed systems on AWS.',
      badge: '☁️',
      command: 'aws configure --profile production'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PD-789012',
      description: 'Certification validating skills in developing scalable applications on Google Cloud Platform.',
      badge: '🌐',
      command: 'gcloud auth login && gcloud config set project'
    },
    {
      id: 3,
      title: 'Meta React Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: '2022',
      credentialId: 'META-RD-345678',
      description: 'Professional certificate program covering advanced React development and best practices.',
      badge: '⚛️',
      command: 'npx create-react-app --template typescript'
    },
    {
      id: 4,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB Inc.',
      date: '2021',
      credentialId: 'MONGO-DEV-901234',
      description: 'Certification demonstrating proficiency in MongoDB database design and development.',
      badge: '�',
      command: 'mongod --auth --port 27017 --dbpath /data/db'
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

                  {/* Achievements */}
                  <div className="mb-4">
                    <div className="text-green-400 text-sm mb-2">
                      <span className="text-gray-500">$</span> ls achievements/
                    </div>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start font-mono">
                          <span className="text-green-400 mr-2 mt-0.5">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center font-mono"
          >
            <Award className="mr-3 text-yellow-400" size={28} />
            <span className="text-green-400">$</span> find ~/certs -name "*.crt" -type f
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900 rounded-lg border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between bg-gray-800 px-3 py-2 rounded-t-lg">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">{cert.date}</div>
                </div>

                {/* Cert Content */}
                <div className="p-4 text-center font-mono">
                  <div className="text-3xl mb-3">{cert.badge}</div>
                  <h4 className="text-sm font-bold text-white mb-2">{cert.title}</h4>
                  <p className="text-yellow-400 font-semibold mb-2 text-sm">{cert.issuer}</p>
                  
                  {/* Command */}
                  <div className="mb-3 bg-gray-800 p-2 rounded text-xs">
                    <div className="text-green-400 mb-1">
                      <span className="text-gray-500">$</span> verify_cert
                    </div>
                    <div className="text-gray-300 break-all">{cert.credentialId}</div>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-3 leading-relaxed">{cert.description}</p>
                  
                  {/* Terminal Command */}
                  <div className="bg-gray-800 p-2 rounded border-l-2 border-yellow-400">
                    <div className="text-xs text-gray-500 font-mono truncate">
                      <span className="text-green-400">➜</span> {cert.command}
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

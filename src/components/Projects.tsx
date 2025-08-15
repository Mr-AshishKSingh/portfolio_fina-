import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Star, GitBranch, Eye, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      repository: 'ecommerce-platform',
      branch: 'main',
      language: 'TypeScript',
      stars: 234,
      forks: 47,
      lastCommit: '2 days ago',
      status: 'active',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      codeStats: {
        lines: 15420,
        commits: 156,
        contributors: 3
      }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      repository: 'task-manager-pro',
      branch: 'main',
      language: 'JavaScript',
      stars: 189,
      forks: 32,
      lastCommit: '5 days ago',
      status: 'active',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      codeStats: {
        lines: 12340,
        commits: 98,
        contributors: 2
      }
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.',
      repository: 'weather-dashboard',
      branch: 'main',
      language: 'TypeScript',
      stars: 67,
      forks: 12,
      lastCommit: '1 week ago',
      status: 'stable',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Weather API'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      codeStats: {
        lines: 5670,
        commits: 45,
        contributors: 1
      }
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.',
      repository: 'portfolio-v3',
      branch: 'main',
      language: 'TypeScript',
      stars: 123,
      forks: 28,
      lastCommit: '3 hours ago',
      status: 'active',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      codeStats: {
        lines: 3420,
        commits: 67,
        contributors: 1
      }
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A content management system for bloggers with markdown support, SEO optimization, and social media integration.',
      repository: 'blog-cms',
      branch: 'develop',
      language: 'JavaScript',
      stars: 89,
      forks: 19,
      lastCommit: '2 weeks ago',
      status: 'stable',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Markdown'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      codeStats: {
        lines: 8750,
        commits: 123,
        contributors: 2
      }
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media managers with data visualization, scheduling features, and performance tracking.',
      repository: 'social-analytics',
      branch: 'main',
      language: 'Python',
      stars: 156,
      forks: 34,
      lastCommit: '4 days ago',
      status: 'active',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      codeStats: {
        lines: 9870,
        commits: 89,
        contributors: 2
      }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-mono">
            <span className="text-gray-500">~/dev/</span>projects<span className="text-yellow-400 animate-pulse">_</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-600 font-mono text-sm">
              <span className="text-green-400">$</span> <span className="text-white">ls -la ~/projects/ | grep -E "featured|active"</span>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto font-mono text-sm">
            <span className="text-gray-500"># </span>A collection of my latest repositories and open-source contributions
          </p>
        </motion.div>

        {/* Featured Repositories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-gray-900 px-4 py-3 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Folder size={16} className="text-blue-400 ml-2" />
                  <span className="text-white font-mono text-sm">{project.repository}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="flex items-center space-x-1">
                    <GitBranch size={14} className="text-green-400" />
                    <span className="text-gray-300 font-mono">{project.branch}</span>
                  </div>
                  <div className="px-2 py-1 bg-gray-700 rounded text-xs font-mono text-gray-300">
                    {project.language}
                  </div>
                </div>
              </div>

              {/* Repository Stats */}
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star size={12} className="text-yellow-400" />
                      <span className="text-gray-300">{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch size={12} className="text-blue-400" />
                      <span className="text-gray-300">{project.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={12} className="text-green-400" />
                      <span className="text-gray-300">{project.codeStats.lines} lines</span>
                    </div>
                  </div>
                  <span className="text-gray-500">Last commit: {project.lastCommit}</span>
                </div>
              </div>

              {/* Code Preview */}
              <div className="bg-gray-900 p-4 border-b border-gray-700 font-mono text-sm">
                <div className="text-gray-500 mb-2"># README.md</div>
                <div className="space-y-1">
                  <div className="text-green-400"># {project.title}</div>
                  <div className="text-gray-300">{project.description}</div>
                  <div className="text-blue-400 mt-2">
                    ## Technologies Used
                  </div>
                  <div className="text-gray-300">
                    {project.technologies.join(' • ')}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white font-mono">{project.title}</h3>
                  <div className={`px-2 py-1 rounded text-xs font-mono ${
                    project.status === 'active' 
                      ? 'bg-green-900 text-green-400 border border-green-700' 
                      : 'bg-blue-900 text-blue-400 border border-blue-700'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Git Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-900 rounded border border-gray-700">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400 font-mono">{project.codeStats.commits}</div>
                    <div className="text-xs text-gray-400 font-mono">commits</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-700">
                    <div className="text-lg font-bold text-blue-400 font-mono">{project.codeStats.contributors}</div>
                    <div className="text-xs text-gray-400 font-mono">contributors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400 font-mono">{(project.codeStats.lines / 1000).toFixed(1)}k</div>
                    <div className="text-xs text-gray-400 font-mono">lines</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-green-400 rounded text-xs font-mono border border-gray-600 hover:border-green-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Terminal Commands */}
                <div className="space-y-2">
                  <div className="bg-gray-900 p-3 rounded border border-gray-700 font-mono text-sm">
                    <div className="text-green-400 mb-1">
                      <span className="text-gray-500">$</span> git clone {project.repository}.git
                    </div>
                    <div className="text-gray-400">
                      <span className="text-gray-500">$</span> cd {project.repository} && npm install
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gray-700 hover:bg-gray-600 rounded font-mono text-sm transition-colors border border-gray-600 hover:border-gray-500"
                    >
                      <Github size={16} className="text-gray-300" />
                      <span className="text-gray-300">Repository</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 bg-green-800 hover:bg-green-700 rounded font-mono text-sm transition-colors border border-green-700 hover:border-green-600"
                    >
                      <ExternalLink size={16} className="text-green-300" />
                      <span className="text-green-300">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            <span className="text-gray-500">~/dev/</span>other-projects<span className="text-yellow-400">:</span>
          </h3>
          <div className="flex justify-center">
            <div className="bg-gray-800 px-3 py-1 rounded border border-gray-600 font-mono text-sm">
              <span className="text-green-400">$</span> <span className="text-white">ls -la | grep -v featured</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-gray-900 px-3 py-2 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <Folder size={12} className="text-blue-400" />
                  <span className="text-white font-mono text-xs truncate">{project.repository}</span>
                </div>
                <div className="text-xs text-gray-400 font-mono">{project.language}</div>
              </div>

              {/* Repository Stats */}
              <div className="bg-gray-800 px-3 py-1 border-b border-gray-700">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex space-x-3">
                    <div className="flex items-center space-x-1">
                      <Star size={10} className="text-yellow-400" />
                      <span className="text-gray-300">{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch size={10} className="text-blue-400" />
                      <span className="text-gray-300">{project.forks}</span>
                    </div>
                  </div>
                  <span className="text-gray-500">{project.lastCommit}</span>
                </div>
              </div>

              {/* Code Preview */}
              <div className="bg-gray-900 p-3 border-b border-gray-700 font-mono text-xs">
                <div className="text-gray-500 mb-1"># {project.title}</div>
                <div className="text-gray-300 line-clamp-2">{project.description}</div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-white font-mono truncate">{project.title}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-mono ${
                    project.status === 'active' 
                      ? 'bg-green-900 text-green-400' 
                      : 'bg-blue-900 text-blue-400'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Git Stats */}
                <div className="grid grid-cols-3 gap-2 mb-3 p-2 bg-gray-900 rounded border border-gray-700">
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-400 font-mono">{project.codeStats.commits}</div>
                    <div className="text-xs text-gray-400 font-mono">commits</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-700">
                    <div className="text-sm font-bold text-blue-400 font-mono">{project.codeStats.contributors}</div>
                    <div className="text-xs text-gray-400 font-mono">contributors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-yellow-400 font-mono">{(project.codeStats.lines / 1000).toFixed(1)}k</div>
                    <div className="text-xs text-gray-400 font-mono">lines</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-green-400 rounded text-xs font-mono border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs border border-gray-600 font-mono">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Terminal Actions */}
                <div className="flex space-x-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1 py-1 bg-gray-700 hover:bg-gray-600 rounded font-mono text-xs transition-colors border border-gray-600"
                  >
                    <Code size={12} className="text-gray-300" />
                    <span className="text-gray-300">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1 py-1 bg-green-800 hover:bg-green-700 rounded font-mono text-xs transition-colors border border-green-700"
                  >
                    <ExternalLink size={12} className="text-green-300" />
                    <span className="text-green-300">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

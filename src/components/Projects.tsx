import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Star, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Cook Book',
      description: 'Cookbook is a Flutter-based mobile application that connects users seeking home-cooked meals with local cooks. The app allows users to post their cooking needs, browse and book cooks, while cooks can register, manage their profiles, and accept job requests.',
      repository: 'https://github.com/Mr-AshishKSingh/COOKBOOK',
      branch: 'main',
      language: 'Flutter , Dart',
      stars: 2,
      forks: 0,
      lastCommit: '2 months ago',
      status: 'active',
      technologies: ['Flutter' , ' Dart ' ,' Firebase '],
      githubUrl: 'https://github.com/Mr-AshishKSingh/COOKBOOK',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'clipboard_extension',
      description: 'A modern, sleek browser extension that tracks and manages your clipboard history with an intuitive interface. Never lose important copied text again!',
      repository: 'https://github.com/Mr-AshishKSingh/clipboard_extension',
      branch: 'main',
      language: 'JavaScript',
      stars: 1,
      forks: 0,
      lastCommit: '2 Months ago',
      status: 'active',
      technologies: ['JS' , 'CSS' , "HTML"],
      githubUrl: 'https://github.com/Mr-AshishKSingh/clipboard_extension',
      liveUrl: '#',
      featured: true
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

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
                  
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={project.repository}
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

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            <span className="text-gray-500">~/dev/</span>more-projects<span className="text-yellow-400">:</span>
          </h3>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700"
          >
            <div className="flex items-center justify-between bg-gray-900 px-4 py-3 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Github size={16} className="text-blue-400 ml-2" />
                <span className="text-white font-mono text-sm">github.com</span>
              </div>
            </div>

            <a
              href="https://github.com/Mr-AshishKSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Github size={40} className="text-green-400" />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white font-mono">View My GitHub Profile</h4>
                  <p className="text-gray-400 font-mono text-sm">@Mr-AshishKSingh</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300 text-sm font-mono">
                  <span className="text-green-400">$</span> Check out more of my projects and contributions on GitHub!
                </p>
                <p className="text-gray-500 text-xs font-mono mt-2">
                  # Discover my open-source work, experiments, and coding journey
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

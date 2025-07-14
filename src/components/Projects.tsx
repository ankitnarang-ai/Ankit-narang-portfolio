import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Database, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Hire Catalyze',
      subtitle: 'AI-Powered Recruitment Transformation Platform',
      description: 'Built an end-to-end recruitment platform to automate resume screening, candidate matching, and interviews. HR uploads resumes and job descriptions; the system filters and ranks candidates based on contextual fit.',
      techStack: ['Angular', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'Qdrant', 'Docker', 'GenAI', 'RAG'],
      features: [
        'AI-based resume screening and candidate matching',
        'Automated interview scheduling system',
        'LLM-powered candidate response analysis',
        'RAG architecture for contextual understanding',
        'Scalable microservices architecture'
      ],
      icon: <Brain size={24} />,
      link: '#',
      github: '#'
    }
  ];

  const additionalProjects = [
    {
      title: 'AppsRhino Backend Management',
      description: 'Managed entire backend infrastructure, developed RESTful APIs, and integrated payment gateways',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Payment APIs'],
      icon: <Database size={24} />
    },
    {
      title: 'Angular UI Library',
      description: 'Built reusable Angular components library for consistent development across projects',
      tech: ['Angular', 'TypeScript', 'Component Design'],
      icon: <Zap size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology with practical applications.
          </p>
        </motion.div>

        {/* Main Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 border border-gray-200"
        >
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-gray-700">{projects[0].icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{projects[0].title}</h3>
                <p className="text-gray-600 font-medium">{projects[0].subtitle}</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {projects[0].description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {projects[0].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {projects[0].techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="skill-badge"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <motion.a
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={16} />
                View Project
              </motion.a>
              <motion.a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Github size={16} />
                View Code
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Additional Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-gray-700">{project.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

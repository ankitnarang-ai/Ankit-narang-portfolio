import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full Stack Development',
      description: 'Expertise in both frontend and backend technologies'
    },
    {
      icon: <Zap size={24} />,
      title: 'GenAI Solutions',
      description: 'Building AI-powered applications with RAG architecture'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Leadership',
      description: 'Led frontend development teams and mentored developers'
    },
    {
      icon: <Target size={24} />,
      title: 'Performance Optimization',
      description: 'Optimized systems for improved reliability and efficiency'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a Full Stack Developer with a passion for creating scalable web applications 
            and innovative GenAI solutions. With experience at leading tech companies, I bring 
            a comprehensive understanding of modern development practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 card-hover border border-gray-200"
            >
              <div className="text-gray-700 mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Currently working as an Associate Software Engineer at Relinns Technologies, where I lead 
            frontend development initiatives and manage backend systems. My experience spans from 
            developing internal tools that save costs to building AI-powered platforms that transform 
            business processes. I'm passionate about mentoring fellow developers and have achieved 
            recognition as a top educator at Unacademy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

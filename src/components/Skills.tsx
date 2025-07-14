import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Tailwind CSS']
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'Fast API', 'Python', 'MongoDB', 'Qdrant', 'Neo4j', 'RESTful APIs']
    },
    {
      title: 'AI/ML & GenAI',
      skills: ['GenAI', 'RAG Architecture', 'LLMs', 'Machine Learning', 'AI Integration', 'Python ML Libraries']
    },
    {
      title: 'DevOps & Tools',
      skills: ['AWS', 'Docker', 'NGINX', 'REDIS', 'Git', 'CI/CD', 'Microservices', 'Linux']
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'HTML/CSS']
    },
    {
      title: 'Other Technologies',
      skills: ['Razorpay', 'PayPal', 'Payment Gateways', 'WebSocket', 'API Integration', 'Testing']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building 
            scalable, efficient, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

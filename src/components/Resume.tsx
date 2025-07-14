import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const resumeData = {
    contact: {
      phone: '+91-7668484155',
      email: 'ankitnarangwork@gmail.com',
      portfolio: 'portfolio',
      github: 'github',
      linkedin: 'linkedin'
    },
    profile: 'Full Stack Developer with experience building scalable web applications, developing GenAI-powered solutions, and optimizing performance across the stack.',
    skills: {
      technical: ['JavaScript', 'TypeScript', 'Python', 'C++'],
      frontend: ['Angular', 'React.js', 'Redux', 'HTML5', 'CSS3'],
      backend: ['Node.js', 'Express.js', 'Fast API', 'MongoDB', 'Qdrant', 'Neo4j'],
      ai: ['GenAI', 'Retrieval Augmented Generation (RAG)'],
      devops: ['AWS', 'Docker', 'NGINX', 'REDIS', 'GIT']
    }
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download my complete resume or view it online to get detailed information about my experience and skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center"
            >
              <Eye size={20} />
              View Online
            </motion.button>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden"
        >
          {/* Resume Header */}
          <div className="bg-gray-900 text-white p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Ankit Narang</h1>
              <p className="text-xl text-gray-300 mb-4">Full Stack Developer & GenAI Enthusiast</p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-300">
                <span>{resumeData.contact.phone}</span>
                <span>|</span>
                <span>{resumeData.contact.email}</span>
                <span>|</span>
                <span>{resumeData.contact.portfolio}</span>
                <span>|</span>
                <span>{resumeData.contact.github}</span>
                <span>|</span>
                <span>{resumeData.contact.linkedin}</span>
              </div>
            </div>
          </div>

          {/* Resume Content */}
          <div className="p-8">
            {/* Profile */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">PROFILE</h2>
              <p className="text-gray-700 leading-relaxed">{resumeData.profile}</p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">SKILLS</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technical:</h3>
                  <p className="text-gray-700 mb-3">{resumeData.skills.technical.join(', ')}</p>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">Frontend:</h3>
                  <p className="text-gray-700 mb-3">{resumeData.skills.frontend.join(', ')}</p>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">AI/ML:</h3>
                  <p className="text-gray-700">{resumeData.skills.ai.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Backend/Database:</h3>
                  <p className="text-gray-700 mb-3">{resumeData.skills.backend.join(', ')}</p>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">DevOps/Tools:</h3>
                  <p className="text-gray-700">{resumeData.skills.devops.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="text-gray-700" size={20} />
                <h3 className="font-semibold text-gray-900">Complete Resume</h3>
              </div>
              <p className="text-gray-700">
                This preview shows the header and key sections. The complete resume includes detailed experience, 
                projects, education, and achievements. Download or view online for the full document.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

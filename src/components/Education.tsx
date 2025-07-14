import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving skills.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex items-start gap-6">
              <div className="bg-gray-900 p-4 rounded-full">
                <GraduationCap size={32} className="text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Bachelor of Technology (B.Tech)</h3>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Computer Science and Engineering</h4>
                    <h5 className="text-lg text-gray-600">Meerut Institute of Engineering and Technology</h5>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span>2020 – 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span>Meerut, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <Award size={16} />
                      <span>GPA: 8.24 / 10</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/70 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Coursework & Focus Areas:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Data Structures & Algorithms',
                      'Database Management Systems',
                      'Software Engineering',
                      'Computer Networks',
                      'Operating Systems',
                      'Web Development',
                      'Object-Oriented Programming',
                      'Machine Learning Basics'
                    ].map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <span className="text-gray-700">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

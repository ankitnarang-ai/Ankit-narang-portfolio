import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Relinns Technologies Pvt Ltd',
      position: 'Associate Software Engineer',
      duration: 'January 2024 – May 2025',
      location: 'Mohali, India',
      achievements: [
        'Led frontend development of an internal Project Management Tool (PMT) using Angular, replacing Zoho for timesheet tracking and project oversight, and saving costs on third-party tools.',
        'Designed PMT to support white-labeling and subscriptions, enabling future monetization.',
        'Built a reusable Angular UI library used across internal projects to speed up development and ensure consistency.',
        'Managed the entire AppsRhino backend, developing and maintaining RESTful APIs to add new functionalities and ensure robust integrations for a seamless user experience.',
        'Integrated Razorpay and PayPal payment gateways, securely processing transactions.',
        'Optimized 14 microservices within AppsRhino, fixing critical bugs and enhancing system reliability by ~15%.'
      ]
    },
    {
      company: 'Unacademy',
      position: 'Educator Intern',
      duration: 'October 2023 – January 2024',
      location: 'Remote',
      achievements: [
        'Mentor developers in C Programming, DSA, and Competitive Programming through structured sessions.',
        'Achieved Rank 1 in November and Rank 2 in October among all instructors, demonstrating exceptional teaching effectiveness and student engagement.',
        'Conducted live classes and maintained an active profile: Unacademy Profile'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in software development, from education to enterprise solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300 hidden md:block"></div>
              )}
              
              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex-1 border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                      <h4 className="text-xl font-semibold text-gray-700">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (achIndex * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-gray-700 rounded-full flex-shrink-0 mt-2"></div>
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

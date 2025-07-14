import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Video, Star, Users, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Trophy size={24} />,
      title: 'Top Coding Contest Performer',
      description: 'Achieved Rank 75 and 91 out of 2000 participants in Coding Ninja Weekly Contest 193 and 196',
      category: 'Competitive Programming',
      link: 'https://www.codingninjas.com/profile/ankitnarang'
    },
    {
      icon: <Video size={24} />,
      title: 'YouTube Content Creator',
      description: 'Managed a YouTube channel with 1.2K+ subscribers and 50K+ watch hours from 20 videos',
      category: 'Education',
      link: 'https://www.youtube.com/@ShortNotes4u'
    },
    {
      icon: <Star size={24} />,
      title: 'Top Educator at Unacademy',
      description: 'Achieved Rank 1 in November and Rank 2 in October among all instructors',
      category: 'Teaching',
      link: 'https://unacademy.com/user/ankitnarang'
    },
    {
      icon: <Users size={24} />,
      title: 'Mentorship Excellence',
      description: 'Mentored developers in C Programming, DSA, and Competitive Programming',
      category: 'Leadership',
      link: '#'
    }
  ];

  const stats = [
    { number: '1.2K+', label: 'YouTube Subscribers' },
    { number: '50K+', label: 'Watch Hours' },
    { number: '2000+', label: 'Contest Participants' },
    { number: '15%', label: 'System Optimization' }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Achievements</span> & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milestones and recognition that showcase dedication to excellence in technology and education.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg text-gray-700 flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{achievement.description}</p>
                  <motion.a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Award size={16} />
                    View Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

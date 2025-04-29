import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      bio: 'Former NASA propulsion engineer with 15+ years of experience in aerospace technology.',
      expertise: ['Aerospace Engineering', 'Business Strategy', 'Innovation Leadership'],
    },
    {
      name: 'Dr. Marcus Rodriguez',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'Pioneering researcher in plasma physics and advanced propulsion systems.',
      expertise: ['Plasma Physics', 'Propulsion Systems', 'R&D Management'],
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      bio: 'Quantum computing expert focusing on trajectory optimization algorithms.',
      expertise: ['Quantum Computing', 'Algorithm Design', 'Space Navigation'],
    },
    {
      name: 'James Mitchell',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
      bio: 'Former SpaceX operations lead with expertise in scaling aerospace manufacturing.',
      expertise: ['Operations Management', 'Manufacturing', 'Supply Chain'],
    },
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-plasma-cyan" />,
      title: 'Excellence',
      description: 'Pursuing the highest standards in everything we do.',
    },
    {
      icon: <Users className="h-8 w-8 text-plasma-cyan" />,
      title: 'Collaboration',
      description: 'Working together to solve complex challenges.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-plasma-cyan" />,
      title: 'Innovation',
      description: 'Pushing boundaries and exploring new possibilities.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4"
    >
      <SEO 
        title="Our Team"
        description="Meet the innovative minds behind Aetherion Dynamics' groundbreaking space propulsion technology."
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the innovative minds driving the future of space propulsion technology.
          </p>
        </div>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-space-blue/50 rounded-lg overflow-hidden border border-gray-800"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-plasma-cyan mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block bg-space-blue/30 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-space-blue/30 rounded-lg border border-gray-800"
              >
                <div className="inline-block p-4 bg-space-blue/50 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Quote */}
        <section className="bg-gradient-to-r from-space-blue/50 to-space-blue/30 rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold italic mb-6">
              "Our team's diverse expertise and unwavering commitment to innovation
              drives us to push the boundaries of what's possible in space propulsion
              technology."
            </p>
            <footer className="text-gray-300">
              <cite>Dr. Sarah Chen, CEO of Aetherion Dynamics</cite>
            </footer>
          </blockquote>
        </section>
      </div>
    </motion.div>
  );
};

export default Team;
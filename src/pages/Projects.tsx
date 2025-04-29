import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Satellite, Globe2 } from 'lucide-react';
import SEO from '../components/SEO';

const Projects = () => {
  const projects = [
    {
      title: 'Project Aurora',
      subtitle: 'Next-Generation Hall-Effect Thruster',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      description: 'Revolutionary propulsion system designed for long-duration deep space missions.',
      status: 'In Development',
      completion: '75%',
      highlights: [
        'Advanced plasma containment',
        'Integrated cooling system',
        'Smart power management',
        'Extended operational lifespan'
      ],
      timeline: [
        { date: '2024 Q1', milestone: 'Initial prototype testing' },
        { date: '2024 Q3', milestone: 'Performance optimization' },
        { date: '2025 Q1', milestone: 'Final testing phase' },
        { date: '2025 Q2', milestone: 'Production ready' }
      ]
    },
    {
      title: 'Helios Initiative',
      subtitle: 'Solar-Powered MPD Drive',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',
      description: 'Innovative solar-powered magnetoplasmadynamic drive for efficient interplanetary travel.',
      status: 'Testing Phase',
      completion: '60%',
      highlights: [
        'Solar power integration',
        'High-efficiency plasma generation',
        'Adaptive thrust control',
        'Lightweight design'
      ],
      timeline: [
        { date: '2024 Q2', milestone: 'Component testing' },
        { date: '2024 Q4', milestone: 'System integration' },
        { date: '2025 Q2', milestone: 'Field trials' },
        { date: '2025 Q4', milestone: 'Deployment ready' }
      ]
    },
    {
      title: 'Quantum Navigator',
      subtitle: 'AI-Powered Navigation System',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80',
      description: 'Quantum computing-based navigation system for precise spacecraft trajectory optimization.',
      status: 'Early Development',
      completion: '30%',
      highlights: [
        'Quantum algorithm implementation',
        'Real-time path optimization',
        'Integrated sensor array',
        'Autonomous decision making'
      ],
      timeline: [
        { date: '2024 Q3', milestone: 'Algorithm development' },
        { date: '2025 Q1', milestone: 'Hardware integration' },
        { date: '2025 Q3', milestone: 'System testing' },
        { date: '2026 Q1', milestone: 'Beta deployment' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4"
    >
      <SEO 
        title="Our Projects"
        description="Explore Aetherion Dynamics' innovative space propulsion projects and technological breakthroughs."
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of space exploration through innovative propulsion technologies.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-space-blue/30 rounded-2xl overflow-hidden border border-gray-800"
            >
              <div className="relative h-64 md:h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-blue/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-plasma-cyan text-lg">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Project Status: {project.status}</span>
                        <span className="text-plasma-cyan">{project.completion}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-plasma-cyan h-2 rounded-full"
                          style={{ width: project.completion }}
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-plasma-cyan rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Timeline</h3>
                    <div className="space-y-6">
                      {project.timeline.map((milestone, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-24 text-plasma-cyan">
                            {milestone.date}
                          </div>
                          <div className="flex-grow pl-4 border-l border-gray-800">
                            <p className="text-gray-300">{milestone.milestone}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
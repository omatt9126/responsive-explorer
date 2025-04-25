import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Database, Cpu, Shield, Cloud } from 'lucide-react';
import SEO from '../components/SEO';

const Technology = () => {
  const technologies = [
    {
      icon: <Atom className="h-12 w-12 text-plasma-cyan" />,
      title: 'Hall-Effect Thrusters',
      description: 'Advanced electric propulsion system using magnetic fields to accelerate ions, providing efficient thrust for spacecraft.',
      benefits: ['High specific impulse', 'Long operational lifetime', 'Precise thrust control'],
    },
    {
      icon: <Zap className="h-12 w-12 text-plasma-cyan" />,
      title: 'MPD Drives',
      description: 'Magnetoplasmadynamic thrusters capable of generating high-power propulsion for interplanetary missions.',
      benefits: ['High thrust density', 'Scalable power levels', 'Suitable for deep space'],
    },
    {
      icon: <Database className="h-12 w-12 text-plasma-cyan" />,
      title: 'Quantum Computing',
      description: 'Cutting-edge quantum systems for complex trajectory calculations and mission planning optimization.',
      benefits: ['Advanced optimization', 'Complex simulations', 'Real-time calculations'],
    },
  ];

  const capabilities = [
    {
      icon: <Cpu className="h-8 w-8 text-plasma-cyan" />,
      title: 'Advanced Control Systems',
      description: 'State-of-the-art control systems for precise spacecraft maneuvering and operation.',
    },
    {
      icon: <Shield className="h-8 w-8 text-plasma-cyan" />,
      title: 'Radiation Hardening',
      description: 'Specialized protection systems for electronics in harsh space environments.',
    },
    {
      icon: <Cloud className="h-8 w-8 text-plasma-cyan" />,
      title: 'Environmental Systems',
      description: 'Life support and environmental control systems for long-duration missions.',
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
        title="Space Propulsion Technology"
        description="Discover Aetherion Dynamics' cutting-edge space propulsion technologies, including Hall-Effect Thrusters and MPD Drives."
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technology</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of space propulsion with advanced technologies
            that enable efficient, reliable, and sustainable space exploration.
          </p>
        </div>

        {/* Core Technologies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-space-blue/50 p-8 rounded-lg border border-gray-800"
              >
                <div className="mb-6">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-300 mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-plasma-cyan rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gradient-to-br from-space-blue/50 to-space-blue/30 border border-gray-800"
              >
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Study */}
        <section className="bg-space-blue/30 rounded-2xl p-8 md:p-12 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8">Case Study: Deep Space Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Challenge</h3>
              <p className="text-gray-300 mb-6">
                Developing a propulsion system capable of maintaining efficient
                thrust for extended deep space missions while minimizing fuel
                consumption.
              </p>
              <h3 className="text-2xl font-bold mb-4">Solution</h3>
              <p className="text-gray-300 mb-6">
                Implementation of our advanced Hall-Effect Thruster technology,
                combined with innovative power management systems.
              </p>
              <h3 className="text-2xl font-bold mb-4">Results</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-plasma-cyan rounded-full mr-2" />
                  30% reduction in fuel consumption
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-plasma-cyan rounded-full mr-2" />
                  Extended mission duration capability
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-plasma-cyan rounded-full mr-2" />
                  Improved thrust precision by 45%
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
                alt="Deep space mission visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Technology;
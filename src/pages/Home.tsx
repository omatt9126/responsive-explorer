import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Atom, Zap, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-space-blue/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pioneering the Future of
              <span className="text-plasma-cyan"> Space Propulsion</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Revolutionizing space travel with advanced propulsion technologies
              for the next generation of space exploration.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/technology" className="btn-primary">
                Explore Technology
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-space-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advancing Space Technology
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At Aetherion Dynamics, we're developing cutting-edge propulsion
              systems that will enable faster, more efficient space travel and
              revolutionize the aerospace industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Atom className="h-12 w-12 text-plasma-cyan" />,
                title: 'Advanced Propulsion',
                description:
                  'Developing next-generation Hall-effect thrusters and MPD drives.',
              },
              {
                icon: <Zap className="h-12 w-12 text-plasma-cyan" />,
                title: 'Power Systems',
                description:
                  'Innovative power generation and distribution solutions for space applications.',
              },
              {
                icon: <Globe className="h-12 w-12 text-plasma-cyan" />,
                title: 'Global Impact',
                description:
                  'Contributing to humanity\'s expansion into space and sustainable space exploration.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-space-blue/50 p-6 rounded-lg border border-gray-800"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="section-padding bg-gradient-to-b from-space-blue to-space-blue/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Technology
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover how our advanced propulsion systems are pushing the
              boundaries of space exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-space-blue/50 p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">Hall-effect Thrusters</h3>
              <p className="text-gray-300 mb-4">
                Our advanced Hall-effect thrusters provide efficient propulsion
                for satellites and deep-space missions.
              </p>
              <Link
                to="/technology"
                className="text-plasma-cyan hover:text-cyan-400 font-semibold"
              >
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-space-blue/50 p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">MPD Drives</h3>
              <p className="text-gray-300 mb-4">
                Magnetoplasmadynamic drives enabling faster interplanetary
                travel and improved mission capabilities.
              </p>
              <Link
                to="/technology"
                className="text-plasma-cyan hover:text-cyan-400 font-semibold"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
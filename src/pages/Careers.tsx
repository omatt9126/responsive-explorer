import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Star, Coffee, Users, Rocket } from 'lucide-react';
import { useForm } from 'react-hook-form';
import SEO from '../components/SEO';

interface ApplicationForm {
  name: string;
  email: string;
  position: string;
  message: string;
}

const Careers = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationForm>();

  const positions = [
    {
      title: 'Senior Propulsion Engineer',
      department: 'Engineering',
      location: 'Houston, TX',
      type: 'Full-time',
      description: 'Lead the development of next-generation Hall-effect thrusters and contribute to innovative propulsion solutions.',
      requirements: [
        'Ph.D. in Aerospace Engineering or related field',
        '8+ years of experience in electric propulsion',
        'Strong background in plasma physics',
        'Experience with simulation software',
      ],
    },
    {
      title: 'Quantum Computing Scientist',
      department: 'Research & Development',
      location: 'Houston, TX',
      type: 'Full-time',
      description: 'Develop quantum algorithms for spacecraft trajectory optimization and navigation systems.',
      requirements: [
        'Ph.D. in Physics, Computer Science, or related field',
        '5+ years of experience in quantum computing',
        'Strong programming skills',
        'Published research in quantum algorithms',
      ],
    },
    {
      title: 'Systems Integration Engineer',
      department: 'Engineering',
      location: 'Houston, TX',
      type: 'Full-time',
      description: 'Coordinate the integration of propulsion systems with spacecraft platforms and ensure optimal performance.',
      requirements: [
        "Master's degree in Aerospace Engineering",
        '6+ years of systems engineering experience',
        'Experience with space systems integration',
        'Strong project management skills',
      ],
    },
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-plasma-cyan" />,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family.',
    },
    {
      icon: <Star className="h-8 w-8 text-plasma-cyan" />,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career progression paths.',
    },
    {
      icon: <Coffee className="h-8 w-8 text-plasma-cyan" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and generous paid time off.',
    },
    {
      icon: <Users className="h-8 w-8 text-plasma-cyan" />,
      title: 'Collaborative Culture',
      description: 'Work with world-class experts in a supportive environment.',
    },
  ];

  const onSubmit = (data: ApplicationForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4"
    >
      <SEO 
        title="Careers"
        description="Join Aetherion Dynamics and help shape the future of space propulsion technology."
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us pioneer the future of space propulsion technology and make interplanetary travel a reality.
          </p>
        </div>

        {/* Current Openings */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>
          <div className="grid gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-space-blue/30 rounded-lg p-8 border border-gray-800"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <Rocket className="h-4 w-4 mr-2" />
                        {position.location}
                      </span>
                      <span className="text-plasma-cyan">{position.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{position.description}</p>

                <div>
                  <h4 className="font-bold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-plasma-cyan rounded-full mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits & Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-space-blue/30 rounded-lg border border-gray-800"
              >
                <div className="inline-block p-4 bg-space-blue/50 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Apply Now</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full px-4 py-2 bg-space-blue/30 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-plasma-cyan"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full px-4 py-2 bg-space-blue/30 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-plasma-cyan"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Please enter a valid email</span>
              )}
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                Position
              </label>
              <select
                id="position"
                {...register('position', { required: true })}
                className="w-full px-4 py-2 bg-space-blue/30 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-plasma-cyan"
              >
                <option value="">Select a position</option>
                {positions.map((pos, index) => (
                  <option key={index} value={pos.title}>
                    {pos.title}
                  </option>
                ))}
              </select>
              {errors.position && (
                <span className="text-red-500 text-sm">Please select a position</span>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Cover Letter
              </label>
              <textarea
                id="message"
                {...register('message', { required: true })}
                rows={6}
                className="w-full px-4 py-2 bg-space-blue/30 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-plasma-cyan"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn-primary"
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </motion.div>
  );
};

export default Careers;
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github } from 'lucide-react';
import { useForm } from 'react-hook-form';
import SEO from '../components/SEO';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-plasma-cyan" />,
      title: 'Email',
      details: 'contact@aetheriondynamics.com',
      link: 'mailto:contact@aetheriondynamics.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-plasma-cyan" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-6 w-6 text-plasma-cyan" />,
      title: 'Location',
      details: '123 Innovation Drive, Houston, TX 77001',
      link: 'https://maps.google.com',
    },
    {
      icon: <Clock className="h-6 w-6 text-plasma-cyan" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM CST',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      url: '#',
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: 'Twitter',
      url: '#',
    },
    {
      icon: <Github className="h-6 w-6" />,
      name: 'GitHub',
      url: '#',
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
        title="Contact Us"
        description="Get in touch with Aetherion Dynamics for inquiries about our space propulsion technologies and solutions."
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our technology or interested in collaboration?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-space-blue/30 rounded-lg p-8 border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-300 hover:text-plasma-cyan transition-colors"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-space-blue/30 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-space-blue/50 rounded-full hover:bg-plasma-cyan/20 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-space-blue/30 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: true })}
                  className="w-full px-4 py-2 bg-space-blue/30 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-plasma-cyan"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
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
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-20">
          <div className="bg-space-blue/30 rounded-lg overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221758.67815881974!2d-95.68261874971659!3d29.817478097205825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1645564750986!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
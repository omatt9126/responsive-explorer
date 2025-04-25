import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4"
    >
      <Helmet>
        <title>Terms of Service - Aetherion Dynamics</title>
        <meta name="description" content="Terms of service and legal information for Aetherion Dynamics" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these terms of service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Aetherion Dynamics and is protected by intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Use License</h2>
            <p>Permission is granted to temporarily view the materials on Aetherion Dynamics's website for personal, non-commercial use only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Disclaimer</h2>
            <p>The materials on Aetherion Dynamics's website are provided on an 'as is' basis. Aetherion Dynamics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Limitations</h2>
            <p>In no event shall Aetherion Dynamics or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Rocket } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 flex items-center justify-center"
    >
      <Helmet>
        <title>404 - Page Not Found | Aetherion Dynamics</title>
        <meta name="description" content="The page you're looking for doesn't exist" />
      </Helmet>

      <div className="text-center">
        <Rocket className="h-20 w-20 text-plasma-cyan mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-300 mb-8">The page you're looking for has drifted into deep space.</p>
        <Link to="/" className="btn-primary">
          Return to Mission Control
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
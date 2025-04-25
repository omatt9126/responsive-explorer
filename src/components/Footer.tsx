import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import logo from '/public/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-space-blue/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Aetherion Dynamics Logo"
                className="h-6 w-6"
              />
              <span className="font-exo text-lg font-bold text-white">Aetherion Dynamics</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Pioneering the future of space propulsion technology.
            </p>
          </div>

          <div>
            <h3 className="font-exo text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/technology" className="text-gray-400 hover:text-plasma-cyan">Technology</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-plasma-cyan">Team</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-plasma-cyan">Projects</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-plasma-cyan">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-exo text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>contact@aetheriondynamics.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Houston, TX, USA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-exo text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-plasma-cyan">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-plasma-cyan">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-plasma-cyan">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Aetherion Dynamics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
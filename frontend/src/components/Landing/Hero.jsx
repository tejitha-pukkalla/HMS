// src/components/landing/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-blue-500 to-cyan-500 min-h-screen flex items-center relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
        <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 text-white mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Your Smile Deserves The Best Care</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">Experience premium dental care with our team of expert dentists using the latest technology for beautiful, healthy smiles.</p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#book-appointment'}
            >
              Book Appointment
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#services'}
            >
              Our Services
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <img 
                src="/api/placeholder/600/400" 
                alt="Dental care" 
                className="rounded-xl w-full h-auto" 
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm font-bold">5000+</p>
              <p className="text-xs">Happy Patients</p>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-green-400 p-4 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm font-bold">15+</p>
              <p className="text-xs">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
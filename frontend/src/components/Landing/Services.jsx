// src/components/landing/Services.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  const services = {
    general: [
      {
        title: 'Dental Check-ups',
        description: 'Regular examinations to maintain oral health and prevent issues.',
        icon: '🔍'
      },
      {
        title: 'Teeth Cleaning',
        description: 'Professional cleaning to remove plaque and tartar buildup.',
        icon: '✨'
      },
      {
        title: 'Fillings',
        description: 'Restore damaged teeth with composite or amalgam fillings.',
        icon: '🦷'
      },
      {
        title: 'X-Rays',
        description: 'Digital X-rays for accurate diagnosis with minimal radiation.',
        icon: '📷'
      }
    ],
    cosmetic: [
      {
        title: 'Teeth Whitening',
        description: 'Professional whitening treatments for a brighter smile.',
        icon: '⭐'
      },
      {
        title: 'Veneers',
        description: 'Custom shells to cover the front surface of teeth improving appearance.',
        icon: '😁'
      },
      {
        title: 'Bonding',
        description: 'Repair chipped, broken, or discolored teeth with bonding material.',
        icon: '💎'
      },
      {
        title: 'Smile Makeover',
        description: 'Comprehensive treatment plan to transform your smile.',
        icon: '✨'
      }
    ],
    surgical: [
      {
        title: 'Tooth Extraction',
        description: 'Safe and gentle removal of problematic teeth.',
        icon: '🔧'
      },
      {
        title: 'Root Canal',
        description: 'Treatment to repair and save a badly infected or damaged tooth.',
        icon: '🌱'
      },
      {
        title: 'Dental Implants',
        description: 'Permanent replacement of missing teeth with titanium implants.',
        icon: '🔩'
      },
      {
        title: 'Wisdom Teeth',
        description: 'Specialized removal of wisdom teeth to prevent complications.',
        icon: '🦷'
      }
    ]
  };

  const tabVariants = {
    active: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    inactive: { 
      y: 20, 
      opacity: 0,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Comprehensive dental care for all your needs. From routine check-ups to advanced treatments, we've got you covered.</p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['general', 'cosmetic', 'surgical'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Dentistry
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial="inactive"
            animate="active"
            variants={tabVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services[activeTab].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-blue-50 p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Not sure what you need?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our dentists can help determine the best treatment plan for your specific needs. Schedule a consultation today.
          </p>
          <motion.button 
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '#book-appointment'}
          >
            Book a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
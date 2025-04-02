// src/components/landing/Testimonials.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient for 4 years",
      text: "The team at DentalCare has completely transformed my dental experience. I used to be terrified of dental visits, but Dr. Parker's gentle approach changed everything. Now I actually look forward to my check-ups!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Patient for 2 years",
      text: "I had an emergency tooth extraction, and the care I received was exceptional. The staff fit me in on short notice, explained the procedure clearly, and followed up afterward to make sure I was healing well.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Patient for 3 years",
      text: "I've had extensive cosmetic dentistry work done at DentalCare, and I couldn't be happier with the results. My smile has never looked better, and the entire process was explained thoroughly at every step.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Patient for 1 year",
      text: "As someone with dental anxiety, I appreciate how the team always takes their time with me. They never make me feel rushed and are always patient. The results of my treatments have been excellent.",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Hear from our satisfied patients about their experiences at DentalCare.</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-10">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">{testimonials[activeIndex].name.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                  {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-gray-300 text-2xl">★</span>
                  ))}
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 italic text-lg">"{testimonials[activeIndex].text}"</p>
              </blockquote>
            </motion.div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={activeIndex === testimonials.length - 1}
              onClick={() => setActiveIndex(prev => Math.min(testimonials.length - 1, prev + 1))}
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
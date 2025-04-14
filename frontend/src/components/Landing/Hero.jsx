// // src/components/landing/Hero.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <div id="home" className="bg-gradient-to-r from-blue-500 to-cyan-500 min-h-screen flex items-center relative overflow-hidden">
//       {/* Background patterns */}
//       <div className="absolute inset-0">
//         <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
//         <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
//       </div>

//       <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
//         <motion.div 
//           className="w-full md:w-1/2 text-white mb-12 md:mb-0"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Your Smile Deserves The Best Care</h1>
//           <p className="text-lg md:text-xl mb-8 text-blue-100">Experience premium dental care with our team of expert dentists using the latest technology for beautiful, healthy smiles.</p>
//           <div className="flex flex-wrap gap-4">
//             <motion.button 
//               className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => window.location.href = '#book-appointment'}
//             >
//               Book Appointment
//             </motion.button>
//             <motion.button 
//               className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => window.location.href = '#services'}
//             >
//               Our Services
//             </motion.button>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <div className="relative">
//             <div className="bg-white p-4 rounded-2xl shadow-2xl">
//               <img 
//                 src="/api/placeholder/600/400" 
//                 alt="Dental care" 
//                 className="rounded-xl w-full h-auto" 
//               />
//             </div>
            
//             {/* Decorative elements */}
//             <motion.div 
//               className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-lg shadow-lg"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               <p className="text-sm font-bold">5000+</p>
//               <p className="text-xs">Happy Patients</p>
//             </motion.div>
            
//             <motion.div 
//               className="absolute -top-6 -right-6 bg-green-400 p-4 rounded-lg shadow-lg"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8 }}
//             >
//               <p className="text-sm font-bold">15+</p>
//               <p className="text-xs">Years Experience</p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 100 }
    }
  };

  return (
    <div id="home" className="bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500 min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>

        <motion.div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute left-1/4 top-1/4 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.1, 0.15, 0.1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 text-white mb-12 md:mb-0"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="inline-block mb-4 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-blue-100 border border-white/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Premium Dental Care
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Smile,<br />
            Our <span className="text-yellow-300 relative">
              Passion
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C20 2.5 60.5 1 127 6.5" stroke="#FDE68A" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-xl">
            Experience premium dental care with our team of expert dentists using cutting-edge technology for beautiful, healthy smiles that last a lifetime.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#book-appointment'}
            >
              <span className="mr-2">Book Appointment</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white/70 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#services'}
            >
              Explore Services
            </motion.button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center mt-12 space-x-8">
            <div className="flex items-center">
              <div className="mr-3 bg-white/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-100">Rated 4.9/5</p>
                <p className="text-xs text-blue-200">from 2000+ reviews</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-3 bg-white/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-100">15+ Years</p>
                <p className="text-xs text-blue-200">of excellence</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.3 }}
        >
          <div className="relative">
            <motion.div 
              className="bg-white p-1 rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ 
                backgroundImage: "linear-gradient(135deg, #ffffff, #ffffff, #ffffff, #e6f0ff)",
                padding: "10px"
              }}
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Dental care" 
                className="rounded-xl w-full h-auto object-cover" 
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-xl"></div>

              {/* Floating details */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-lg font-bold">5000+</p>
                <p className="text-xs">Happy Patients</p>
              </motion.div>
              
              <motion.div 
                className="absolute top-4 left-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-blue-600 font-semibold text-sm">Advanced Technology</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
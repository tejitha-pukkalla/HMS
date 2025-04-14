// // src/components/landing/About.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   const features = [
//     {
//       icon: "🦷",
//       title: "Expert Dentists",
//       description: "Our team of highly qualified dentists with years of experience in various dental specialties."
//     },
//     {
//       icon: "🔬",
//       title: "Modern Technology",
//       description: "State-of-the-art equipment and the latest dental technology for accurate diagnoses and treatments."
//     },
//     {
//       icon: "💖",
//       title: "Patient-Centered",
//       description: "We focus on making your visit comfortable and stress-free, with gentle techniques and personalized care."
//     },
//     {
//       icon: "🏆",
//       title: "Award-Winning",
//       description: "Recognized for excellence in dental care and patient satisfaction in the community."
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Clinic</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-gray-600">Founded in 2010, DentalCare has been providing exceptional dental services to our community. Our mission is to ensure every patient has access to quality dental care in a comfortable environment.</p>
//         </motion.div>

//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <motion.div 
//             className="w-full md:w-1/2"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative">
//               <div className="bg-white p-3 rounded-lg shadow-lg">
//                 <img 
//                   src="/api/placeholder/600/400" 
//                   alt="Our dental clinic" 
//                   className="rounded w-full h-auto" 
//                 />
//               </div>
              
//               <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
//                 <p className="text-xl font-bold">15+</p>
//                 <p className="text-sm">Years of Excellence</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div 
//             className="w-full md:w-1/2"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Committed to Excellence</h3>
//             <p className="text-gray-600 mb-6">
//               At DentalCare, we believe in providing comprehensive dental care that addresses both the functional and aesthetic aspects of your dental health. Our approach combines clinical excellence with a warm, patient-centered experience.
//             </p>
//             <p className="text-gray-600 mb-8">
//               We understand that visiting the dentist can be stressful for many people, which is why we've created a calming environment and implemented gentle techniques to ensure your comfort.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   <div className="text-3xl mb-2">{feature.icon}</div>
//                   <h4 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h4>
//                   <p className="text-sm text-gray-600">{feature.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: "🦷",
      title: "Expert Dentists",
      description: "Highly qualified team with years of experience in various dental specialties."
    },
    {
      icon: "🔬",
      title: "Modern Technology",
      description: "State-of-the-art equipment for accurate diagnoses and treatments."
    },
    {
      icon: "💖",
      title: "Patient-Centered",
      description: "Comfortable, stress-free visits with gentle techniques and personalized care."
    },
    {
      icon: "🏆",
      title: "Award-Winning",
      description: "Recognized for excellence in dental care and patient satisfaction."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      y: -10,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Clinic</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Founded in 2010, DentalCare has been providing exceptional dental services to our community. Our mission is to ensure every patient has access to quality dental care in a comfortable environment.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div 
                className="bg-white p-3 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Our dental clinic" 
                  className="rounded w-full h-auto" 
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <p className="text-xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Committed to Excellence</h3>
            <p className="text-gray-600 mb-6">
              At DentalCare, we believe in providing comprehensive dental care that addresses both the functional and aesthetic aspects of your dental health. Our approach combines clinical excellence with a warm, patient-centered experience.
            </p>
            <p className="text-gray-600 mb-8">
              We understand that visiting the dentist can be stressful for many people, which is why we've created a calming environment and implemented gentle techniques to ensure your comfort.
            </p>
            
            {/* Features Grid instead of Horizontal Scroll */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  variants={featureVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center">
                    <div className="text-2xl mr-3 bg-blue-50 p-2 rounded-full">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
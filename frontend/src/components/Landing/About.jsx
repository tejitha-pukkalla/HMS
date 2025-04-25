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

// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   const features = [
//     {
//       icon: "🦷",
//       title: "Expert Dentists",
//       description: "Highly qualified team with years of experience in various dental specialties."
//     },
//     {
//       icon: "🔬",
//       title: "Modern Technology",
//       description: "State-of-the-art equipment for accurate diagnoses and treatments."
//     },
//     {
//       icon: "💖",
//       title: "Patient-Centered",
//       description: "Comfortable, stress-free visits with gentle techniques and personalized care."
//     },
//     {
//       icon: "🏆",
//       title: "Award-Winning",
//       description: "Recognized for excellence in dental care and patient satisfaction."
//     }
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const featureVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     },
//     hover: { 
//       y: -10,
//       boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//       transition: { type: "spring", stiffness: 300 }
//     }
//   };

//   return (
//     <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">About Us</span>
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
//               <motion.div 
//                 className="bg-white p-3 rounded-lg shadow-lg"
//                 whileHover={{ scale: 1.02, rotate: -1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <img 
//                   src="/api/placeholder/600/400" 
//                   alt="Our dental clinic" 
//                   className="rounded w-full h-auto" 
//                 />
//               </motion.div>
              
//               <motion.div 
//                 className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg"
//                 initial={{ scale: 0, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, type: "spring" }}
//               >
//                 <p className="text-xl font-bold">15+</p>
//                 <p className="text-sm">Years of Excellence</p>
//               </motion.div>
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
            
//             {/* Features Grid instead of Horizontal Scroll */}
//             <motion.div 
//               className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               {features.map((feature, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
//                   variants={featureVariants}
//                   whileHover="hover"
//                 >
//                   <div className="flex items-center">
//                     <div className="text-2xl mr-3 bg-blue-50 p-2 rounded-full">{feature.icon}</div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
//                       <p className="text-sm text-gray-600">{feature.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// AboutUs.jsx --- 1
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronRight, CheckCircle, Phone, Mail, MapPin, Calendar } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const AboutUs = () => {
//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <div className="bg-blue-50 py-20 relative overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-center text-center">
//             <motion.h1 
//               className="text-4xl md:text-5xl font-bold mb-4 text-blue-900"
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//             >
//               About Our Dental Clinic
//             </motion.h1>
//             <motion.div 
//               className="flex items-center space-x-2 text-blue-600 mb-8"
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               transition={{ delay: 0.2 }}
//             >
//               <a href="/" className="hover:text-blue-800">Home</a>
//               <ChevronRight size={16} />
//               <span className="text-blue-800">About Us</span>
//             </motion.div>
//           </div>
//         </div>
//         <div className="absolute -bottom-10 left-0 w-full h-20 bg-white" style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)" }}></div>
//       </div>

//       {/* About Section */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div 
//               className="relative"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="rounded-lg overflow-hidden shadow-xl">
//                 <img src="/api/placeholder/600/500" alt="Dental clinic team" className="w-full h-auto" />
//               </div>
//               <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg hidden md:block">
//                 <div className="bg-blue-600 text-white p-6 rounded-lg">
//                   <div className="text-5xl font-bold">25+</div>
//                   <div className="text-lg">Years of Experience</div>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">Welcome to Our Dental Excellence Center</h2>
//               <div className="w-20 h-1 bg-blue-600 mb-6"></div>
//               <p className="text-gray-600 mb-6">
//                 We are dedicated to providing exceptional dental care in a comfortable and welcoming environment. 
//                 Our team of experienced professionals uses the latest technology to ensure you receive the best treatment possible.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Since our founding in 1998, we've been committed to improving oral health in our community through 
//                 personalized care plans and patient education.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
//                   <p>Advanced Dental Technology</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
//                   <p>Experienced Dental Team</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
//                   <p>Comfortable Environment</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
//                   <p>Personalized Care Plans</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <img src="/api/placeholder/80/80" alt="Doctor signature" className="w-20 h-auto" />
//                 <div>
//                   <h4 className="font-bold text-lg">Dr. Sarah Johnson</h4>
//                   <p className="text-blue-600">Clinic Director</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="bg-blue-50 py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">Why Choose Our Dental Clinic</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our commitment to excellence and patient-centered care sets us apart in dental healthcare.
//               Here's why patients trust us with their smiles:
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Expert Dental Team",
//                 description: "Our doctors and staff are highly trained professionals with years of experience in various dental specialties."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Modern Technology",
//                 description: "We utilize state-of-the-art equipment and techniques to provide efficient and effective treatments."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Comfortable Environment",
//                 description: "From our welcoming reception area to comfortable treatment rooms, we've created a relaxing atmosphere."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Comprehensive Services",
//                 description: "We offer a wide range of dental treatments to address all your oral health needs under one roof."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Patient Education",
//                 description: "We believe in empowering our patients with knowledge about their oral health and treatment options."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Personalized Care",
//                 description: "Each treatment plan is tailored to the individual needs and preferences of our patients."
//               }
//             ].map((item, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
//                   <img src={item.icon} alt={item.title} className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-center text-blue-900">{item.title}</h3>
//                 <p className="text-gray-600 text-center">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">Meet Our Dental Experts</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our team of dental professionals is dedicated to providing you with the highest quality care in a comfortable and friendly environment.
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 image: "/api/placeholder/300/350",
//                 name: "Dr. Sarah Johnson",
//                 role: "Clinic Director",
//                 description: "Specializing in cosmetic dentistry with 15+ years of experience."
//               },
//               {
//                 image: "/api/placeholder/300/350",
//                 name: "Dr. Michael Chen",
//                 role: "Orthodontist",
//                 description: "Expert in teeth alignment and jaw corrections for all ages."
//               },
//               {
//                 image: "/api/placeholder/300/350",
//                 name: "Dr. Emily Rodriguez",
//                 role: "Periodontist",
//                 description: "Specialist in gum health and periodontal treatments."
//               },
//               {
//                 image: "/api/placeholder/300/350",
//                 name: "Dr. James Wilson",
//                 role: "Dental Surgeon",
//                 description: "Experienced in complex surgical procedures and implants."
//               }
//             ].map((member, index) => (
//               <motion.div 
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg shadow-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <img src={member.image} alt={member.name} className="w-full h-auto" />
//                 <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-xl font-bold mb-1 text-blue-900">{member.name}</h3>
//                   <p className="text-blue-600 mb-3">{member.role}</p>
//                   <p className="text-gray-600">{member.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div className="bg-blue-50 py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">What Our Patients Say</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Don't just take our word for it - hear what our satisfied patients have to say about their experiences at our dental clinic.
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 quote: "The entire team made me feel comfortable throughout my treatment. Dr. Johnson's expertise in cosmetic dentistry transformed my smile completely.",
//                 image: "/api/placeholder/100/100",
//                 name: "Rebecca Martinez",
//                 role: "Marketing Executive"
//               },
//               {
//                 quote: "I've been coming to this clinic for over 5 years. The staff is always friendly and professional. Best dental care I've ever received!",
//                 image: "/api/placeholder/100/100",
//                 name: "Thomas Wilson",
//                 role: "Teacher"
//               },
//               {
//                 quote: "As someone with dental anxiety, I appreciate how patient and understanding everyone is here. They make dental visits much less stressful.",
//                 image: "/api/placeholder/100/100",
//                 name: "Lisa Chang",
//                 role: "Software Engineer"
//               }
//             ].map((testimonial, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
//                 <div className="flex items-center">
//                   <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
//                   <div>
//                     <h4 className="font-bold">{testimonial.name}</h4>
//                     <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="bg-blue-900 rounded-lg p-8 md:p-12 text-white text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your Dental Appointment?</h2>
//               <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//                 Take the first step towards a healthier smile. Our friendly team is ready to assist you with any questions or to schedule your visit.
//               </p>
//               <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
//                 <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 h-auto">
//                   Book an Appointment
//                 </Button>
//                 <Button className="bg-transparent border-2 border-white hover:bg-blue-800 px-8 py-6 h-auto">
//                   Contact Us
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Info */}
//       <div className="bg-blue-50 py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Phone size={36} className="text-blue-600" />,
//                 title: "Phone Number",
//                 info: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
//                 delay: 0
//               },
//               {
//                 icon: <Mail size={36} className="text-blue-600" />,
//                 title: "Email Address",
//                 info: ["info@dentalclinic.com", "appointments@dentalclinic.com"],
//                 delay: 0.1
//               },
//               {
//                 icon: <MapPin size={36} className="text-blue-600" />,
//                 title: "Office Address",
//                 info: ["123 Dental Street", "Cityville, State 12345"],
//                 delay: 0.2
//               },
//               {
//                 icon: <Calendar size={36} className="text-blue-600" />,
//                 title: "Working Hours",
//                 info: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
//                 delay: 0.3
//               }
//             ].map((item, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-lg text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: item.delay }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex justify-center mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-blue-900">{item.title}</h3>
//                 {item.info.map((line, i) => (
//                   <p key={i} className="text-gray-600">{line}</p>
//                 ))}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// AboutUs.jsx-------2
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronRight, CheckCircle, Phone, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const AboutUs = () => {
//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   // Custom colors matching Dentatiz template
//   const colors = {
//     primary: '#FF6B81',      // Baby pink - primary color
//     secondary: '#7E4555',    // Darker pink/burgundy - secondary color
//     light: '#FFF3F5',        // Very light pink - background color
//     dark: '#333333',         // Dark gray - text color
//     heading: '#333333',      // Dark gray - heading color
//     paragraph: '#666666',    // Medium gray - paragraph color
//   };

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <div style={{ backgroundColor: colors.light }} className="py-20 relative overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-center text-center">
//             <motion.h1 
//               className="text-4xl md:text-5xl font-bold mb-4"
//               style={{ color: colors.heading }}
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//             >
//               About Our Dental Clinic
//             </motion.h1>
//             <motion.div 
//               className="flex items-center space-x-2 mb-8"
//               style={{ color: colors.primary }}
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               transition={{ delay: 0.2 }}
//             >
//               <a href="/" className="hover:text-secondary" style={{ color: colors.primary }}>Home</a>
//               <ChevronRight size={16} />
//               <span style={{ color: colors.secondary }}>About Us</span>
//             </motion.div>
//           </div>
//         </div>
//         <div className="absolute -bottom-10 left-0 w-full h-20 bg-white" style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)" }}></div>
//       </div>

//       {/* About Section */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div 
//               className="relative"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="rounded-lg overflow-hidden shadow-xl">
//                 <img src="/api/placeholder/600/500" alt="Dental clinic team" className="w-full h-auto" />
//               </div>
//               <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg hidden md:block">
//                 <div style={{ backgroundColor: colors.primary }} className="text-white p-6 rounded-lg">
//                   <div className="text-5xl font-bold">25+</div>
//                   <div className="text-lg">Years of Experience</div>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.heading }}>Welcome to Our Dental Excellence Center</h2>
//               <div className="w-20 h-1 mb-6" style={{ backgroundColor: colors.primary }}></div>
//               <p className="mb-6" style={{ color: colors.paragraph }}>
//                 We are dedicated to providing exceptional dental care in a comfortable and welcoming environment. 
//                 Our team of experienced professionals uses the latest technology to ensure you receive the best treatment possible.
//               </p>
//               <p className="mb-6" style={{ color: colors.paragraph }}>
//                 Since our founding in 1998, we've been committed to improving oral health in our community through 
//                 personalized care plans and patient education. With state-of-the-art facilities and a patient-first approach,
//                 we make every dental visit a positive experience.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle style={{ color: colors.primary }} className="mt-1 flex-shrink-0" size={20} />
//                   <p style={{ color: colors.paragraph }}>Advanced Dental Technology</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle style={{ color: colors.primary }} className="mt-1 flex-shrink-0" size={20} />
//                   <p style={{ color: colors.paragraph }}>Experienced Dental Team</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle style={{ color: colors.primary }} className="mt-1 flex-shrink-0" size={20} />
//                   <p style={{ color: colors.paragraph }}>Comfortable Environment</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle style={{ color: colors.primary }} className="mt-1 flex-shrink-0" size={20} />
//                   <p style={{ color: colors.paragraph }}>Personalized Care Plans</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <img src="/api/placeholder/80/80" alt="Doctor signature" className="w-20 h-auto" />
//                 <div>
//                   <h4 className="font-bold text-lg" style={{ color: colors.heading }}>Dr. Sarah Johnson</h4>
//                   <p style={{ color: colors.primary }}>Clinic Director</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Video Section */}
//       <div style={{ backgroundColor: colors.light }} className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.heading }}>Watch Our Clinic Tour</h2>
//               <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: colors.primary }}></div>
//               <p className="mb-10" style={{ color: colors.paragraph }}>
//                 Take a virtual tour of our state-of-the-art dental clinic and see our facilities, 
//                 technology, and welcoming environment.
//               </p>
//             </motion.div>
//           </div>
          
//           <motion.div
//             className="relative rounded-lg overflow-hidden shadow-xl"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <img src="/api/placeholder/1200/675" alt="Video thumbnail" className="w-full h-auto" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div 
//                 className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer shadow-xl"
//                 style={{ backgroundColor: colors.primary }}
//               >
//                 <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.heading }}>Why Choose Our Dental Clinic</h2>
//             <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: colors.primary }}></div>
//             <p className="max-w-2xl mx-auto" style={{ color: colors.paragraph }}>
//               Our commitment to excellence and patient-centered care sets us apart in dental healthcare.
//               Here's why patients trust us with their smiles:
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Expert Dental Team",
//                 description: "Our doctors and staff are highly trained professionals with years of experience in various dental specialties."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Modern Technology",
//                 description: "We utilize state-of-the-art equipment and techniques to provide efficient and effective treatments."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Comfortable Environment",
//                 description: "From our welcoming reception area to comfortable treatment rooms, we've created a relaxing atmosphere."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Comprehensive Services",
//                 description: "We offer a wide range of dental treatments to address all your oral health needs under one roof."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Patient Education",
//                 description: "We believe in empowering our patients with knowledge about their oral health and treatment options."
//               },
//               {
//                 icon: "/api/placeholder/80/80",
//                 title: "Personalized Care",
//                 description: "Each treatment plan is tailored to the individual needs and preferences of our patients."
//               }
//             ].map((item, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: colors.light }}>
//                   <img src={item.icon} alt={item.title} className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-center" style={{ color: colors.heading }}>{item.title}</h3>
//                 <p className="text-center" style={{ color: colors.paragraph }}>{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Counter Section */}
//       <div style={{ backgroundColor: colors.light }} className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 number: "25+",
//                 label: "Years of Experience",
//                 delay: 0
//               },
//               {
//                 number: "15,000+",
//                 label: "Happy Patients",
//                 delay: 0.1
//               },
//               {
//                 number: "18",
//                 label: "Expert Dentists",
//                 delay: 0.2
//               },
//               {
//                 number: "12",
//                 label: "Dental Awards",
//                 delay: 0.3
//               }
//             ].map((item, index) => (
//               <motion.div 
//                 key={index}
//                 className="text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: item.delay }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>{item.number}</h3>
//                 <p className="text-xl" style={{ color: colors.heading }}>{item.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.heading }}>Meet Our Dental Experts</h2>
//             <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: colors.primary }}></div>
//             <p className="max-w-2xl mx-auto" style={{ color: colors.paragraph }}>
//               Our team of dental professionals is dedicated to providing you with the highest quality care in a comfortable and friendly environment.
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 image: "/api/placeholder/300/350",
//                 name: "Dr. Sarah Johnson",
//                 role: "Clinic Director",
//                 description: "Specializing in cosmetic dentistry with 15+ years of experience."
//               },
//               {
//                 image: "/api/placeholder/300/350",
//                 name: "Dr. Michael Chen",
//                 role: "Orthodontist",
//                 description: "Expert in teeth alignment and jaw corrections for all ages."
//               },
//               {
//                 image: "/api/placeholder/300/350",
//                 name: "Dr. Emily Rodriguez",
//                 role: "Periodontist",
//                 description: "Specialist in gum health and periodontal treatments."
//               },
//               {
//                 image: "/api/placeholder/300/350",
//                 name: "Dr. James Wilson",
//                 role: "Dental Surgeon",
//                 description: "Experienced in complex surgical procedures and implants."
//               }
//             ].map((member, index) => (
//               <motion.div 
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg shadow-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <img src={member.image} alt={member.name} className="w-full h-auto" />
//                 <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-xl font-bold mb-1" style={{ color: colors.heading }}>{member.name}</h3>
//                   <p className="mb-3" style={{ color: colors.primary }}>{member.role}</p>
//                   <p style={{ color: colors.paragraph }}>{member.description}</p>
//                   <div className="mt-4 flex space-x-3">
//                     {['facebook', 'twitter', 'instagram'].map((social, i) => (
//                       <a 
//                         key={i} 
//                         href="#" 
//                         className="w-8 h-8 rounded-full flex items-center justify-center text-white"
//                         style={{ backgroundColor: colors.primary }}
//                       >
//                         <span className="sr-only">{social}</span>
//                         <i className={`fa fa-${social}`}></i>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div style={{ backgroundColor: colors.light }} className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.heading }}>What Our Patients Say</h2>
//             <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: colors.primary }}></div>
//             <p className="max-w-2xl mx-auto" style={{ color: colors.paragraph }}>
//               Don't just take our word for it - hear what our satisfied patients have to say about their experiences at our dental clinic.
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 quote: "The entire team made me feel comfortable throughout my treatment. Dr. Johnson's expertise in cosmetic dentistry transformed my smile completely.",
//                 image: "/api/placeholder/100/100",
//                 name: "Rebecca Martinez",
//                 role: "Marketing Executive"
//               },
//               {
//                 quote: "I've been coming to this clinic for over 5 years. The staff is always friendly and professional. Best dental care I've ever received!",
//                 image: "/api/placeholder/100/100",
//                 name: "Thomas Wilson",
//                 role: "Teacher"
//               },
//               {
//                 quote: "As someone with dental anxiety, I appreciate how patient and understanding everyone is here. They make dental visits much less stressful.",
//                 image: "/api/placeholder/100/100",
//                 name: "Lisa Chang",
//                 role: "Software Engineer"
//               }
//             ].map((testimonial, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 fill-current" style={{ color: '#FFAD0F' }} viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="mb-6 italic" style={{ color: colors.paragraph }}>"{testimonial.quote}"</p>
//                 <div className="flex items-center">
//                   <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
//                   <div>
//                     <h4 className="font-bold" style={{ color: colors.heading }}>{testimonial.name}</h4>
//                     <p className="text-sm" style={{ color: colors.paragraph }}>{testimonial.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <div style={{ backgroundColor: colors.primary }} className="rounded-lg p-8 md:p-12 text-white text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your Dental Appointment?</h2>
//               <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
//                 Take the first step towards a healthier smile. Our friendly team is ready to assist you with any questions or to schedule your visit.
//               </p>
//               <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
//                 <Button className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-6 h-auto">
//                   Book an Appointment
//                 </Button>
//                 <Button className="bg-transparent border-2 border-white hover:bg-pink-700 px-8 py-6 h-auto">
//                   Contact Us
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Info */}
//       <div style={{ backgroundColor: colors.light }} className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Phone size={36} style={{ color: colors.primary }} />,
//                 title: "Phone Number",
//                 info: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
//                 delay: 0
//               },
//               {
//                 icon: <Mail size={36} style={{ color: colors.primary }} />,
//                 title: "Email Address",
//                 info: ["info@dentalclinic.com", "appointments@dentalclinic.com"],
//                 delay: 0.1
//               },
//               {
//                 icon: <MapPin size={36} style={{ color: colors.primary }} />,
//                 title: "Office Address",
//                 info: ["123 Dental Street", "Cityville, State 12345"],
//                 delay: 0.2
//               },
//               {
//                 icon: <Calendar size={36} style={{ color: colors.primary }} />,
//                 title: "Working Hours",
//                 info: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
//                 delay: 0.3
//               }
//             ].map((item, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-lg text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: item.delay }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex justify-center mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-4" style={{ color: colors.heading }}>{item.title}</h3>
//                 {item.info.map((line, i) => (
//                   <p key={i} style={{ color: colors.paragraph }}>{line}</p>
//                 ))}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.heading }}>Frequently Asked Questions</h2>
//               <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: colors.primary }}></div>
//               <p className="max-w-2xl mx-auto" style={{ color: colors.paragraph }}>
//                 Find answers to common questions about our dental services, appointments, and procedures.
//               </p>
//             </motion.div>
//           </div>
          
//           <div className="max-w-3xl mx-auto">
//             {[
//               {
//                 question: "What should I expect during my first dental visit?",
//                 answer: "Your first visit typically includes a comprehensive examination, dental cleaning, x-rays if necessary, and a discussion about your dental history and concerns. We'll create a personalized treatment plan based on your needs."
//               },
//               {
//                 question: "How often should I visit the dentist?",
//                 answer: "We recommend scheduling regular check-ups and cleanings every six months. However, depending on your oral health needs, your dentist may suggest more frequent visits."
//               },
//               {
//                 question: "What payment options do you offer?",
//                 answer: "We accept most major insurance plans, credit cards, and offer flexible payment plans. Our administrative team can help verify your insurance coverage and discuss financial options."
//               },
//               {
//                 question: "How can I manage dental anxiety?",
//                 answer: "We understand dental anxiety is common. We offer sedation options, comfort amenities, and our team is trained to provide gentle care. Let us know your concerns so we can make your visit as comfortable as possible."
//               }
//             ].map((faq, index) => (
//               <motion.div 
//                 key={index}
//                 className="mb-6 bg-white p-6 rounded-lg shadow-md"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="font-bold text-lg mb-2 flex justify-between items-center cursor-pointer" style={{ color: colors.heading }}>
//                   {faq.question}
//                   <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
//                     <ArrowRight className="text-white" size={14} />
//                   </div>
//                 </h3>
//                 <p style={{ color: colors.paragraph }}>{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Newsletter */}
//       <div style={{ backgroundColor: colors.light }} className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.heading }}>Subscribe to Our Newsletter</h2>
//               <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: colors.primary }}></div>
//               <p className="mb-8" style={{ color: colors.paragraph }}>
//                 Stay updated with the latest dental care tips, clinic news, and special offers. Subscribe to our newsletter!
//               </p>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email address" 
//                   className="px-4 py-3 rounded-lg flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
//                 />
//                 <Button className="px-8 py-3 h-auto text-white" style={{ backgroundColor: colors.primary }}>
//                   Subscribe
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


// AboutUsHero.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Eye, Target } from 'lucide-react';

// const AboutUsHero = () => {
//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   // Custom colors matching Dentatiz template
//   const colors = {
//     primary: '#FF6B81',      // Pink - primary color
//     secondary: '#7E4555',    // Darker pink/burgundy - secondary color
//     darkBlue: '#0E1A45',     // Dark blue for headings
//     light: '#FFF3F5',        // Very light pink - background color
//     paragraph: '#666666',    // Medium gray - paragraph color
//   };

//   return (
//     <div className="font-sans">
//       {/* Header/Navigation */}
//       <header className="bg-white fixed w-full z-10 shadow-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             <div className="flex items-center">
//               <div className="mr-2">
//                 <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M18 3C10.832 3 5 8.832 5 16C5 23.168 10.832 29 18 29C25.168 29 31 23.168 31 16C31 8.832 25.168 3 18 3Z" fill="#FF6B81"/>
//                   <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="white"/>
//                   <path d="M24 12C24 13.1046 23.1046 14 22 14C20.8954 14 20 13.1046 20 12C20 10.8954 20.8954 10 22 10C23.1046 10 24 10.8954 24 12Z" fill="white"/>
//                   <path d="M18 21C15.5 21 13.5 19.5 13 18H23C22.5 19.5 20.5 21 18 21Z" fill="white"/>
//                 </svg>
//               </div>
//               <div className="text-2xl font-bold" style={{ color: colors.darkBlue }}>DENTATIZ</div>
//             </div>
//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="/" className="text-gray-500 hover:text-gray-800">Home</a>
//               <a href="/about" className="text-blue-600 font-medium">About Us</a>
//               <a href="/services" className="text-gray-500 hover:text-gray-800">Services</a>
//               <a href="/dentist" className="text-gray-500 hover:text-gray-800">Our Dentist</a>
//               <a href="/pages" className="text-gray-500 hover:text-gray-800">Pages</a>
//             </nav>
//             <div className="hidden md:block">
//               <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <div className="pt-24 pb-12 overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
//             {/* Left Side - Image with gradient overlay */}
//             <div className="md:col-span-6 relative">
//               <div className="rounded-lg overflow-hidden">
//                 <div className="relative">
//                   <img 
//                     src="/api/placeholder/600/500" 
//                     alt="Dental team" 
//                     className="w-full h-auto"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-200 opacity-60"></div>
//                 </div>
//               </div>
              
//               {/* Star Rating */}
//               <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Side - Text Content */}
//             <motion.div 
//               className="md:col-span-6"
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//             >
//               <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: colors.darkBlue }}>
//                 The Expertise Behind Your Confident Smile
//               </h1>
              
//               <p className="text-lg mb-10" style={{ color: colors.paragraph }}>
//                 At Dentatiz, we are the team behind your healthy and radiant smile. With advanced care, personalized treatments, and a commitment to excellence, we ensure your dental health is in expert hands.
//               </p>
              
//               {/* Vision Card */}
//               <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//                 <div className="flex items-start">
//                   <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: colors.light }}>
//                     <Eye size={28} style={{ color: colors.primary }} />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold mb-2" style={{ color: colors.darkBlue }}>Our Vision</h3>
//                     <p style={{ color: colors.paragraph }}>
//                       To be the trusted leader in dental care through excellence innovation.
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Mission Card */}
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <div className="flex items-start">
//                   <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: colors.light }}>
//                     <Target size={28} style={{ color: colors.primary }} />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold mb-2" style={{ color: colors.darkBlue }}>Our Mission</h3>
//                     <p style={{ color: colors.paragraph }}>
//                       To provide exceptional dental care that improves our patients' quality of life.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsHero;



// 1---------------------------
// import { useState } from "react";
// import { Phone } from "lucide-react";

// export default function DentatizAboutPage() {
//   const [activeTab, setActiveTab] = useState("about");
  
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Top Navigation Bar */}
//       <header className="w-full bg-white shadow-sm">
//         <div className="flex justify-between items-center px-8 py-4">
//           <div className="flex items-center space-x-2">
//             <div className="text-red-400">
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M7 2C4.2 2 2 4.2 2 7V10C2 15 7 20 12 20C17 20 22 15 22 10V7C22 4.2 19.8 2 17 2H7Z" fill="currentColor" fillOpacity="0.2"/>
//                 <path d="M12 12C10.9 12 10 11.1 10 10V8C10 7.4 10.4 7 11 7C11.6 7 12 7.4 12 8V10C12 10.6 12.4 11 13 11C13.6 11 14 10.6 14 10V8C14 7.4 14.4 7 15 7C15.6 7 16 7.4 16 8V10C16 11.1 15.1 12 14 12H12Z" fill="currentColor"/>
//                 <path d="M7 2C4.2 2 2 4.2 2 7V10C2 15 7 20 12 20C17 20 22 15 22 10V7C22 4.2 19.8 2 17 2H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M11 22C8 22 8 22 8 22C8 22 8 22 11 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <div className="font-bold text-xl text-gray-800">DENTATIZ</div>
//           </div>
          
//           <nav className="hidden md:flex space-x-8">
//             <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
//             <a href="#" className="text-indigo-600 font-medium">About Us</a>
//             <div className="relative group">
//               <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
//                 Services
//                 <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//               </a>
//             </div>
//             <a href="#" className="text-gray-500 hover:text-gray-700">Our Dentist</a>
//             <div className="relative group">
//               <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
//                 Pages
//                 <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//               </a>
//             </div>
//           </nav>
          
//           <div>
//             <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium">Contact Us</button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow">
//         <section className="py-12 px-8 max-w-6xl mx-auto">
//           {/* About Us Banner Section */}
//           <div className="flex flex-col md:flex-row items-center justify-between mb-16">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <img src="/api/placeholder/500/400" alt="Dental team" className="rounded-lg shadow-lg" />
//               <div className="bg-white shadow-lg p-4 rounded-lg mt-4 flex items-center">
//                 <div className="flex text-yellow-400">
//                   <span>★</span>
//                   <span>★</span>
//                   <span>★</span>
//                   <span>★</span>
//                   <span>★</span>
//                 </div>
//                 <p className="ml-2 font-medium text-gray-800">Over 20 years experience</p>
//               </div>
//             </div>
            
//             <div className="md:w-1/2 md:pl-12">
//               <div className="mb-6">
//                 <span className="inline-block px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm font-medium mb-2">Our Story</span>
//                 <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Confident Smile</h1>
//               </div>
              
//               <p className="text-gray-600 mb-6">
//                 At Dentatiz, we are the team behind your healthy and radiant smile. With advanced care, personalized treatments, and a commitment to excellence, we ensure your dental health is in expert hands.
//               </p>
              
//               <div className="space-y-8">
//                 <div className="flex items-start">
//                   <div className="bg-red-100 p-3 rounded-full">
//                     <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                       <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
//                     <p className="text-gray-600">To be the trusted leader in dental care through excellence innovation.</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-red-100 p-3 rounded-full">
//                     <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
//                     <p className="text-gray-600">To provide exceptional, patient-centered dental care with integrity and compassion.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Meet Our Professional Dentists Section */}
//           <div className="mt-24">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-gray-900">Meet Our Professional</h2>
//               <h2 className="text-3xl font-bold text-gray-900 mt-2">Certified Dentist</h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* Dentist 1 */}
//               <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
//                 <img src="/api/placeholder/400/400" alt="Dentist 1" className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
//                   <p className="text-gray-600">Orthodontist</p>
//                   <p className="text-gray-600 mt-2">10+ years of experience in orthodontic treatments and smile makeovers.</p>
//                 </div>
//               </div>
              
//               {/* Dentist 2 */}
//               <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
//                 <img src="/api/placeholder/400/400" alt="Dentist 2" className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900">Dr. Michael Brown</h3>
//                   <p className="text-gray-600">Dental Surgeon</p>
//                   <p className="text-gray-600 mt-2">Specialized in complex dental surgeries and restorative procedures.</p>
//                 </div>
//               </div>
              
//               {/* Dentist 3 */}
//               <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
//                 <img src="/api/placeholder/400/400" alt="Dentist 3" className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900">Dr. Emily Wilson</h3>
//                   <p className="text-gray-600">Cosmetic Dentist</p>
//                   <p className="text-gray-600 mt-2">Expert in cosmetic procedures and aesthetic dental solutions.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Why Choose Us Section */}
//           <div className="my-24">
//             <div className="mb-12">
//               <span className="inline-block px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm font-medium mb-2">Why Choose Us</span>
//               <h2 className="text-4xl font-bold text-gray-900">Your Trusted Partner</h2>
//               <h2 className="text-4xl font-bold text-gray-900 mt-2">In Dental Health Care</h2>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-start justify-between">
//               <div className="md:w-1/2">
//                 <div className="relative pl-16 mb-12">
//                   <div className="absolute left-0 top-0 bg-red-100 text-red-500 p-3 rounded-full">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">Certified Dentist</h3>
//                     <p className="text-gray-600 mt-2">Experience expert dental care with certified specialists dentist.</p>
//                   </div>
//                 </div>
                
//                 <div className="relative pl-16 mb-12">
//                   <div className="absolute left-0 top-0 bg-red-100 text-red-500 p-3 rounded-full">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-2.366.54l-.995-.12a7.001 7.001 0 01-2.25 3.031l.09-.036a2 2 0 01-1.664-3.838L7 12.172V8.172z" clipRule="evenodd"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">Modern Dental Tools</h3>
//                     <p className="text-gray-600 mt-2">Discover the difference that modern dental technology for your teeth.</p>
//                   </div>
//                 </div>
                
//                 <div className="relative pl-16">
//                   <div className="absolute left-0 top-0 bg-red-100 text-red-500 p-3 rounded-full">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">Personalized Care</h3>
//                     <p className="text-gray-600 mt-2">Our treatments fit your individual needs for optimal results.</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="md:w-1/2 mt-8 md:mt-0">
//                 <img src="/api/placeholder/500/400" alt="Dentist working" className="rounded-lg shadow-lg" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
      
//       {/* Call Button */}
//       <div className="fixed bottom-8 right-8 bg-white rounded-full p-3 shadow-lg">
//         <button className="bg-blue-900 text-white p-3 rounded-full">
//           <Phone size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

// 2-------------------------
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function DentatizAboutPage() {
  const [activeTab, setActiveTab] = useState("about");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-10">
        <div className="bg-gray-900 py-2 px-8">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center">
              <img src="/api/placeholder/120/30" alt="Envato Market" className="h-6" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 transition-colors text-white px-4 py-1 rounded text-sm font-medium">
              Buy now
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="text-red-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2C4.2 2 2 4.2 2 7V10C2 15 7 20 12 20C17 20 22 15 22 10V7C22 4.2 19.8 2 17 2H7Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M12 12C10.9 12 10 11.1 10 10V8C10 7.4 10.4 7 11 7C11.6 7 12 7.4 12 8V10C12 10.6 12.4 11 13 11C13.6 11 14 10.6 14 10V8C14 7.4 14.4 7 15 7C15.6 7 16 7.4 16 8V10C16 11.1 15.1 12 14 12H12Z" fill="currentColor"/>
                <path d="M7 2C4.2 2 2 4.2 2 7V10C2 15 7 20 12 20C17 20 22 15 22 10V7C22 4.2 19.8 2 17 2H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 22C8 22 8 22 8 22C8 22 8 22 11 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="font-bold text-xl text-gray-800">DENTATIZ</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Home</a>
            <a href="#" className="text-indigo-600 font-medium transition-colors">About Us</a>
            <div className="relative group">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Our Dentist</a>
            <div className="relative group">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors flex items-center">
                Pages
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
          </nav>
          
          <div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">Contact Us</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <section className={`py-16 px-8 max-w-6xl mx-auto transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm font-medium">About Us</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-3/5">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
                The Story Behind<br />Your Bright Smiles
              </h1>
              
              <img 
                src="/api/placeholder/600/400" 
                alt="Dental consultation" 
                className="w-full rounded-lg shadow-lg object-cover h-96 transform transition-transform hover:scale-[1.02]" 
              />
            </div>
            
            <div className="md:w-2/5">
              <p className="text-xl text-gray-600 mb-6">
                Dedicated to providing top-quality dental care with a patient-first approach.
              </p>
              
              <p className="text-gray-600 mb-4">
                Founded in 2005, Dentatiz has grown from a single dental chair to a comprehensive dental care facility with multiple specialized departments. Our journey began with a simple mission: to make quality dental care accessible to everyone.
              </p>
              
              <p className="text-gray-600">
                Today, we're proud to be recognized as one of the leading dental practices in the region, with a team of passionate professionals dedicated to your oral health and beautiful smiles.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-8 max-w-6xl mx-auto">
          {/* About Us Banner Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/api/placeholder/500/400" 
                alt="Dental team" 
                className="rounded-lg shadow-lg transform transition-transform hover:scale-105" 
              />
              <div className="bg-white shadow-lg p-4 rounded-lg mt-4 flex items-center">
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="ml-2 font-medium text-gray-800">Over 20 years experience</p>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm font-medium mb-2">Our Story</span>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Confident Smile</h1>
              </div>
              
              <p className="text-gray-600 mb-6">
                At Dentatiz, we are the team behind your healthy and radiant smile. With advanced care, personalized treatments, and a commitment to excellence, we ensure your dental health is in expert hands.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">To be the trusted leader in dental care through excellence innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">To provide exceptional, patient-centered dental care with integrity and compassion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Meet Our Professional Dentists Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Meet Our Professional</h2>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Certified Dentist</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Dentist 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-100">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Dentist 1" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600">Orthodontist</p>
                  <p className="text-gray-600 mt-2">10+ years of experience in orthodontic treatments and smile makeovers.</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">View Profile</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">Book Appointment</a>
                  </div>
                </div>
              </div>
              
              {/* Dentist 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-100">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Dentist 2" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Dr. Michael Brown</h3>
                  <p className="text-gray-600">Dental Surgeon</p>
                  <p className="text-gray-600 mt-2">Specialized in complex dental surgeries and restorative procedures.</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">View Profile</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">Book Appointment</a>
                  </div>
                </div>
              </div>
              
              {/* Dentist 3 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-100">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Dentist 3" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Dr. Emily Wilson</h3>
                  <p className="text-gray-600">Cosmetic Dentist</p>
                  <p className="text-gray-600 mt-2">Expert in cosmetic procedures and aesthetic dental solutions.</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">View Profile</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">Book Appointment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us Section */}
          <div className="my-24">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm font-medium mb-2">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-gray-900">Your Trusted Partner</h2>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">In Dental Health Care</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="md:w-1/2">
                <div className="relative pl-16 mb-12 group">
                  <div className="absolute left-0 top-0 bg-red-100 text-red-500 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="transform transition-transform group-hover:translate-x-2">
                    <h3 className="text-xl font-bold text-gray-900">Certified Dentist</h3>
                    <p className="text-gray-600 mt-2">Experience expert dental care with certified specialists dentist.</p>
                  </div>
                </div>
                
                <div className="relative pl-16 mb-12 group">
                  <div className="absolute left-0 top-0 bg-red-100 text-red-500 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-2.366.54l-.995-.12a7.001 7.001 0 01-2.25 3.031l.09-.036a2 2 0 01-1.664-3.838L7 12.172V8.172z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="transform transition-transform group-hover:translate-x-2">
                    <h3 className="text-xl font-bold text-gray-900">Modern Dental Tools</h3>
                    <p className="text-gray-600 mt-2">Discover the difference that modern dental technology for your teeth.</p>
                  </div>
                </div>
                
                <div className="relative pl-16 group">
                  <div className="absolute left-0 top-0 bg-red-100 text-red-500 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div className="transform transition-transform group-hover:translate-x-2">
                    <h3 className="text-xl font-bold text-gray-900">Personalized Care</h3>
                    <p className="text-gray-600 mt-2">Our treatments fit your individual needs for optimal results.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Dentist working" 
                  className="rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl duration-300" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Call Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors transform hover:scale-110 duration-300 flex items-center justify-center">
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
}
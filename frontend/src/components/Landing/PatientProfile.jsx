// // src/components/landing/BookAppointment.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const BookAppointment = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     service: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the data to your backend
//     setIsSubmitted(true);
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         date: '',
//         time: '',
//         service: '',
//         message: ''
//       });
//     }, 3000);
//   };

//   const serviceOptions = [
//     'General Check-up',
//     'Teeth Cleaning',
//     'Tooth Extraction',
//     'Root Canal',
//     'Teeth Whitening',
//     'Dental Implants',
//     'Cosmetic Dentistry',
//     'Emergency Dental Care',
//     'Other'
//   ];

//   return (
//     <section id="book-appointment" className="py-20 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-gray-600">Schedule your visit with our dental professionals. We'll get back to you promptly to confirm your appointment.</p>
//         </motion.div>

//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             <div className="w-full md:w-2/5 bg-blue-600 p-8 text-white">
//               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
//               <div className="mb-8">
//                 <p className="mb-2 font-medium">Working Hours</p>
//                 <ul className="space-y-2">
//                   <li className="flex justify-between">
//                     <span>Monday - Friday:</span>
//                     <span>8:00 AM - 7:00 PM</span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>Saturday:</span>
//                     <span>9:00 AM - 5:00 PM</span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>Sunday:</span>
//                     <span>Closed</span>
//                   </li>
//                 </ul>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   <span>(123) 456-7890</span>
//                 </div>
//                 <div className="flex items-center">
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <span>info@dentalcare.com</span>
//                 </div>
//                 <div className="flex items-center">
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   <span>123 Dental Street, City, State 12345</span>
//                 </div>
//               </div>
              
//               <div className="mt-12">
//                 <h4 className="text-lg font-semibold mb-4">Emergency?</h4>
//                 <p className="mb-4">For dental emergencies, please call our emergency hotline:</p>
//                 <div className="text-xl font-bold">(123) 999-8888</div>
//               </div>
//             </div>

//             <div className="w-full md:w-3/5 p-8">
//               {isSubmitted ? (
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="h-full flex flex-col items-center justify-center text-center py-10"
//                 >
//                   <div className="text-green-500 text-5xl mb-4">✓</div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Request Sent!</h3>
//                   <p className="text-gray-600 mb-4">We'll contact you shortly to confirm your appointment.</p>
//                   <p className="text-gray-500 text-sm">Thank you for choosing DentalCare.</p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="service" className="block text-gray-700 mb-2">Service Required</label>
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       >
//                         <option value="">Select a service</option>
//                         {serviceOptions.map((service) => (
//                           <option key={service} value={service}>{service}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <label htmlFor="date" className="block text-gray-700 mb-2">Preferred Date</label>
//                       <input
//                         type="date"
//                         id="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="time" className="block text-gray-700 mb-2">Preferred Time</label>
//                       <select
//                         id="time"
//                         name="time"
//                         value={formData.time}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       >
//                         <option value="">Select a time</option>
//                         <option value="Morning">Morning (8AM - 12PM)</option>
//                         <option value="Afternoon">Afternoon (12PM - 4PM)</option>
//                         <option value="Evening">Evening (4PM - 7PM)</option>
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div className="mb-6">
//                     <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows="4"
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     ></textarea>
//                   </div>
                  
//                   <motion.button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Book Appointment
//                   </motion.button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointment;



// import { useState } from 'react';
// import { X, Phone, Mail, Home, Activity, FileText, Calendar, Heart, AlertCircle, Edit, Download } from 'lucide-react';

// const PatientProfile = ({ patient, isOpen, onClose }) => {
//   const [activeTab, setActiveTab] = useState('overview');

//   if (!isOpen || !patient) return null;

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString();
//   };

//   const calculateAge = (dateOfBirth) => {
//     const today = new Date();
//     const birthDate = new Date(dateOfBirth);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
    
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
    
//     return age;
//   };

//   const renderOverviewTab = () => (
//     <div className="space-y-6">
//       {/* Personal Information */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
//           <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
//             <Edit className="h-4 w-4 mr-1" />
//             Edit
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm text-gray-500">Age</p>
//             <p className="font-medium">{calculateAge(patient.dateOfBirth)} years</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Date of Birth</p>
//             <p className="font-medium">{formatDate(patient.dateOfBirth)}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Gender</p>
//             <p className="font-medium">{patient.gender}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Blood Type</p>
//             <p className="font-medium">{patient.bloodType || 'Not specified'}</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Contact Information */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
        
//         <div className="space-y-4">
//           <div className="flex items-start">
//             <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
//             <div>
//               <p className="text-sm text-gray-500">Phone Number</p>
//               <p className="font-medium">{patient.phoneNumber}</p>
//             </div>
//           </div>
          
//           <div className="flex items-start">
//             <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
//             <div>
//               <p className="text-sm text-gray-500">Email</p>
//               <p className="font-medium">{patient.email}</p>
//             </div>
//           </div>
          
//           <div className="flex items-start">
//             <Home className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
//             <div>
//               <p className="text-sm text-gray-500">Address</p>
//               <p className="font-medium">{patient.address}</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Emergency Contact */}
//       {(patient.emergencyContact || patient.emergencyPhone) && (
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contact</h3>
          
//           <div className="space-y-4">
//             {patient.emergencyContact && ( <div className="flex items-start">
//                 <div>
//                   <p className="text-sm text-gray-500">Contact Person</p>
//                   <p className="font-medium">{patient.emergencyContact}</p>
//                 </div>
//               </div>
//             )}
            
//             {patient.emergencyPhone && (
//               <div className="flex items-start">
//                 <div>
//                   <p className="text-sm text-gray-500">Contact Phone</p>
//                   <p className="font-medium">{patient.emergencyPhone}</p>
//                 </div>
//               </div>
          

            

// import { useState } from 'react';
// import {
//   X, Phone, Mail, Home, Edit
// } from 'lucide-react';

// const PatientProfile = ({ patient, isOpen, onClose }) => {
//   const [activeTab, setActiveTab] = useState('overview');

//   if (!isOpen || !patient) return null;

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString();
//   };

//   const calculateAge = (dateOfBirth) => {
//     const today = new Date();
//     const birthDate = new Date(dateOfBirth);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }

//     return age;
//   };

//   const renderOverviewTab = () => (
//     <div className="space-y-6">
//       {/* Personal Information */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
//           <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
//             <Edit className="h-4 w-4 mr-1" />
//             Edit
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm text-gray-500">Age</p>
//             <p className="font-medium">{calculateAge(patient.dateOfBirth)} years</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Date of Birth</p>
//             <p className="font-medium">{formatDate(patient.dateOfBirth)}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Gender</p>
//             <p className="font-medium">{patient.gender}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Blood Type</p>
//             <p className="font-medium">{patient.bloodType || 'Not specified'}</p>
//           </div>
//         </div>
//       </div>

//       {/* Contact Information */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>

//         <div className="space-y-4">
//           <div className="flex items-start">
//             <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
//             <div>
//               <p className="text-sm text-gray-500">Phone Number</p>
//               <p className="font-medium">{patient.phoneNumber}</p>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
//             <div>
//               <p className="text-sm text-gray-500">Email</p>
//               <p className="font-medium">{patient.email}</p>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <Home className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
//             <div>
//               <p className="text-sm text-gray-500">Address</p>
//               <p className="font-medium">{patient.address}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Emergency Contact */}
//       {(patient.emergencyContact || patient.emergencyPhone) && (
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contact</h3>

//           <div className="space-y-4">
//             {patient.emergencyContact && (
//               <div className="flex items-start">
//                 <div>
//                   <p className="text-sm text-gray-500">Contact Person</p>
//                   <p className="font-medium">{patient.emergencyContact}</p>
//                 </div>
//               </div>
//             )}

//             {patient.emergencyPhone && (
//               <div className="flex items-start">
//                 <div>
//                   <p className="text-sm text-gray-500">Contact Phone</p>
//                   <p className="font-medium">{patient.emergencyPhone}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           <X className="w-5 h-5" />
//         </button>
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Patient Profile</h2>

//         {/* Tabs and Content */}
//         <div className="mb-4 flex space-x-4 border-b">
//           <button
//             onClick={() => setActiveTab('overview')}
//             className={`pb-2 ${activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
//           >
//             Overview
//           </button>
//           {/* Add more tabs if needed */}
//         </div>

//         <div>
//           {activeTab === 'overview' && renderOverviewTab()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientProfile;



// // src/components/landing/PatientProfile.jsx
// import React from 'react';

// const PatientProfile = ({ patient }) => {
//   if (!patient) {
//     return (
//       <div className="text-center py-8 text-gray-500">
//         <p>No patient selected</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-md">
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{patient.name}</h3>
//         <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//           Patient ID: {patient.id}
//         </div>
//       </div>

//       <div className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm font-medium text-gray-500">Age</p>
//             <p className="mt-1 text-sm text-gray-900">{patient.age} years</p>
//           </div>
//           <div>
//             <p className="text-sm font-medium text-gray-500">Gender</p>
//             <p className="mt-1 text-sm text-gray-900">{patient.gender}</p>
//           </div>
//         </div>

//         <div>
//           <p className="text-sm font-medium text-gray-500">Medical Condition</p>
//           <p className="mt-1 text-sm text-gray-900">{patient.condition}</p>
//         </div>

//         {patient.contactInfo && (
//           <div>
//             <p className="text-sm font-medium text-gray-500">Contact Information</p>
//             <p className="mt-1 text-sm text-gray-900">{patient.contactInfo}</p>
//           </div>
//         )}

//         {patient.medicalHistory && (
//           <div>
//             <p className="text-sm font-medium text-gray-500">Medical History</p>
//             <p className="mt-1 text-sm text-gray-900">{patient.medicalHistory}</p>
//           </div>
//         )}

//         {patient.medications && (
//           <div>
//             <p className="text-sm font-medium text-gray-500">Current Medications</p>
//             <ul className="mt-1 text-sm text-gray-900 list-disc pl-5">
//               {Array.isArray(patient.medications) ? (
//                 patient.medications.map((med, index) => (
//                   <li key={index}>{med}</li>
//                 ))
//               ) : (
//                 <li>{patient.medications}</li>
//               )}
//             </ul>
//           </div>
//         )}

//         {patient.allergies && (
//           <div>
//             <p className="text-sm font-medium text-gray-500">Allergies</p>
//             <ul className="mt-1 text-sm text-gray-900 list-disc pl-5">
//               {Array.isArray(patient.allergies) ? (
//                 patient.allergies.map((allergy, index) => (
//                   <li key={index}>{allergy}</li>
//                 ))
//               ) : (
//                 <li>{patient.allergies}</li>
//               )}
//             </ul>
//           </div>
//         )}

//         {patient.notes && (
//           <div>
//             <p className="text-sm font-medium text-gray-500">Notes</p>
//             <p className="mt-1 text-sm text-gray-900">{patient.notes}</p>
//           </div>
//         )}
//       </div>

//       <div className="mt-6 pt-4 border-t border-gray-200">
//         <p className="text-sm text-gray-500">
//           Last Updated: {patient.lastUpdated || 'Not available'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PatientProfile;



import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from '@/components/ui/alert';
import { 
  Badge 
} from '@/components/ui/badge';
import { 
  Calendar, 
  ClipboardList, 
  User, 
  Heart, 
  Pill, 
  AlertTriangle, 
  Phone, 
  Mail, 
  MapPin, 
  CalendarClock, 
  AlertCircle
} from 'lucide-react';

export default function PatientProfile({ patient }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!patient) {
    return (
      <Card className="w-full">
        <CardContent className="pt-6 text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-gray-300" />
          <p className="mt-4 text-gray-500">No patient selected</p>
        </CardContent>
      </Card>
    );
  }

  // Process medications for display
  const medications = patient.medications ? 
    (Array.isArray(patient.medications) ? patient.medications : [patient.medications]) : 
    [];

  // Process allergies for display
  const allergies = patient.allergies ? 
    (Array.isArray(patient.allergies) ? patient.allergies : [patient.allergies]) : 
    [];
  
  // Patient Status Badge
  const getStatusBadge = () => {
    const status = patient.status || 'Active';
    if (status === 'Active') {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>;
    } else if (status === 'Inactive') {
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Inactive</Badge>;
    } else {
      return <Badge>{status}</Badge>;
    }
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{patient.name}</CardTitle>
            <CardDescription className="mt-1">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Patient ID: {patient.id}</span>
                •
                <span>{patient.gender}</span>
                •
                <span>{patient.age} years</span>
              </div>
            </CardDescription>
          </div>
          <div>
            {getStatusBadge()}
          </div>
        </div>
      </CardHeader>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
        </div>

        <CardContent className="pt-6">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <User className="h-4 w-4 mr-2 text-blue-600" />
                  <h3 className="font-medium">Personal Details</h3>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3">
                    <span className="text-sm text-gray-500">Full Name:</span>
                    <span className="text-sm font-medium col-span-2">{patient.name}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-sm text-gray-500">Age:</span>
                    <span className="text-sm font-medium col-span-2">{patient.age} years</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-sm text-gray-500">Gender:</span>
                    <span className="text-sm font-medium col-span-2">{patient.gender}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-sm text-gray-500">Date of Birth:</span>
                    <span className="text-sm font-medium col-span-2">{patient.dob || 'Not provided'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CalendarClock className="h-4 w-4 mr-2 text-blue-600" />
                  <h3 className="font-medium">Appointments</h3>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3">
                    <span className="text-sm text-gray-500">Last Visit:</span>
                    <span className="text-sm font-medium col-span-2">{patient.lastVisit || 'No recent visits'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-sm text-gray-500">Next Appointment:</span>
                    <span className="text-sm font-medium col-span-2">{patient.nextAppointment || 'Not scheduled'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-sm text-gray-500">Total Visits:</span>
                    <span className="text-sm font-medium col-span-2">{patient.totalVisits || '0'}</span>
                  </div>
                </div>
              </div>
            </div>

            {patient.condition && (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <Heart className="h-5 w-5 mr-2 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Medical Condition</h3>
                    <p className="text-sm">{patient.condition}</p>
                  </div>
                </div>
              </div>
            )}

            {patient.notes && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Notes</AlertTitle>
                <AlertDescription>
                  {patient.notes}
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>

          <TabsContent value="contact" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                <h3 className="font-medium">Contact Information</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Phone className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-sm font-medium">{patient.phone || patient.contact || 'Not provided'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-sm font-medium">{patient.email || 'Not provided'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-sm font-medium">{patient.address || 'Not provided'}</p>
                  </div>
                </div>
              </div>
            </div>

            {patient.contactInfo && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Additional Contact Information</AlertTitle>
                <AlertDescription>
                  {patient.contactInfo}
                </AlertDescription>
              </Alert>
            )}

            {patient.emergencyContact && (
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-4 w-4 mr-2 text-amber-600" />
                  <h3 className="font-medium">Emergency Contact</h3>
                </div>
                <p className="text-sm">{patient.emergencyContact}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="medical" className="space-y-4">
            {medications.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Pill className="h-4 w-4 mr-2 text-blue-600" />
                  <h3 className="font-medium">Current Medications</h3>
                </div>
                <ul className="space-y-2">
                  {medications.map((med, index) => (
                    <li key={index} className="flex items-start">
                      <div className="min-w-4 mt-0.5 mr-2">•</div>
                      <span className="text-sm">{med}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {allergies.length > 0 && (
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-4 w-4 mr-2 text-red-600" />
                  <h3 className="font-medium">Allergies</h3>
                </div>
                <ul className="space-y-2">
                  {allergies.map((allergy, index) => (
                    <li key={index} className="flex items-start">
                      <div className="min-w-4 mt-0.5 mr-2">•</div>
                      <span className="text-sm">{allergy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {patient.condition && (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <Heart className="h-5 w-5 mr-2 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Medical Condition</h3>
                    <p className="text-sm">{patient.condition}</p>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {patient.medicalHistory && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <ClipboardList className="h-4 w-4 mr-2 text-blue-600" />
                  <h3 className="font-medium">Medical History</h3>
                </div>
                <p className="text-sm">{patient.medicalHistory}</p>
              </div>
            )}

            {patient.treatment && patient.treatment.length > 0 && (
              <div className="overflow-hidden rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Procedure</th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {patient.treatment.map((treatment, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{treatment.date}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{treatment.procedure}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{treatment.dentist || treatment.provider || '-'}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{treatment.cost || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {(!patient.medicalHistory && (!patient.treatment || patient.treatment.length === 0)) && (
              <div className="text-center py-8">
                <ClipboardList className="mx-auto h-12 w-12 text-gray-300" />
                <p className="mt-2 text-sm text-gray-500">No medical history available</p>
              </div>
            )}
          </TabsContent>
        </CardContent>
      </Tabs>

      <CardFooter className="border-t border-gray-100 pt-4 text-xs text-gray-500">
        <div className="flex items-center">
          <Calendar className="mr-2 h-3 w-3" />
          Last Updated: {patient.lastUpdated || 'Not available'}
        </div>
      </CardFooter>
    </Card>
  );
}
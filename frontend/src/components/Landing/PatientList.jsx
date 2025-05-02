// // src/components/landing/Contact.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-gray-600">Have questions about our services? Contact us directly or visit our clinic.</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <motion.div 
//             className="bg-gray-50 p-6 rounded-xl text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
//               <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
//             <p className="text-gray-600 mb-2">Have questions? Call us directly.</p>
//             <a href="tel:+11234567890" className="text-blue-600 font-semibold hover:underline">(123) 456-7890</a>
//           </motion.div>

//           <motion.div 
//             className="bg-gray-50 p-6 rounded-xl text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.3, delay: 0.1 }}
//           >
//             <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
//               <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
//             <p className="text-gray-600 mb-2">Send us an email anytime.</p>
//             <a href="mailto:info@dentalcare.com" className="text-blue-600 font-semibold hover:underline">info@dentalcare.com</a>
//           </motion.div>

//           <motion.div 
//             className="bg-gray-50 p-6 rounded-xl text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.3, delay: 0.2 }}
//           >
//             <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
//               <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
//             <p className="text-gray-600 mb-2">Come by our dental clinic.</p>
//             <address className="not-italic text-blue-600 font-semibold">123 Dental Street, City, State 12345</address>
//           </motion.div>
//         </div>

//         <motion.div 
//           className="mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-md"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="h-96 w-full bg-gray-200">
//             {/* Replace with actual Google Maps embed */}
//             <div className="w-full h-full flex items-center justify-center bg-gray-300">
//               <p className="text-gray-600 text-center p-4">Google Maps would go here in production.<br/>Placeholder for map showing clinic location.</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import { useState, useEffect } from 'react';
// import { X, Upload, Loader } from 'lucide-react';

// const PatientManagementSystem = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [patients, setPatients] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dateOfBirth: '',
//     gender: '',
//     phoneNumber: '',
//     email: '',
//     address: '',
//     medicalHistory: '',
//     allergies: '',
//     files: []
//   });
//   const [errors, setErrors] = useState({});

//   // Fetch patients on component mount
//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('/api/patients');
//       if (response.ok) {
//         const data = await response.json();
//         setPatients(data);
//       } else {
//         console.error('Failed to fetch patients');
//       }
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
    
//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null
//       });
//     }
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       files: Array.from(e.target.files)
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     // Required field validations
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//     if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
//     if (!formData.gender) newErrors.gender = 'Gender is required';
//     if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
    
//     // Format validations
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (formData.email && !emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }
    
//     const phoneRegex = /^\d{10}$/;
//     if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
//       newErrors.phoneNumber = 'Phone number must be 10 digits';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     if (e) e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsLoading(true);
    
//     try {
//       // Create FormData object for file upload
//       const formDataObj = new FormData();
//       Object.keys(formData).forEach(key => {
//         if (key !== 'files') {
//           formDataObj.append(key, formData[key]);
//         }
//       });
      
//       // Append files if any
//       formData.files.forEach(file => {
//         formDataObj.append('files', file);
//       });
      
//       const response = await fetch('/api/patients', {
//         method: 'POST',
//         body: formDataObj,
//       });
      
//       if (response.ok) {
//         // Reset form
//         setFormData({
//           fullName: '',
//           dateOfBirth: '',
//           gender: '',
//           phoneNumber: '',
//           email: '',
//           address: '',
//           medicalHistory: '',
//           allergies: '',
//           files: []
//         });
        
//         // Close modal
//         setIsModalOpen(false);
        
//         // Refresh patient list
//         fetchPatients();
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to add patient:', errorData);
//       }
//     } catch (error) {
//       console.error('Error adding patient:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString();
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Patient Management System</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
//         >
//           Add New Patient
//         </button>
//       </div>

//       {/* Patient List Table */}
//       <div className="bg-white shadow rounded-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {isLoading ? (
//                 <tr>
//                   <td colSpan="6" className="px-6 py-4 text-center">
//                     <Loader className="h-6 w-6 text-blue-500 animate-spin mx-auto" />
//                   </td>
//                 </tr>
//               ) : patients.length > 0 ? (
//                 patients.map((patient) => (
//                   <tr key={patient.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.fullName}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(patient.dateOfBirth)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.gender}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.phoneNumber}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.email}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-xs">{patient.address}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">No patients found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Add New Patient Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-screen overflow-y-auto">
//             <div className="flex justify-between items-center px-6 py-4 border-b">
//               <h2 className="text-xl font-semibold text-gray-800">Add New Patient</h2>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
            
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Full Name */}
//                 <div>
//                   <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     className={`w-full px-3 py-2 border rounded-md ${
//                       errors.fullName ? 'border-red-500' : 'border-gray-300'
//                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   />
//                   {errors.fullName && (
//                     <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
//                   )}
//                 </div>

//                 {/* Date of Birth */}
//                 <div>
//                   <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
//                     Date of Birth *
//                   </label>
//                   <input
//                     type="date"
//                     id="dateOfBirth"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleInputChange}
//                     className={`w-full px-3 py-2 border rounded-md ${
//                       errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
//                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   />
//                   {errors.dateOfBirth && (
//                     <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>
//                   )}
//                 </div>

//                 {/* Gender */}
//                 <div>
//                   <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
//                     Gender *
//                   </label>
//                   <select
//                     id="gender"
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                     className={`w-full px-3 py-2 border rounded-md ${
//                       errors.gender ? 'border-red-500' : 'border-gray-300'
//                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                     <option value="Prefer not to say">Prefer not to say</option>
//                   </select>
//                   {errors.gender && (
//                     <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
//                   )}
//                 </div>

//                 {/* Phone Number */}
//                 <div>
//                   <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     placeholder="10-digit number"
//                     className={`w-full px-3 py-2 border rounded-md ${
//                       errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
//                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   />
//                   {errors.phoneNumber && (
//                     <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
//                   )}
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className={`w-full px-3 py-2 border rounded-md ${
//                       errors.email ? 'border-red-500' : 'border-gray-300'
//                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   />
//                   {errors.email && (
//                     <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* Address */}
//                 <div className="md:col-span-2">
//                   <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//                     Address *
//                   </label>
//                   <textarea
//                     id="address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     rows="2"
//                     className={`w-full px-3 py-2 border rounded-md ${
//                       errors.address ? 'border-red-500' : 'border-gray-300'
//                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   ></textarea>
//                   {errors.address && (
//                     <p className="mt-1 text-sm text-red-600">{errors.address}</p>
//                   )}
//                 </div>

//                 {/* Medical History */}
//                 <div className="md:col-span-2">
//                   <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-1">
//                     Medical History
//                   </label>
//                   <textarea
//                     id="medicalHistory"
//                     name="medicalHistory"
//                     value={formData.medicalHistory}
//                     onChange={handleInputChange}
//                     rows="3"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   ></textarea>
//                 </div>

//                 {/* Allergies / Conditions */}
//                 <div className="md:col-span-2">
//                   <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">
//                     Allergies / Conditions
//                   </label>
//                   <input
//                     type="text"
//                     id="allergies"
//                     name="allergies"
//                     value={formData.allergies}
//                     onChange={handleInputChange}
//                     placeholder="Enter allergies or conditions separated by commas"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 {/* Upload Files */}
//                 <div className="md:col-span-2">
//                   <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-1">
//                     Upload Files (Medical Records)
//                   </label>
//                   <div className="flex items-center justify-center w-full">
//                     <label
//                       htmlFor="files"
//                       className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
//                     >
//                       <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                         <Upload className="w-8 h-8 mb-3 text-gray-500" />
//                         <p className="mb-2 text-sm text-gray-500">
//                           <span className="font-semibold">Click to upload</span> or drag and drop
//                         </p>
//                         <p className="text-xs text-gray-500">PDF or Image files</p>
//                       </div>
//                       <input
//                         id="files"
//                         name="files"
//                         type="file"
//                         multiple
//                         accept=".pdf,image/*"
//                         onChange={handleFileChange}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>
//                   {formData.files.length > 0 && (
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-600">
//                         {formData.files.length} file(s) selected
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={isLoading}
//                   className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:bg-blue-400"
//                 >
//                   {isLoading ? (
//                     <div className="flex items-center">
//                       <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
//                       <span>Saving...</span>
//                     </div>
//                   ) : (
//                     'Save Patient'
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientManagementSystem;






// import { useState, useEffect } from 'react';
// import { Loader, Eye, UserPlus } from 'lucide-react';
// import AddPatientForm from './AddPatientForm';
// import PatientProfile from './PatientProfile';

// const PatientList = () => {
//   const [patients, setPatients] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

//   // Fetch patients on component mount
//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('/api/patients');
//       if (response.ok) {
//         const data = await response.json();
//         setPatients(data);
//       } else {
//         console.error('Failed to fetch patients');
//       }
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleViewProfile = (patient) => {
//     setSelectedPatient(patient);
//     setIsProfileModalOpen(true);
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString();
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Patient Management System</h1>
//         <button
//           onClick={() => setIsAddModalOpen(true)}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center"
//         >
//           <UserPlus className="h-5 w-5 mr-2" />
//           Add New Patient
//         </button>
//       </div>

//       {/* Patient List Table */}
//       <div className="bg-white shadow rounded-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {isLoading ? (
//                 <tr>
//                   <td colSpan="6" className="px-6 py-4 text-center">
//                     <Loader className="h-6 w-6 text-blue-500 animate-spin mx-auto" />
//                   </td>
//                 </tr>
//               ) : patients.length > 0 ? (
//                 patients.map((patient) => (
//                   <tr key={patient.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.fullName}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(patient.dateOfBirth)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.gender}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.phoneNumber}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.email}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <button
//                         onClick={() => handleViewProfile(patient)}
//                         className="text-blue-600 hover:text-blue-800 mr-3"
//                         title="View Profile"
//                       >
//                         <Eye className="h-5 w-5" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">No patients found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Add Patient Modal */}
//       {isAddModalOpen && (
//         <AddPatientForm 
//           isOpen={isAddModalOpen}
//           onClose={() => setIsAddModalOpen(false)}
//           onSuccess={() => {
//             setIsAddModalOpen(false);
//             fetchPatients();
//           }}
//         />
//       )}

//       {/* Patient Profile Modal */}
//       {isProfileModalOpen && selectedPatient && (
//         <PatientProfile
//           patient={selectedPatient}
//           isOpen={isProfileModalOpen}
//           onClose={() => setIsProfileModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default PatientList;




// src/components/Landing/PatientList.jsx
// import React, { useState, useEffect } from 'react';
// import { EyeIcon } from 'lucide-react';

// const PatientList = ({ onViewPatient, renderActionColumn }) => {
//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch patient data
//     const fetchPatients = async () => {
//       try {
//         setLoading(true);
//         // Replace with your actual API call
//         const response = await fetch('/api/patients');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch patients');
//         }
        
//         const data = await response.json();
//         setPatients(data);
//       } catch (err) {
//         console.error('Error fetching patients:', err);
//         setError(err.message);
        
//         // For demo purposes, create some sample data if API fails
//         setPatients([
//           { id: 1, name: 'John Doe', age: 45, gender: 'Male', condition: 'Hypertension' },
//           { id: 2, name: 'Jane Smith', age: 32, gender: 'Female', condition: 'Diabetes' },
//           { id: 3, name: 'Robert Johnson', age: 58, gender: 'Male', condition: 'Arthritis' },
//           { id: 4, name: 'Emily Davis', age: 27, gender: 'Female', condition: 'Asthma' }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatients();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-40">
//         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error && patients.length === 0) {
//     return (
//       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//         <p>Error loading patients: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Name
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Age
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Gender
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Condition
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {patients.map((patient) => (
//             <tr key={patient.id} className="hover:bg-gray-50">
//               <td className="px-4 py-4 whitespace-nowrap">
//                 <div className="text-sm font-medium text-gray-900">{patient.name}</div>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-500">{patient.age}</div>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-500">{patient.gender}</div>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-500">{patient.condition}</div>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
//                 {renderActionColumn ? (
//                   renderActionColumn(patient)
//                 ) : (
//                   <button
//                     onClick={() => onViewPatient && onViewPatient(patient)}
//                     className="p-1 text-blue-600 hover:text-blue-800"
//                     title="View patient details"
//                   >
//                     <EyeIcon size={18} />
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PatientList;





import { useState, useEffect } from 'react';
import { Eye, Trash2, Edit, Plus, Search } from 'lucide-react';

export default function PatientListPage() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('list'); // 'list', 'view', 'add', 'edit'
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  // Mock data for demonstration
  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      const mockPatients = [
        { 
          id: 1, 
          name: 'John Smith', 
          phone: '(555) 123-4567', 
          email: 'john.smith@example.com', 
          lastVisit: '2025-04-25',
          nextAppointment: '2025-05-12',
          status: 'Active',
          address: '123 Main St, Anytown, CA 90210',
          dob: '1985-06-15',
          gender: 'Male',
          notes: 'Patient has mild dental anxiety. Prefers morning appointments.',
          treatment: [
            { date: '2025-04-25', procedure: 'Dental Cleaning', dentist: 'Dr. Wilson', cost: '$120' },
            { date: '2025-01-10', procedure: 'Cavity Filling', dentist: 'Dr. Garcia', cost: '$200' }
          ]
        },
        { 
          id: 2, 
          name: 'Sarah Johnson', 
          phone: '(555) 987-6543', 
          email: 'sarah.j@example.com', 
          lastVisit: '2025-04-18',
          nextAppointment: '2025-05-20',
          status: 'Active',
          address: '456 Oak Ave, Springfield, CA 90211',
          dob: '1990-09-22',
          gender: 'Female',
          notes: 'Patient has dental insurance through MetLife.',
          treatment: [
            { date: '2025-04-18', procedure: 'Root Canal', dentist: 'Dr. Wilson', cost: '$950' },
            { date: '2025-03-05', procedure: 'X-Ray', dentist: 'Dr. Garcia', cost: '$75' }
          ]
        },
        { 
          id: 3, 
          name: 'Michael Davis', 
          phone: '(555) 456-7890', 
          email: 'mdavis@example.com', 
          lastVisit: '2025-03-30',
          nextAppointment: '',
          status: 'Inactive',
          address: '789 Pine St, Riverdale, CA 90215',
          dob: '1978-12-03',
          gender: 'Male',
          notes: 'Patient has a history of gum disease. Requires thorough cleaning.',
          treatment: [
            { date: '2025-03-30', procedure: 'Deep Cleaning', dentist: 'Dr. Wilson', cost: '$220' },
            { date: '2025-02-14', procedure: 'Consultation', dentist: 'Dr. Garcia', cost: '$50' }
          ]
        },
        { 
          id: 4, 
          name: 'Emma Wilson', 
          phone: '(555) 234-5678', 
          email: 'ewilson@example.com', 
          lastVisit: '2025-04-29',
          nextAppointment: '2025-05-06',
          status: 'Active',
          address: '321 Maple Dr, Westview, CA 90220',
          dob: '1995-03-18',
          gender: 'Female',
          notes: 'New patient. First visit was for emergency tooth pain.',
          treatment: [
            { date: '2025-04-29', procedure: 'Emergency Extraction', dentist: 'Dr. Wilson', cost: '$350' }
          ]
        },
        { 
          id: 5, 
          name: 'Robert Brown', 
          phone: '(555) 876-5432', 
          email: 'r.brown@example.com', 
          lastVisit: '2025-04-10',
          nextAppointment: '2025-06-10',
          status: 'Active',
          address: '654 Cherry Ln, Lakeside, CA 90230',
          dob: '1982-07-29',
          gender: 'Male',
          notes: 'Patient is interested in teeth whitening treatments.',
          treatment: [
            { date: '2025-04-10', procedure: 'Dental Cleaning', dentist: 'Dr. Garcia', cost: '$120' },
            { date: '2025-01-20', procedure: 'Filling Replacement', dentist: 'Dr. Wilson', cost: '$180' }
          ]
        }
      ];
      setPatients(mockPatients);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleViewPatient = (patientId) => {
    setSelectedPatientId(patientId);
    setCurrentPage('view');
  };

  const handleAddPatient = () => {
    setCurrentPage('add');
  };

  const handleEditPatient = (patientId) => {
    setSelectedPatientId(patientId);
    setCurrentPage('edit');
  };

  const handleDeletePatient = (patientId) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      // Filter out the deleted patient
      setPatients(patients.filter(patient => patient.id !== patientId));
    }
  };

  const handleBackToList = () => {
    setCurrentPage('list');
    setSelectedPatientId(null);
  };

  const handleSaveNewPatient = (newPatient) => {
    // Create a new patient with an ID
    const patientWithId = {
      ...newPatient,
      id: patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1
    };
    setPatients([...patients, patientWithId]);
    setCurrentPage('list');
  };

  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  const selectedPatient = patients.find(p => p.id === selectedPatientId);

  // Patient List Component
  const PatientList = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Patient List</h1>
        <button 
          onClick={handleAddPatient}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          <Plus size={18} className="mr-1" />
          Add New Patient
        </button>
      </div>

      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search patients by name, email or phone..."
          className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Appointment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{patient.phone}</div>
                      <div className="text-sm text-gray-500">{patient.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{patient.lastVisit}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {patient.nextAppointment || "Not scheduled"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleViewPatient(patient.id)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="View patient details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleEditPatient(patient.id)}
                          className="text-gray-600 hover:text-gray-900 p-1"
                          title="Edit patient"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeletePatient(patient.id)}
                          className="text-red-600 hover:text-red-900 p-1"
                          title="Delete patient"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No patients found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  // Patient Details View Component
  const PatientDetails = ({ patient }) => {
    if (!patient) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <button 
              onClick={handleBackToList}
              className="mr-3 p-2 rounded-full hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Patient Profile</h1>
          </div>
          <button 
            onClick={() => handleEditPatient(patient.id)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            <Edit size={18} className="mr-1" />
            Edit Patient
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="text-md font-medium">{patient.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="text-md">{patient.dob}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p className="text-md">{patient.gender}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-md">{patient.address}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-md">{patient.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-md">{patient.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {patient.status}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Appointments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Last Visit</p>
                <p className="text-md font-medium">{patient.lastVisit}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Next Appointment</p>
                <p className="text-md font-medium">{patient.nextAppointment || "Not scheduled"}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Notes</h2>
            <p className="text-md">{patient.notes}</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Treatment History</h2>
          {patient.treatment && patient.treatment.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Procedure</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dentist</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {patient.treatment.map((treatment, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{treatment.date}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{treatment.procedure}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{treatment.dentist}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{treatment.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No treatment history available</p>
          )}
        </div>
      </div>
    );
  };

  // Add New Patient Form Component
  const AddPatientForm = () => {
    const [newPatient, setNewPatient] = useState({
      name: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      address: '',
      status: 'Active',
      lastVisit: '',
      nextAppointment: '',
      notes: '',
      treatment: []
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewPatient({
        ...newPatient,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      handleSaveNewPatient(newPatient);
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <button 
            onClick={handleBackToList}
            className="mr-3 p-2 rounded-full hover:bg-gray-100"
          >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Add New Patient</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastVisit" className="block text-sm font-medium text-gray-700 mb-1">
                Last Visit (if applicable)
              </label>
              <input
                type="date"
                id="lastVisit"
                name="lastVisit"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.lastVisit}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="nextAppointment" className="block text-sm font-medium text-gray-700 mb-1">
                Next Appointment (if scheduled)
              </label>
              <input
                type="date"
                id="nextAppointment"
                name="nextAppointment"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.nextAppointment}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={newPatient.notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleBackToList}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Patient
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Edit Patient Form Component
  const EditPatientForm = ({ patient }) => {
    const [editedPatient, setEditedPatient] = useState(patient);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedPatient({
        ...editedPatient,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Update patient in the list
      setPatients(patients.map(p => p.id === patient.id ? editedPatient : p));
      setCurrentPage('list');
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <button 
            onClick={handleBackToList}
            className="mr-3 p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Edit Patient</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastVisit" className="block text-sm font-medium text-gray-700 mb-1">
                Last Visit
              </label>
              <input
                type="date"
                id="lastVisit"
                name="lastVisit"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.lastVisit}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="nextAppointment" className="block text-sm font-medium text-gray-700 mb-1">
                Next Appointment
              </label>
              <input
                type="date"
                id="nextAppointment"
                name="nextAppointment"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.nextAppointment}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editedPatient.notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleBackToList}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Update Patient
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Main component return - render the appropriate page based on currentPage state
  return (
    <div className="container mx-auto px-4 py-8">
      {currentPage === 'list' && <PatientList />}
      {currentPage === 'view' && <PatientDetails patient={selectedPatient} />}
      {currentPage === 'add' && <AddPatientForm />}
      {currentPage === 'edit' && selectedPatient && <EditPatientForm patient={selectedPatient} />}
    </div>
  );
}
import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Edit, Trash2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PatientTable() {
  // State for patients data
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Smith', age: 35, gender: 'Male', contact: '555-123-4567', email: 'john.smith@example.com', lastVisit: '2025-04-15', totalVisits: 8 },
    { id: 2, name: 'Emily Johnson', age: 42, gender: 'Female', contact: '555-987-6543', email: 'emily.j@example.com', lastVisit: '2025-04-10', totalVisits: 5 },
    { id: 3, name: 'Michael Brown', age: 29, gender: 'Male', contact: '555-456-7890', email: 'michael.b@example.com', lastVisit: '2025-03-22', totalVisits: 3 },
    { id: 4, name: 'Sarah Williams', age: 51, gender: 'Female', contact: '555-789-0123', email: 'sarah.w@example.com', lastVisit: '2025-04-20', totalVisits: 12 },
    { id: 5, name: 'David Lee', age: 38, gender: 'Male', contact: '555-234-5678', email: 'david.lee@example.com', lastVisit: '2025-04-05', totalVisits: 6 },
    { id: 6, name: 'Jessica Taylor', age: 33, gender: 'Female', contact: '555-345-6789', email: 'jessica.t@example.com', lastVisit: '2025-03-30', totalVisits: 4 },
    { id: 7, name: 'Robert Garcia', age: 46, gender: 'Male', contact: '555-567-8901', email: 'robert.g@example.com', lastVisit: '2025-04-18', totalVisits: 9 },
  ]);

  // State for pagination, search, sorting
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
  const [filterConfig, setFilterConfig] = useState({ gender: 'all' });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Sorting function
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Filter patients
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          patient.contact.includes(searchTerm);
    
    const matchesGender = filterConfig.gender === 'all' || patient.gender === filterConfig.gender;
    
    return matchesSearch && matchesGender;
  });

  // Sort patients
  const sortedPatients = [...filteredPatients].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = sortedPatients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedPatients.length / itemsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle patient actions
  const handleViewProfile = (patientId) => {
    console.log(`View patient with ID: ${patientId}`);
    // Open patient profile logic would go here
  };

  const handleEditPatient = (patientId) => {
    console.log(`Edit patient with ID: ${patientId}`);
    // Open edit form logic would go here
  };

  const handleDeletePatient = (patientId) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients(patients.filter(patient => patient.id !== patientId));
    }
  };

  // Generate sort indicator
  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? <ChevronUp className="inline ml-1 w-4 h-4" /> : <ChevronDown className="inline ml-1 w-4 h-4" />;
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patient List</h2>
        <button 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center"
          onClick={() => console.log('Open add patient modal')}
        >
          <span className="font-medium">Add New Patient</span>
        </button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter button */}
        <div className="w-full sm:w-auto">
          <button
            className="flex items-center justify-center w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <Filter className="w-4 h-4 mr-2" />
            <span>Filters</span>
            {isFiltersOpen ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
          </button>

          {/* Filter dropdown */}
          {isFiltersOpen && (
            <div className="absolute mt-2 p-4 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="mb-3">
                <label className="block font-medium text-sm text-gray-700 mb-1">Gender</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={filterConfig.gender}
                  onChange={(e) => setFilterConfig({...filterConfig, gender: e.target.value})}
                >
                  <option value="all">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mr-2"
                  onClick={() => setFilterConfig({ gender: 'all' })}
                >
                  Reset
                </button>
                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setIsFiltersOpen(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Patient Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('name')}
              >
                Patient Name {getSortIndicator('name')}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('age')}
              >
                Age {getSortIndicator('age')}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('gender')}
              >
                Gender {getSortIndicator('gender')}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact Info
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('lastVisit')}
              >
                Last Visit {getSortIndicator('lastVisit')}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('totalVisits')}
              >
                Total Visits {getSortIndicator('totalVisits')}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentPatients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{patient.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {patient.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {patient.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-gray-900">{patient.contact}</div>
                  <div className="text-gray-500">{patient.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {patient.lastVisit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {patient.totalVisits}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                  <button
  onClick={() => handleViewProfile(patient)}
  className="text-blue-600 hover:text-blue-800 mr-3"
  title="View Profile"
>
  <Eye className="h-5 w-5" />
</button>

                    <button 
                      onClick={() => handleEditPatient(patient.id)} 
                      className="text-green-600 hover:text-green-900"
                      title="Edit Patient"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleDeletePatient(patient.id)} 
                      className="text-red-600 hover:text-red-900"
                      title="Delete Patient"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className="text-sm text-gray-700">
            Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(indexOfLastItem, sortedPatients.length)}
            </span>{" "}
            of <span className="font-medium">{sortedPatients.length}</span> results
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <select
            className="p-2 border border-gray-300 rounded-md text-sm"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
          </select>
          
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {[...Array(totalPages).keys()].map(number => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === number + 1
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {number + 1}
              </button>
            ))}
            
            <button
              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}



// import { useState } from 'react';
// import { X, Upload, Loader } from 'lucide-react';

// const AddPatientForm = ({ isOpen, onClose, onSuccess }) => {
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
//     bloodType: '',
//     emergencyContact: '',
//     emergencyPhone: '',
//     insuranceProvider: '',
//     insuranceNumber: '',
//     files: []
//   });
//   const [errors, setErrors] = useState({});

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
    
//     // Emergency contact phone validation (if provided)
//     if (formData.emergencyPhone && !phoneRegex.test(formData.emergencyPhone)) {
//       newErrors.emergencyPhone = 'Emergency phone must be 10 digits';
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
//         // Call success callback
//         onSuccess();
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

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-screen overflow-y-auto">
//         <div className="flex justify-between items-center px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold text-gray-800">Add New Patient</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X className="h-6 w-6" />
//           </button>
//         </div>
        
//         <div className="p-6">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Personal Information Section */}
//               <div className="md:col-span-2">
//                 <h3 className="text-lg font-medium text-gray-800 mb-3">Personal Information</h3>
//               </div>
              
//               {/* Full Name */}
//               <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     errors.fullName ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 {errors.fullName && (
//                   <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
//                 )}
//               </div>

//               {/* Date of Birth */}
//               <div>
//                 <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
//                   Date of Birth *
//                 </label>
//                 <input
//                   type="date"
//                   id="dateOfBirth"
//                   name="dateOfBirth"
//                   value={formData.dateOfBirth}
//                   onChange={handleInputChange}
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 {errors.dateOfBirth && (
//                   <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>
//                 )}
//               </div>

//               {/* Gender */}
//               <div>
//                 <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
//                   Gender *
//                 </label>
//                 <select
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleInputChange}
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     errors.gender ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                   <option value="Prefer not to say">Prefer not to say</option>
//                 </select>
//                 {errors.gender && (
//                   <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
//                 )}
//               </div>

//               {/* Blood Type */}
//               <div>
//                 <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">
//                   Blood Type
//                 </label>
//                 <select
//                   id="bloodType"
//                   name="bloodType"
//                   value={formData.bloodType}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select Blood Type</option>
//                   <option value="A+">A+</option>
//                   <option value="A-">A-</option>
//                   <option value="B+">B+</option>
//                   <option value="B-">B-</option>
//                   <option value="AB+">AB+</option>
//                   <option value="AB-">AB-</option>
//                   <option value="O+">O+</option>
//                   <option value="O-">O-</option>
//                   <option value="Unknown">Unknown</option>
//                 </select>
//               </div>

//               {/* Contact Information Section */}
//               <div className="md:col-span-2 mt-4">
//                 <h3 className="text-lg font-medium text-gray-800 mb-3">Contact Information</h3>
//               </div>

//               {/* Phone Number */}
//               <div>
//                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange}
//                   placeholder="10-digit number"
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 {errors.phoneNumber && (
//                   <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     errors.email ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>

//               {/* Address */}
//               <div className="md:col-span-2">
//                 <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//                   Address *
//                 </label>
//                 <textarea
//                   id="address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   rows="2"
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     errors.address ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 ></textarea>
//                 {errors.address && (
//                   <p className="mt-1 text-sm text-red-600">{errors.address}</p>
//                 )}
//               </div>

//               {/* Emergency Contact Section */}
//               <div className="md:col-span-2 mt-4">
//                 <h3 className="text-lg font-medium text-gray-800 mb-3">Emergency Contact</h3>
//               </div>

//               {/* Emergency Contact Name */}
//               <div>
//                 <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
//                   Emergency Contact Name
//                 </label>
//                 <input
//                   type="text"
//                   id="emergencyContact"
//                   name="emergencyContact"
//                   value={formData.emergencyContact}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Emergency Contact Phone */}
//               <div>
//                 <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-1">
//                   Emergency Contact Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="emergencyPhone"
//                   name="emergencyPhone"
//                   value={formData.emergencyPhone}
//                   onChange={handleInputChange}
//                   placeholder="10-digit number"
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     errors.emergencyPhone ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 {errors.emergencyPhone && (
//                   <p className="mt-1 text-sm text-red-600">{errors.emergencyPhone}</p>
//                 )}
//               </div>

//               {/* Insurance Information Section */}
//               <div className="md:col-span-2 mt-4">
//                 <h3 className="text-lg font-medium text-gray-800 mb-3">Insurance Information</h3>
//               </div>

//               {/* Insurance Provider */}
//               <div>
//                 <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-1">
//                   Insurance Provider
//                 </label>
//                 <input
//                   type="text"
//                   id="insuranceProvider"
//                   name="insuranceProvider"
//                   value={formData.insuranceProvider}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Insurance ID/Policy Number */}
//               <div>
//                 <label htmlFor="insuranceNumber" className="block text-sm font-medium text-gray-700 mb-1">
//                   Insurance ID/Policy Number
//                 </label>
//                 <input
//                   type="text"
//                   id="insuranceNumber"
//                   name="insuranceNumber"
//                   value={formData.insuranceNumber}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Medical Information Section */}
//               <div className="md:col-span-2 mt-4">
//                 <h3 className="text-lg font-medium text-gray-800 mb-3">Medical Information</h3>
//               </div>

//               {/* Medical History */}
//               <div className="md:col-span-2">
//                 <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-1">
//                   Medical History
//                 </label>
//                 <textarea
//                   id="medicalHistory"
//                   name="medicalHistory"
//                   value={formData.medicalHistory}
//                   onChange={handleInputChange}
//                   rows="3"
//                   placeholder="Include past surgeries, chronic conditions, etc."
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//               </div>

//               {/* Allergies / Conditions */}
//               <div className="md:col-span-2">
//                 <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">
//                   Allergies / Conditions
//                 </label>
//                 <input
//                   type="text"
//                   id="allergies"
//                   name="allergies"
//                   value={formData.allergies}
//                   onChange={handleInputChange}
//                   placeholder="Enter allergies or conditions separated by commas"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Upload Files */}
//               <div className="md:col-span-2 mt-4">
//                 <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-1">
//                   Upload Files (Medical Records)
//                 </label>
//                 <div className="flex items-center justify-center w-full">
//                   <label
//                     htmlFor="files"
//                     className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
//                   >
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                       <Upload className="w-8 h-8 mb-3 text-gray-500" />
//                       <p className="mb-2 text-sm text-gray-500">
//                         <span className="font-semibold">Click to upload</span> or drag and drop
//                       </p>
//                       <p className="text-xs text-gray-500">PDF or Image files</p>
//                     </div>
//                     <input
//                       id="files"
//                       name="files"
//                       type="file"
//                       multiple
//                       accept=".pdf,image/*"
//                       onChange={handleFileChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//                 {formData.files.length > 0 && (
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-600">
//                       {formData.files.length} file(s) selected
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:bg-blue-400"
//               >
//                 {isLoading ? (
//                   <div className="flex items-center">
//                     <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
//                     <span>Saving...</span>
//                   </div>
//                 ) : (
//                   'Save Patient'
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddPatientForm;
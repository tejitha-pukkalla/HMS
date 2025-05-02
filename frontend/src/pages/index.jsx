// // src/pages/index.js
// import React from 'react';
// import PatientProfile from '../components/landing/PatientProfile';
// import AddPatientForm from '../components/landing/AddPatientForm.jsx';
// import PatientList from '@/components/Landing/PatientList';

// const IndexPage = () => {
//   return (
//     <div className="font-sans">
   
//       <PatientList />
//       <PatientProfile /> 
//       <AddPatientForm />
   
//     </div>
//   );
// };

// export default IndexPage;



// src/pages/index.js
import React from 'react';
import PatientList from '../components/landing/PatientList';


const IndexPage = () => {
  return (
    <div className="font-sans">
      <PatientList />
   
    </div>
  );
};

export default IndexPage;
// // src/components/landing/Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav 
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <motion.div 
//           className="flex items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
//             DentalCare
//           </h1>
//         </motion.div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className={`${
//                 isScrolled ? 'text-gray-800' : 'text-white'
//               } hover:text-blue-500 transition-colors font-medium`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.1 * (index + 1) }}
//             >
//               {item}
//             </motion.a>
//           ))}
//           <motion.button
//             className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             onClick={() => window.location.href = '#book-appointment'}
//           >
//             Book Appointment
//           </motion.button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
//           >
//             {mobileMenuOpen ? (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <motion.div 
//           className="md:hidden bg-white shadow-lg p-4"
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="flex flex-col space-y-4">
//             {['Home', 'About', 'Services', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-gray-800 hover:text-blue-500 transition-colors font-medium"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//             <button
//               className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
//               onClick={() => {
//                 window.location.href = '#book-appointment';
//                 setMobileMenuOpen(false);
//               }}
//             >
//               Book Appointment
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-r from-blue-700/80 to-blue-600/80 backdrop-blur-sm py-3'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-700' : 'text-white'} flex items-center`}>
            <span className="text-3xl mr-2 bg-white/20 p-2 rounded-full">🦷</span>
            <span className="font-light">Dental</span><span className="font-bold">Care</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-blue-300 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-300 after:transition-all hover:after:w-full`}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg font-medium ml-2"
            custom={5}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '#book-appointment'}
          >
            Book Appointment
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} p-2`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg rounded-b-2xl absolute w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col p-4">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-blue-500 transition-colors font-medium py-3 border-b border-gray-100 last:border-0"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors mt-4 shadow-md font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => {
                window.location.href = '#book-appointment';
                setMobileMenuOpen(false);
              }}
            >
              Book Appointment
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
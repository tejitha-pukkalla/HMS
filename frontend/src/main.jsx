// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust this path if needed
import './index.css'; // Include if you have CSS imports

// Get the container element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
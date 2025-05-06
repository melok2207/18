import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // або стилі, які ти використовуєш

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

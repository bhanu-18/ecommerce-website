import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';          // Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css';   // Slick Carousel Theme CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

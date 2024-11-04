import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('.contact-button, .cv-button').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.classList.add('clicked'); // Add class when button is clicked
  });

  button.addEventListener('mouseup', () => {
    button.classList.remove('clicked'); // Remove class when mouse is released
  });

  button.addEventListener('mouseleave', () => {
    button.classList.remove('clicked'); // Remove class if mouse leaves the button area
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

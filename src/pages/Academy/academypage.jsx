import React from 'react';
import './acdemypage.css';
import megaphone from '../../images/mic.png'; // You must save the megaphone part of the image separately or crop it
import { useNavigate } from 'react-router-dom';
// Extracted Streelancer logo if available

const ComingSoon = () => {
  const navigate=useNavigate()
  return (
    <div className="coming-soon-container">
    <img src={megaphone}/>
    <button onClick={() => navigate("/")}>Stay Tuned</button>
    </div>
  );
};

export default ComingSoon;

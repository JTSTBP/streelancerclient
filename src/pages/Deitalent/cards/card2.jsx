


import React,  { useEffect, useRef } from 'react';

import arrowCircle from '../../../images/arrow.png';

const Deifeatures = ({ onTakeSurveyClick,onBookConsultClick }) => {
  return (
    <div className="flex-features-container">
      <div className="left-section">
        <img src={arrowCircle} alt="Big Circle" className="big-circle" />
        <h2>Build Your Diversity Pipeline—Effortlessly</h2>
        <p>
        Streelancer helps Indian companies hire skilled women professionals—from returnees to hybrid-ready talent—across remote, hybrid, and fractional roles.
        </p>

      
      </div>

      <div className="right-section">
        <div className="dei-container">
          <div className="dei-buttons">
            <button className="take-survey-btn" onClick={onTakeSurveyClick}>
             view Hiring modes 
            </button>
            <button className="book-session-btn" onClick={onBookConsultClick}>Book free consultation</button>
          </div>

         

          
        </div>
      </div>
    </div>
  );
};

export default Deifeatures;

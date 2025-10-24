
import React, { useState } from 'react';
import axios from 'axios'; 
import Backendurl from "../../../config"; 

const StartDEIJourney = ({ scrollToFeatures ,onTakeSurveyClick}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }
setMessage("")
setEmail("")
    try {
      const response = await axios.post(`${Backendurl}/api/check-dei-survey`, {
        email,
      });

      if (response.data.exists) {
        setMessage('Survey found. Redirecting...');
       onTakeSurveyClick()
       setMessage("")
setEmail("")
      } else {
        setMessage('No survey found for this email.');
        scrollToFeatures && scrollToFeatures(); 
        setMessage("")
setEmail("")
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="start-dei-container">
      <h2>Start Your DEI Journey Today</h2>
      <p className="subtext">
      Get Your Personalized DEI Score + Actionable Roadmap for Inclusion
      </p>

      <input
        type="email"
        placeholder="📩 Enter your email to get started:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="dei-input"
      />

      <button className="dei-button" onClick={handleSubmit}>
        Get my DEI Score
      </button>

      {message && <p className="response-message">{message}</p>}

      <p className="footer-text">
        Join 500+ organizations already benefiting from our DEI assessment
      </p>
    </div>
  );
};

export default StartDEIJourney;

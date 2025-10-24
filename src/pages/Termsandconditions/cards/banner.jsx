import React, { useEffect } from "react";
import topWave from '../../../images/tcbg.png';
import arrow from '../../../images/arrow.png';
import { ArrowLeft } from 'lucide-react';



import { useLocation, useNavigate } from "react-router-dom";
import Terms from "./terms";
import Policy from "./policy";



const TcBanner = () => {
      const navigate = useNavigate();
 
  return (
    <div>
 <div className="wave-section">
          
        <img src={topWave} alt="Top Wave" className="top-wave" />
        
        <div className="text-overlay">
          
          <h1>Terms & Conditions -Privacy Policy</h1>
          <p>Understanding your rights and our commitments</p>
        </div>
        <div className="tec-belowbanner">
 <div className="Tc-quicksummary">
                <img src={arrow} alt="arrow" className="tc-arrow" />
                <h1 className="tc-heading">Quick Summary</h1>
                <div className="tc-text">
                  <p>
                    By using Streelancer, you agree to our terms. We connect employers with diverse, vetted women talent and offer DEI services. We protect your data, never sell it, and you control your information. Users must be 18+ and follow our community guidelines.
                 </p>
                </div>
        </div>
  <Terms/>
  <Policy/>
        </div>
       
      </div>
   </div>
  );
};

export default TcBanner;

import React, { useEffect } from "react";
// import topWave from '../../../images/sambg2.png';
import topWave from "../../../images/deitalentbg.png";
import { ArrowLeft } from 'lucide-react';



import { useLocation, useNavigate } from "react-router-dom";



const Deibanner = () => {
      const navigate = useNavigate();
 
  return (
    <div>
      <div className="wave-section">
        {/* <img src={topWave} alt="Top Wave" className="top-wave" />
        
        <div className="text-overlay">
          
          <h1>Is Your Workplace Truly Inclusive?</h1>
          <p>5-Minute DEI Scorecard • Benchmark. Improve. Get Badged.</p>
        </div> */}

        <div className="daitalenthire-hero">
          <div>
            <h1>Is Your Workplace Truly Inclusive?</h1>
            <p>5-Minute DEI Scorecard • Benchmark. Improve. Get Badged.</p>
          </div>
        </div>
        {/* <img src={topWave} alt="Top Wave" className="top-wave" /> */}
      </div>
    </div>
  );
};

export default Deibanner;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlignCenter, ArrowLeft } from 'lucide-react'; // Optional: Use any icon library or SVG

// import topWave from '../../../images/sambg1.png';
import topWave from "../../../images/remotehero2.png";

const GlobalFlexNetwork = () => {
  const navigate = useNavigate();

  return (
    <div className="global-flex-container">
      {/* Back Arrow */}

      <div
        className="wave-section"
      
      >
        {/* <img src={topWave} alt="Top Wave" className="top-wave" />
        <div className="text-overlay">
          <h1>Build A DEI-Ready Team with Purpose and Speed</h1>
          <p>
            Verified Women Talent. Remote-Ready. Fully Managed. Delivered in 72
            Hours.
          </p>
        </div> */}
        <div className="daitalenthire-hero">
          <h1>Build A DEI-Ready Team with Purpose and Speed</h1>
          <p>
            Verified Women Talent. Remote-Ready. Fully Managed. Delivered in 72
            Hours.
          </p>
        </div>
        <img src={topWave} alt="Top Wave" className="top-wave" />
      </div>
    </div>
  );
};

export default GlobalFlexNetwork;

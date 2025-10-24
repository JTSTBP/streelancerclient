import React from 'react';
import gold from "../../../images/goldbag.png"
import silver from "../../../images/silverbag.png"
import bronze from "../../../images/brobag.png"


const DEIBadges = () => {
  return (
    <div className="dei-badges-container">
      <h2>Your DEI Achievement Badge</h2>
      <p className="subheading">
       A Visible Symbol of Your Inclusion Commitment
      </p>

      <div className="badges">
        <img src={gold}/>
         <img src={silver}/>
          <img src={bronze}/>
    
      
      </div>

      <div className="description-box">
       🏅 Badge Levels Reflect Your Progress
Each badge—Bronze, Silver, or Gold—represents your current position on the DEI Maturity Curve and your ongoing journey toward greater inclusion.

      </div>
    </div>
  );
};

export default DEIBadges;

import React from 'react';


import goldBadge from '../../../../images/cgold.png';
import silverBadge from '../../../../images/csilver.png';
import bronzeBadge from '../../../../images/cbronze.png';
import ribbonIcon from '../../../../images/bardge.png'; // bottom right circular icon

const DEIBadge = () => {
  return (
    <div className="dei-badge-card">
      <h3 className="dei-badge-title">🏅 Earn Your DEI Badge</h3>
      <p className="dei-badge-description">
       Display your official DEI Certification Badge on your website, job postings, recruitment decks, and internal communications.
      </p>
      <div className="badge-images">
        <img src={goldBadge} alt="Gold Badge" />
        <img src={silverBadge} alt="Silver Badge" />
        <img src={bronzeBadge} alt="Bronze Badge" />
      </div>
      <div className="icon-circle">
           <img className="target-icon" src={ribbonIcon}/>
           </div>
    </div>
  );
};

export default DEIBadge;

import React from 'react';

import handshakeImage from '../../../images/handshake.png'; // replace with your image path

const DEICertification = () => {
  return (
    <div className="dei-cert-container">
      <div className="dei-left">
        <h3>Benefits of DEI Certification</h3>
        <ul>
          <li>
            <span className="check"></span>
           ✅ Demonstrate Inclusion, Everywhere


          </li>
          <li>
            <span className="check"></span>
           ✅ Attract Top Job Seekers


          </li>
          <li>
            <span className="check"></span>
           ✅ Strengthen Your ESG & Win More Contracts


          </li>
        </ul>
      </div>
      <div className="dei-right">
        <img src={handshakeImage} alt="Handshaking illustration" />
      </div>
    </div>
  );
};

export default DEICertification;

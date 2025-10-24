import React from 'react';
import google from "../../../../images/globel.png"
import ic1 from "../../../../images/pubic1.png"
import ic2 from "../../../../images/pubic2.png"
import ic3 from "../../../../images/pubic3.png"
import ic4 from "../../../../images/pubic4.png"
import ic5 from "../../../../images/pubic5.png"
import ic6 from "../../../../images/pubic6.png"

const Card3

 = () => {
  return (
    <div className="public-card dei-badge-card">
      <h3> GAIN PUBLIC VISIBILITY</h3>
      <p>
       Be featured in our Verified DEI Organizations Directory and highlighted in industry publications and events.
      </p>

      <div className="icon-grid">
        <div className="icon-box"><img src={ic1}/></div>
        <div className="icon-box"><img src={ic2}/></div>
        <div className="icon-box"><img src={ic3}/></div>
        <div className="icon-box"><img src={ic4}/></div>
        <div className="icon-box"><img src={ic5}/></div>
        <div className="icon-box"><img src={ic6}/></div>
      </div>

    <div className="icon-circle">
          <img className="target-icon" src={google}/>
          </div>
        </div>
  );
};

export default Card3

;

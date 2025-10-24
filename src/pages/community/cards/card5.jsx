import React from "react";
import comm1 from "../../../images/comm1.png"
import comm2 from "../../../images/comm2.png"
import comm3 from "../../../images/comm3.png"
import bg from "../../../images/communitybg.png"

import lines3497 from '../../../images/Group 1000004638.png';
import lines23497 from '../../../images/Group 1000004637.png'; 


const CommunitySection = () => {
  return (
    <section className="communitysection">
  
      <div className="communitysection-badge">+100 community of active people</div>

      <h1 className="communitysection-title">
      Connect. Learn. Earn. Together.
      </h1>

      <p className="communitysection-description">
       Join our free network — mentorship, forums and paid microprojects.  </p>

      <div className="communitysection-cta-buttons">
        <button className="communitysection-btn primary">Join the Community
</button>
        <button className="communitysection-btn outline">Ask a Mentor</button>
      </div>
         <img src={lines23497} alt="Lines" className="lines-image23497" />
     

        <img src={lines3497} alt="Lines" className="lines-image3497" />
   
      <div className="communitysection-info-cards">
        <div className="communitysection-card">
          <img src={comm1} alt="Upcoming Events" />
          <div className="communitysection-card-label">Peer Support Forums</div>
        </div>
        <div className="communitysection-card">
          <img src={comm2} alt="New Courses" />
          <div className="communitysection-card-label">Monthly DEI Events & AMAs</div>
        </div>
        <div className="communitysection-card">
          <img src={comm3} alt="Community Announcements" />
          <div className="communitysection-card-label">CXO Mentorship</div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

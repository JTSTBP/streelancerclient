import React from "react";
import data1 from "../../../images/polidata1.png"
import data2 from "../../../images/polidata2.png"
import data3 from "../../../images/polidata3.png"
import { useNavigate } from "react-router-dom";

const Policy = () => {
  const navigate=useNavigate()
  return (
    <div className="terms-container">
      <h2 className="terms-heading">Privacy Policy</h2>
      <h3 className="policy-para">Data we collect</h3>
      <div className="collect-card">
       <div className="card1">
        <p className="para">Personal Data</p>
        <p> • Name and contact information
        
            <br/>
• Professional background
     <br/>
• Skills and certifications
     <br/>
• Account preferences</p>
       </div>
       <div className="card1">
        <p className="para">Usage Data</p>
        <p>• Platform interactions
            <br/>
• Service usage patterns
         <br/>
• Performance analytics
         <br/>
• Device information</p>
       </div>
      </div>
      <h3>How We Use Your Data</h3>
      <div className="poli collect-card">
       <div className="poli-card1">
       <img src={data1}/>
       <h4>Account Management</h4>
       <p>Maintain and improve your user experience</p>
       </div>
      
       <div className="poli-card1">
       <img src={data2}/>
       <h4>Talent Matching</h4>
       <p>Connect the right talent with opportunities</p>
       </div>
      
       <div className="poli-card1">
       <img src={data3}/>
       <h4>Service Improvement</h4>
       <p>Enhance platform features and performance</p>
       </div>
      
      </div>
      <div className="tc-text">
          <div className="collect-card poli1">
       <div className="card1">
        <p className="para">Data We Collect</p>
        <p>•  Your data is never sold to third  parties
            <br/>
•  Shared only with trusted partners when necessary
         <br/>
• Protected with industry-standard security measures
    </p>
       
       </div>
       <div className="card1">
        <p className="para">Your Rights</p>
        
     <p> •  Access your personal data anytime
        
            <br/>
• Request deletion of your information
     <br/>
•  Opt out of marketing communications
 </p>
       </div>
      </div>
      </div>
       <div className="collect-card " style={{border:"none"}}>
       <div className="card1">
        <p className="para">Cookies</p>
        <p>We use cookies to enhance your experience. <br/> You can manage cookie preferences through your browser settings.
        

    </p>
       
       </div>
       <div className="card1">
        <p className="para">Questions?</p>
        
     <p>General support: support@streelancer.com<br/>
Privacy concerns: privacy@streelancer.com
     

 </p>
       </div>
      </div>
      <div className="terms-buttons">
         <button className="btn-primary standard-btn" onClick={()=>{
          navigate("/")
         }}>
        Back to Home
      </button>
       <button className="btn-primary btn-outline standard-btn" onClick={()=>{
        navigate('/Remotetalent#contact');
       }}>
        Contact Us
      </button>
      </div>
     
    </div>
  );
};

export default Policy;

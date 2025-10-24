import React from "react";
import { FaUniversity } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="terms-container">
      <h2 className="terms-heading">Terms & Conditions</h2>

      <div className="terms-section purple">
        <div className="for-border">
        <div className="section-icon ">
          <FaUniversity />
        </div>
        </div>
        <div>
          <h3 className="section-title ">Our Services</h3>
          <p>
            Streelancer connects employers with diverse, vetted women talent,
            including:
          </p>
          <ul>
            <li>Career returnees</li>
            <li>LGBTQIA+ professionals</li>
            <li>Silver generation talent</li>
            <li>Persons with disabilities</li>
          </ul>
          <p>
            We also provide DEI assessments and career-building opportunities
            through our Academy.
          </p>
        </div>
      </div>

      <div className="terms-section green">
     <div className="section-bar"></div>
        <div>
          <h3 className="section-title">User Requirements</h3>
          <ul>
            <li>Users must be 18 years or older.</li>
            <li>All provided information must be accurate and up-to-date.</li>
            <li>Maintain professional conduct at all times.</li>
          </ul>
        </div>
      </div>

      <div className="terms-section red">
        <div className="section-bar"></div>
        <div>
             <h3 className="section-title">Prohibited Activities</h3>
             <div className="highlight-box">
         
     
          <ul>
            <li>Misuse of platform services</li>
            <li>Unlawful activities of any kind</li>
            <li>Discrimination based on any protected characteristics</li>
          </ul>
             </div>
        </div>
        
      </div>

      <div className="terms-section yellow">
        <div className="section-bar "></div>
        <div>
          <h3 className="section-title ">Payment Terms</h3>
          <p>
            Some services require payment, which will be clearly communicated
            before purchase. All pricing is transparent and upfront.
          </p>
        </div>
      </div>

      <div className="terms-section violet">
        <div className="section-bar "></div>
        <div>
          <h3 className="section-title ">Content Ownership</h3>
          <p>
            All platform content is owned by Streelancer and cannot be reused
            without explicit permission.
          </p>
        </div>
      </div>
      <div className="tc-text terms-text">
        <h2>Liability & Enforcement</h2>
        <p>We are not liable for hiring outcomes or the performance of any third party. Accounts found violating our policies may be suspended without prior notice. These terms are governed by and interpreted in accordance  
                                        with the laws of the United States.
</p>
      </div>
    </div>
  );
};

export default Terms;

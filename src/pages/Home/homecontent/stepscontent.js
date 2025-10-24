


import { HiOutlineUserAdd, HiOutlineBookOpen, HiOutlineBriefcase } from 'react-icons/hi';
import { LuRoute } from 'react-icons/lu'; // Clean outlined route icon

import ic1 from "../../../images/ic1.png"
import ic2 from "../../../images/ic2.png"
import ic3 from "../../../images/ic3.png"
import ic4 from "../../../images/ic4.png"
import num1 from "../../../images/num1.png"
import num2 from "../../../images/num2.png"
import num3 from "../../../images/num3.png"
import num4 from "../../../images/num4.png"
import { useNavigate } from 'react-router-dom';


const stepIcons = [ic1,ic2,ic3,ic4

];

const numsicon = [num1,num2,num3,num4

];

const StreelancerSteps = () => {
     const navigate = useNavigate();
  return (
    <div className="main-container">
      <h2 className="title">YOUR DREAM CAREER PATH
</h2>
      <p className="subtitle">
Tailored for your skills – Designed for your success
      </p>

      {/* Top Steps */}
      <div className="steps-grid">
        {[
          { num: "1", title: "Create Your Profile", desc: "2-minute signup + career quiz = matches made for you",desc2:"📌 We highlight your strongest skills automatically" },
          { num: "2", title: "Smart Matching", desc: "Get handpicked opportunities (no more job board hunting!)" ,desc2:"🎯 AI-powered recommendations based on your goals"},
          { num: "3", title: "Skill Boost", desc: "Free training to fill any gaps + profile polishing",desc2:"📈 Learn exactly what employers want" },
          { num: "4", title: "Get Hired", desc: "Direct intros to employers who value your story",desc2:"💼 85% placement rate for completed profiles" }
        ].map((step, idx) => (
          <div className="step-card" key={idx}>
            <div className='step-zero'></div>
            <div className="step-number">
              <img src={numsicon[idx]}/>
              </div>
            <h3 className="step-title">{step.title}</h3>
           
            
            <div >
                <img className="ic1" src={stepIcons[idx]}/>
             
            <p className="step-desc" style={{textAlign:"center"}}>{step.desc}
              <br/>
              {step.desc2}
            </p>
            </div>
             
          </div>
        ))}
      </div>

      {/* home-divider */}
      <div className="home-divider">
        <h2>Find Your Perfect Hire in 72 Hours</h2>
        <p>DEI-verified remote talent, ready to deliver from day one</p>
      </div>

 


      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="employer-box">
          <h3>Why Top Companies Choose Us</h3>
          <div className="employer-point">
            <strong> Deep Talent Network</strong>
            <p>Access skilled professionals from underrepresented groups
              <br/>
              → Expand your hiring pipeline by 3X
</p>
          </div>
          <div className="employer-point">
            <strong>Zero-Risk Hiring</strong>
            <p>Every candidate is pre-vetted for:
              <br/>
✔ Hard skills
 <br/>
✔ Soft skills
 <br/>
✔ Inclusive mindset
</p>
          </div>
          <div className="employer-point">
            <strong>Real-Time DEI Analytics</strong>
            <p>Track your progress with metrics that matter:
              <br/>
              • Team diversity growth
               <br/>
• Inclusion scores
 <br/>
• Retention improvements

            </p>
          </div>
        </div>

        <div className="hire-box" 
  >
          <h3>Be a part of Streelancer.</h3>
          <ul>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <img src={require("../../../images/message.png")} alt="icon" style={{ width: "30px", height: "30px" }} />
  <span><b>24x7</b> <br/>Support</span>
</li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <img src={require("../../../images/verified.png")} alt="icon" style={{ width: "30px", height: "30px" }} />
  <span><b>Verified</b> <br/>Talent</span>
</li>
          
          </ul>
          <button className="hire-btn" onClick={()=>{ navigate("/DEITalenthire")}}>Hire Now</button>

          <img
    src={require("../../../images/people.png")}
    alt="Decorative Bottom Image"
  className='people-img'
  />
        </div>
      </div>
    </div>
  );
};

export default StreelancerSteps;

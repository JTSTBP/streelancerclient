

import { useNavigate } from "react-router-dom";
import returneeImg from "../../../images/ex1.png"; // update path
import silverImg from "../../../images/ex2.png"; 
import ex3 from "../../../images/ex3.png"; // update path
import ex4 from "../../../images/ex4.png";
import ex5 from "../../../images/ex5.png"; 
import line from "../../../images/line.png"
import line2 from "../../../images/line2.png"// update path
// update path

function CareerPathCards() {
    const navigate = useNavigate();
  return (
    <section className="career-section">
      <h2 className="section-title">  YOUR COMEBACK STARTS HERE
</h2>
      <p className="section-subtitle">
      Tailored opportunities for every career journey
      </p>

      <div className="card-container">
        
        {/* Card 1 */}
        <div className="card returnee-card">
          <img src={returneeImg} alt="Career Returnees" className="card-image" />
          <div className="card-content">
            <h3>Career Returners</h3>
            <blockquote>"Your break doesn’t define you – your comeback will."</blockquote>
            <p>
             
             
             → Skill-matched freelance projects
             <br/>
→ Flexible hours to ease back in
<br/>
→ 2-10 year gaps welcome

            </p>
           
            <div className="btn-wrapper">
  <button className="register-btn" onClick={() => navigate("/Signup")}>Re-enter Workforce</button>
  <img src={line} alt="arrow" className="arrow-image left" />
</div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="card silver-card">
          <div className="card-content">
            <h3>Silver Generation</h3>
            <p className="subhead">"Decades of experience. Zero expiration date."</p>
            <p>
             → Roles valuing wisdom & reliability
             <br/>
→ No tech hurdles – just impact
  <br/>
→ Fully remote positions

            </p>
                        <div className="btn-wrapper" >
  <button className="register-btn" onClick={() => navigate("/Signup")}>Explore Mature Talent Roles</button>
  <img src={line2} alt="arrow" className="arrow-image right" />
</div>
          </div>
          <img src={silverImg} alt="Silver Generation" className="card-image" />
        </div>

        {/* card 3 */}
         <div className="card blue-card">
            <img src={ex3} alt="Silver Generation" className="card-image" />
          <div className="card-content">
            <h3> LGBTQIA+ Professionals</h3>
            <p className="subhead">"Authenticity welcomed here."</p>
            <p>
            → Vetted inclusive employers
            <br/>
→ Creative & technical roles
<br/>
→ Identity-respected workplaces

            </p>
                          <div className="btn-wrapper">
  <button className="register-btn" onClick={() => navigate("/Signup")}>Find Safe Opportunities</button>
  <img src={line} alt="arrow" className="arrow-image left" />
</div>
          </div>
          
        </div>
       
       {/* card 4 */}
        <div className="card yellow-card">
          <div className="card-content">
            <h3> Students & New Streelancer</h3>
            <p className="subhead">"Earn while you learn."</p>
            <p>
             → Portfolio-building projects
             <br/>
→ Beginner-friendly gigs
<br/>
→ Side income opportunities

            </p>
                        <div className="btn-wrapper" >
  <button className="register-btn" onClick={() => navigate("/Signup")}>Start Earning Now</button>
  <img src={line2} alt="arrow" className="arrow-image right" />
</div>
          </div>
          <img src={ex4} alt="Silver Generation" className="card-image" />
        </div>
     

       {/* card 5 */}
        <div className="card green-card">
            <img src={ex5} alt="Silver Generation" className="card-image" />
          <div className="card-content">
            <h3> Professionals with Disabilities</h3>
            <p className="subhead">"Your ability is our focus."
</p>
            <p>
             
→ 100% remote accessibility
<br/>
→ Supportive client network
<br/>
→ Skills-first hiring


            </p>
                           <div className="btn-wrapper">
  <button className="register-btn" onClick={() => navigate("/Signup")}>Browse Accessible Roles</button>
  <img src={line} alt="arrow" className="arrow-image left" />
</div>
          </div>
          
        </div>




        
      </div>
    </section>
  );
}

export default CareerPathCards;

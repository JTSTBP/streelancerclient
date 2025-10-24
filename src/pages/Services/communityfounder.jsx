// import React from "react";
// import "./communityfounder.css";
// import image1 from "../../images/founder1.png"
// import image2 from "../../images/founder2.png"

// const FounderMistake = () => {
//   return (
//     <div className="founder-container">
     
//         <div className="mobile-scaling-container">
//       <h2 className="mobile-title">
//         TOP 5 MISTAKES
//         FOUNDERS MAKE 
//         WHILE SCALING 
//         THEIR TEAMS
//       </h2>

//       <img src={image1} alt="Presentation" className="mobile-image" />

//       <p className="mobile-caption">
//         5 Hiring Mistakes Founders Make While Scaling Their Business<span className="dot">.</span>
//       </p>

//       <div className="mobile-description-box">
//         <p className="mobile-description">
//           Scaling a business is an exciting journey. There’s a rush of new opportunities, increased demand, and bold visions for the future. But while founders often focus on product, growth, and customer acquisition, one critical piece of the puzzle is frequently overlooked: building the right team.
//           <br /><br />
//           At Jobs Territory, we’ve worked with hundreds of high-growth startups and mid-sized businesses. One thing is clear—founders who get hiring right scale faster, smoother, and with fewer roadblocks.
//           <br /><br />
//           Yet, even the best-intentioned leaders make some common hiring mistakes that can cost time, energy, and money.
//         </p>
//       </div>
//     </div>

//       <div className="hiring-container">
//       <p className="hiring-intro">
//         Scaling a business is thrilling—new markets, bigger goals, exciting momentum. But as many founders quickly learn, scaling a team is where the real challenge lies.
//         <br /><br />
//         At Jobs Territory, we’ve supported dozens of fast-growing startups and mid-sized companies through their hiring journeys. And along the way, we’ve seen a clear pattern: the same recruitment mistakes tend to show up time and again.
//         <br /><br />
//         <strong>Here are the top 5 hiring mistakes founders make—and how you can sidestep them to build a strong, future-ready team.</strong>
//       </p>

//       <img src={image2} alt="Team discussion" className="hiring-image" />

//       <div className="hiring-list">
//         <div className="hiring-item">
//           <strong>1. Hiring in a Hurry</strong><br />
//           When growth spikes, it’s tempting to fill roles as fast as possible. But rushed hiring often leads to poor cultural fits and underperformance.
//           <br /><strong>Tip:</strong> Take the time to define clear job roles, must-have skills, and long-term expectations before you hire.
//         </div>

//         <div className="hiring-item">
//           <strong>2. Doing It All Yourself</strong><br />
//           Founders often carry the weight of the entire business—and recruitment ends up on their to-do list. This leads to burnout and mismanagement, with little room for strategic focus.
//           <br /><strong>Tip:</strong> Delegate hiring to trusted partners who understand your vision, so you can focus on scaling, not sorting through resumes.
//         </div>

//         <div className="hiring-item">
//           <strong>3. Prioritizing Skills Over Attitude</strong><br />
//           Yes, technical skills matter—but so does mindset. Hiring for skill alone can create friction in the long run if there’s no flexibility, resilience, or team spirit.
//           <br /><strong>Tip:</strong> Use interviews to evaluate soft skills, emotional intelligence, and alignment with your company culture—especially for growth roles.
//         </div>

//         <div className="hiring-item">
//           <strong>4. Ignoring Employer Branding</strong><br />
//           Top talent wants more than just a paycheck. They want purpose, growth, and a company culture they connect with.
//           <br /><strong>Tip:</strong> Invest in your brand story. Share authentic content on LinkedIn, highlight employee experiences, and craft a compelling “Why Join Us” narrative across platforms.
//         </div>

//         <div className="hiring-item">
//           <strong>5. Delaying Leadership Hires</strong><br />
//           Many founders delay hiring senior talent, trying to “manage for now.” The result? Bottlenecks, poor delegation, and stalled momentum.
//           <br /><strong>Tip:</strong> Don’t wait. Bring in experienced leaders early—especially in operations, sales, and HR—to structure your scale-up journey.
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FounderMistake;


import React from "react";
import "./communityfounder.css"

import image1 from "../../images/founder1.png";
import image2 from "../../images/founder2.png";
import FounderMistake from "./founder";

const CommunityFounder = () => {
  return (
    <FounderMistake
      mobileTitle={`TOP 5 MISTAKES\nFOUNDERS MAKE\nWHILE SCALING\nTHEIR TEAMS`}
      image1={image1}
      mobileCaption="5 Hiring Mistakes Founders Make While Scaling Their Business"
      mobileDescription={`Scaling a business is an exciting journey. There’s a rush of new opportunities, increased demand, and bold visions for the future. But while founders often focus on product, growth, and customer acquisition, one critical piece of the puzzle is frequently overlooked: building the right team.

At Jobs Territory, we’ve worked with hundreds of high-growth startups and mid-sized businesses. One thing is clear—founders who get hiring right scale faster, smoother, and with fewer roadblocks.

Yet, even the best-intentioned leaders make some common hiring mistakes that can cost time, energy, and money.`}
      hiringIntro={`Scaling a business is thrilling—new markets, bigger goals, exciting momentum. But as many founders quickly learn, scaling a team is where the real challenge lies.

At Jobs Territory, we’ve supported dozens of fast-growing startups and mid-sized companies through their hiring journeys. And along the way, we’ve seen a clear pattern: the same recruitment mistakes tend to show up time and again.

Here are the top 5 hiring mistakes founders make—and how you can sidestep them to build a strong, future-ready team.`}
      image2={image2}
      hiringMistakes={[
        {
          title: "Hiring in a Hurry",
          description: "When growth spikes, it’s tempting to fill roles as fast as possible. But rushed hiring often leads to poor cultural fits and underperformance.",
          tip: "Take the time to define clear job roles, must-have skills, and long-term expectations before you hire."
        },
        {
          title: "Doing It All Yourself",
          description: "Founders often carry the weight of the entire business—and recruitment ends up on their to-do list. This leads to burnout and mismanagement, with little room for strategic focus.",
          tip: "Delegate hiring to trusted partners who understand your vision, so you can focus on scaling, not sorting through resumes."
        },
        {
          title: "Prioritizing Skills Over Attitude",
          description: "Yes, technical skills matter—but so does mindset. Hiring for skill alone can create friction in the long run if there’s no flexibility, resilience, or team spirit.",
          tip: "Use interviews to evaluate soft skills, emotional intelligence, and alignment with your company culture—especially for growth roles."
        },
        {
          title: "Ignoring Employer Branding",
          description: "Top talent wants more than just a paycheck. They want purpose, growth, and a company culture they connect with.",
          tip: "Invest in your brand story. Share authentic content on LinkedIn, highlight employee experiences, and craft a compelling “Why Join Us” narrative across platforms."
        },
        {
          title: "Delaying Leadership Hires",
          description: "Many founders delay hiring senior talent, trying to “manage for now.” The result? Bottlenecks, poor delegation, and stalled momentum.",
          tip: "Don’t wait. Bring in experienced leaders early—especially in operations, sales, and HR—to structure your scale-up journey."
        }
      ]}
    />
  );
};

export default CommunityFounder;

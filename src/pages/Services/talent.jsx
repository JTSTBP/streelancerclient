


import React from "react";

import image1 from "../../images/talent1.png";
import image2 from  "../../images/talent2.png"
import FounderMistake from "./founder";

const Talent = () => {
  return (
    <FounderMistake
      mobileTitle={`BUILDING A WINNER TALENT ACQUISITION STRATEGY WITH RAAS.`}
      image1={image1}
      mobileCaption="Why RAAS Is the Future of Hiring in 2025 "
      mobileDescription={`In today’s ultra-competitive and rapidly evolving job market, traditional hiring models are falling behind. Long hiring cycles, high agency costs, and limited in-house bandwidth are making it harder than ever for businesses to attract and retain the right talent—especially at scale.
Modern companies need a hiring solution that is flexible, fast, and future-ready.
Enter RAAS (Recruitment-as-a-Service)—a smarter, more agile recruitment model designed to meet the demands of today’s business landscape. Unlike traditional outsourcing, RAAS acts as a strategic partner, aligning closely with your business goals, culture, and hiring needs.`}
      hiringIntro={`In today’s fast-changing recruitment landscape, one question continues to spark debate among HR leaders and founders alike: Should you hire for attitude or skill?
As we enter a new era of work shaped by digital transformation, remote collaboration, and evolving employee expectations, the answer isn’t as binary as it once was. The real key? Strategic balan`}
      image2={image2}
 

hiringMistakes={[
  {
    title: "Scalable, On-Demand Hiring",
    description:
      "Hiring needs change quickly—new clients, market shifts, or project launches. RAAS adapts in real-time, whether you're filling one role or managing a bulk recruitment drive. It delivers unmatched agility without requiring you to scale your internal HR team overnight.",
  },
  {
    title: "Industry-Specific Expertise",
    description:
      "RAAS providers bring deep domain knowledge in fields like IT, healthcare, retail, and finance. Their recruiters understand the unique demands of each role, ensuring a better cultural and technical fit and higher-quality hires.",
  },
  {
    title: "Data-Driven Strategy",
    description:
      "Smart hiring depends on smart data. RAAS integrates analytics and performance metrics throughout the recruitment process—allowing you to track results, identify bottlenecks, and refine your hiring strategy based on real insights.",
  },
  {
    title: "Faster Time-to-Hire",
    description:
      "Speed is a competitive advantage. RAAS builds proactive talent pools, automates workflows, and reduces time-to-fill. You get top candidates faster—before your competitors do.",
  },
  {
    title: "Cost-Effective Recruitment",
    description:
      "Traditional agencies often come with hefty markups. RAAS offers transparent, scalable pricing tailored to your hiring volume. You reduce hiring costs, boost retention, and eliminate the expenses tied to long vacancies and bad hires.",
  },
  {
    title: "Frees Up Internal HR Teams",
    description:
      "With RAAS handling sourcing, screening, and coordination, your in-house HR team can focus on strategic initiatives like culture, engagement, and performance—where they truly add value.",
  },
]}


    />
  );
};

export default Talent;

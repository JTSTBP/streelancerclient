


import React from "react";

import image1 from "../../images/skill1.png";
import image2 from "../../images/skill2.png";
import FounderMistake from "./founder";

const Skills = () => {
  return (
    <FounderMistake
      mobileTitle={`HIRING FOR ATTITUDE VS. HIRING FOR SKILL: WHAT WORKS BEST IN 2025`}
      image1={image1}
      mobileCaption="Attitude vs. Skill: What Should You Hire for in 2025?"
      mobileDescription={`In technical roles—think data science, software engineering, financial analytics, or product management—skills remain the currency of performance. Employers need talent who can jump in, understand the tools, deliver results, and bring experience to the table.
In industries like healthcare, finance, or IT, certification, compliance, and technical mastery are often non-negotiable. Skill-based hiring ensures faster ROI and less time spent on training.
But here's the caveat: Skills have a shelf life. The pace at which industries evolve means what’s hot today could be outdated tomorrow. Hiring for skills alone can be a short-sighted move.`}
      hiringIntro={`In today’s fast-changing recruitment landscape, one question continues to spark debate among HR leaders and founders alike: Should you hire for attitude or skill?
As we enter a new era of work shaped by digital transformation, remote collaboration, and evolving employee expectations, the answer isn’t as binary as it once was. The real key? Strategic balan.`}
      image2={image2}
     hiringMistakes={[
  {
    title: "Why Skills Still Matter",
    description:
      "In industries like FMCG, healthcare, e-commerce, and fashion retail, technical skills remain crucial. Roles like data analysts, digital marketers, and merchandisers require candidates who are already proficient in specialized tools. Hiring for skill enables faster onboarding and productivity from day one. However, skills evolve rapidly—what's cutting-edge today may be outdated tomorrow. Relying solely on hard skills can leave businesses vulnerable in the long term.",
  },
  {
    title: "Doing It All Yourself",
    description:
      "Founders often carry the weight of the entire business—and recruitment ends up on their to-do list. This leads to burnout and mismanagement, with little room for strategic focus.",
    tip: "Delegate hiring to trusted partners who understand your vision, so you can focus on scaling, not sorting through resumes.",
  },
  {
    title: "Prioritizing Skills Over Attitude",
    description:
      "Yes, technical skills matter—but so does mindset. Hiring for skill alone can create friction in the long run if there’s no flexibility, resilience, or team spirit.",
    tip: "Use interviews to evaluate soft skills, emotional intelligence, and alignment with your company culture—especially for growth roles.",
  },
  {
    title: "Ignoring Employer Branding",
    description:
      "Top talent wants more than just a paycheck. They want purpose, growth, and a company culture they connect with.",
    tip: "Invest in your brand story. Share authentic content on LinkedIn, highlight employee experiences, and craft a compelling “Why Join Us” narrative across platforms.",
  },
]}

    />
  );
};

export default Skills;

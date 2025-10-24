import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const faqs = [
  {
    question: "What is Streelancer for Indian Enterprises?",
    answer: "Streelancer for Indian Enterprises helps companies hire verified women talent — returnees, homebound, and hybrid-ready — through fully managed remote, hybrid, fractional, and project-based hiring models."
  },
  {
    question: "What makes Streelancer different?",
    answer: "We provide a DEI-aligned, verified talent pool, 4-hour workday model, fully managed onboarding, monthly impact dashboards, and flexible hiring models to meet diverse workforce needs."
  },
  {
    question: "What types of industries do you serve?",
    answer: "We serve Manufacturing & EMS, FMCG, Healthcare & Pharmaceuticals, Logistics, Infrastructure & Construction, and Startups, SaaS & Tech, offering specialized talent for each sector."
  },
  {
    question: "How fast can I hire talent?",
    answer: "We typically onboard talent within 5–7 days after receiving your hiring requirements."
  },
  {
    question: "What hiring models do you offer?",
    answer: "We offer Full-Time Remote, Hybrid Talent, Project Pods, Fractional CXOs, and Pay-per-Hire options to suit different business needs."
  },
  {
    question: "What roles are commonly hired through Streelancer?",
    answer: "Roles include inside sales, web support, content moderation, lead generation, customer support, SEO, documentation, regulatory support, and even part-time senior leaders like Digital CMOs or Tech Advisors."
  },
  {
    question: "How does the hiring process work?",
    answer: "Share your requirements, we shortlist and onboard talent, you manage work output, and track DEI and performance impact through monthly dashboards."
  },
  // {
  //   question: "Do I need to manage HR and admin?",
  //   answer: "No. Streelancer handles all hiring, onboarding, and administrative coordination so you can focus on your core business."
  // },
  // {
  //   question: "Can I hire talent on a short-term or project basis?",
  //   answer: "Yes, we provide Project Pods and Fractional CXO models for specialized short-term needs and deliverables-based work."
  // },
  // {
  //   question: "How do I get started?",
  //   answer: "Book a free consultation using our form or email us at hire@streelancer.com to discuss your hiring needs and explore suitable solutions."
  // }
]


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Still curious? Here are quick answers to what most people ask us.</p>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <div className="faq-question">
            <div>
 <span className="faq-number">{`0${index + 1}`}</span>
            <span>{faq.question}</span>
            </div>
           
            <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>  <MdKeyboardArrowDown /></span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </section>
  );
};

export default FAQSection;

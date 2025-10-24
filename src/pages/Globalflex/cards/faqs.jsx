import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const faqs = [
  {
    question: "What is Streelancer's hiring model?",
    answer: "We provide fully managed, DEI-aligned talent solutions. You share your requirements, we provide vetted profiles, handle onboarding, and manage your remote team for you."
  },
  {
    question: "How quickly can I hire talent?",
    answer: "You can onboard vetted and trained talent within 72 hours of sharing your requirements."
  },
  {
    question: "What types of hiring models do you offer?",
    answer: "We support full-time, project-based, and consulting models to suit your business needs."
  },
  {
    question: "What industries do you serve?",
    answer: "We provide talent solutions for Startups & SaaS, Digital Marketing, IT Services, E-commerce & Retail, Healthcare & Life Sciences, and Education & Training (EdTech)."
  },
  {
    question: "What roles can I hire for?",
    answer: "Roles include sales, client success, technical onboarding, content writing, social media, QA, CMS maintenance, catalog management, customer service, healthcare admin, LMS support, and more."
  },
  {
    question: "Are the profiles pre-vetted?",
    answer: "Yes, all professionals are screened for skills, experience, and diversity alignment before sharing their profiles."
  },
  {
    question: "Do I need my own HR team to manage the talent?",
    answer: "No, Streelancer provides a fully managed service that includes hiring, onboarding, payroll, and talent management."
  },
  // {
  //   question: "Can I hire globally?",
  //   answer: "Yes, we can provide remote-ready professionals for multiple regions based on your requirements."
  // },
  // {
  //   question: "What is the cost advantage?",
  //   answer: "You can save up to 40% on hiring costs compared to in-house teams while still getting top-quality talent."
  // },
  // {
  //   question: "How do I get started?",
  //   answer: "Simply fill out the inquiry form with your role requirements, preferred work model, and team size, and our team will connect with you to start the hiring process."
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

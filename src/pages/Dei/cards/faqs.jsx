import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const faqs = [
  {
    question: "What is the DEI Score?",
    answer: "The DEI Score is a quick 5-minute assessment that benchmarks your company’s diversity, equity, and inclusion (DEI) practices across gender, disability, LGBTQ+, and returnee integration."
  },
  {
    question: "Why should my company take the DEI Score survey?",
    answer: "The survey helps you understand where your organization stands on the DEI maturity curve (Aware, Active, Impact) and provides actionable recommendations to advance workplace inclusion."
  },
  {
    question: "What do I get after completing the survey?",
    answer: "You receive an instant DEI Score, a badge (Gold, Silver, or Bronze) to showcase your inclusion efforts, and recommendations for improving DEI practices in your workplace."
  },
  {
    question: "How long does the DEI Score assessment take?",
    answer: "The assessment takes just 5 minutes and covers key DEI dimensions while remaining workplace-friendly."
  },
  {
    question: "What are the benefits of earning a DEI Badge?",
    answer: "A DEI Badge boosts your employer brand, attracts diverse talent, improves your market reputation, enhances ESG scores, and helps win DEI-sensitive contracts."
  },
  {
    question: "Will my company be publicly recognized?",
    answer: "Yes, certified companies are featured in the DEI employer directory and may be recognized in industry publications and events, improving visibility and trust."
  },
  {
    question: "Is the DEI Score recognized by job seekers?",
    answer: "Yes, companies showcasing DEI badges attract more diverse and high-performing talent, as inclusive workplaces appeal to job seekers seeking safe and equitable work environments."
  },
  // {
  //   question: "How can I start the DEI assessment?",
  //   answer: "You can start the DEI Score assessment by entering your email and completing the quick survey or by booking a DEI session with our team."
  // },
  // {
  //   question: "What are the DEI Score levels?",
  //   answer: "The DEI Score has three levels — Aware, Active, and Impact — representing different stages of workplace inclusion maturity."
  // },
  // {
  //   question: "Is there any cost for taking the DEI Score?",
  //   answer: "The DEI Score assessment is free to take and provides instant scoring with actionable insights for your organization."
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

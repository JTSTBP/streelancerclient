import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const faqs = [
  { question: "Who can register on Streelancer?", answer: "Anyone who identifies as a woman, queer, person with a disability, neurodiverse, a career returnee, or part of the silver generation is welcome to register." },
  { question: "Do I need prior work experience to register?", answer: "No. We have opportunities for both experienced professionals and freshers, including students and those restarting their careers." },
  { question: "Is registration free?", answer: "Yes, creating a profile and joining Streelancer is completely free for all talent." },
  { question: "What kind of jobs are available?", answer: "We offer remote, hybrid, and fractional roles across multiple industries like Manufacturing & EMS, Retail & E-commerce, Customer Support, Documentation, and more." },
  { question: "How does the hiring process work for women talent?", answer: "Register and create your profile → Complete our skill assessment or submit past work (optional but recommended) → Get matched with jobs based on your skills and goals → Get hired by employers who value diversity and inclusion."},
    { question: "Can I work part-time or freelance?", answer: "Yes, we specialize in flexible, remote, hybrid, and fractional work models, perfect for Streelancer, part-timers, and those seeking work-life balance." },
      { question: "How soon can I start working after registration?", answer: "On average, candidates get matched with opportunities within 1–2 weeks depending on role availability and skill fit." },
        { question: "Will I get training or upskilling support?", answer: "Yes, Streelancer Academy provides courses and mentorship to help you upskill and prepare for industry-relevant roles." },
          // { question: " I am a career returnee after a long break. Can I still get jobs?", answer: "Absolutely. We specialize in helping women restart their careers by matching existing skills with flexible freelance or remote roles." },
          //   { question: "What support does Streelancer provide after I get hired?", answer: "We provide 24×7 support, access to our community for mentorship, and guidance throughout your freelance or remote work journey." },


 
];

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

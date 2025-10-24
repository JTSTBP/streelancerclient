import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const faqs = [
  {
    question: "What is the Streelancer Community?",
    answer: "It’s a free network for women, queer talent, persons with disabilities, and second-career professionals to connect, learn, and earn through mentorship, forums, and paid microprojects."
  },
  {
    question: "Who can join the Streelancer Community?",
    answer: "Anyone who identifies as a woman, queer, person with disability, neurodiverse, returnee, or part of the silver generation can join."
  },
  {
    question: "Is there any cost to join the community?",
    answer: "No, joining the Streelancer Community is completely free."
  },
  {
    question: "What benefits do I get as a member?",
    answer: "Access to mentorship, peer support forums, exclusive events, paid microprojects, career resources, and networking with inclusive employers."
  },
  {
    question: "Do I need work experience to join?",
    answer: "No, the community is open to both beginners and experienced professionals."
  },
  {
    question: "Can I find jobs through the community?",
    answer: "Yes, you can explore paid microprojects, freelance roles, and remote job opportunities shared exclusively with community members."
  },
  {
    question: "What kind of events are conducted?",
    answer: "Monthly DEI events, AMA sessions with CXOs, mentorship programs, skill-building workshops, and networking meetups."
  },
  // {
  //   question: "How do I access mentorship?",
  //   answer: "You can use the 'Ask a Mentor' feature after joining the community to connect with experienced professionals."
  // },
  // {
  //   question: "Is the community safe and inclusive?",
  //   answer: "Yes, Streelancer ensures a safe, inclusive, and supportive environment for all members."
  // },
  // {
  //   question: "How do I register for the community?",
  //   answer: "Simply click on 'Join the Community' on the Streelancer website and complete a quick registration form."
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

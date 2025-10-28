import React from "react";
import tech from "../../../images/sur1.png";
import business from "../../../images/sur2.png";
import sales from "../../../images/sur3.png";

const solutions = [
  {
    title: "5-Minute Questionnaire",
    image: tech,
    color: "ind1",
    list: "Complete our streamlined DEI assessment in just 5 minutes. Fast. Insightful. Workplace-Friendly.",
  },
  {
    title: "Comprehensive Coverage",
    image: business,
    color: "ind2",
    list: "Assess across all core DEI pillars — Gender, Disability, LGBTQ+ Inclusion & Returnee Integration.",
  },
  {
    title: "Instant Scoring",
    image: sales,
    color: "ind3",
    list: "Get real-time results based on your DEI maturity level: AWARE. ACTIVE. IMPACT.",
  },
];

//  receive actionable next steps to move forward.
const Deisurvey = () => {
  return (
    <div className="industry-container">
      <h2>Our Comprehensive DEI Survey</h2>
      <p className="subtitle">
        A data-driven, fast-track approach to measure and improve your
        organization’s inclusion metrics.
      </p>
      <div className="cards-container">
        {solutions.map((item, index) => (
          <div
            className={`solution-card ${item.color}`}
            key={index}
            style={{ height: "77%" }}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>

            <ul>
              <p>{item.list}</p>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deisurvey;

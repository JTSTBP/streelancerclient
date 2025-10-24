import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";




const FounderMistake = ({
  mobileTitle,
  image1,
  mobileCaption,
  mobileDescription,
  hiringIntro,
  image2,
  hiringMistakes = []
}) => {
   const { pathname } = useLocation();

    useEffect(() => {
       window.scrollTo({ top: 0, behavior: "smooth" });
     }, [pathname]);
  return (
    <div className="founder-container">
      <div className="mobile-scaling-container">
        <h2 className="mobile-title">{mobileTitle}</h2>

        <img src={image1} alt="Presentation" className="mobile-image" />

        <p className="mobile-caption">
          {mobileCaption}<span className="dot">.</span>
        </p>

        <div className="mobile-description-box">
          <p className="mobile-description">{mobileDescription}</p>
        </div>
      </div>

      <div className="hiring-container">
        <p className="hiring-intro">{hiringIntro}</p>

        <img src={image2} alt="Team discussion" className="hiring-image" />

        <div className="hiring-list">
          {hiringMistakes.map((item, index) => (
            <div className="hiring-item" key={index}>
              <strong>{`${index + 1}. ${item.title}`}</strong><br />
              {item.description}
                    <br />
              {item.tip && (
        <p>
          <strong>Tip:</strong> {item.tip}
        </p>
      )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderMistake;

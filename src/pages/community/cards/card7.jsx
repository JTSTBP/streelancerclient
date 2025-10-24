import React from "react";
import part1 from "../../../images/partners1.jpg"
import part2 from "../../../images/partners2.png"
import part3 from "../../../images/partners3.png"
import part4 from "../../../images/partners4.png"


const logos = [
  { src: part1, alt: "BigBasket" },
  { src: part2, alt: "Svamitva" },
  { src: part3, alt: "Unacademy" },
  { src:part4, alt: "Flobiz" },
  
];

const PartnersCarousel = () => {
  return (
    <div className="partnerscarousel-wrapper">
      <h2 className="partnerscarousel-title">Our Purpose-Aligned Partners</h2>
      <p className="partnerscarousel-subtitle">
        We collaborate with organizations, brands, and changemakers who believe in inclusive growth,
        remote-first teams, and empowering underrepresented talent.
      </p>
      <div className="partnerscarousel-track">
        <div className="partnerscarousel-slide">
          {logos.map((logo, index) => (
            <div className="partnerscarousel-logo" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;

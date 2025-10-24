import React, { useState } from "react";
import image1 from "../../../images/testimonial1.png"
import image2 from "../../../images/testimonial2.jpg"
import image3 from "../../../images/testimonial3.jpg"

const testimonials = [
  {
    name: "Ritika S., Mumbai",
    role: "Social Media Manager",
    message: "Streelancer helped me restart after 5 years. I completed their course and now freelance for a global client from home!",
    image: image1,
  },
  {
    name: "Anita R., Hyderabad",
    role: "UX Designer",
    message: "I found confidence again and now work remotely with international clients thanks to Streelancer.",
    image:image2,
  },
  {
    name: "Priya M., Delhi",
    role: "Content Strategist",
    message: "The mentorship was life-changing. I'm working full-time with a global brand from my hometown.",
    image: image3,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { name, role, message, image } = testimonials[current];

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Real Stories, Real Impact</h2>
      <p className="testimonial-subtitle">
        Hear from women whose journeys transformed through Streelancer —<br />
        from upskilling to meaningful work.
      </p>

      <div className="testimonial-box">
        <div className="testimonial-content">
          <img className="testimonial-img" src={image} alt={name} />
          <div className="testimonial-text-box">
            <p className="quote-icon">❝</p>
            <p className="testimonial-message">{message}</p>
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-role">{role}</p>
          </div>
        </div>

        <div className="testimonial-controls">
          <button onClick={prevSlide} className="arrow-btn">❮</button>
          <button onClick={nextSlide} className="arrow-btn">❯</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

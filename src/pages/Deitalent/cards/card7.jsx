import React, { useState,useRef } from 'react';
import { toast } from "react-toastify";
import { Mail, Phone, MapPin } from "lucide-react";
import Backendurl from "../../../config"; 
import { consultSchema } from "../../../validations/validationSchema";

const ContactForm = () => {
const [errorMessages, setErrorMessages] = useState("");
const errorRef = useRef(null);



  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    let updatedRegions = [...formData.regions];
    if (checked) {
      updatedRegions.push(value);
    } else {
      updatedRegions = updatedRegions.filter((region) => region !== value);
    }
    setFormData({ ...formData, regions: updatedRegions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     const { error } = consultSchema.validate(formData);
    if (error) {
  
    const allErrors = error.details[0].message;
    setErrorMessages(allErrors);
    setTimeout(() => {
      if (errorRef.current) {
        errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100); // slight delay ensures DOM update

    return;
  }



  setErrorMessages(""); 

    try {
      const response = await fetch(`${Backendurl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
    
         toast.success( "Inquiry submitted successfully!");
        // Optionally reset form
        setFormData({
          company: '',
    name: '',
    phone: '',
    email: '',
    requirements: '',
        });
      } else {
       
         toast.error( "Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting the form.');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="global-header">
        <h2>Ready to Build Your DEI Workforce?</h2>
        <p>
        Connect with our team to discuss your hiring needs and discover how Streelancer can help you  
                                                                achieve your diversity goals
        </p>
      </div>

      <div className="global-formbox">

        <section className="consultation-section">
      <div className="consultation-container">
        <div className="consultation-form-container">
          <h3>Book a Free Consultation</h3>
           {errorMessages  && <p className='error-message' ref={errorRef} >{errorMessages}</p>}
          <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  
                />
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  
                />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                 
                />
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  
                />
                <textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Hiring Requirement"
                  rows="4"
                  
                ></textarea>
                <button type="submit">Schedule Consultation</button>
              </form>
        </div>

        <div className="consultation-info-container">
          <h3>Contact Information</h3>
          <div className="consultation-info-box">
            <Mail size={16} />
            <div>
              <p className="consultation-info-title">Email Us</p>
              <p>hire@streelancer.com</p>
            </div>
          </div>
          {/* <div className="consultation-info-box">
            <Phone size={16} />
            <div>
              <p className="consultation-info-title">Call Us</p>
              <p>+91 98765 43210</p>
            </div>
          </div> */}
          <div className="consultation-info-box">
            <MapPin size={16} />
            <div>
              <p className="consultation-info-title">Office Location</p>
              <p>Bangalore 560034</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default ContactForm;

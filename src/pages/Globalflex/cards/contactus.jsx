


import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import Backendurl from "../../../config";
import { contactSchema } from "../../../validations/validationSchema";
import axios from "axios";

const ContactForm = () => {
  const [errorMessages, setErrorMessages] = useState("");
  const errorRef = useRef(null);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [industries, setIndustries]=useState([]);

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    regions: [],
    industry: "",
    workModel: "Full time remote",
    country: "",
    teamSize: 15,
    requirements: "",
  });

  // Fetch all countries
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => setCountries(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
console.log(formData,"formDatacontact")
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

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
    setFormData({ ...formData, country: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = contactSchema.validate(formData, { abortEarly: false });

    if (error) {
      const allErrors = error.details[0].message;
      setErrorMessages(allErrors);
      setTimeout(() => {
        if (errorRef.current) {
          errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      return;
    }

    setErrorMessages("");

    try {
      const response = await fetch(`${Backendurl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Inquiry submitted successfully!");
        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          regions: [],
          industry: "",
          workModel: "Full time remote",
          country: "",
          teamSize: 15,
          requirements: "",
        });
      } else {
        toast.error("Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting the form.");
    }
  };

   useEffect(() => {
    const fetchIndustries = async () => {
      try {
        
        const url =
          `${Backendurl}/api/data/getindustries`;
    
        fetch(url)
      .then((res) => res.json())
      .then((data) => setIndustries(data))
      .catch((err) => console.error("Error fetching all Industries:", err));
        
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="global-header">
        <h2>Ready to Build Your Remote Team?</h2>
        <p>
          Hire scalable remote professionals — fast, flexible, and cost-efficient. Start growing your business today.
        </p>
      </div>

      <div className="global-formbox">
        <h3>Contact Us</h3>
        {errorMessages && (
          <p className="error-message" ref={errorRef}>
            {errorMessages}
          </p>
        )}

        <form className="global-form" onSubmit={handleSubmit}>
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" value={formData.company} onChange={handleChange} />

          <div className="global-formrow">
            <div>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          {/* Countries dropdown */}
          <div className="global-formrow">
            <div>
              <label htmlFor="country">Country</label>
              <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select Country</option>
                {countries.map((c, idx) => (
                  <option key={idx} value={c.country}>
                    {c.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Continue with existing fields */}
          <label htmlFor="industry">Industry</label>
           <select
           id="industry"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
      >
        <option value="">Select your Industry</option>
    
      {industries.map((industry) => (
        <option key={industry.id} value={industry.name}>{industry.name}</option>
      ))}
        {/* Add more options as needed */}
      </select>
          {/* <input type="text" id="industry" value={formData.industry} onChange={handleChange} /> */}

          <label htmlFor="requirements">Requirements</label>
          <textarea id="requirements" value={formData.requirements} onChange={handleChange} />

          <button type="submit" className="global-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

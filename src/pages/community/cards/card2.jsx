import React, { useState } from 'react';
import axios from 'axios';
import Backendurl from "../../../config";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(`${Backendurl}/api/contactCommunity`, formData);
      setSuccessMsg('Your message was sent successfully!');
               toast.success( "Your message was sent successfully!");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSuccessMsg('Failed to send message. Please try again.');
       toast.error( "Failed to send message. Please try again.");
    }
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Get in Touch With Us</h2>
      <p className="faq-subtitle">
        We'd love to hear from you! Whether you're a job-seeker, hiring partner, or just curious — drop us a message and we'll get back to you soon.
      </p>

      <form className="communitycontact-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Phone no.</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>Message</label>
        <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Submit</button>
        {successMsg && <p className="success">{successMsg}</p>}
      </form>
    </section>
  );
};

export default ContactForm;

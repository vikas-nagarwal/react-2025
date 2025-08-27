import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    // Reset form
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Form Column */}
        <div className="col-md-6 col-12 mb-4 contactus">
          <div className="form-header mb-3">
            <h1>Contact</h1>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="input-group mb-3">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="input-group mb-3">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="input-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry or feedback..."
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
                rows={5}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* Optional: You can add an image, map, or info in the other column */}
        <div className="col-md-6 col-12"></div>
      </div>
    </div>
  );
};

export default Contact;

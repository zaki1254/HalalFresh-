import React, { useState } from 'react';
import './contact.css'; // Import the CSS file for additional styles
import backgroundImage from '../home/images/BACKGROUND.jpeg'; // Import the background image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (formData.name && formData.email && formData.message) {
      // Form is valid, proceed with sending
      console.log('Sending form:', formData);
      // You can add your logic here to send the form data
    } else {
      // Form is invalid, show error message or handle accordingly
      console.log('Please fill out all required fields');
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`, // Using the imported background image
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column', // Center items vertically and horizontally
      color: 'blue', // Text color
      textAlign: 'center', // Center text
      padding: '20px' // Add padding for better readability
    }}>
      <div className="container">
        <div className="contact-form">
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us here</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

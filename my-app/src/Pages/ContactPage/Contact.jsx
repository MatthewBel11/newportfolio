import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactPage.module.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID 
    )
    .then(() => {
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setError('Failed to send message. Please try again.');
    });
  };

  return (
    <div className={styles.ContactContainer}>
      <h1>Contact Me</h1>
      {isSent ? (
        <p className={styles.SuccessMessage}>Thank you! Your message has been sent.</p>
      ) : (
        <form className={styles.ContactForm} onSubmit={handleSubmit}>
          <div className={styles.FormGroup}>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required
            />
          </div>

          <div className={styles.FormGroup}>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />
          </div>

          <div className={styles.FormGroup}>
            <label htmlFor="message">Message:</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            />
          </div>

          <button type="submit" className={styles.SubmitButton}>Send</button>
        </form>
      )}
      {error && <p className={styles.ErrorMessage}>{error}</p>}
    </div>
  );
}

export default ContactPage;

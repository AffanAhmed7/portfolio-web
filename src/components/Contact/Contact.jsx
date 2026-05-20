import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const email = "affanahmedkhan34@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/affan-ahmed-885735298/";
  const linkedinHandle = "affan-ahmed-885735298";

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="contact-heading" className="contact-title">Get in touch</h2>

        <div className="contact-info">
          <p className="contact-item">
            <span className="contact-label">Gmail:</span> 
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noreferrer" className="contact-link">{email}</a>
          </p>
          <p className="contact-item">
            <span className="contact-label">LinkedIn:</span> 
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="contact-link">{linkedinHandle}</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

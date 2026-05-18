import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <span className="footer-copyright">
          © {currentYear} Affan Ahmed Khan. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

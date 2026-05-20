import React, { useState, useEffect } from 'react';
import './Navbar.css';
import resumeFile from '../../media/Resume (3).pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Monogram Logo: Stylized Artistic AA Initials */}
        <a href="#hero" className="navbar-logo" aria-label="Affan Ahmed Monogram Logo">
          <span className="logo-initials">AA</span>
        </a>

        {/* Navigation Actions */}
        <div className="navbar-links">
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#experience" className="navbar-link">
            Experience
          </a>
        </div>

        {/* Download CV Button */}
        <div className="navbar-actions">
          <a 
            href={resumeFile} 
            download="Affan_Ahmed_CV.pdf"
            className="navbar-cv-btn"
            id="nav-cv"
          >
            Download CV
          </a>
        </div>

      </div>
    </nav>
  );
}

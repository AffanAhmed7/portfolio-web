import React, { useEffect, useRef } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Hero   from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Detect touch/hoverless devices and disable custom cursor JS logic
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top  = `${e.clientY}px`;
    };

    const expand = () => cursor.classList.add('expanded');
    const shrink = () => cursor.classList.remove('expanded');

    window.addEventListener('mousemove', move);

    // Expand on interactive elements
    const interactives = document.querySelectorAll('a, button, .mondrian-wrapper, .project-card, .exp-block, .contact-link, .contact-btn, .navbar-logo, .navbar-link, .navbar-cv-btn');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', expand);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', expand);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef} aria-hidden="true" />

      {/* Floating dynamic navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </>
  );
}

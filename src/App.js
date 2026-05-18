import React, { useEffect, useRef } from 'react';
import './styles/global.css';
import Hero   from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

export default function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
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
    const interactives = document.querySelectorAll('a, button, .mondrian-wrapper, .project-card');
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

      {/* Main content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

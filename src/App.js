import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import NexusPage from './components/Nexus/NexusPage';
import VertexPage from './components/Vertex/VertexPage';
import NeoPlanePage from './components/NeoPlane/NeoPlanePage';

export default function App() {
  const cursorRef = useRef(null);
  const location = useLocation();

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
    const interactives = document.querySelectorAll('a, button, .mondrian-wrapper, .project-card, .exp-block, .contact-link, .contact-btn, .navbar-logo, .navbar-link, .navbar-cv-btn, .nexus-back-btn');
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
  }, [location.pathname]); // Re-attach when page changes

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef} aria-hidden="true" />

      {/* Floating dynamic navigation (only on home) */}
      {location.pathname === '/' && <Navbar />}

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nexus" element={<NexusPage />} />
        <Route path="/vertex" element={<VertexPage />} />
        <Route path="/neoplane" element={<NeoPlanePage />} />
      </Routes>
    </>
  );
}

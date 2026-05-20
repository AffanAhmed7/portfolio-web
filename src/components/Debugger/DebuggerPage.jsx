import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import './DebuggerPage.css';

export default function DebuggerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="debugger-page-container">
      <nav className="debugger-nav">
        <button className="debugger-back-btn" onClick={() => navigate('/')}>
          <FiArrowLeft /> Back to Portfolio
        </button>
      </nav>

      <main className="debugger-content">
        <motion.header
          className="debugger-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="debugger-header-text">
            <h1 className="debugger-title">Universal Web Debugger</h1>
            <p className="debugger-subtitle">High-Performance Chrome Extension</p>
          </div>
        </motion.header>

        <motion.section
          className="debugger-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2>Project Overview</h2>
          <p>
            The <strong>Universal Web Debugger</strong> is a high-performance, zero-interference Chrome extension designed to bring advanced developer tools directly into the browser viewport. Built with TypeScript and Vite, it acts as a lightweight, in-page hover inspector that allows developers to analyze, debug, and mutate DOM elements in real time without opening a separate DevTools window.
          </p>
          <p style={{ marginTop: '15px' }}>
            The tool is engineered for modern web development, offering deep integrations like framework detection (React, Vue, Svelte), accessibility compliance checking, and real-time session recording via rrweb.
          </p>
        </motion.section>

        <motion.section
          className="debugger-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Key Technical Features</h2>

          <h3 className="debugger-subsection-title"> Real-Time Hover Inspector & Box Model Analysis</h3>
          <ul className="debugger-list">
            <li>Developed a highly optimized, passive event listener-driven hover overlay that instantly highlights DOM elements.</li>
            <li>Visualizes precise box-model metrics (margin, padding, border, dimensions) and computes deep CSS tree history in real-time.</li>
            <li>Utilizes intelligent z-index and DOM-depth traversal to accurately select the most specific child element, even in complex overlapping layouts.</li>
          </ul>

          <h3 className="debugger-subsection-title"> Intelligent Side Panel & Framework Detection</h3>
          <ul className="debugger-list">
            <li>Clicking an element "locks" it and opens a dynamic Side Panel injected seamlessly via the Shadow DOM to prevent style leakage.</li>
            <li><strong>Performance Vitals:</strong> Analyzes runtime performance metrics such as Cumulative Layout Shift (CLS), Largest Contentful Paint (LCP), and Long Tasks, instantly surfacing frontend bottlenecks.</li>
            <li><strong>Framework Awareness:</strong> Automatically detects if the locked component is built using React, Vue, Angular, or Svelte, providing context-aware debugging advice.</li>
          </ul>

          <h3 className="debugger-subsection-title"> Accessibility (A11y) Engine</h3>
          <ul className="debugger-list">
            <li>Built-in color contrast engine that calculates luminance based on WCAG standards.</li>
            <li>Automatically audits background and text colors to flag contrast ratio failures (e.g., AA/AAA ratings).</li>
            <li>Includes a "Fix Contrast" algorithm that mathematically suggests and injects the nearest accessible color in real-time.</li>
          </ul>

          <h3 className="debugger-subsection-title"> Live Style Editor & Mutation History</h3>
          <ul className="debugger-list">
            <li>Allows developers to modify CSS properties (typography, spacing, layout helpers like flex/grid) directly from the UI.</li>
            <li>Implemented a robust <strong>StyleHistory</strong> state manager that tracks all DOM mutations, enabling seamless Undo/Redo functionality for design experimentation.</li>
            <li>Allows developers to effortlessly force CSS pseudo-states (:hover, :focus, :active) to test interactive elements without manual user input.</li>
          </ul>

          <h3 className="debugger-subsection-title">📹 Session Recording & Viewport Annotation</h3>
          <ul className="debugger-list">
            <li>Integrated <strong>rrweb</strong> to enable full session recording, allowing engineers to capture user flows and export diagnostic reports for reproducible bug tracking.</li>
            <li>Features an integrated HTML5 Canvas Annotator for taking screenshots of the viewport and drawing direct visual feedback over the UI.</li>
          </ul>
        </motion.section>

        <motion.section
          className="debugger-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Technology Stack</h2>
          <div className="debugger-stack-grid">
            <div className="stack-column">
              <h3>Core & Building</h3>
              <ul>
                <li><strong>Languages:</strong> TypeScript, HTML5, CSS3</li>
                <li><strong>Build Tools:</strong> Vite, Node.js</li>
              </ul>
            </div>
            <div className="stack-column">
              <h3>Browser & Libraries</h3>
              <ul>
                <li><strong>Browser APIs:</strong> Chrome Extensions API (Manifest V3), Shadow DOM, MutationObserver</li>
                <li><strong>Libraries:</strong> rrweb (session recording)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="debugger-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Impact & Value</h2>
          <p>
            This project demonstrates strong proficiency in advanced DOM manipulation, browser APIs, and state management. It highlights an ability to build developer-centric tooling focused on performance optimization, accessibility, and improving the frontend debugging lifecycle.
          </p>
        </motion.section>
      </main>
    </div>
  );
}

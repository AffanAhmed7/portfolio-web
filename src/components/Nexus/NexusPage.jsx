import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import './NexusPage.css';

export default function NexusPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nexus-page-container">
      <nav className="nexus-nav">
        <button className="nexus-back-btn" onClick={() => navigate('/')}>
          <FiArrowLeft /> Back to Portfolio
        </button>
      </nav>

      <main className="nexus-content">
        <motion.header 
          className="nexus-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="nexus-header-text">
            <h1 className="nexus-title">Nexus</h1>
            <p className="nexus-subtitle">Enterprise Task Management Platform</p>
          </div>
          <div className="nexus-meta">
            <div className="meta-item">
              <span className="meta-label">Live Deployment</span>
              <a href="https://nexus.example.com" target="_blank" rel="noopener noreferrer" className="meta-link">Nexus Platform</a>
            </div>
            <div className="meta-item">
              <span className="meta-label">Frontend</span>
              <a href="https://github.com/example/nexus-frontend" target="_blank" rel="noopener noreferrer" className="meta-link">GitHub - Frontend</a>
            </div>
            <div className="meta-item">
              <span className="meta-label">Backend</span>
              <a href="https://github.com/example/nexus-backend" target="_blank" rel="noopener noreferrer" className="meta-link">GitHub - Backend</a>
            </div>
          </div>
        </motion.header>

        <motion.section 
          className="nexus-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2>Project Overview</h2>
          <p>
            Nexus is a premium, enterprise-grade task management platform engineered for modern product development teams. Built from the ground up with a modern full-stack architecture, it combines a highly responsive, glassmorphic React frontend with a robust, scalable Node.js and Express backend. The application delivers a seamless workflow experience featuring real-time collaboration, interactive Kanban boards, advanced analytics, and comprehensive role-based access control.
          </p>
        </motion.section>

        <motion.section 
          className="nexus-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Key Technical Achievements</h2>
          <ul className="nexus-list">
            <li>
              <strong>Real-Time Synchronization:</strong> Engineered dual-channel WebSockets using Socket.io to push task updates, comments, and project mutations instantly across all connected clients, ensuring zero-latency collaboration without manual page refreshes.
            </li>
            <li>
              <strong>Advanced State & Data Management:</strong> Implemented Zustand for lightweight, global state management alongside TanStack React Query for highly efficient HTTP caching, data fetching, and background synchronization.
            </li>
            <li>
              <strong>Enterprise-Grade Security:</strong> Developed a robust authentication system utilizing short-lived JWT access tokens paired with secure, HTTP-only refresh tokens. Integrated Role-Based Access Control (RBAC) to securely manage permissions across Workspace Admins, Project Managers, and team members.
            </li>
            <li>
              <strong>Interactive UI & Analytics:</strong> Designed a sleek, glassmorphic dashboard featuring fluid drag-and-drop Kanban workflows (@hello-pangea/dnd) and dynamic data visualization charts (Recharts) to track team velocity, project progression, and workspace activity.
            </li>
            <li>
              <strong>Optimized Database Architecture:</strong> Leveraged Prisma ORM with PostgreSQL for type-safe database queries. Implemented a comprehensive database audit logging system to track every transaction, alongside a soft-delete pattern to protect against accidental data loss.
            </li>
          </ul>
        </motion.section>

        <motion.section 
          className="nexus-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Technology Stack</h2>
          <div className="nexus-stack-grid">
            <div className="stack-column">
              <h3>Frontend Architecture</h3>
              <ul>
                <li><strong>Core:</strong> React 19, TypeScript, Vite</li>
                <li><strong>State & Data:</strong> Zustand, TanStack React Query</li>
                <li><strong>Routing & Visuals:</strong> React Router v6, Framer Motion, Recharts, Lucide React</li>
                <li><strong>Styling:</strong> Vanilla CSS with comprehensive CSS custom properties (Responsive & Themed)</li>
              </ul>
            </div>
            <div className="stack-column">
              <h3>Backend Architecture</h3>
              <ul>
                <li><strong>Core:</strong> Node.js, Express.js, TypeScript</li>
                <li><strong>Database:</strong> PostgreSQL, Prisma ORM</li>
                <li><strong>Authentication:</strong> JSON Web Tokens (JWT), bcryptjs</li>
                <li><strong>Security & Network:</strong> Helmet, CORS, Socket.io (WebSockets)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="nexus-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Notable Features</h2>
          <ul className="nexus-list">
            <li><strong>Modern Control Center:</strong> A centralized dashboard providing at-a-glance workspace activity summaries, upcoming tasks, and quick-action widgets.</li>
            <li><strong>Hotkeys & Command Palettes:</strong> Built-in command menu (⌘K / Ctrl+K) and keyboard shortcuts for lightning-fast navigation, task creation, and high accessibility.</li>
            <li><strong>Global Full-Text Search:</strong> High-performance backend search indexes enabling instant data retrieval across projects, workspaces, and individual tasks.</li>
            <li><strong>Theme Customization:</strong> Native support for responsive Light and Dark modes, ensuring optimal usability across all devices (scaled perfectly down to mobile screens).</li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
}

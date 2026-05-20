import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import './VertexPage.css';

export default function VertexPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vertex-page-container">
      <nav className="vertex-nav">
        <button className="vertex-back-btn" onClick={() => navigate('/')}>
          <FiArrowLeft /> Back to Portfolio
        </button>
      </nav>

      <main className="vertex-content">
        <motion.header
          className="vertex-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="vertex-header-text">
            <h1 className="vertex-title">Vertex</h1>
            <p className="vertex-subtitle">Full-Stack E-Commerce Platform</p>
          </div>
          <div className="vertex-meta">
            <div className="meta-item">
              <span className="meta-label">Live Demo</span>
              <a href="https://vertex-frontend-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="meta-link">Vertex Alpha</a>
            </div>
            <div className="meta-item">
              <span className="meta-label">Frontend</span>
              <a href="https://github.com/AffanAhmed7/Vertex-frontend" target="_blank" rel="noopener noreferrer" className="meta-link">GitHub - Frontend</a>
            </div>
            <div className="meta-item">
              <span className="meta-label">Backend</span>
              <a href="https://github.com/AffanAhmed7/Vertex-backend" target="_blank" rel="noopener noreferrer" className="meta-link">GitHub - Backend</a>
            </div>
          </div>
        </motion.header>

        <motion.section
          className="vertex-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2>Executive Summary</h2>
          <p>
            <strong>Vertex</strong> is a production-grade, highly scalable e-commerce platform built to deliver a seamless shopping experience alongside a powerful administrative backend. Designed with modern software engineering principles, it leverages a React frontend powered by a high-performance Node.js/Express backend.
          </p>
          <p style={{ marginTop: '15px' }}>
            With advanced features ranging from real-time analytics and secure two-factor authentication to distributed background job queues, Vertex demonstrates a deep understanding of enterprise-level architecture, performance optimization, and secure API design.
          </p>
        </motion.section>

        <motion.section
          className="vertex-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Key Features & Business Logic</h2>

          <h3 className="vertex-subsection-title"> Immersive User Experience</h3>
          <ul className="vertex-list">
            <li><strong>Responsive & Animated UI:</strong> Built with <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong>, delivering a pixel-perfect, mobile-first experience with smooth, high-fidelity micro-interactions.</li>
            <li><strong>Advanced State Management:</strong> Utilizes <strong>Redux Toolkit</strong> for predictable and efficient global state management across complex checkout flows and shopping carts.</li>
          </ul>

          <h3 className="vertex-subsection-title"> Secure & Robust Authentication</h3>
          <ul className="vertex-list">
            <li><strong>Multi-Factor Authentication (MFA):</strong> Implements Two-Factor Authentication (2FA) and security questions to protect user accounts and sensitive payment information.</li>
            <li><strong>Role-Based Access Control (RBAC):</strong> Strict separation between <code>CUSTOMER</code> and <code>ADMIN</code> roles, ensuring secure access to sensitive endpoints and data.</li>
            <li><strong>Enterprise-grade Security:</strong> Secures API endpoints using <strong>JWT</strong>, <strong>bcrypt</strong> password hashing, <strong>Helmet</strong> for HTTP headers, and robust rate-limiting via <strong>Redis</strong> to prevent brute-force and DDoS attacks.</li>
          </ul>

          <h3 className="vertex-subsection-title"> Comprehensive Admin Dashboard</h3>
          <ul className="vertex-list">
            <li><strong>Real-Time Analytics:</strong> Interactive charts built with <strong>Recharts</strong> displaying daily sales snapshots, revenue tracking, and new user metrics.</li>
            <li><strong>Audit Logging:</strong> An automated <code>AuditLog</code> system that tracks every administrative action (e.g., product updates, order status changes) for strict accountability and compliance.</li>
            <li><strong>Dynamic Store Settings:</strong> Administrators can configure global settings such as shipping rates, free shipping thresholds, supported currencies, and low inventory alerts directly from the dashboard.</li>
          </ul>

          <h3 className="vertex-subsection-title"> High-Performance Backend Architecture</h3>
          <ul className="vertex-list">
            <li><strong>PostgreSQL & Prisma ORM:</strong> Highly relational database schema ensuring data integrity across users, orders, cart items, multiple addresses, and reviews.</li>
            <li><strong>Asynchronous Task Queues:</strong> Utilizes <strong>BullMQ</strong> and <strong>Redis</strong> to offload heavy background tasks, ensuring the main event loop remains unblocked during operations like sending transactional emails or processing images.</li>
            <li><strong>Optimized Media Processing:</strong> Integrates <strong>Multer</strong> and <strong>Sharp</strong> for on-the-fly image uploading and optimization, guaranteeing fast load times for product galleries.</li>
            <li><strong>Real-Time Communication:</strong> Employs <strong>Socket.io</strong> for real-time notifications, updating users on order status changes (Created ➝ Paid ➝ Shipped ➝ Delivered) instantly.</li>
            <li><strong>Transactional Emails:</strong> Beautiful, responsive emails generated via <strong>MJML</strong> and <strong>Handlebars</strong>, dispatched reliably through <strong>Nodemailer</strong>.</li>
          </ul>
        </motion.section>

        <motion.section
          className="vertex-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Technology Stack</h2>
          <div className="vertex-stack-grid">
            <div className="stack-column">
              <h3>Frontend Architecture</h3>
              <ul>
                <li><strong>Core:</strong> React 18, TypeScript, Vite</li>
                <li><strong>State & Routing:</strong> Redux Toolkit, React Router DOM</li>
                <li><strong>Styling & Anim:</strong> Tailwind CSS, Framer Motion, clsx, tailwind-merge</li>
                <li><strong>Data Viz:</strong> Recharts</li>
                <li><strong>Hosting:</strong> Vercel</li>
              </ul>
            </div>
            <div className="stack-column">
              <h3>Backend Architecture</h3>
              <ul>
                <li><strong>Core:</strong> Node.js, Express.js, TypeScript</li>
                <li><strong>Database:</strong> PostgreSQL, Prisma ORM</li>
                <li><strong>Caching & Queues:</strong> Redis (ioredis), BullMQ</li>
                <li><strong>Security:</strong> JWT, bcrypt, Helmet, Express Rate Limit, Firebase Admin</li>
                <li><strong>Media Handling:</strong> Multer, Sharp</li>
                <li><strong>Hosting:</strong> Render (API) & Supabase (Database)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="vertex-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Architecture Highlights </h2>
          <ul className="vertex-list">
            <li><strong>Scalability:</strong> The decoupling of the frontend and backend, combined with Redis-backed background job processing, ensures the application can handle heavy traffic spikes without degraded performance.</li>
            <li><strong>Maintainability:</strong> The entire full-stack codebase is strictly typed with <strong>TypeScript</strong>. The backend adheres to clean architecture principles, utilizing <strong>Zod</strong> for strict runtime request validation to prevent malformed data from reaching the database.</li>
            <li><strong>Production-Readiness:</strong> Features like structured JSON logging (<strong>Pino</strong>), comprehensive audit trails, robust rate limiting, and centralized store configuration highlight a maturity far beyond standard portfolio projects.</li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
}

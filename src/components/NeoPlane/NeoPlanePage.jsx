import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import './NeoPlanePage.css';

export default function NeoPlanePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neoplane-page-container">
      <nav className="neoplane-nav">
        <button className="neoplane-back-btn" onClick={() => navigate('/')}>
          <FiArrowLeft /> Back to Portfolio
        </button>
      </nav>

      <main className="neoplane-content">
        <motion.header 
          className="neoplane-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="neoplane-header-text">
            <h1 className="neoplane-title">NeoPlane</h1>
            <p className="neoplane-subtitle">Full-Stack Real-Time Communication Platform</p>
          </div>
          <div className="neoplane-meta">
            <div className="meta-item">
              <span className="meta-label">Live Demo</span>
              <a href="https://neoplane-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="meta-link">NeoPlane App</a>
            </div>
            <div className="meta-item">
              <span className="meta-label">Frontend</span>
              <a href="https://github.com/AffanAhmed7/neoplane-frontend" target="_blank" rel="noopener noreferrer" className="meta-link">GitHub - Frontend</a>
            </div>
            <div className="meta-item">
              <span className="meta-label">Backend</span>
              <a href="https://github.com/AffanAhmed7/neoplane-backend" target="_blank" rel="noopener noreferrer" className="meta-link">GitHub - Backend</a>
            </div>
          </div>
        </motion.header>

        <motion.section 
          className="neoplane-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2>Project Overview</h2>
          <p>
            <strong>NeoPlane</strong> is a robust, production-ready real-time communication platform designed to mimic the core functionalities of industry-leading chat applications like Discord and Slack. Built with a modern, high-performance tech stack, it supports seamless real-time messaging, sophisticated user presence, multimedia file sharing, and complex channel/group management.
          </p>
          <p style={{ marginTop: '15px' }}>
            This project demonstrates strong capabilities in full-stack architecture, distributed systems (real-time events), database design, security best practices, and responsive, accessible UI/UX development.
          </p>
        </motion.section>

        <motion.section 
          className="neoplane-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Key Features</h2>
          
          <h3 className="neoplane-subsection-title">Real-Time Engine & Messaging</h3>
          <ul className="neoplane-list">
            <li><strong>Instant Communication:</strong> Powered by Socket.io, enabling ultra-low latency message delivery for Direct Messages (DMs), Group Chats, and Server Channels.</li>
            <li><strong>Advanced Message Capabilities:</strong> Support for thread replies, message editing, soft-deletions, and pinning important messages.</li>
            <li><strong>Interactive Elements:</strong> Real-time emoji reactions, typing indicators, and granular read receipts.</li>
            <li><strong>Presence System:</strong> Live status tracking (Online, Idle, Do Not Disturb, Offline) along with custom status messages.</li>
          </ul>

          <h3 className="neoplane-subsection-title">User & Community Management</h3>
          <ul className="neoplane-list">
            <li><strong>Hierarchical Workspaces:</strong> Creation of public/private channels and categories, complete with role-based participant management (Admin/Member).</li>
            <li><strong>Social Graph:</strong> Comprehensive friend system with real-time send/accept/decline friend requests and server invite links.</li>
            <li><strong>Notification Center:</strong> Real-time push notifications and unread badge counters.</li>
          </ul>

          <h3 className="neoplane-subsection-title">Security, Auth & Cloud Storage</h3>
          <ul className="neoplane-list">
            <li><strong>Hybrid Authentication:</strong> Secure user authentication utilizing both Firebase Auth (OAuth/Google) and custom JWT-based email/password login with secure hashing (bcrypt).</li>
            <li><strong>Cloud Media Management:</strong> Seamless integration with AWS S3 via presigned URLs for secure, scalable image and file uploads (user avatars, channel banners, message attachments).</li>
            <li><strong>API Protection:</strong> Implemented Express Rate Limiting and strict schema validation using Zod to prevent abuse and ensure data integrity.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="neoplane-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Technical Architecture</h2>
          <div className="neoplane-stack-grid">
            <div className="stack-column">
              <h3>Frontend (Client-Side)</h3>
              <ul>
                <li><strong>Framework:</strong> React 19 (with Hooks) + TypeScript + Vite for ultra-fast builds.</li>
                <li><strong>State Management:</strong> Zustand for lightweight, predictable global state, and React Query for caching, background synchronization, and server-state management.</li>
                <li><strong>Styling & UI:</strong> Tailwind CSS v4 for highly responsive, utility-first styling, paired with Framer Motion for fluid, native-feeling micro-animations and page transitions.</li>
                <li><strong>Real-Time Client:</strong> socket.io-client for persistent WebSocket connections.</li>
                <li><strong>Hosting:</strong> Deployed globally on Vercel with CI/CD integration.</li>
              </ul>
            </div>
            <div className="stack-column">
              <h3>Backend (Server-Side)</h3>
              <ul>
                <li><strong>Runtime & Framework:</strong> Node.js + Express + TypeScript, structured cleanly using modern RESTful conventions.</li>
                <li><strong>Database ORM:</strong> Prisma for type-safe database access, schema migrations, and complex relational querying.</li>
                <li><strong>Database:</strong> PostgreSQL (hosted on Supabase) utilizing connection pooling for high concurrency.</li>
                <li><strong>Real-Time Server:</strong> Socket.io handling room-based broadcasting, presence events, and bidirectional communication.</li>
                <li><strong>Cloud Services:</strong> AWS SDK (S3) for asset storage and Firebase Admin SDK.</li>
                <li><strong>Hosting:</strong> Deployed as a scalable web service on Render.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="neoplane-section glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Engineering Highlights</h2>
          <ul className="neoplane-list">
            <li><strong>Scalable Database Design:</strong> Engineered a complex, highly-normalized PostgreSQL schema managing polymorphic relationships between Users, Conversations, Messages, Reactions, and Read Receipts.</li>
            <li><strong>Optimized Performance:</strong> Minimized database hits by leveraging React Query caching on the frontend and strategic indexing within the Prisma schema on the backend.</li>
            <li><strong>Clean Code Practices:</strong> Maintained strict TypeScript typings across the full stack, utilized Zod for runtime type safety, and structured the backend with a clear separation of concerns (Routes, Controllers, Services).</li>
            <li><strong>Production-Ready Deployment:</strong> Successfully configured a multi-tier production environment, handling environment-variable secrets, CORS policies, WebSocket secure (WSS) routing, and serverless edge caching.</li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
}

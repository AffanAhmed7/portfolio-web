import React from 'react';
import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem';
import './Experience.css';

const EXPERIENCE_DATA = [
  {
    period: "2024 — Present",
    role: "Full-Stack Engineer",
    org: "Independent Projects",
    overview: "Designed and built high-performance web systems with a focus on real-time infrastructure, distributed job scheduling, and secure sandboxed client modules.",
    contributions: [
      "Developed a low-latency collaborative communication engine (NeoPlane) with 80% asset compression workflows using AWS S3 + Sharp.",
      "Engineered multi-user collaborative Kanban workspace boards (Nexus) with optimistic UI updates and robust role-based access validation.",
      "Architected transactional distributed task-queue engines (E-Commerce) that offload heavy background analytical processes to BullMQ queues.",
      "Created a low-overhead runtime isolated extension sandbox (Web Debugger) preventing page style interference using Shadow DOM."
    ],
    tech: ["React", "Node.js", "Socket.io", "TypeScript", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Shadow DOM", "AWS S3"]
  },
  {
    period: "Jul 2025 — Sep 2025",
    role: "Intern",
    org: "Federal Board of Revenue (FBR)",
    overview: "Processed and validated administrative financial records to support compliance reporting audits and minimize structural database anomalies.",
    contributions: [
      "Processed and validated large-scale taxation datasets, ensuring consistency across structured financial records and reports.",
      "Analyzed complex tabular datasets to identify discrepancies and backed internal compliance analytics reporting.",
      "Collaborated with administrative teams to streamline data-cleansing operations and reduce manual data management bottlenecks."
    ],
    tech: ["Excel", "SQL", "Data Validation", "Financial Systems", "Administrative Reporting"]
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Experience() {
  return (
    <section className="exp-section" id="experience" aria-labelledby="exp-heading">
      <div className="exp-container">
        
        {/* Header */}
        <motion.div 
          className="exp-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="exp-heading">Experience</h2>
          <span className="exp-subtext">Execution history</span>
        </motion.div>

        {/* Structured Log Blocks Container */}
        <motion.div 
          className="exp-log-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {EXPERIENCE_DATA.map((entry, idx) => (
            <ExperienceItem 
              key={idx} 
              entry={entry} 
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

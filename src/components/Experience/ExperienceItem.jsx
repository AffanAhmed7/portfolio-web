import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function ExperienceItem({ entry }) {
  return (
    <motion.div 
      className="exp-block"
      variants={itemVariants}
    >
      {/* Dynamic Hover Mondrian Accent Bar on Left Edge */}
      <div className="exp-mondrian-bar" aria-hidden="true">
        <div className="exp-bar-red" />
        <div className="exp-bar-blue" />
        <div className="exp-bar-yellow" />
      </div>

      {/* Top Row: System Record Metadata */}
      <div className="exp-metadata">
        <span className="exp-meta-period">[{entry.period}]</span>
        <span className="exp-meta-role">{entry.role}</span>
        <span className="exp-meta-divider">—</span>
        <span className="exp-meta-org">{entry.org}</span>
      </div>

      {/* Thin Horizontal Line Divider */}
      <div className="exp-divider-line" />

      {/* Content Body */}
      <div className="exp-body">
        {/* Overview */}
        <p className="exp-overview">{entry.overview}</p>

        {/* Contributions */}
        <ul className="exp-contributions">
          {entry.contributions.map((bullet, idx) => (
            <li key={idx} className="exp-bullet">
              {bullet}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="exp-tech-stack">
          {entry.tech.join(' · ')}
        </div>
      </div>
    </motion.div>
  );
}

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectDetail({ project, onClose }) {
  // Lock background scroll when case study is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div 
      className="project-detail-overlay"
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Mondrian Decorative Accent */}
      <div className="detail-mondrian">
        <div className="detail-mondrian-red"></div>
        <div className="detail-mondrian-blue"></div>
        <div className="detail-mondrian-yellow"></div>
      </div>

      <button className="detail-close" onClick={onClose}>
        [ ESC ] CLOSE CASE STUDY
      </button>

      <div className="detail-content">
        <header className="detail-header">
          <motion.h2 layoutId={`title-${project.id}`} className="detail-title">
            {project.name}
          </motion.h2>
          <motion.p layoutId={`desc-${project.id}`} className="detail-short-desc">
            {project.shortDesc}
          </motion.p>
          <div className="detail-links">
            {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live System &rarr;</a>}
            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Source Code &rarr;</a>}
          </div>
        </header>

        <section className="detail-section">
          <h3>01 / The Problem</h3>
          <p>{project.problem}</p>
        </section>

        <section className="detail-section">
          <h3>02 / The Approach</h3>
          <p>{project.approach}</p>
        </section>

        <section className="detail-section">
          <h3>03 / Architecture</h3>
          <div className="architecture-block">
            {project.architecture}
          </div>
        </section>

        <section className="detail-section">
          <h3>04 / Key Features</h3>
          <ul className="features-list">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h3>05 / Technical Challenges</h3>
          <p>{project.challenges}</p>
        </section>

        <section className="detail-section">
          <h3>06 / Outcome</h3>
          <p>{project.outcome}</p>
        </section>
      </div>
    </motion.div>
  );
}

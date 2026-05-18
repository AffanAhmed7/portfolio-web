import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div 
      className="project-card"
      layoutId={`project-${project.id}`}
      onClick={onClick}
    >
      <div className="card-top">
        <motion.h3 layoutId={`title-${project.id}`} className="card-title">
          {project.name}
        </motion.h3>
        <span className="card-tag">{project.tag}</span>
      </div>
      
      <div className="card-middle">
        <motion.p layoutId={`desc-${project.id}`} className="card-desc">
          {project.shortDesc}
        </motion.p>
      </div>

      <div className="card-bottom">
        <div className="card-stack">
          {project.stack.join(' · ')}
        </div>
        <div className="card-action">
          View Case Study &rarr;
        </div>
      </div>
    </motion.div>
  );
}

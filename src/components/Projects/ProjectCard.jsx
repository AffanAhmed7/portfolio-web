import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div 
      className="project-card"
      layoutId={`project-${project.id}`}
      onClick={onClick}
    >
      {/* Background Image with Dark Grayscale Overlays */}
      <div 
        className="card-image-bg" 
        style={{ 
          backgroundImage: `url(${project.image})`,
          backgroundSize: project.bgSize || 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} 
      />
      
      {/* Gradient Mask Overlay */}
      <div className="card-overlay" />

      {/* Card Content Overlay */}
      <div className="card-content">
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
      </div>
    </motion.div>
  );
}

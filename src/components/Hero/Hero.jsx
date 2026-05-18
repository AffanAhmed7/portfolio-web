import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiUpwork, SiFiverr, SiLeetcode } from 'react-icons/si';
import './Hero.css';

/* ─── Animation variants ──────────────────────────────────────────── */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

/* ─── Social Links ────────────────────────────────────────────────── */
const SOCIALS = [
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com', colorClass: 'social-github' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com', colorClass: 'social-linkedin' },
  { name: 'Gmail', icon: <SiGmail />, url: 'mailto:contact@example.com', colorClass: 'social-gmail' },
  { name: 'Upwork', icon: <SiUpwork />, url: 'https://upwork.com', colorClass: 'social-upwork' },
  { name: 'Fiverr', icon: <SiFiverr />, url: 'https://fiverr.com', colorClass: 'social-fiverr' },
  { name: 'LeetCode', icon: <SiLeetcode />, url: 'https://leetcode.com', colorClass: 'social-leetcode' },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero Section">
      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Name */}
        <motion.h1 className="hero__name" variants={fadeUp}>
          Affan Ahmed Khan
        </motion.h1>

        {/* Title */}
        <motion.p className="hero__title" variants={fadeUp}>
          Full-Stack Engineer
        </motion.p>

        {/* Divider */}
        <motion.div className="hero__divider" variants={fadeIn} aria-hidden="true" />

        {/* Tagline */}
        <motion.p className="hero__tagline" variants={fadeUp}>
          I design and build scalable, real-time web systems&nbsp;with precision.
        </motion.p>

        {/* Social Icons (Replacing Frameworks text) */}
        <motion.div className="hero__socials" variants={fadeUp} aria-label="Social links">
          {SOCIALS.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer" 
              className={`hero__social-icon ${social.colorClass}`}
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div className="hero__ctas" variants={fadeUp}>
          <a href="#projects" className="btn btn--primary" id="cta-projects">
            <span>View Projects</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn--secondary" id="cta-contact">
            <span>Contact</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

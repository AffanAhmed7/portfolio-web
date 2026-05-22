import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiUpwork, SiFiverr } from 'react-icons/si';
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
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/AffanAhmed7', colorClass: 'social-github' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/affanahmedkhan34', colorClass: 'social-linkedin' },
  { name: 'Gmail', icon: <SiGmail />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=affanahmedkhan34@gmail.com', colorClass: 'social-gmail' },
  { name: 'Upwork', icon: <SiUpwork />, url: 'https://upwork.com', colorClass: 'social-upwork' },
  { name: 'Fiverr', icon: <SiFiverr />, url: 'https://www.fiverr.com/s/o85woLg', colorClass: 'social-fiverr' },
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

      {/* Stylized Minimalist Mountains Backdrop */}
      <div className="hero__mountains" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          {/* Back Mountain Ridge */}
          <motion.path 
            d="M0,220 L250,90 L550,250 L800,60 L1100,270 L1300,110 L1440,240 L1440,320 L0,320 Z" 
            fill="rgba(255, 255, 255, 0.02)"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Middle Mountain Ridge */}
          <motion.path 
            d="M0,260 L180,170 L400,290 L620,140 L900,300 L1150,180 L1350,280 L1440,200 L1440,320 L0,320 Z" 
            fill="rgba(255, 255, 255, 0.04)"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Front Mountain Ridge */}
          <motion.path 
            d="M0,290 L300,210 L600,310 L850,230 L1100,315 L1280,240 L1440,300 L1440,320 L0,320 Z" 
            fill="rgba(255, 255, 255, 0.07)"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="hero__mountains-fade" />
      </div>
    </section>
  );
}

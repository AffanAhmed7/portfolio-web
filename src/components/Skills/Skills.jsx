import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiTailwindcss, SiSocketdotio, SiRedis, SiPrisma, SiPython, SiFirebase } from 'react-icons/si';
import './Skills.css';

/* ─── Animation variants ──────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Framework data for Mondrian and Marquee ─────────────────────── */
const frameworks = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Socket.io', icon: <SiSocketdotio /> },
  { name: 'Redis', icon: <SiRedis /> },
  { name: 'Prisma', icon: <SiPrisma /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Firebase', icon: <SiFirebase /> },
];

export default function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      
      {/* ── Header ── */}
      <motion.div
        className="skills__header"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
      >
        <motion.h2 className="skills__title" id="skills-heading" variants={fadeUp}>
          Frameworks & Technologies
        </motion.h2>
        <motion.p className="skills__subtitle" variants={fadeUp}>
          The building blocks of my engineering stack.
        </motion.p>
      </motion.div>

      {/* ── Mondrian Grid ── */}
      <motion.div 
        className="mondrian-skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Cell 1: Large Red */}
        <div className="sk-cell sk-red span-c-2 span-r-2">
          <div className="sk-icon-wrapper"><FaReact /></div>
          <span className="sk-label">React</span>
        </div>
        
        {/* Cell 2: White Horizontal */}
        <div className="sk-cell sk-white span-c-2">
          <div className="sk-icon-wrapper"><SiTypescript /></div>
          <span className="sk-label">TypeScript</span>
        </div>
        
        {/* Cell 3: Tall Blue */}
        <div className="sk-cell sk-blue span-r-3">
          <div className="sk-icon-wrapper"><FaNodeJs /></div>
          <span className="sk-label">Node.js</span>
        </div>
        
        {/* Cell 4: Yellow */}
        <div className="sk-cell sk-yellow">
          <div className="sk-icon-wrapper"><SiSocketdotio /></div>
          <span className="sk-label">Socket.io</span>
        </div>
        
        {/* Cell 5: Dark */}
        <div className="sk-cell sk-dark">
          <div className="sk-icon-wrapper"><SiPrisma /></div>
          <span className="sk-label">Prisma</span>
        </div>

        {/* Cell 6: Dark */}
        <div className="sk-cell sk-dark">
          <div className="sk-icon-wrapper"><SiRedis /></div>
          <span className="sk-label">Redis</span>
        </div>

        {/* Cell 7: Wide White */}
        <div className="sk-cell sk-white span-c-2">
          <div className="sk-icon-wrapper"><SiPostgresql /></div>
          <span className="sk-label">PostgreSQL</span>
        </div>
        
        {/* Cell 8: Red small */}
        <div className="sk-cell sk-red">
          <div className="sk-icon-wrapper"><FaAws /></div>
          <span className="sk-label">AWS</span>
        </div>
        
        {/* Cell 9: Wide Blue */}
        <div className="sk-cell sk-blue span-c-2">
          <div className="sk-icon-wrapper"><SiTailwindcss /></div>
          <span className="sk-label">Tailwind CSS</span>
        </div>
        
        {/* Cell 10: Yellow */}
        <div className="sk-cell sk-yellow">
          <div className="sk-icon-wrapper"><SiPython /></div>
          <span className="sk-label">Python</span>
        </div>

        {/* Cell 11: Dark (fills remaining 2 cols) */}
        <div className="sk-cell sk-dark span-c-2">
          <div className="sk-icon-wrapper"><SiFirebase /></div>
          <span className="sk-label">Firebase</span>
        </div>
      </motion.div>

      {/* ── Marquee ── */}
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Double the list to create seamless infinite loop */}
          {[...frameworks, ...frameworks].map((fw, idx) => (
            <div className="marquee-item" key={idx}>
              <span className="marquee-icon">{fw.icon}</span>
              <span className="marquee-name">{fw.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

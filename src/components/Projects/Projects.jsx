import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 'neoplane',
    name: 'NeoPlane',
    tag: 'Real-Time System',
    shortDesc: 'Low-latency collaborative messaging platform with optimized media processing pipeline.',
    stack: ['React', 'Node.js', 'Socket.io', 'Prisma', 'PostgreSQL', 'AWS S3'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    problem: 'Polling networks fail to scale and maintain sub-millisecond updates under high-density, real-time communications. Multi-user systems require instantaneous message routing, reliable sync states, and minimal round-trip latency to prevent connection bottlenecks under stress.',
    approach: 'I engineered a custom bidirectional pipeline leveraging Socket.io for low-latency delivery. To prevent backend thread blocks during image and file transmission, I separated the media processing engine using Sharp to compress assets on the fly before pushing them to AWS S3 storage buckets.',
    architecture: `Client UI (React / Zustand)
       │ (Socket.io Event Stream)
       ▼
┌───────────────────────────────────────────┐
│     Socket.io Event-Routing Gateway       │
└───────────────────────────────────────────┘
   │                      │
   │ (REST Upload Pipeline)│ (Database Handlers)
   ▼                      ▼
┌──────────────────┐   ┌────────────────────┐
│ AWS S3 + Sharp   │   │ Express + Prisma   │
│ Media Pipeline   │   │ PostgreSQL Store   │
└──────────────────┘   └────────────────────┘`,
    features: [
      'Engineered a low-latency messaging system using Socket.io with efficient event broadcasting and connection handling.',
      'Designed scalable backend (Express + Prisma) with JWT authentication and optimized relational queries.',
      'Built media pipeline with AWS S3 + Sharp for upload, compression, and retrieval workflows.',
      'Optimized client performance using Zustand + TanStack Query, reducing redundant API calls.'
    ],
    challenges: 'Preventing client-side performance degradation during massive message inflows and managing thread blocking on image uploads.',
    outcome: 'Created a snappy, robust real-time engine with vector-scaled asset compression, leading to an 80% reduction in static load sizes and smooth socket lifecycle routing.',
    liveLink: 'https://neoplane.example.com',
    githubLink: 'https://github.com/example/neoplane'
  },
  {
    id: 'nexus',
    name: 'Nexus',
    tag: 'Collaboration Platform',
    shortDesc: 'Enterprise workspace with dynamic Kanban boards, live presence, and role permissions.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop',
    problem: 'Managing project workflows across dozens of active client channels requires precise state orchestration. Without active locking and fast authorization checks, concurrent drag-and-drop operations on a digital board cause conflict anomalies and stale data rendering.',
    approach: 'I constructed a real-time Kanban management platform running on TypeScript and Prisma ORM. The system dynamically validates board operations through Socket.io and updates collaborative states using TanStack Query queries combined with local optimistic UI modifications.',
    architecture: `Client Board (React / TS)
       │ (State Mutations & Drag Actions)
       ▼
┌───────────────────────────────────────────┐
│       Socket.io Broadcast Controller      │
└───────────────────────────────────────────┘
       │ (Authorization Check & Operations)
       ▼
┌───────────────────────────────────────────┐
│    Node.js API (Prisma Client Wrapper)    │
└───────────────────────────────────────────┘
       │ (Structured Storage)
       ▼
┌───────────────────────────────────────────┐
│           PostgreSQL DB Database          │
└───────────────────────────────────────────┘`,
    features: [
      'Developed real-time Kanban system with live updates, presence tracking, and activity streams.',
      'Implemented RBAC with JWT + refresh tokens for secure multi-user environments.',
      'Leveraged React Query + Zustand for optimized state management with optimistic UI updates.',
      'Built analytics dashboards and scalable features including pagination and audit logs.'
    ],
    challenges: 'Synchronizing multi-user layout mutations on drag-and-drop moves to avoid database consistency violations.',
    outcome: 'Built an enterprise task layout featuring instant client changes, absolute permission safety, and low-latency rendering across all browser sessions.',
    liveLink: 'https://nexus.example.com',
    githubLink: 'https://github.com/example/nexus'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Engine',
    tag: 'Scalable Backend',
    shortDesc: 'High-throughput REST API with automated job queues and optimized analytics processing.',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'BullMQ'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    problem: 'Processing high-frequency transactional data alongside complex analytical metrics blocks standard API query channels, triggering high latency overhead and leading to deadlocks during high-demand inventory shifts.',
    approach: 'I designed a highly scalable transactional REST API utilizing Redis caching and a distributed BullMQ task engine. Long-running computational processes (like computing storewide sales KPIs) were offloaded into asynchronous background queues.',
    architecture: `Client / Administrative Dashboard
       │ (REST APIs requests)
       ▼
┌───────────────────────────────────────────┐
│        TypeScript Express Router          │
└───────────────────────────────────────────┘
       │                      │
       │ (Async Job Push)     │ (Cache Queries)
       ▼                      ▼
┌──────────────────┐   ┌────────────────────┐
│  Redis + BullMQ  │   │  PostgreSQL (DB)   │
│ Asynchronous Job │   │ Optimized Queries  │
└──────────────────┘   └────────────────────┘`,
    features: [
      'Architected high-throughput REST API handling complex relational business data.',
      'Implemented async job pipelines using Redis + BullMQ for automation workflows.',
      'Designed analytics engine computing KPIs using optimized queries and snapshot strategies.'
    ],
    challenges: 'Structuring efficient analytics computation without exhausting memory resources during heavy query aggregations.',
    outcome: 'Delivered an enterprise-grade backend setup processing thousands of background automated jobs per second with snapshot analytics computed under 10ms.',
    liveLink: 'https://engine.example.com',
    githubLink: 'https://github.com/example/ecommerce-engine'
  },
  {
    id: 'debugger',
    name: 'Web Debugger',
    tag: 'Developer Tool',
    shortDesc: 'Low-overhead browser sandbox extension for runtime audits and visual interaction replay.',
    stack: ['TypeScript', 'Chrome APIs', 'Shadow DOM', 'rrweb'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    problem: 'Web developers debugging complex runtime environments often struggle to replicate rare styling layout crashes or performance regressions because external audit code leaks or clashes with target site stylesheet configurations.',
    approach: 'I engineered a runtime debugger extension leveraging Chrome APIs. The debugger UI panel is safely isolated inside a Shadow DOM, preventing target web page styles from leaking in. I integrated rrweb to reconstruct high-fidelity, frame-perfect visuals of complex user session errors.',
    architecture: `Target Web Browser Environment
       │ (Script Injection & UI overlay)
       ▼
┌───────────────────────────────────────────┐
│     Shadow DOM Container (Isolated UI)     │
└───────────────────────────────────────────┘
       │ (DOM Mutation Streams)
       ▼
┌───────────────────────────────────────────┐
│       rrweb Event Buffer & Replayer       │
└───────────────────────────────────────────┘
       │ (Audit Diagnostics)
       ▼
┌───────────────────────────────────────────┐
│   Performance, A11y, CSS Audit Engine     │
└───────────────────────────────────────────┘`,
    features: [
      'Built browser extension for runtime audits (performance, accessibility, CSS conflicts).',
      'Used Shadow DOM for UI isolation and safe DOM injection without style interference.',
      'Integrated rrweb session replay for debugging complex user interaction flows.'
    ],
    challenges: 'Avoiding page layout disruptions during overlay injection and maintaining high-speed frame recording without thread lagging.',
    outcome: 'Delivered a developer extension capable of recording full interaction logs with zero performance impact, resolving cross-site CSS leakage issues.',
    liveLink: 'https://debugger.example.com',
    githubLink: 'https://github.com/example/web-debugger'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  // Close case study on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Slider Navigation Buttons scroll logic
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Calculate dynamic card width based on active width of the slider viewport
    const containerWidth = container.offsetWidth;
    const cardWidth = containerWidth * 0.5; // calc(50% - 20px) means card width is 50%
    const gap = 40; // Gap is 40px
    const scrollAmount = direction === 'next' ? cardWidth + gap : -(cardWidth + gap);

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="projects-section">
      <div className="projects-header-wrapper">
        <div className="projects-header">
          <h2>Projects</h2>
          <div className="projects-subtext">Systems I’ve designed and built</div>
        </div>
      </div>

      <div className="projects-slider-wrapper">
        {/* Previous / Next Arrow Controls positioned absolutely over slider */}
        <div className="slider-nav">
          <button 
            className="slider-btn" 
            onClick={() => handleScroll('prev')} 
            aria-label="Scroll Left"
          >
            <FiArrowLeft />
          </button>
          <button 
            className="slider-btn" 
            onClick={() => handleScroll('next')} 
            aria-label="Scroll Right"
          >
            <FiArrowRight />
          </button>
        </div>

        <div className="projects-scroll-container" ref={scrollContainerRef}>
          {PROJECTS_DATA.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

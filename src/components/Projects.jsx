import React, { useRef } from 'react';
import { projectSlots } from '../data/portfolioData';
import { Sparkles, PlusCircle } from 'lucide-react';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  // Rauno/Linear mouse spotlight tracking
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="project-spotlight-card"
    >
      <div className="card-spotlight-glow"></div>

      <div className="card-top-meta">
        <span className="card-index mono">0{index + 1}</span>
        <span className="card-status-pill">
          <span className="dot"></span>
          <span>Ready for Input</span>
        </span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-subtitle">{project.subtitle}</p>
        <p className="card-description">{project.description}</p>
      </div>

      <div className="card-tags-row">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="project-tag mono">{tag}</span>
        ))}
      </div>

      <div className="card-actions-bar">
        <span className="card-action-hint">
          <PlusCircle size={13} className="text-secondary" />
          <span>Will feature live site & repository</span>
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section-block" id="projects">
      <div className="section-header">
        <span className="section-badge mono">PORTFOLIO WORK</span>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-desc">
          A showcase of full stack web applications, distributed backend services, and protocol infrastructure.
        </p>
      </div>

      {/* Ready Banner */}
      <div className="projects-ready-banner">
        <div className="banner-left">
          <Sparkles size={16} className="text-emerald" />
          <div>
            <h4 className="banner-heading">Ready to Populate Your Works</h4>
            <p className="banner-text">
              The interface and card geometry are primed. As soon as you share your project names, URLs, and descriptions, they will seamlessly anchor here.
            </p>
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="projects-grid">
        {projectSlots.map((slot, index) => (
          <ProjectCard key={slot.id} project={slot} index={index} />
        ))}
      </div>
    </section>
  );
}

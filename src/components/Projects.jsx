import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/portfolioData';
import {
  ExternalLink, Maximize2, X, Globe, ZoomIn, ZoomOut, RotateCcw
} from 'lucide-react';
import { sound } from '../utils/sound';

function ProjectCard({ project, onOpenLightbox }) {
  const cardRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mouse spotlight tracking
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const currentImage = project.images && project.images.length > 1
    ? project.images[activeImageIndex]
    : project.image;

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="project-card-compact"
      style={{
        '--project-accent': project.accentColor || '#10b981',
        '--project-glow': project.accentGlow || 'rgba(16, 185, 129, 0.12)'
      }}
    >
      <div className="card-spotlight-glow"></div>

      {/* Visual Showcase (Left/Top) */}
      <div className="compact-visual-frame">
        <div className="compact-mockup-header">
          <div className="compact-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="compact-url-pill mono">
            <span className="lock-icon">🔒</span>
            <span className="url-text">{project.liveUrl ? project.liveUrl.replace('https://', '') : 'protocol.on-chain'}</span>
          </div>

          {/* Asset toggle for bitfund */}
          {project.images && project.images.length > 1 ? (
            <div className="compact-toggle-group">
              {project.imageLabels.map((lbl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`toggle-tab-btn mono ${activeImageIndex === idx ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playTick();
                    setActiveImageIndex(idx);
                  }}
                >
                  {lbl.split(' ')[0]}
                </button>
              ))}
            </div>
          ) : (
            <button
              type="button"
              className="compact-zoom-trigger mono"
              onClick={() => onOpenLightbox(project, activeImageIndex)}
              title="Inspect asset in fullscreen Lightbox"
            >
              <Maximize2 size={11} />
              <span>Zoom</span>
            </button>
          )}
        </div>

        <div
          className="compact-image-viewport"
          onClick={() => onOpenLightbox(project, activeImageIndex)}
          role="button"
          tabIndex={0}
          title="Click to expand high-resolution asset in Lightbox"
        >
          <img
            src={currentImage}
            alt={`${project.title} - ${project.subtitle}`}
            className="compact-project-img"
            loading="lazy"
          />
          <div className="compact-viewport-curtain">
            <span className="curtain-pill mono">
              <Maximize2 size={12} />
              <span>Inspect</span>
            </span>
          </div>
        </div>
      </div>

      {/* Brief Information & Copy (Right/Bottom) */}
      <div className="compact-info-pane">
        <div className="compact-meta-row">
          <span className="compact-index mono">0{project.number.replace('0', '')}</span>
          <span className="compact-eco-badge">
            <span className="eco-pulse-dot" style={{ background: project.accentColor }}></span>
            <span>{project.ecosystem}</span>
          </span>
          <span className="compact-status-chip mono">{project.status}</span>
        </div>

        <div className="compact-title-group">
          <h3 className="compact-title">{project.title}</h3>
          <p className="compact-subtitle">{project.subtitle}</p>
        </div>

        {/* User's Exact Brief Description */}
        <p className="compact-description">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="compact-tech-pills">
          {project.techStack.slice(0, 5).map((tech, idx) => (
            <span key={idx} className="tech-pill mono">
              {tech}
            </span>
          ))}
        </div>

        {/* Direct Action Links */}
        <div className="compact-actions-row">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-compact-live"
              onClick={() => sound.playClick()}
              style={{ background: project.accentColor }}
            >
              <Globe size={13} />
              <span>Live Protocol</span>
              <ExternalLink size={12} />
            </a>
          )}

          <button
            type="button"
            className="btn-compact-inspect"
            onClick={() => onOpenLightbox(project, activeImageIndex)}
          >
            <Maximize2 size={13} />
            <span>High-Res View</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [lightboxData, setLightboxData] = useState(null); // { project, imageIndex }
  const [zoomLevel, setZoomLevel] = useState(1);

  const filters = [
    { id: 'all', label: 'All (5)' },
    { id: 'veria', label: 'VERIA' },
    { id: 'trepa', label: 'Trepa' },
    { id: 'bitfund', label: 'bitfund' },
    { id: 'bima', label: 'BIMA' },
    { id: 'skillreceipt', label: 'SkillReceipt' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter((p) => p.id === selectedFilter);

  const handleOpenLightbox = (project, imageIndex = 0) => {
    sound.playClick();
    setZoomLevel(1);
    setLightboxData({ project, imageIndex });
  };

  const handleCloseLightbox = () => {
    sound.playClick();
    setLightboxData(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && lightboxData) {
        handleCloseLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData]);

  return (
    <section className="section-block" id="projects">
      {/* Concise Section Header */}
      <div className="section-header">
        <span className="section-badge mono">SELECTED WORK</span>
        <h2 className="section-title">Production Protocols</h2>
        <p className="section-desc">
          Five production decentralized systems and protocols engineered across Base L2, Sui Move, Bitcoin Nostr, Hedera, and Stellar Soroban.
        </p>
      </div>

      {/* Compact Filter Track */}
      <div className="compact-filters-track">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-chip mono ${selectedFilter === f.id ? 'active' : ''}`}
            onClick={() => {
              sound.playTick();
              setSelectedFilter(f.id);
            }}
          >
            <span>{f.label}</span>
          </button>
        ))}
      </div>

      {/* Compact Projects Grid / Stack */}
      <div className="compact-projects-stack">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenLightbox={handleOpenLightbox}
          />
        ))}
      </div>

      {/* Fullscreen HD Lightbox Modal */}
      {lightboxData && (
        <div className="lightbox-overlay" onClick={handleCloseLightbox}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lh-left">
                <span className="lh-num mono">0{lightboxData.project.number.replace('0', '')}</span>
                <h4 className="lh-title">{lightboxData.project.title}</h4>
                <span className="lh-eco mono">{lightboxData.project.ecosystem}</span>
              </div>

              <div className="lh-right">
                <div className="lh-zoom-tools mono">
                  <button
                    type="button"
                    className="lh-tool-btn"
                    onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.2))}
                    title="Zoom Out"
                  >
                    <ZoomOut size={14} />
                  </button>
                  <span className="zoom-val">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    type="button"
                    className="lh-tool-btn"
                    onClick={() => setZoomLevel((z) => Math.min(2.4, z + 0.2))}
                    title="Zoom In"
                  >
                    <ZoomIn size={14} />
                  </button>
                  <button
                    type="button"
                    className="lh-tool-btn"
                    onClick={() => setZoomLevel(1)}
                    title="Reset Zoom"
                  >
                    <RotateCcw size={13} />
                  </button>
                </div>

                {lightboxData.project.liveUrl && (
                  <a
                    href={lightboxData.project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="lh-launch-btn"
                  >
                    <span>Launch Live</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                <button
                  type="button"
                  className="lh-close-btn"
                  onClick={handleCloseLightbox}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="lightbox-image-container">
              <img
                src={
                  lightboxData.project.images && lightboxData.project.images.length > 1
                    ? lightboxData.project.images[lightboxData.imageIndex]
                    : lightboxData.project.image
                }
                alt={`${lightboxData.project.title} high-resolution screenshot`}
                className="lightbox-full-img"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>

            <div className="lightbox-footer">
              <div className="lf-copy">
                <p className="lf-quote">{lightboxData.project.description}</p>
              </div>
              <div className="lf-tags mono">
                {lightboxData.project.techStack.map((t, i) => (
                  <span key={i} className="lf-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

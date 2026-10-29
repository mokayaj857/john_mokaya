import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Award } from 'lucide-react';

export default function Bio() {
  return (
    <section className="section-block" id="about">
      <div className="section-header">
        <span className="section-badge mono">BACKGROUND</span>
        <h2 className="section-title">About &amp; Philosophy</h2>
        <p className="section-desc">
          A disciplined, human-centric approach to software engineering and systems design.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Personal Narrative */}
        <div className="about-narrative">
          {personalInfo.about.map((p, idx) => (
            <p key={idx} className="about-paragraph">{p}</p>
          ))}

          <div className="about-quick-specs">
            <div className="spec-item">
              <span className="spec-label mono">LOCATION</span>
              <span className="spec-value">{personalInfo.location}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label mono">TIMEZONE</span>
              <span className="spec-value">{personalInfo.timezone}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label mono">STATUS</span>
              <span className="spec-value text-emerald">{personalInfo.status}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Distinctions & Highlights */}
        <div className="about-highlights">
          <div className="highlights-header">
            <Award size={16} className="text-emerald" />
            <span className="highlights-title mono">MILESTONES &amp; DISTINCTIONS</span>
          </div>

          <div className="highlights-stack">
            {personalInfo.highlights.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-head">
                  <h4 className="highlight-title">{item.title}</h4>
                  <span className="highlight-year mono">{item.year}</span>
                </div>
                <p className="highlight-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

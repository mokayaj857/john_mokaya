import React from 'react';
import { pillars } from '../data/portfolioData';
import { Code2, HeartHandshake, Zap } from 'lucide-react';

export default function Pillars() {
  const getIcon = (num) => {
    switch (num) {
      case '01':
        return <Code2 size={24} className="pillar-icon" />;
      case '02':
        return <HeartHandshake size={24} className="pillar-icon" />;
      case '03':
        return <Zap size={24} className="pillar-icon" />;
      default:
        return <Code2 size={24} className="pillar-icon" />;
    }
  };

  return (
    <section className="section-wrapper" id="pillars">
      <div className="section-header-block">
        <span className="section-eyebrow">Guiding Pillars</span>
        <h2 className="section-heading">How I Approach the Craft</h2>
        <p className="section-description">
          Three tenets define my commitment as an engineer: robust technical execution, empathy-driven community building, and an insatiable curiosity for emerging technologies.
        </p>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <div key={pillar.number} className="pillar-card editorial-card">
            <div className="pillar-card-top">
              <span className="pillar-number">{pillar.number}</span>
              <div className="pillar-icon-badge">
                {getIcon(pillar.number)}
              </div>
            </div>

            <div className="pillar-card-body">
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-tagline">{pillar.tagline}</p>
              <p className="pillar-description">{pillar.description}</p>
            </div>

            <div className="pillar-card-footer">
              <div className="pillar-accent-line"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

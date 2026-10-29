import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function EngineeringFocus() {
  return (
    <section className="section-block" id="stack">
      <div className="section-header">
        <span className="section-badge mono">CAPABILITIES</span>
        <h2 className="section-title">Technical Stack &amp; Tools</h2>
        <p className="section-desc">
          Core languages, frameworks, and distributed architecture paradigms I leverage to build dependable digital products.
        </p>
      </div>

      <div className="skills-grid">
        {personalInfo.skills.map((group, idx) => (
          <div key={idx} className="skill-card">
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="skill-tags-list">
              {group.items.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { skillCategories } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function SkillsMatrix() {
  return (
    <section className="section-wrapper" id="skills">
      <div className="section-header-block">
        <span className="section-eyebrow">Technical Capabilities</span>
        <h2 className="section-heading">Skills & Architecture Matrix</h2>
        <p className="section-description">
          A structured overview of languages, frameworks, protocol libraries, and database technologies I leverage to build resilient software.
        </p>
      </div>

      <div className="skills-matrix-grid">
        {skillCategories.map((group, idx) => (
          <div key={idx} className="skill-category-card editorial-card">
            <div className="category-card-header">
              <h3 className="category-title">{group.category}</h3>
            </div>

            <ul className="skill-list">
              {group.skills.map((skill, sIdx) => (
                <li key={sIdx} className="skill-item">
                  <div className="skill-name-wrap">
                    <CheckCircle2 size={16} className="skill-check-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-level-badge">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

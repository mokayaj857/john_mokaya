import React, { useState } from 'react';
import { insights } from '../data/portfolioData';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

export default function Insights() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section className="section-wrapper" id="insights">
      <div className="section-header-block">
        <span className="section-eyebrow">Thoughts & Writings</span>
        <h2 className="section-heading">Insights & Engineering Notes</h2>
        <p className="section-description">
          Perspectives on building decentralized architectures, civic tech platforms, and high-concurrency systems.
        </p>
      </div>

      <div className="insights-grid">
        {insights.map((item) => (
          <article
            key={item.id}
            className="insight-card editorial-card"
            onClick={() => setActiveArticle(item)}
          >
            <div className="insight-meta">
              <span className="insight-date">
                <Calendar size={14} />
                <span>{item.date}</span>
              </span>
              <span className="insight-read-time">
                <Clock size={14} />
                <span>{item.readTime}</span>
              </span>
            </div>

            <h3 className="insight-title">{item.title}</h3>
            <p className="insight-summary">{item.summary}</p>

            <div className="insight-tags">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="insight-footer">
              <span className="insight-read-link">
                <span>Read Overview</span>
                <ArrowRight size={16} />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="modal-backdrop" onClick={() => setActiveArticle(null)}>
          <div className="modal-content editorial-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveArticle(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-meta">
              <span className="pill pill-active">{activeArticle.tags[0]}</span>
              <span className="insight-date">{activeArticle.date}</span>
              <span className="insight-read-time">{activeArticle.readTime}</span>
            </div>

            <h3 className="modal-title">{activeArticle.title}</h3>
            <p className="modal-lead">{activeArticle.summary}</p>

            <div className="modal-body">
              <p>
                As software developers, our technical decisions shape not only performance benchmarks, but also the real-world experiences of the end users and communities we serve. In this exploration, we analyze the structural trade-offs between centralized and decentralized architectures, focusing on resilience, fault-tolerance, and user agency.
              </p>
              <p style={{ marginTop: '16px' }}>
                Key takeaways from building production systems:
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '10px', color: 'var(--text-secondary)' }}>
                <li>Optimize for operational simplicity before introducing microservice complexity.</li>
                <li>Design state models with immutability and auditability as first-class constraints.</li>
                <li>Community-first feedback loops eliminate product assumption blind spots.</li>
              </ul>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={() => setActiveArticle(null)}
              >
                Close Note
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

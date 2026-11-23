import React, { useState } from 'react';
import { TechLogo } from './TechLogos';
import { sound } from '../utils/sound';
import { Layers, Database, ShieldCheck, Sparkles, Cpu } from 'lucide-react';

const SKILL_CATEGORIES_DATA = [
  {
    id: 'frontend',
    category: 'Frontend & Interfaces',
    badge: 'Client Tier',
    accentColor: '#38bdf8',
    icon: Layers,
    items: [
      { name: 'React', role: 'Reactive UI & Virtual DOM', color: '#61DAFB' },
      { name: 'TypeScript', role: 'Static Typings & Interfaces', color: '#3178C6' },
      { name: 'Next.js', role: 'SSR & App Router Architecture', color: '#ffffff' },
      { name: 'Tailwind CSS', role: 'Design System & Utility CSS', color: '#38BDF8' },
      { name: 'Design Systems', role: 'Tokens & UI Component Specs', color: '#A259FF' },
      { name: 'WebSockets', role: 'Real-time Event Streaming', color: '#10B981' },
      { name: 'Vite', role: 'Lightning-Fast ESM Bundler', color: '#BD34FE' }
    ]
  },
  {
    id: 'backend',
    category: 'Backend & Concurrency',
    badge: 'Runtime & APIs',
    accentColor: '#10b981',
    icon: Cpu,
    items: [
      { name: 'Node.js', role: 'High-Throughput Event Loop', color: '#5FA04E' },
      { name: 'Express', role: 'Minimalist Micro-Framework', color: '#71717A' },
      { name: 'Elixir & Phoenix', role: 'BEAM Concurrency & Supervision', color: '#9C27B0' },
      { name: 'Python', role: 'Scripts, Tooling & Analytics', color: '#3776AB' },
      { name: 'REST APIs', role: 'OpenAPI Contracts & HTTP Standards', color: '#0284C7' },
      { name: 'GraphQL', role: 'Deterministic Graph Schemas', color: '#E10098' },
      { name: 'Microservices', role: 'Decoupled Service Mesh', color: '#06B6D4' }
    ]
  },
  {
    id: 'databases',
    category: 'Databases & Infrastructure',
    badge: 'Persistence & Ops',
    accentColor: '#f59e0b',
    icon: Database,
    items: [
      { name: 'PostgreSQL', role: 'ACID Relational Storage', color: '#336791' },
      { name: 'MySQL', role: 'Structured Relational Data', color: '#00758F' },
      { name: 'Redis', role: 'Low-Latency In-Memory Cache', color: '#DC382D' },
      { name: 'Docker', role: 'Containerized Environments', color: '#2496ED' },
      { name: 'Linux CLI', role: 'POSIX Administration & Bash', color: '#10B981' },
      { name: 'Git & GitHub', role: 'Version Control & CI/CD Pipelines', color: '#F05032' },
      { name: 'Vercel', role: 'Global Edge Cloud Deployment', color: '#ffffff' }
    ]
  },
  {
    id: 'protocols',
    category: 'Protocols & Systems',
    badge: 'Multi-VM & Ledgers',
    accentColor: '#818cf8',
    icon: ShieldCheck,
    items: [
      { name: 'Smart Contracts', role: 'Deterministic On-Chain State', color: '#10B981' },
      { name: 'EVM / Solidity', role: 'Base L2 & Ethereum Execution', color: '#627EEA' },
      { name: 'Sui Move', role: 'Object-Centric Move & PTB Solvers', color: '#4DA2FF' },
      { name: 'Rust / Soroban', role: 'WASM Contracts & Stellar Escrows', color: '#DEA584' },
      { name: 'Hedera HCS', role: 'aBFT Consensus & Verifiable Timestamps', color: '#00EB88' },
      { name: 'Bitcoin & Nostr', role: 'Lightning Zaps & Cryptographic Relays', color: '#F7931A' }
    ]
  }
];

export default function EngineeringFocus() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Stack', count: 27 },
    { id: 'frontend', label: 'Frontend', count: 7 },
    { id: 'backend', label: 'Backend', count: 7 },
    { id: 'databases', label: 'Data & Infra', count: 7 },
    { id: 'protocols', label: 'Protocols & VMs', count: 6 }
  ];

  const displayedCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES_DATA
    : SKILL_CATEGORIES_DATA.filter(c => c.id === activeCategory);

  return (
    <section className="section-block" id="stack">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge-row">
          <span className="section-badge mono">CAPABILITIES</span>
          <span className="section-tech-count mono">27 Production Technologies</span>
        </div>
        <h2 className="section-title">Technical Stack &amp; Tools</h2>
        <p className="section-desc">
          High-performance languages, reactive interfaces, distributed backend engines, and multi-VM smart contract runtimes.
        </p>
      </div>

      {/* Segmented Filter Control */}
      <div className="compact-filters-track">
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            className={`filter-chip mono ${activeCategory === tab.id ? 'active' : ''}`}
            onClick={() => {
              sound.playTick();
              setActiveCategory(tab.id);
            }}
          >
            <span>{tab.label}</span>
            <span className="chip-count">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Compact 2x2 Bento Grid / Focused Matrix */}
      <div className={`compact-stack-bento ${activeCategory !== 'all' ? 'single-focused' : ''}`}>
        {displayedCategories.map(cat => {
          const CategoryIcon = cat.icon;
          return (
            <div
              key={cat.id}
              className="stack-bento-card"
              style={{
                '--cat-accent': cat.accentColor,
                '--cat-glow': `${cat.accentColor}18`
              }}
            >
              {/* Card Header */}
              <div className="bento-card-header">
                <div className="bch-left">
                  <span className="bch-icon-wrapper" style={{ color: cat.accentColor }}>
                    <CategoryIcon size={14} />
                  </span>
                  <h3 className="bch-title">{cat.category}</h3>
                </div>
                <div className="bch-right">
                  <span className="bch-badge mono">{cat.badge}</span>
                  <span className="bch-count mono">{cat.items.length}</span>
                </div>
              </div>

              {/* Compact Logo Pills Grid */}
              <div className="bento-pills-grid">
                {cat.items.map(tech => {
                  const isHovered = hoveredTech?.name === tech.name;

                  return (
                    <div
                      key={tech.name}
                      className={`tech-logo-pill ${isHovered ? 'hovered' : ''}`}
                      onMouseEnter={() => {
                        sound.playTick();
                        setHoveredTech({ ...tech, category: cat.category });
                      }}
                      onMouseLeave={() => setHoveredTech(null)}
                      style={{
                        '--tech-color': tech.color
                      }}
                    >
                      <div className="tech-logo-box">
                        <TechLogo name={tech.name} size={18} />
                      </div>
                      <div className="tech-meta-box">
                        <span className="tech-name">{tech.name}</span>
                        {activeCategory !== 'all' && (
                          <span className="tech-role-text mono">{tech.role}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Hover Inspector HUD */}
      <div className="stack-inspector-bar mono">
        <div className="sib-status-dot"></div>
        {hoveredTech ? (
          <div className="sib-content active">
            <span className="sib-name">{hoveredTech.name}</span>
            <span className="sib-divider">/</span>
            <span className="sib-cat">{hoveredTech.category}</span>
            <span className="sib-divider">—</span>
            <span className="sib-role">{hoveredTech.role}</span>
          </div>
        ) : (
          <div className="sib-content idle">
            <Sparkles size={12} className="sib-sparkle" />
            <span>Hover any tool or protocol to inspect architecture role</span>
          </div>
        )}
      </div>
    </section>
  );
}

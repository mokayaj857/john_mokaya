import React, { useState, useEffect, useRef } from 'react';
import { Search, ExternalLink, Volume2, VolumeX, Moon, Sun, Mail, Check, X } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function CommandPalette({ onClose, theme, toggleTheme, soundEnabled, toggleSound }) {
  const [query, setQuery] = useState('');
  const [_selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef(null);

  // Focus input on mount
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 40);
    return () => clearTimeout(timer);
  }, []);

  // Global keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Filter commands and projects
  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    p.ecosystem.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const quickActions = [
    {
      id: 'copy-email',
      icon: copiedEmail ? <Check size={16} className="text-emerald" /> : <Mail size={16} />,
      title: copiedEmail ? 'Email Copied to Clipboard!' : `Copy Email (${personalInfo.email})`,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopiedEmail(true);
        sound.playSuccess();
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    },
    {
      id: 'toggle-sound',
      icon: soundEnabled ? <VolumeX size={16} /> : <Volume2 size={16} />,
      title: soundEnabled ? 'Mute Sound FX' : 'Enable Tactile Sound FX',
      action: () => {
        toggleSound();
        sound.playClick();
      }
    },
    {
      id: 'toggle-theme',
      icon: theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />,
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      action: () => {
        toggleTheme();
        sound.playClick();
      }
    }
  ];

  const handleSelectProject = (proj) => {
    sound.playClick();
    if (proj.liveUrl) {
      window.open(proj.liveUrl, '_blank', 'noreferrer');
    }
    onClose();
  };

  return (
    <div className="cmd-backdrop" onClick={onClose}>
      <div className="cmd-modal" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="cmd-search-bar">
          <Search size={18} className="cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search 10 protocols, ecosystems, or actions... (ESC to exit)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
              sound.playTick();
            }}
            className="cmd-input"
          />
          <button type="button" onClick={onClose} className="cmd-close-btn">
            <X size={16} />
          </button>
        </div>

        {/* Results Body */}
        <div className="cmd-results">
          {/* Quick Actions */}
          {!query && (
            <div className="cmd-group">
              <span className="cmd-group-title">QUICK ACTIONS</span>
              {quickActions.map((act) => (
                <button
                  key={act.id}
                  type="button"
                  className="cmd-item"
                  onClick={act.action}
                >
                  <span className="cmd-item-icon">{act.icon}</span>
                  <span className="cmd-item-title">{act.title}</span>
                  <span className="cmd-item-hint">Action</span>
                </button>
              ))}
            </div>
          )}

          {/* Protocols & Systems List */}
          <div className="cmd-group">
            <span className="cmd-group-title">
              {query ? `MATCHING PROTOCOLS (${filteredProjects.length})` : 'INDEXED PROTOCOLS & SYSTEMS'}
            </span>

            {filteredProjects.length === 0 ? (
              <div className="cmd-empty">No protocols matching "{query}".</div>
            ) : (
              filteredProjects.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="cmd-item"
                  onClick={() => handleSelectProject(p)}
                >
                  <span className="cmd-item-mono">{p.number}</span>
                  <div className="cmd-item-text">
                    <span className="cmd-item-name">{p.title}</span>
                    <span className="cmd-item-sub">{p.subtitle}</span>
                  </div>
                  <span className="cmd-item-badge">{p.ecosystem}</span>
                  <ExternalLink size={14} className="cmd-item-ext" />
                </button>
              ))
            )}
          </div>
        </div>

        {/* Command Footer */}
        <div className="cmd-footer">
          <span>Navigate with mouse or keyboard</span>
          <span className="cmd-esc-tag">ESC to close</span>
        </div>
      </div>
    </div>
  );
}

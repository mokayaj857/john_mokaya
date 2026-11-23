import React, { useState, useEffect } from 'react';
import { Sun, Moon, Copy, Check, Search } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({
  theme,
  toggleTheme,
  onOpenCommandPalette
}) {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Multi-VM', href: '#playground' },
    { label: 'Stack', href: '#stack' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-pill">
        {/* Brand */}
        <a href="#top" className="nav-brand" onClick={(e) => handleLinkClick(e, '#top')}>
          <span className="brand-dot"></span>
          <span className="brand-name">{personalInfo.name}</span>
        </a>

        {/* Navigation Links */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-item"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {onOpenCommandPalette && (
            <button
              type="button"
              className="nav-cmd-trigger mono"
              onClick={onOpenCommandPalette}
              title="Search protocols & commands (Cmd + K)"
            >
              <Search size={11} />
              <span>⌘K</span>
            </button>
          )}

          <button
            type="button"
            className="copy-email-chip"
            onClick={handleCopyEmail}
            title={`Copy ${personalInfo.email}`}
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald" />
                <span className="chip-text">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span className="chip-text">Copy Email</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </header>
  );
}

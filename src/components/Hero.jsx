import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [time, setTime] = useState('');

  // Live Nairobi local time
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Nairobi',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="top">
      {/* Availability Status Badge */}
      <div className="status-badge">
        <span className="status-dot"></span>
        <span className="status-text">{personalInfo.status}</span>
      </div>

      {/* Hero Typography */}
      <div className="hero-headline-group">
        <h1 className="hero-name">{personalInfo.fullName}</h1>
        <p className="hero-role">{personalInfo.role}</p>
      </div>

      {/* Subtitle & Mission Statement */}
      <p className="hero-summary">
        {personalInfo.tagline}
      </p>

      {/* Meta Row: Location + Local Time */}
      <div className="hero-meta-row">
        <div className="meta-item">
          <MapPin size={13} className="text-secondary" />
          <span>{personalInfo.location}</span>
        </div>
        <span className="meta-separator">/</span>
        <div className="meta-item">
          <span className="mono">{time ? `${time} EAT` : '12:00 PM EAT'}</span>
        </div>
      </div>

      {/* Action Links & Socials */}
      <div className="hero-actions-row">
        <a href="#projects" className="btn-primary">
          <span>Explore Works</span>
          <ArrowDown size={14} />
        </a>

        <a href="#contact" className="btn-secondary">
          <Mail size={14} />
          <span>Get in Touch</span>
        </a>

        <div className="hero-social-pills">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            title="GitHub: mokayaj857"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            title="LinkedIn: John Mokaya"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            title="Instagram: @greybabey"
          >
            <InstagramIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

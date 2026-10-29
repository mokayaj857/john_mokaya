import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [time, setTime] = useState('');

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-copy">
            © {CURRENT_YEAR} {personalInfo.fullName}.
          </p>
          <span className="footer-tagline">Engineered with craft in Nairobi, Kenya.</span>
        </div>

        <div className="footer-center">
          <span className="footer-time mono">Nairobi, KE: {time || 'EAT (UTC+3)'}</span>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={15} />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={15} />
            </a>
            <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon size={15} />
            </a>
          </div>

          <button
            type="button"
            className="back-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}

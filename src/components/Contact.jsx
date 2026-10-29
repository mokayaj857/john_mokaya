import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-block" id="contact">
      <div className="section-header">
        <span className="section-badge mono">CONTACT</span>
        <h2 className="section-title">Let's Build Together</h2>
        <p className="section-desc">
          Available for software engineering roles, protocol contracts, and collaborative systems development.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left: Direct Contact Card */}
        <div className="contact-info-card">
          <div className="email-display-box">
            <span className="info-label mono">DIRECT INBOX</span>
            <a href={`mailto:${personalInfo.email}`} className="email-link">
              {personalInfo.email}
            </a>

            <div className="email-btn-group">
              <button
                type="button"
                className="btn-secondary copy-btn"
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a href={`mailto:${personalInfo.email}`} className="btn-primary email-btn">
                <span>Send Email</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="socials-box">
            <span className="info-label mono">ONLINE PRESENCE</span>
            <div className="socials-links-list">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="social-row-link">
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="link-arrow" />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="social-row-link">
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="link-arrow" />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="social-row-link">
                <InstagramIcon size={16} />
                <span>Instagram</span>
                <ArrowUpRight size={12} className="link-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Clean Inquiry Form */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="form-success-message">
              <Check size={28} className="text-emerald" />
              <h4 className="success-title">Message Received</h4>
              <p className="success-text">
                Thank you for reaching out. John Mokaya will get back to you via email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-field">
                <label htmlFor="contact-name" className="field-label mono">NAME</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="field-input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email" className="field-label mono">EMAIL</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="field-input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message" className="field-label mono">MESSAGE</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Describe your project, role, or collaboration inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="field-textarea"
                />
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                <span>Send Message</span>
                <Send size={13} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

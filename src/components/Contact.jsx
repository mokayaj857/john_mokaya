import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, GmailIcon } from './Icons';
import { sound } from '../utils/sound';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    sound.playClick();
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
        {/* Left: Direct Contact & Creative Online Presence */}
        <div className="contact-info-card">
          {/* Direct Inbox Card */}
          <div className="direct-inbox-card">
            <div className="dic-header">
              <div className="dic-label-group">
                <span className="dic-icon-box">
                  <GmailIcon size={18} />
                </span>
                <span className="dic-label mono">DIRECT INBOX</span>
              </div>
              <span className="dic-status mono">
                <span className="status-dot-pulse"></span>
                <span>Active • UTC+3</span>
              </span>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="dic-email-address mono"
              onClick={() => sound.playClick()}
            >
              {personalInfo.email}
            </a>

            <div className="dic-action-row">
              <button
                type="button"
                className="dic-copy-btn"
                onClick={handleCopyEmail}
                title={`Copy ${personalInfo.email}`}
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

              <a
                href={`mailto:${personalInfo.email}`}
                className="dic-send-btn"
                onClick={() => sound.playClick()}
              >
                <span>Send Email</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Online Presence Cards */}
          <div className="online-presence-card">
            <div className="op-header">
              <span className="op-label mono">ONLINE PRESENCE</span>
              <span className="op-count mono">3 Channels</span>
            </div>

            <div className="op-channels-list">
              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="op-channel-item github"
                onClick={() => sound.playClick()}
              >
                <div className="op-icon-badge github-badge">
                  <GithubIcon size={18} />
                </div>
                <div className="op-channel-details">
                  <span className="op-channel-title">GitHub</span>
                  <span className="op-channel-handle mono">@mokayaj857 • Open-Source Repos</span>
                </div>
                <ArrowUpRight size={14} className="op-arrow" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="op-channel-item linkedin"
                onClick={() => sound.playClick()}
              >
                <div className="op-icon-badge linkedin-badge">
                  <LinkedinIcon size={18} />
                </div>
                <div className="op-channel-details">
                  <span className="op-channel-title">LinkedIn</span>
                  <span className="op-channel-handle mono">john-mokaya • Engineering Profile</span>
                </div>
                <ArrowUpRight size={14} className="op-arrow" />
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="op-channel-item instagram"
                onClick={() => sound.playClick()}
              >
                <div className="op-icon-badge instagram-badge">
                  <InstagramIcon size={18} />
                </div>
                <div className="op-channel-details">
                  <span className="op-channel-title">Instagram</span>
                  <span className="op-channel-handle mono">@sir.juniour • Tech Community</span>
                </div>
                <ArrowUpRight size={14} className="op-arrow" />
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

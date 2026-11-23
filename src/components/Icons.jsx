import React from 'react';

/**
 * Authentic Brand Logos for Social Profiles and Mail
 * Scalable, pixel-perfect vectors with genuine brand geometry and palettes.
 */

export function GithubIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="GitHub"
    >
      <title>GitHub</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="LinkedIn"
    >
      <title>LinkedIn</title>
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#ffffff"
        d="M6.94 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-1.25 4.5h2.5V19h-2.5V9.5zm3.9 0h2.4v1.3h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.67 3 3.83V19h-2.5v-4.96c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.28-1.9 2.61V19h-2.5V9.5z"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Instagram"
    >
      <title>Instagram</title>
      <defs>
        <linearGradient id="igIconGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igIconGradient)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="none" stroke="#ffffff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#ffffff" strokeWidth="1.6" />
      <circle cx="15.8" cy="8.2" r="0.9" fill="#ffffff" />
    </svg>
  );
}

export function GmailIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-label="Gmail"
    >
      <title>Gmail</title>
      <path fill="#4CAF50" d="M45 16.2l-5 2.75v19.55c0 1.93-1.57 3.5-3.5 3.5H34V22.2l-10 5.5-10-5.5V42H11.5c-1.93 0-3.5-1.57-3.5-3.5V18.95l-5-2.75A3.498 3.498 0 0 1 1 13.12c0-2.86 3.09-4.64 5.56-3.21L24 19.3l17.44-9.39c2.47-1.43 5.56.35 5.56 3.21 0 1.28-.69 2.47-2 3.08z" />
      <path fill="#1E88E5" d="M3 38.5c0 1.93 1.57 3.5 3.5 3.5H11V20.5l-8-4.4V38.5z" />
      <path fill="#E53935" d="M45 16.1l-8 4.4V42h4.5c1.93 0 3.5-1.57 3.5-3.5V16.1z" />
      <path fill="#FBC02D" d="M37 20.5V42H11V20.5l13 7.15 13-7.15z" />
    </svg>
  );
}

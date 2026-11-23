import React from 'react';

/**
 * Authentic SVG Brand Logos for Developer Tech Stack
 * Clean, scalable, pixel-perfect vectors with official brand palettes.
 */

export function ReactLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className} aria-label="React">
      <title>React</title>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-label="TypeScript">
      <title>TypeScript</title>
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path fill="#ffffff" d="M37.5 76.5v11.7H58V115h14.8V88.2h20.4V76.5H37.5zM94.5 106.8c3.2 2.3 7.3 3.6 11.5 3.6 4.6 0 7.2-2.1 7.2-5.3 0-8.9-19.8-7.7-19.8-21.2 0-7.3 6-12.7 15.9-12.7 4.9 0 9.2 1.4 12.5 3.9l-3.8 10.3c-2.8-1.9-6.3-3-9.5-3-4 0-6.1 1.8-6.1 4.5 0 8.3 19.8 7.2 19.8 21.2 0 7.8-6.2 13-16.8 13-5.8 0-11-1.7-14.8-4.5l3.9-9.8z" />
    </svg>
  );
}

export function NextjsLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" className={className} aria-label="Next.js">
      <title>Next.js</title>
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path fill="#ffffff" d="M149.508 159.525L69.93 54H54v71.794h12.442V69.783l71.926 95.38a90.478 90.478 0 0011.14-5.638z" />
      <path fill="#ffffff" opacity="0.6" d="M115.81 54H128v72h-12.19z" />
    </svg>
  );
}

export function TailwindLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 33" className={className} aria-label="Tailwind CSS">
      <title>Tailwind CSS</title>
      <path fill="#38BDF8" fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
    </svg>
  );
}

export function DesignSystemsLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" className={className} aria-label="Design Systems">
      <title>Design Systems</title>
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}

export function WebSocketsLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-label="WebSockets">
      <title>WebSockets</title>
      <circle cx="32" cy="32" r="30" fill="#1E293B" />
      <path fill="#38BDF8" d="M22 20h20v6H22zm4 6v8h12v-8h4v12H22V26z" />
      <path fill="#F59E0B" d="M30 42l-6-6h16l-6 6zm-4-8h16v3H26z" />
      <circle cx="26" cy="20" r="2.5" fill="#10B981" />
      <circle cx="38" cy="20" r="2.5" fill="#10B981" />
    </svg>
  );
}

export function ViteLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Vite">
      <title>Vite</title>
      <defs>
        <linearGradient id="viteGradA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="viteGradB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEA83" />
          <stop offset="100%" stopColor="#FFDD35" />
        </linearGradient>
      </defs>
      <path fill="url(#viteGradA)" d="M29.9 5.8L16.7 29.3c-.3.5-1 .5-1.3 0L2.1 5.8c-.3-.6.1-1.3.8-1.2l13.1 1.7 13.1-1.7c.7-.1 1.1.6.8 1.2z" />
      <path fill="url(#viteGradB)" d="M22.2 1.3L12.5 17h5.1l-4.1 10.3 12.1-16.7h-5.4l2-9.3z" />
    </svg>
  );
}

export function NodejsLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Node.js">
      <title>Node.js</title>
      <path fill="#339933" d="M16 2.5l12.5 7.2v14.6L16 31.5 3.5 24.3V9.7L16 2.5z" />
      <path fill="#ffffff" d="M16 8.5l8 4.6v9.2l-8 4.6-8-4.6v-9.2l8-4.6z" opacity="0.25" />
      <text x="16" y="20.5" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif">JS</text>
    </svg>
  );
}

export function ExpressLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Express">
      <title>Express</title>
      <rect width="32" height="32" rx="6" fill="#18181B" />
      <text x="16" y="21" textAnchor="middle" fill="#F4F4F5" fontSize="13" fontWeight="800" fontFamily="monospace">ex</text>
      <path stroke="#10B981" strokeWidth="1.5" d="M6 25h20" strokeLinecap="round" />
    </svg>
  );
}

export function ElixirPhoenixLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-label="Elixir & Phoenix">
      <title>Elixir & Phoenix</title>
      <path fill="#9C27B0" d="M24 10 C24 10, 12 28, 12 40 C12 48, 18 54, 26 54 C34 54, 40 48, 40 40 C40 30, 30 12, 24 10 Z" />
      <path fill="#FF5722" d="M38 16 C34 26, 44 32, 40 42 C38 46, 42 50, 48 50 C54 50, 58 44, 58 38 C58 26, 46 18, 38 16 Z" />
      <circle cx="25" cy="38" r="4" fill="#E1BEE7" />
    </svg>
  );
}

export function PythonLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 110 110" className={className} aria-label="Python">
      <title>Python</title>
      <path fill="#3776AB" d="M55 2c-29.3 0-27.5 12.7-27.5 12.7l.03 13.2h28V32H16.2S2 30.5 2 55.4c0 24.8 12.4 24 12.4 24h7.4v-10.4s-.4-12.4 12.2-12.4h27.9s11.8.2 11.8-11.5V13.8S75.9 2 55 2zm-15.1 8.3a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z" />
      <path fill="#FFD43B" d="M55 108c29.3 0 27.5-12.7 27.5-12.7l-.03-13.2h-28V78h39.3s14.2 1.5 14.2-23.4c0-24.8-12.4-24-12.4-24h-7.4v10.4s.4 12.4-12.2 12.4H48.1s-11.8-.2-11.8 11.5v23.7S34.1 108 55 108zm15.1-8.3a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z" />
    </svg>
  );
}

export function RestApiLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="REST APIs">
      <title>REST APIs</title>
      <rect width="32" height="32" rx="6" fill="#0284C7" />
      <path fill="#ffffff" d="M7 11h6c2 0 3 1 3 2.5s-1 2.5-3 2.5H10v4H7V11zm3 3.3h3c.6 0 1-.3 1-.8s-.4-.8-1-.8h-3v1.6zM18 11h7v2.3h-4.3v1.8h3.8v2.2h-3.8v2.7H18V11z" />
    </svg>
  );
}

export function GraphQLLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" className={className} aria-label="GraphQL">
      <title>GraphQL</title>
      <path fill="#E10098" d="M57.468 302.66l-14.376-8.3 156.915-271.8 14.377 8.3z" />
      <path fill="#E10098" d="M39.829 272.208l-8.3-14.376 271.8-156.915 8.3 14.376z" />
      <path fill="#E10098" d="M342.532 302.66l-156.915-271.8 14.377-8.3 156.915 271.8z" />
      <path fill="#E10098" d="M360.171 272.208l-271.8-156.915 8.3-14.376 271.8 156.915z" />
      <path fill="#E10098" d="M40 200h320v16.6H40z" />
      <path fill="#E10098" d="M200 40h16.6v320H200z" />
      <circle cx="200" cy="40" r="28" fill="#E10098" />
      <circle cx="338.56" cy="120" r="28" fill="#E10098" />
      <circle cx="338.56" cy="280" r="28" fill="#E10098" />
      <circle cx="200" cy="360" r="28" fill="#E10098" />
      <circle cx="61.44" cy="280" r="28" fill="#E10098" />
      <circle cx="61.44" cy="120" r="28" fill="#E10098" />
    </svg>
  );
}

export function MicroservicesLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Microservices">
      <title>Microservices</title>
      <circle cx="16" cy="16" r="4.5" fill="#06B6D4" />
      <circle cx="6" cy="9" r="3.2" fill="#8B5CF6" />
      <circle cx="26" cy="9" r="3.2" fill="#3B82F6" />
      <circle cx="7" cy="23" r="3.2" fill="#10B981" />
      <circle cx="25" cy="23" r="3.2" fill="#F59E0B" />
      <path stroke="#64748B" strokeWidth="1.2" strokeDasharray="2 2" fill="none" d="M16 16L6 9M16 16L26 9M16 16L7 23M16 16L25 23M6 9h20M7 23h18" />
    </svg>
  );
}

export function PostgreSQLLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-label="PostgreSQL">
      <title>PostgreSQL</title>
      <circle cx="32" cy="32" r="30" fill="#336791" />
      <path fill="#ffffff" d="M32 14c-8.5 0-14 5.5-14 13 0 5.2 2.8 9.5 7 11.5v6.5l4-2 4 2v-6.5c4.2-2 7-6.3 7-11.5 0-7.5-5.5-13-14-13zm-5 13a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm10 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" />
      <path stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" d="M26 36c3 2 9 2 12 0" />
    </svg>
  );
}

export function MySQLLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-label="MySQL">
      <title>MySQL</title>
      <rect width="64" height="64" rx="12" fill="#00758F" />
      <path fill="#F29111" d="M20 38c0-8 6-16 14-18-2 4-2 9 0 13-4 1-8 2-14 5z" />
      <path fill="#ffffff" d="M34 20c8 2 12 8 12 16-5-3-9-4-14-4 1-4 1-8 2-12z" />
      <circle cx="28" cy="24" r="2" fill="#ffffff" />
    </svg>
  );
}

export function RedisLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-label="Redis">
      <title>Redis</title>
      <polygon points="32 8 56 20 32 32 8 20" fill="#DC382D" />
      <polygon points="8 20 32 32 32 56 8 44" fill="#A82820" />
      <polygon points="56 20 32 32 32 56 56 44" fill="#E65348" />
      <ellipse cx="32" cy="20" rx="8" ry="4" fill="#ffffff" opacity="0.3" />
    </svg>
  );
}

export function DockerLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-label="Docker">
      <title>Docker</title>
      <path fill="#2496ED" d="M59 31c-1.3 0-2.5.4-3.5 1.1-1.3-.9-3-.9-4.3 0-.4-.7-1-1.3-1.8-1.7-.5-4.5-3.8-8-8-8.4-1.2 0-2.4.3-3.4.8V22H14v9H9c-3.3 0-6 2.7-6 6 0 8.8 8.1 16 18 16 12.8 0 23.3-8.2 25.5-19.5 2.5-.2 5-1.5 6.5-3.5 1.9 0 3.7-.8 4.8-2.2.3-.4.2-1-.2-1.4-.4-.3-1-.4-1.6-.4zM16 24h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z" />
    </svg>
  );
}

export function LinuxCliLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Linux CLI">
      <title>Linux CLI</title>
      <rect width="32" height="32" rx="6" fill="#0F172A" />
      <rect x="2" y="2" width="28" height="28" rx="5" fill="none" stroke="#334155" strokeWidth="1" />
      <path fill="#10B981" d="M7 10l5 5-5 5v-2.5l2.5-2.5L7 12.5z" />
      <rect x="15" y="19" width="8" height="2.5" fill="#38BDF8" rx="1" />
    </svg>
  );
}

export function GitGitHubLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-label="Git & GitHub">
      <title>Git & GitHub</title>
      <rect width="64" height="64" rx="12" fill="#181717" />
      <path fill="#F05032" d="M52 24l-8-8a2 2 0 0 0-2.8 0l-4.4 4.4 5.6 5.6a2.8 2.8 0 0 1 3.5 3.5l5.4 5.4a2.8 2.8 0 1 0 1.4-1.4l-5.3-5.3a2.8 2.8 0 0 1-.8-2l-4.2-4.2 3.6-3.6 6 6a2 2 0 0 0 2.8-2.8z" />
      <path fill="#ffffff" d="M24 16a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2V39c0 .3.2.7.8.6A12 12 0 0 0 24 16z" />
    </svg>
  );
}

export function VercelLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 76 65" className={className} aria-label="Vercel">
      <title>Vercel</title>
      <path d="M38 0L76 65H0L38 0Z" fill="currentColor" />
    </svg>
  );
}

export function SmartContractsLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Smart Contracts">
      <title>Smart Contracts</title>
      <rect width="32" height="32" rx="6" fill="#1E1B4B" />
      <path fill="#10B981" d="M16 4l9 4.5v7.5c0 5.5-3.8 10.6-9 12-5.2-1.4-9-6.5-9-12V8.5L16 4z" />
      <path fill="#ffffff" d="M14.5 18.2l-2.7-2.7-1.4 1.4 4.1 4.1 8-8-1.4-1.4-6.6 6.6z" />
    </svg>
  );
}

export function EvmSolidityLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="EVM / Solidity">
      <title>EVM / Solidity</title>
      <rect width="32" height="32" rx="6" fill="#1E2238" />
      <path fill="#627EEA" d="M16 5l-7 11.5L16 20l7-3.5L16 5z" />
      <path fill="#8A92B2" d="M16 20.8l-7-3.8L16 27l7-10-7 3.8z" />
      <path fill="#ffffff" opacity="0.3" d="M16 5v15l7-3.5L16 5z" />
    </svg>
  );
}

export function SuiMoveLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Sui Move">
      <title>Sui Move</title>
      <rect width="32" height="32" rx="6" fill="#0A1E3F" />
      <path fill="#4DA2FF" d="M16 4c-5 6.5-8 11-8 15a8 8 0 0 0 16 0c0-4-3-8.5-8-15z" />
      <path fill="#ffffff" opacity="0.4" d="M16 8c-3 4.5-5 8-5 11a5 5 0 0 0 10 0c0-3-2-6.5-5-11z" />
      <circle cx="16" cy="19" r="2.5" fill="#ffffff" />
    </svg>
  );
}

export function RustSorobanLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Rust / Soroban">
      <title>Rust / Soroban</title>
      <rect width="32" height="32" rx="6" fill="#2E1C14" />
      <circle cx="16" cy="16" r="10" stroke="#DEA584" strokeWidth="2.5" strokeDasharray="3 2" fill="none" />
      <path fill="#CE422B" d="M13 10h4a3 3 0 0 1 3 3c0 1.8-1.2 2.8-2.6 3l2.8 5h-2.4l-2.5-4.5H15v4.5h-2V10zm2 2v2.5h2c.8 0 1.5-.4 1.5-1.2 0-.9-.7-1.3-1.5-1.3H15z" />
    </svg>
  );
}

export function HederaHcsLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-label="Hedera HCS">
      <title>Hedera HCS</title>
      <rect width="32" height="32" rx="6" fill="#09090B" />
      <rect x="2" y="2" width="28" height="28" rx="5" fill="none" stroke="#27272A" strokeWidth="1" />
      <path fill="#00EB88" d="M10 8h3.2v6.2h5.6V8H22v16h-3.2v-6.6h-5.6V24H10V8z" />
    </svg>
  );
}

export function BitcoinNostrLogo({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-label="Bitcoin & Nostr">
      <title>Bitcoin & Nostr</title>
      <circle cx="32" cy="32" r="30" fill="#F7931A" />
      <path fill="#ffffff" d="M44.5 28.5c.8-5.3-3.2-8.2-8.7-10.1l1.8-7.1-4.3-1.1-1.7 7c-1.1-.3-2.3-.6-3.5-.8l1.7-7-4.3-1.1-1.8 7.1c-.9-.2-1.9-.4-2.8-.7l-6-1.5-1.2 4.6s3.2.7 3.1.8c1.8.4 2.1 1.6 2 2.6l-2 8.1c.1 0 .3.1.5.1l-.5-.1-2.9 11.5c-.2.6-.8 1.4-2 .1 0 .1-3.1-.8-3.1-.8l-2.2 5.1 5.6 1.4c1.1.3 2.1.6 3.2.8l-1.8 7.3 4.3 1.1 1.8-7.1c1.2.3 2.4.6 3.5.9l-1.8 7.1 4.3 1.1 1.8-7.3c7.4 1.4 13 0.8 15.3-5.8 1.9-5.3-.1-8.4-4-10.4 2.8-.7 4.9-2.5 5.5-6.5zm-9.8 14.1c-1.3 5.4-10.4 2.5-13.3 1.8l2.4-9.5c2.9.7 12.3 2.1 10.9 7.7zm1.3-14.3c-1.2 4.9-8.8 2.4-11.2 1.8l2.2-8.7c2.4.6 10.3 1.8 9 6.9z" />
      <circle cx="48" cy="48" r="13" fill="#8E44AD" stroke="#000000" strokeWidth="2" />
      <path fill="#ffffff" d="M45 43l-2 5h4l-2 5 5-6h-4l2-4z" />
    </svg>
  );
}

/**
 * Registry mapping skill names to their official vector logo component
 */
const LOGO_MAP = {
  // Frontend & Interfaces
  "React": ReactLogo,
  "TypeScript": TypeScriptLogo,
  "Next.js": NextjsLogo,
  "Tailwind CSS": TailwindLogo,
  "Design Systems": DesignSystemsLogo,
  "WebSockets": WebSocketsLogo,
  "Vite": ViteLogo,

  // Backend & Concurrency
  "Node.js": NodejsLogo,
  "Express": ExpressLogo,
  "Elixir & Phoenix": ElixirPhoenixLogo,
  "Python": PythonLogo,
  "REST APIs": RestApiLogo,
  "GraphQL": GraphQLLogo,
  "Microservices": MicroservicesLogo,

  // Databases & Infrastructure
  "PostgreSQL": PostgreSQLLogo,
  "MySQL": MySQLLogo,
  "Redis": RedisLogo,
  "Docker": DockerLogo,
  "Linux CLI": LinuxCliLogo,
  "Git & GitHub": GitGitHubLogo,
  "Vercel": VercelLogo,

  // Protocols & Systems
  "Smart Contracts": SmartContractsLogo,
  "EVM / Solidity": EvmSolidityLogo,
  "Sui Move": SuiMoveLogo,
  "Rust / Soroban": RustSorobanLogo,
  "Hedera HCS": HederaHcsLogo,
  "Bitcoin & Nostr": BitcoinNostrLogo
};

export function TechLogo({ name, size = 18, className = "" }) {
  const Component = LOGO_MAP[name];
  if (!Component) return null;
  return <Component size={size} className={className} />;
}

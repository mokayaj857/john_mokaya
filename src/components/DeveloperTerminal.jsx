import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function DeveloperTerminal({ isOpen, onClose, theme, toggleTheme, soundEnabled, toggleSound }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '⚡ John Mokaya Autonomous Systems Shell [v2.4.0-ke]\nType "help" or select a quick command below.'
    }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global shortcut to toggle terminal (~ key or backquote)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        sound.playClick();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmdText) => {
    const clean = cmdText.trim().toLowerCase();
    if (!clean) return;

    sound.playClick();

    // Add user command to history
    const newHistory = [...history, { type: 'user', text: `$ ${cmdText}` }];

    switch (clean) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  projects   - List all 10 production protocols & systems
  vms        - Inspect the 6 blockchain virtual machines (Base, Sui, Stellar, Hedera, Stacks, ICP)
  nairobi    - Coordinates, local time, and civic tech vision
  bio        - John Mokaya's engineering narrative and background
  contact    - Direct email and social communication channels
  sound      - Toggle tactile Web Audio FX (${soundEnabled ? 'Currently ON' : 'Currently MUTED'})
  theme      - Toggle between Dark and Light mode (${theme.toUpperCase()})
  clear      - Clear terminal screen
  exit       - Close developer terminal`
        });
        break;

      case 'projects':
      case 'protocols':
        newHistory.push({
          type: 'response',
          text: `INDEXED PRODUCTION PROTOCOLS (10):
  01. VERIA        | Base L2 · MeTTa AGI (AI Agent Trust & Stake Gate)
  02. Trepa        | Sui Move (Self-Funding Intent Engine & PTB Solver)
  03. BlockForge   | Bitcoin L2 Stacks (Clarity Grant Governance)
  04. Akilimo      | East Africa GIS (Sentinel-2 NDVI Agri-Fintech)
  05. Hashmark     | Base L2 (EIP-712 Hardware Media Notary)
  06. Bima         | Hedera HCS (Parametric Drought Weather Micro-Insurance)
  07. SkillReceipt | Stellar Soroban (Rust Milestone Escrow & Git Verifier)
  08. SecurePass   | ICP Motoko (Tamper-Evident Premise Access Canister)
  09. EventVerse   | Avalanche C-Chain (DAO-Winning Anti-Scalping Ticketing)
  10. ROLAX IoT    | Elixir / BEAM (Sub-5ms Municipal Water Telemetry)

Tip: Type or click "akilimo" or "veria" to jump directly!`
        });
        break;

      case 'vms':
        newHistory.push({
          type: 'response',
          text: `BLOCKCHAIN VIRTUAL MACHINES & EXECUTION ENVIRONMENTS:
  1. Base L2       -> EVM / Solidity 0.8.24 (Bedrock Rollup, EIP-712)
  2. Sui           -> Move VM (Object Capabilities, Sub-second PTBs)
  3. Stellar       -> Soroban WASM / Rust (Formal auth, zero-default escrows)
  4. Hedera        -> Hashgraph HCS / HSCS (aBFT consensus, Weather Oracles)
  5. Stacks        -> Clarity VM (Turing-Decidable Bitcoin Layer 2)
  6. Internet Comp -> Motoko Actor Canisters (Orthogonal State Persistence)
  + BEAM VM        -> Elixir / Phoenix (Supervised process concurrency)`
        });
        break;

      case 'nairobi':
        newHistory.push({
          type: 'response',
          text: `LOCATION & TELEMETRY:
  City:      Nairobi, Kenya
  Coords:    1.2921° S, 36.8219° E
  Timezone:  East Africa Time (UTC+3)
  Mission:   Grounded in local civic realities. Building software resilient to intermittent connectivity, supporting rural SACCOs, and architecting un-censorable decentralized rails.`
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'response',
          text: `JOHN MOKAYA MOGAKA:
  Role:       Full Stack Engineer · Web3 & Distributed Systems
  Experience: Smart contract engineering, BEAM actor concurrency, React UI craft.
  Honors:     Avalanche DAO Kenya Hackathon Distinction
  Ethos:      Advancing software craft for the tangible benefit of humanity.`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `COMMUNICATION CHANNELS:
  Email:     mokayaj857@gmail.com
  GitHub:    https://github.com/mokayaj857
  LinkedIn:  https://www.linkedin.com/in/john-mokaya-3b926a261
  Instagram: @greybabey`
        });
        break;

      case 'sound':
        toggleSound();
        newHistory.push({
          type: 'system',
          text: `Audio tactile FX updated: ${!soundEnabled ? 'ENABLED' : 'MUTED'}`
        });
        break;

      case 'theme':
        toggleTheme();
        newHistory.push({
          type: 'system',
          text: `Visual theme updated: ${theme === 'dark' ? 'LIGHT' : 'DARK'}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        // Check if user typed a project id
        const matchedProj = projects.find(p => p.id === clean || p.title.toLowerCase() === clean);
        if (matchedProj) {
          newHistory.push({
            type: 'response',
            text: `[${matchedProj.title.toUpperCase()}]
Subtitle:     ${matchedProj.subtitle}
Ecosystem:    ${matchedProj.ecosystem}
Architecture: ${matchedProj.architecture}
Status:       ${matchedProj.status}
${matchedProj.liveUrl ? `Live URL:     ${matchedProj.liveUrl}` : 'Code Repository: Available upon request'}`
          });
        } else {
          newHistory.push({
            type: 'error',
            text: `Command not recognized: "${clean}". Type "help" to view valid commands.`
          });
        }
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="terminal-backdrop" onClick={onClose}>
      <div className="terminal-modal" onClick={(e) => e.stopPropagation()}>
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-title-group">
            <div className="terminal-leds">
              <span className="t-dot t-red" onClick={onClose}></span>
              <span className="t-dot t-yellow"></span>
              <span className="t-dot t-green"></span>
            </div>
            <div className="terminal-label">
              <TerminalIcon size={14} className="text-amber" />
              <span>john-mokaya@nairobi-lab:~</span>
            </div>
          </div>

          <div className="terminal-controls">
            <span className="terminal-shortcut-pill">Press ` or ESC to exit</span>
            <button type="button" className="terminal-close-btn" onClick={onClose}>
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Terminal Quick Chips */}
        <div className="terminal-quick-chips">
          <span className="chip-label">QUICK CMDS:</span>
          {['help', 'projects', 'vms', 'nairobi', 'bio', 'contact', 'sound', 'theme', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              className="quick-cmd-btn"
              onClick={() => handleCommand(cmd)}
            >
              <span>{cmd}</span>
            </button>
          ))}
        </div>

        {/* Output Stream */}
        <div className="terminal-body">
          {history.map((entry, idx) => (
            <div key={idx} className={`terminal-line terminal-${entry.type}`}>
              <pre>{entry.text}</pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="terminal-prompt-bar">
          <span className="prompt-symbol">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command (e.g. projects, vms, nairobi, help)..."
            className="terminal-input"
          />
          <button
            type="button"
            className="terminal-submit-btn"
            onClick={() => handleCommand(inputVal)}
            disabled={!inputVal.trim()}
          >
            <CornerDownLeft size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

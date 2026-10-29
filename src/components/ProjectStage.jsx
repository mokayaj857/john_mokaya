import React, { useState, useEffect } from 'react';
import {
  ExternalLink, Terminal, Shield, Play, RotateCcw, CheckCircle,
  Activity, Sparkles, Layers, Cpu, CloudRain, Wifi,
  Key, ArrowRight, Zap, Check, AlertTriangle
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProjectStage({ project }) {
  // Master state for all project simulations
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [activeTab, setActiveTab] = useState('simulation'); // 'simulation' | 'architecture' | 'invariants'

  // Veria state
  const [veriaVerified, setVeriaVerified] = useState(false);

  // Trepa state
  const [trepaStep, setTrepaStep] = useState(0);
  const [selectedIntent, setSelectedIntent] = useState(
    'Auto-route 2,500 SUI to highest risk-adjusted yield vault with slippage < 0.5%.'
  );

  // BlockForge state
  const [stxCredits, setStxCredits] = useState(100);

  // Akilimo state
  const [selectedParcel, setSelectedParcel] = useState('nakuru');

  // Hashmark state
  const [hashInput, setHashInput] = useState('land_title_deed_audit_2026.pdf');
  const [hashDigest, setHashDigest] = useState(
    '0x9d4a8e2b71c4f51e0892019a87d65b12ee94301a2f641b9d0382a9b3e10fa89c'
  );

  // Bima state
  const [rainfallMm, setRainfallMm] = useState(14); // < 20 triggers drought

  // SkillReceipt state
  const [commitHash, setCommitHash] = useState('8f2d4e1a0b3c');
  const [escrowReleased, setEscrowReleased] = useState(false);

  // EventVerse state
  const [basePrice] = useState(50);
  const [attemptedMarkup, setAttemptedMarkup] = useState(85);
  const [qrCounter, setQrCounter] = useState(28);

  // SecurePass state
  const [guestName, setGuestName] = useState('Sarah Nduta');
  const [passIssued, setPassIssued] = useState(false);

  // ROLAX state
  const [sensorFaultInjected, setSensorFaultInjected] = useState(false);
  const [beamRecovered, setBeamRecovered] = useState(false);
  const [packetCount, setPacketCount] = useState(14820);

  // Live timer for EventVerse QR code rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setQrCounter(prev => (prev <= 1 ? 30 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Background packet counter for ROLAX
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketCount(prev => prev + 12);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Hash change handler for Hashmark
  const handleHashChange = (val) => {
    let hash = 0;
    for (let i = 0; i < val.length; i++) {
      hash = (hash << 5) - hash + val.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    setHashInput(val);
    setHashDigest(`0x${hex}71c4f51e0892019a87d65b12ee94${hex}1b9d0382a9b3`);
  };

  // General simulation runner
  const triggerSimulation = () => {
    sound.playClick();
    setIsRunningSim(true);

    if (project.id === 'veria') {
      setTimeout(() => {
        setVeriaVerified(true);
        setIsRunningSim(false);
        sound.playSuccess();
      }, 1000);
    } else if (project.id === 'trepa') {
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setTrepaStep(step);
        sound.playTick();
        if (step >= 3) {
          clearInterval(interval);
          setIsRunningSim(false);
          sound.playSuccess();
        }
      }, 500);
    } else if (project.id === 'skillreceipt') {
      setTimeout(() => {
        setEscrowReleased(true);
        setIsRunningSim(false);
        sound.playSuccess();
      }, 900);
    } else if (project.id === 'securepass') {
      setTimeout(() => {
        setPassIssued(true);
        setIsRunningSim(false);
        sound.playSuccess();
      }, 800);
    } else if (project.id === 'rolax') {
      setSensorFaultInjected(true);
      setBeamRecovered(false);
      setTimeout(() => {
        setBeamRecovered(true);
        setIsRunningSim(false);
        sound.playSuccess();
      }, 1100);
    } else {
      setTimeout(() => {
        setIsRunningSim(false);
        sound.playSuccess();
      }, 700);
    }
  };

  const resetSimulation = () => {
    sound.playClick();
    setVeriaVerified(false);
    setTrepaStep(0);
    setEscrowReleased(false);
    setPassIssued(false);
    setSensorFaultInjected(false);
    setBeamRecovered(false);
    setRainfallMm(14);
    setAttemptedMarkup(85);
  };

  // Quadratic voting calculation for BlockForge
  const quadraticVotes = Math.floor(Math.sqrt(stxCredits));

  // Akilimo parcels data
  const parcels = {
    nakuru: {
      name: 'Nakuru Valley Parcel #409',
      crop: 'Maize & Legumes',
      ndvi: 0.82,
      health: 'High Canopy Vigour',
      creditRating: 'AAA+ (Low Risk, Optimal Yield)',
      status: 'Normal'
    },
    eldoret: {
      name: 'Eldoret Uasin Gishu Parcel #118',
      crop: 'Winter Wheat',
      ndvi: 0.41,
      health: 'Moisture Deficit Detected',
      creditRating: 'BBB (Moderate Drought Exposure)',
      status: 'Warning'
    },
    kisumu: {
      name: 'Kisumu Basin Parcel #872',
      crop: 'Sorghum & Cassava',
      ndvi: 0.74,
      health: 'Optimal Soil Moisture',
      creditRating: 'AA (High Repayment Probability)',
      status: 'Normal'
    }
  };

  return (
    <div className="project-stage-console">
      {/* Console Top Bar */}
      <div className="stage-console-header">
        <div className="stage-header-left">
          <div className="stage-led-pulse">
            <span className="led-core"></span>
            <span className="led-glow"></span>
          </div>
          <div className="stage-id-badge">
            <span className="badge-num">{project.number}</span>
            <span className="badge-name">{project.title}</span>
          </div>
          <span className="stage-eco-badge">{project.ecosystem}</span>
        </div>

        <div className="stage-header-tabs">
          <button
            type="button"
            className={`console-tab-btn ${activeTab === 'simulation' ? 'active' : ''}`}
            onClick={() => {
              sound.playTick();
              setActiveTab('simulation');
            }}
          >
            <Play size={13} />
            <span>Interactive Lab</span>
          </button>
          <button
            type="button"
            className={`console-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => {
              sound.playTick();
              setActiveTab('architecture');
            }}
          >
            <Layers size={13} />
            <span>Architecture</span>
          </button>
          <button
            type="button"
            className={`console-tab-btn ${activeTab === 'invariants' ? 'active' : ''}`}
            onClick={() => {
              sound.playTick();
              setActiveTab('invariants');
            }}
          >
            <Shield size={13} />
            <span>Invariants</span>
          </button>
        </div>

        <div className="stage-header-right">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="console-launch-btn"
              onClick={() => sound.playClick()}
              title={`Launch live ${project.title} protocol`}
            >
              <span>Live Protocol</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Main Console Viewport */}
      <div className="stage-viewport-area">
        {activeTab === 'simulation' && (
          <div className="stage-sim-wrapper">
            {/* 01. VERIA (Base L2 + MeTTa AGI) */}
            {project.id === 'veria' && (
              <div className="sim-block veria-sim">
                <div className="sim-telemetry-grid">
                  <div className="sim-metric-card">
                    <span className="metric-tag">BONDED STAKE</span>
                    <span className="metric-val text-amber">25,000 PAS</span>
                    <span className="metric-sub">Slashable Escrow on Base L2</span>
                  </div>
                  <div className="sim-metric-card">
                    <span className="metric-tag">REASONING ENGINE</span>
                    <span className="metric-val text-cyan">MeTTa Symbolic AGI</span>
                    <span className="metric-sub">Hyperon Proof Trees</span>
                  </div>
                  <div className="sim-metric-card">
                    <span className="metric-tag">SETTLEMENT LAYER</span>
                    <span className="metric-val text-emerald">Base Bedrock</span>
                    <span className="metric-sub">EVM Block #21,894,012</span>
                  </div>
                </div>

                <div className="veria-flow-schematic">
                  <div className={`flow-node ${isRunningSim ? 'pulse-node' : ''}`}>
                    <Cpu size={20} className="node-icon text-cyan" />
                    <span className="node-name">AI Agent Instance</span>
                    <span className="node-id">0x7a3...c91</span>
                  </div>

                  <div className="flow-path">
                    <div className={`path-line ${isRunningSim ? 'line-active' : ''}`}></div>
                    <span className="path-label">MeTTa Rule Query</span>
                  </div>

                  <div className={`flow-node ${veriaVerified ? 'node-verified' : ''}`}>
                    <Shield size={20} className={`node-icon ${veriaVerified ? 'text-emerald' : 'text-amber'}`} />
                    <span className="node-name">Constraint Verifier</span>
                    <span className="node-id">{veriaVerified ? 'Proof Validated' : 'Awaiting Proof'}</span>
                  </div>

                  <div className="flow-path">
                    <div className={`path-line ${veriaVerified ? 'line-active' : ''}`}></div>
                    <span className="path-label">State Commit</span>
                  </div>

                  <div className="flow-node">
                    <Layers size={20} className="node-icon text-emerald" />
                    <span className="node-name">Base L2 Ledger</span>
                    <span className="node-id">Immutable Log</span>
                  </div>
                </div>

                <div className="sim-control-dock">
                  <button
                    type="button"
                    className="sim-execute-btn"
                    onClick={triggerSimulation}
                    disabled={isRunningSim}
                  >
                    <Play size={14} />
                    <span>{isRunningSim ? 'Evaluating Symbolic Proof Trees...' : 'Verify Agent Action Proof'}</span>
                  </button>
                  {veriaVerified && (
                    <button type="button" className="sim-reset-btn" onClick={resetSimulation}>
                      <RotateCcw size={13} />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* 02. Trepa (Sui Move Intent Engine) */}
            {project.id === 'trepa' && (
              <div className="sim-block trepa-sim">
                <div className="intent-selector-box">
                  <span className="box-title">CHOOSE FINANCIAL INTENT (NATURAL LANGUAGE):</span>
                  <div className="intent-pills-row">
                    {[
                      'Auto-route 2,500 SUI to highest yield vault with slippage < 0.5%.',
                      'Swap 1,000 USDC to SUI and stake in Scallop protocol at lowest fee.',
                      'Rebalance treasury yield across Navi + Cetus whenever APY spread > 1.2%.'
                    ].map((intent, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`intent-select-pill ${selectedIntent === intent ? 'active' : ''}`}
                        onClick={() => {
                          sound.playTick();
                          setSelectedIntent(intent);
                          setTrepaStep(0);
                        }}
                      >
                        <Sparkles size={13} className="text-amber" />
                        <span>{intent}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="trepa-pipeline-steps">
                  <div className={`ptb-card ${trepaStep >= 1 ? 'ptb-done' : ''}`}>
                    <div className="ptb-head">
                      <span className="ptb-badge">PTB 01</span>
                      <span className="ptb-state">{trepaStep >= 1 ? 'Executed' : 'Pending'}</span>
                    </div>
                    <span className="ptb-fn">sui::coin::split</span>
                    <span className="ptb-desc">Isolates balance without global consensus lock</span>
                  </div>

                  <div className={`ptb-card ${trepaStep >= 2 ? 'ptb-done' : ''}`}>
                    <div className="ptb-head">
                      <span className="ptb-badge">PTB 02</span>
                      <span className="ptb-state">{trepaStep >= 2 ? 'Executed' : 'Pending'}</span>
                    </div>
                    <span className="ptb-fn">solver::auction_routes</span>
                    <span className="ptb-desc">Evaluates Scallop & Navi rates in memory</span>
                  </div>

                  <div className={`ptb-card ${trepaStep >= 3 ? 'ptb-done' : ''}`}>
                    <div className="ptb-head">
                      <span className="ptb-badge">PTB 03</span>
                      <span className="ptb-state">{trepaStep >= 3 ? 'Executed' : 'Pending'}</span>
                    </div>
                    <span className="ptb-fn">vault::deposit_atomic</span>
                    <span className="ptb-desc">Single-signature authorization finality (380ms)</span>
                  </div>
                </div>

                <div className="sim-control-dock">
                  <button
                    type="button"
                    className="sim-execute-btn"
                    onClick={triggerSimulation}
                    disabled={isRunningSim}
                  >
                    <Play size={14} />
                    <span>{isRunningSim ? 'Compiling Sui Move PTBs...' : 'Execute Intent Pipeline'}</span>
                  </button>
                  {trepaStep > 0 && (
                    <button type="button" className="sim-reset-btn" onClick={resetSimulation}>
                      <RotateCcw size={13} />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* 03. BlockForge (Bitcoin L2 Clarity Governance) */}
            {project.id === 'blockforge' && (
              <div className="sim-block blockforge-sim">
                <div className="blockforge-interactive-grid">
                  <div className="clarity-editor-view">
                    <div className="clarity-bar">
                      <Terminal size={13} className="text-amber" />
                      <span>Clarity Decidable Smart Contract · Non-Turing Complete</span>
                    </div>
                    <pre className="clarity-code-preview">
{`(define-public (cast-quadratic-vote (grant-id uint) (credits uint))
  (let ((effective-weight (sqrti credits)))
    (begin
      (asserts! (>= (get-stx-balance tx-sender) credits) (err u403))
      (map-set grant-tally grant-id (+ (get-votes grant-id) effective-weight))
      (ok effective-weight))))`}
                    </pre>
                  </div>

                  <div className="quadratic-calculator-box">
                    <span className="calc-title">QUADRATIC VOTING WEIGHT CALCULATOR</span>
                    <div className="slider-control-group">
                      <div className="slider-info-row">
                        <span className="label">COMMITTED STX CREDITS:</span>
                        <span className="val mono text-amber">{stxCredits.toLocaleString()} STX</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10000"
                        step="50"
                        value={stxCredits}
                        onChange={(e) => {
                          setStxCredits(Number(e.target.value));
                          sound.playTick();
                        }}
                        className="custom-range-slider"
                      />
                    </div>

                    <div className="quadratic-result-display">
                      <div className="qr-math">
                        <span className="math-formula">√{stxCredits.toLocaleString()} STX</span>
                        <ArrowRight size={16} className="text-muted" />
                        <span className="math-out text-emerald mono">{quadraticVotes} Effective Votes</span>
                      </div>
                      <p className="qr-explanation">
                        Quadratic math ensures that 10,000 STX only yields 100 votes (instead of 10,000 votes), preventing plutocratic treasury takeover.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 04. Akilimo (Sentinel-2 NDVI Satellite GIS) */}
            {project.id === 'akilimo' && (
              <div className="sim-block akilimo-sim">
                <div className="gis-dashboard-layout">
                  <div className="gis-map-canvas">
                    <div className="gis-grid-lines"></div>
                    <div className="gis-radar-sweeper"></div>

                    {/* Regional Farm Pins */}
                    <button
                      type="button"
                      className={`gis-pin-node nakuru ${selectedParcel === 'nakuru' ? 'is-selected' : ''}`}
                      onClick={() => {
                        sound.playTick();
                        setSelectedParcel('nakuru');
                      }}
                    >
                      <span className="pin-dot"></span>
                      <span className="pin-text">Nakuru (#409)</span>
                    </button>

                    <button
                      type="button"
                      className={`gis-pin-node eldoret ${selectedParcel === 'eldoret' ? 'is-selected' : ''}`}
                      onClick={() => {
                        sound.playTick();
                        setSelectedParcel('eldoret');
                      }}
                    >
                      <span className="pin-dot warning"></span>
                      <span className="pin-text">Eldoret (#118)</span>
                    </button>

                    <button
                      type="button"
                      className={`gis-pin-node kisumu ${selectedParcel === 'kisumu' ? 'is-selected' : ''}`}
                      onClick={() => {
                        sound.playTick();
                        setSelectedParcel('kisumu');
                      }}
                    >
                      <span className="pin-dot"></span>
                      <span className="pin-text">Kisumu (#872)</span>
                    </button>
                  </div>

                  <div className="gis-intel-panel">
                    <div className="intel-header">
                      <span className="intel-title">{parcels[selectedParcel].name}</span>
                      <span className={`status-pill ${parcels[selectedParcel].status === 'Warning' ? 'warn' : 'ok'}`}>
                        {parcels[selectedParcel].status}
                      </span>
                    </div>

                    <div className="intel-metrics-stack">
                      <div className="intel-row">
                        <span className="intel-lbl">CROP TYPOLOGY</span>
                        <span className="intel-val">{parcels[selectedParcel].crop}</span>
                      </div>
                      <div className="intel-row">
                        <span className="intel-lbl">SENTINEL-2 NDVI INDEX</span>
                        <span className="intel-val mono text-emerald font-bold">{parcels[selectedParcel].ndvi}</span>
                      </div>
                      <div className="intel-row">
                        <span className="intel-lbl">VEGETATION HEALTH</span>
                        <span className="intel-val">{parcels[selectedParcel].health}</span>
                      </div>
                      <div className="intel-row">
                        <span className="intel-lbl">SACCO CREDIT SCORE</span>
                        <span className="intel-val mono text-amber font-bold">{parcels[selectedParcel].creditRating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 05. Hashmark Protocol (Base L2 Media Notary) */}
            {project.id === 'hashmark' && (
              <div className="sim-block hashmark-sim">
                <div className="notary-input-strip">
                  <span className="notary-label">INTERACTIVE CRYPTOGRAPHIC MEDIA NOTARY:</span>
                  <input
                    type="text"
                    value={hashInput}
                    onChange={(e) => handleHashChange(e.target.value)}
                    placeholder="Type document name, camera image name, or raw payload..."
                    className="notary-text-field"
                  />
                </div>

                <div className="notary-card-grid">
                  <div className="notary-attr-box">
                    <span className="attr-title">KECCAK-256 CONTENT DIGEST</span>
                    <code className="attr-code text-cyan">{hashDigest}</code>
                  </div>
                  <div className="notary-attr-box">
                    <span className="attr-title">HARDWARE SENSOR GEOLOCATION</span>
                    <code className="attr-code text-amber">1.2921° S, 36.8219° E · EIP-712 Attested</code>
                  </div>
                  <div className="notary-attr-box">
                    <span className="attr-title">BASE L2 ATTESTATION STATE</span>
                    <span className="attr-badge text-emerald">
                      <Check size={14} />
                      <span>Permanent On-Chain Immutability</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 06. Bima Hedera (Parametric Weather Insurance) */}
            {project.id === 'bima' && (
              <div className="sim-block bima-sim">
                <div className="oracle-telemetry-box">
                  <div className="oracle-slider-head">
                    <div className="osh-left">
                      <CloudRain size={16} className="text-cyan" />
                      <span className="osh-title">REGIONAL RAINFALL SENSOR (HEDERA CONSENSUS SERVICE)</span>
                    </div>
                    <span className="rainfall-readout mono text-amber">{rainfallMm} mm / month</span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="80"
                    value={rainfallMm}
                    onChange={(e) => {
                      setRainfallMm(Number(e.target.value));
                      sound.playTick();
                    }}
                    className="custom-range-slider"
                  />

                  <div className="threshold-guide">
                    <span className="guide-left">0mm (Severe Drought)</span>
                    <span className="guide-threshold">20mm DROUGHT TRIGGER THRESHOLD</span>
                    <span className="guide-right">80mm (Abundant)</span>
                  </div>
                </div>

                <div className="bima-outcome-card">
                  {rainfallMm < 20 ? (
                    <div className="payout-trigger-box">
                      <div className="pt-head">
                        <AlertTriangle size={18} className="text-amber" />
                        <span className="pt-title">PARAMETRIC INDEMNITY PAYOUT TRIGGERED</span>
                      </div>
                      <p className="pt-desc">
                        Sensor consensus logs rainfall deficit ({rainfallMm}mm &lt; 20mm threshold).
                        Hedera Consensus Service guarantees sub-second fair ordering. Instant payout of <strong>$1,200 USDC</strong> settled to Farmer SACCO wallet #HCS-849.
                      </p>
                    </div>
                  ) : (
                    <div className="payout-normal-box">
                      <div className="pn-head">
                        <CheckCircle size={18} className="text-emerald" />
                        <span className="pn-title">WEATHER WITHIN SAFE OPERATING ENVELOPE</span>
                      </div>
                      <p className="pn-desc">
                        Rainfall level ({rainfallMm}mm) is adequate. No crop stress indicated. Reserve escrow remains locked.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 07. SkillReceipt (Stellar Soroban Rust Escrow) */}
            {project.id === 'skillreceipt' && (
              <div className="sim-block skillreceipt-sim">
                <div className="escrow-console-grid">
                  <div className="escrow-meta-card">
                    <span className="em-label">ESCROW CONTRACT (RUST SOROBAN)</span>
                    <span className="em-val">3,500 XLM Locked Tranche</span>
                    <span className="em-sub">Two-Party Multisig Authorization</span>
                  </div>

                  <div className="commit-verification-box">
                    <span className="cv-label">DELIVERABLE GIT COMMIT PROOF:</span>
                    <div className="commit-input-row">
                      <input
                        type="text"
                        value={commitHash}
                        onChange={(e) => setCommitHash(e.target.value)}
                        placeholder="Git commit SHA-1 hash..."
                        className="commit-field"
                      />
                      <button
                        type="button"
                        className="sim-execute-btn"
                        onClick={triggerSimulation}
                        disabled={isRunningSim || escrowReleased}
                      >
                        <Zap size={14} />
                        <span>{isRunningSim ? 'Verifying Soroban Auth...' : escrowReleased ? 'Escrow Released' : 'Verify & Release'}</span>
                      </button>
                    </div>

                    {escrowReleased && (
                      <div className="escrow-success-banner">
                        <CheckCircle size={16} className="text-emerald" />
                        <span>Commit {commitHash} verified on Stellar ledger. Funds released to contractor.</span>
                        <button type="button" className="sim-reset-inline" onClick={resetSimulation}>
                          Reset
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 08. SecurePass (Internet Computer ICP Canister) */}
            {project.id === 'securepass' && (
              <div className="sim-block securepass-sim">
                <div className="canister-card-grid">
                  <div className="canister-form-box">
                    <span className="cf-title">ISSUE DECENTRALIZED GUEST PASS</span>
                    <div className="cf-row">
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Guest Name..."
                        className="guest-name-field"
                      />
                      <button
                        type="button"
                        className="sim-execute-btn"
                        onClick={triggerSimulation}
                        disabled={isRunningSim}
                      >
                        <Key size={14} />
                        <span>{isRunningSim ? 'Signing with Internet Identity...' : 'Mint Guest Pass'}</span>
                      </button>
                    </div>
                  </div>

                  <div className={`guest-pass-display ${passIssued ? 'pass-active' : ''}`}>
                    <div className="gpd-head">
                      <Shield size={16} className={passIssued ? 'text-emerald' : 'text-muted'} />
                      <span className="gpd-title">ICP SUBNET CANISTER PASS #7709</span>
                    </div>
                    <div className="gpd-body">
                      <span className="gpd-name">{guestName}</span>
                      <span className="gpd-auth">
                        {passIssued ? '✓ Cryptographically Attested (Valid for 4 Hours)' : 'Awaiting Canister Authorization'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 09. EventVerse (Avalanche Anti-Scalping Dynamic Ticketing) */}
            {project.id === 'eventverse' && (
              <div className="sim-block eventverse-sim">
                <div className="ticket-sim-grid">
                  <div className="markup-clamp-tester">
                    <div className="mct-head">
                      <span className="mct-title">SMART CONTRACT BYTECODE 10% RESALE CEILING ENFORCEMENT</span>
                      <span className="mct-badge text-amber">Avalanche DAO Winner</span>
                    </div>

                    <div className="markup-slider-row">
                      <div className="ms-info">
                        <span>Original Primary Price: $50</span>
                        <span>Attempted Resale Asking Price: <strong>${attemptedMarkup}</strong></span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="200"
                        value={attemptedMarkup}
                        onChange={(e) => {
                          setAttemptedMarkup(Number(e.target.value));
                          sound.playTick();
                        }}
                        className="custom-range-slider"
                      />
                    </div>

                    <div className="clamp-outcome-box">
                      <div className="clamp-badge">
                        <span>BYTECODE ENFORCED TRANSACTION PRICE:</span>
                        <span className="clamp-price mono text-emerald font-bold">
                          ${Math.min(attemptedMarkup, Math.floor(basePrice * 1.10))}.00
                        </span>
                      </div>
                      <p className="clamp-desc">
                        {attemptedMarkup > basePrice * 1.10
                          ? `Secondary seller requested $${attemptedMarkup}, but Avalanche Solidity contract automatically clamped the transfer to maximum $${Math.floor(basePrice * 1.10)} (+10%), completely eliminating scalper profits!`
                          : 'Asking price is within allowable 10% secondary transfer margin.'}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Rotating QR Code Simulator */}
                  <div className="dynamic-qr-box">
                    <span className="qr-title">30S TIME-SALTED DYNAMIC QR</span>
                    <div className="qr-visual-frame">
                      <div className="qr-matrix-art">
                        <div className="qr-corner tl"></div>
                        <div className="qr-corner tr"></div>
                        <div className="qr-corner bl"></div>
                        <div className="qr-bars-mock">
                          <span className="qr-hash mono">0x{qrCounter}ae7...d82</span>
                        </div>
                      </div>
                    </div>
                    <span className="qr-timer mono">Regenerating in {qrCounter}s (Thwarts screenshot fraud)</span>
                  </div>
                </div>
              </div>
            )}

            {/* 10. ROLAX IoT (Elixir / BEAM Process Concurrency Engine) */}
            {project.id === 'rolax' && (
              <div className="sim-block rolax-sim">
                <div className="beam-telemetry-grid">
                  <div className="beam-metric-card">
                    <span className="bm-label">INGESTED TELEMETRY PACKETS</span>
                    <span className="bm-val mono text-cyan">{packetCount.toLocaleString()}</span>
                    <span className="bm-sub">Municipal Flow Sensors</span>
                  </div>
                  <div className="beam-metric-card">
                    <span className="bm-label">SUPERVISION RECOVERY LATENCY</span>
                    <span className="bm-val mono text-emerald">&lt; 3.2 ms</span>
                    <span className="bm-sub">BEAM GenServer Restart</span>
                  </div>
                  <div className="beam-metric-card">
                    <span className="bm-label">SYSTEM AVAILABILITY</span>
                    <span className="bm-val mono text-amber">99.98%</span>
                    <span className="bm-sub">Zero Dropped Packets</span>
                  </div>
                </div>

                <div className="beam-supervisor-tree">
                  <div className="supervisor-node">
                    <Cpu size={18} className="text-amber" />
                    <span>Rolax.Telemetry.Supervisor</span>
                  </div>

                  <div className="supervisor-branches">
                    <div className="worker-process">
                      <Activity size={14} className="text-emerald" />
                      <span>Pipeline.Ingest (PID &lt;0.412.0&gt;)</span>
                    </div>
                    <div className={`worker-process ${sensorFaultInjected && !beamRecovered ? 'worker-fault' : 'worker-healthy'}`}>
                      <Wifi size={14} />
                      <span>Gateway.ESP32 ({sensorFaultInjected && !beamRecovered ? 'FAULT INJECTED' : 'HEALTHY'})</span>
                    </div>
                    <div className="worker-process">
                      <Shield size={14} className="text-emerald" />
                      <span>Valve.SafetyActor</span>
                    </div>
                  </div>
                </div>

                <div className="sim-control-dock">
                  <button
                    type="button"
                    className="sim-execute-btn"
                    onClick={triggerSimulation}
                    disabled={isRunningSim}
                  >
                    <AlertTriangle size={14} />
                    <span>{isRunningSim ? 'BEAM Isolating Sensor Process...' : 'Simulate Sensor Hardware Fault'}</span>
                  </button>
                  {sensorFaultInjected && (
                    <button type="button" className="sim-reset-btn" onClick={resetSimulation}>
                      <RotateCcw size={13} />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Architecture Blueprint */}
        {activeTab === 'architecture' && (
          <div className="stage-arch-wrapper">
            <div className="arch-blueprint-box">
              <span className="arch-box-title">SYSTEM ARCHITECTURE OVERVIEW</span>
              <p className="arch-text-lead">{project.architecture}</p>

              <div className="arch-tech-stack-row">
                <span className="arch-stack-label">ENGINEERING STACK:</span>
                <div className="arch-pills-list">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="arch-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="arch-description-box">
                <span className="arch-desc-title">DEEP SPECIFICATION:</span>
                <p className="arch-desc-paragraph">{project.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Formal Invariants */}
        {activeTab === 'invariants' && (
          <div className="stage-invariants-wrapper">
            <div className="invariants-blueprint-box">
              <span className="invariants-box-title">CRYPTOGRAPHIC & RUNTIME INVARIANTS</span>
              <p className="invariants-sub">Non-negotiable security guarantees enforced at the protocol level:</p>

              <div className="invariants-checklist">
                {project.invariants.map((inv, idx) => (
                  <div key={idx} className="invariant-check-item">
                    <CheckCircle size={18} className="text-emerald" />
                    <span className="invariant-check-text">{inv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stage Footer Strip */}
      <div className="stage-console-footer">
        <div className="scf-left">
          <span className="scf-dot"></span>
          <span className="scf-status">{project.status}</span>
        </div>
        <div className="scf-right">
          <span className="scf-cat">{project.categoryLabel}</span>
          <span className="scf-year">{project.year}</span>
        </div>
      </div>
    </div>
  );
}

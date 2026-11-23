import React, { useState } from 'react';
import {
  ExternalLink, Shield, Play, RotateCcw, CheckCircle,
  Sparkles, Layers, Cpu,
  Zap, MapPin, Coins
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProjectStage({ project }) {
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [activeTab, setActiveTab] = useState('simulation'); // 'simulation' | 'architecture' | 'invariants'

  // Veria state
  const [veriaVerified, setVeriaVerified] = useState(false);

  // Trepa state
  const [trepaStep, setTrepaStep] = useState(0);
  const [selectedIntent, setSelectedIntent] = useState(
    'Auto-route 2,500 SUI to highest risk-adjusted yield vault with slippage < 0.5%.'
  );

  // BitFund state
  const [bitfundStep, setBitfundStep] = useState(0);
  const [selectedProposalIndex, setSelectedProposalIndex] = useState(0);
  const bitfundProposals = [
    { title: 'NIP-01 Bitcoin Relay Client & Signer', budget: '0.35 BTC', npub: 'npub17f3a...912' },
    { title: 'Lightning Taproot Asset Bridge', budget: '0.80 BTC', npub: 'npub14k8e...330' },
    { title: 'Decentralized Nostr Identity Vault', budget: '0.20 BTC', npub: 'npub19x0z...418' }
  ];
  const [zapAmount, setZapAmount] = useState(50000); // 50k sats

  // Bima state
  const [selectedParcelId, setSelectedParcelId] = useState('kiambu');
  const [bimaStep, setBimaStep] = useState(0);

  const bimaParcels = {
    kiambu: {
      name: 'Kiambu Coffee Estate Parcel #409',
      location: 'Kiambu County, Kenya (1.1714° S, 36.8356° E)',
      size: '2.40 Hectares',
      surveyor: 'SURV-KY-892 (Licensed Surveyor Attestation)',
      nftToken: '0.0.489120 · HTS Deed NFT',
      price: '$45,000 USDC',
      registryStatus: 'Survey Approved'
    },
    nairobi: {
      name: 'Nairobi Upper Hill Commercial Plot #118',
      location: 'Nairobi CBD Fringe (1.2976° S, 36.8152° E)',
      size: '0.75 Hectares',
      surveyor: 'SURV-NRB-104 (Ministry of Lands Verified)',
      nftToken: '0.0.510934 · HTS Deed NFT',
      price: '$120,000 USDC',
      registryStatus: 'Multi-Sig Awaiting Signoff'
    },
    naivasha: {
      name: 'Naivasha Rift Valley Farmland #872',
      location: 'Nakuru/Naivasha Basin (0.7172° S, 36.4310° E)',
      size: '5.00 Hectares',
      surveyor: 'SURV-NK-441 (Boundary Delimited)',
      nftToken: '0.0.602188 · HTS Deed NFT',
      price: '$65,000 USDC',
      registryStatus: 'Escrow Ready'
    }
  };

  // SkillReceipt state
  const [commitHash, setCommitHash] = useState('8f2d4e1a0b3c');
  const [escrowReleased, setEscrowReleased] = useState(false);

  // General simulation runner
  const triggerSimulation = () => {
    sound.playClick();
    setIsRunningSim(true);

    if (project.id === 'veria') {
      setTimeout(() => {
        setVeriaVerified(true);
        setIsRunningSim(false);
        sound.playSuccess();
      }, 900);
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
      }, 450);
    } else if (project.id === 'bitfund') {
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setBitfundStep(step);
        sound.playTick();
        if (step >= 4) {
          clearInterval(interval);
          setIsRunningSim(false);
          sound.playSuccess();
        }
      }, 400);
    } else if (project.id === 'bima') {
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setBimaStep(step);
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
      }, 800);
    } else {
      setTimeout(() => {
        setIsRunningSim(false);
        sound.playSuccess();
      }, 600);
    }
  };

  const resetSimulation = () => {
    sound.playClick();
    setVeriaVerified(false);
    setTrepaStep(0);
    setBitfundStep(0);
    setBimaStep(0);
    setEscrowReleased(false);
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
                      'Auto-route 2,500 SUI to highest risk-adjusted yield vault with slippage < 0.5%.',
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

            {/* 03. bitfund (Bitcoin & Nostr Public Crowdfunding) */}
            {project.id === 'bitfund' && (
              <div className="sim-block bitfund-sim">
                <div className="land-parcel-selector">
                  <span className="box-title">SELECT ACTIVE NOSTR PROPOSAL:</span>
                  <div className="parcel-buttons-row">
                    {bitfundProposals.map((prop, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`parcel-select-btn ${selectedProposalIndex === idx ? 'active' : ''}`}
                        onClick={() => {
                          sound.playTick();
                          setSelectedProposalIndex(idx);
                          setBitfundStep(0);
                        }}
                      >
                        <Zap size={13} className="text-amber" />
                        <span>{prop.title} ({prop.budget})</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bitfund-step-grid">
                  <div className={`bf-step-card ${bitfundStep >= 1 ? 'step-active' : ''}`}>
                    <div className="bf-step-header">
                      <span className="bf-num mono">1</span>
                      <span className="bf-title">Publish</span>
                    </div>
                    <p className="bf-desc">Signed Nostr NIP-01 proposal broadcast with milestone budget.</p>
                    <span className="bf-badge mono">{bitfundProposals[selectedProposalIndex].npub}</span>
                  </div>

                  <div className={`bf-step-card ${bitfundStep >= 2 ? 'step-active' : ''}`}>
                    <div className="bf-step-header">
                      <span className="bf-num mono">2</span>
                      <span className="bf-title">Discuss</span>
                    </div>
                    <p className="bf-desc">Relay threads surface technical risks and architecture audits.</p>
                    <span className="bf-badge mono">3 Relays Synced</span>
                  </div>

                  <div className={`bf-step-card ${bitfundStep >= 3 ? 'step-active' : ''}`}>
                    <div className="bf-step-header">
                      <span className="bf-num mono">3</span>
                      <span className="bf-title">Review</span>
                    </div>
                    <p className="bf-desc">Community peer scoring: Impact 98% · Feasibility 94%.</p>
                    <span className="bf-badge mono">Score: 96/100</span>
                  </div>

                  <div className={`bf-step-card ${bitfundStep >= 4 ? 'step-active' : ''}`}>
                    <div className="bf-step-header">
                      <span className="bf-num mono">4</span>
                      <span className="bf-title">Track &amp; Fund</span>
                    </div>
                    <p className="bf-desc">Milestone unlocked via verifiable Bitcoin Lightning zaps.</p>
                    <span className="bf-badge text-amber mono">⚡ Zap Released</span>
                  </div>
                </div>

                <div className="nostr-zap-dock">
                  <div className="zap-controller">
                    <span className="zap-label">SIMULATE NOSTR LIGHTNING MILESTONE ZAP:</span>
                    <div className="zap-slider-row">
                      <Coins size={16} className="text-amber" />
                      <input
                        type="range"
                        min="5000"
                        max="250000"
                        step="5000"
                        value={zapAmount}
                        onChange={(e) => {
                          setZapAmount(Number(e.target.value));
                          sound.playTick();
                        }}
                        className="custom-range-slider"
                      />
                      <span className="zap-amount mono text-amber">{zapAmount.toLocaleString()} sats</span>
                    </div>
                  </div>

                  <div className="sim-control-dock">
                    <button
                      type="button"
                      className="sim-execute-btn"
                      onClick={triggerSimulation}
                      disabled={isRunningSim}
                    >
                      <Zap size={14} />
                      <span>{isRunningSim ? 'Broadcasting Across Nostr Relays...' : 'Simulate 4-Step Nostr Flow'}</span>
                    </button>
                    {bitfundStep > 0 && (
                      <button type="button" className="sim-reset-btn" onClick={resetSimulation}>
                        <RotateCcw size={13} />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 04. BIMA (Hedera Decentralized Land Marketplace) */}
            {project.id === 'bima' && (
              <div className="sim-block bima-sim">
                <div className="land-parcel-selector">
                  <span className="box-title">SELECT VERIFIED LAND PARCEL (KENYA CADASTRE):</span>
                  <div className="parcel-buttons-row">
                    {Object.entries(bimaParcels).map(([key, parcel]) => (
                      <button
                        key={key}
                        type="button"
                        className={`parcel-select-btn ${selectedParcelId === key ? 'active' : ''}`}
                        onClick={() => {
                          sound.playTick();
                          setSelectedParcelId(key);
                          setBimaStep(0);
                        }}
                      >
                        <MapPin size={13} className="text-emerald" />
                        <span>{parcel.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hedera-pipeline-steps">
                  <div className={`hcs-card ${bimaStep >= 1 ? 'hcs-done' : ''}`}>
                    <div className="hcs-head">
                      <span className="hcs-badge">STEP 01</span>
                      <span className="hcs-state">{bimaStep >= 1 ? 'Tokenized' : 'Draft'}</span>
                    </div>
                    <span className="hcs-title">Hedera Token Service (HTS)</span>
                    <span className="hcs-desc">NFT Title Deed Minted: {bimaParcels[selectedParcelId].nftToken}</span>
                  </div>

                  <div className={`hcs-card ${bimaStep >= 2 ? 'hcs-done' : ''}`}>
                    <div className="hcs-head">
                      <span className="hcs-badge">STEP 02</span>
                      <span className="hcs-state">{bimaStep >= 2 ? 'Consensus Verified' : 'Pending Signatures'}</span>
                    </div>
                    <span className="hcs-title">Multi-Sig Consensus (HCS)</span>
                    <span className="hcs-desc">{bimaParcels[selectedParcelId].surveyor}</span>
                  </div>

                  <div className={`hcs-card ${bimaStep >= 3 ? 'hcs-done' : ''}`}>
                    <div className="hcs-head">
                      <span className="hcs-badge">STEP 03</span>
                      <span className="hcs-state">{bimaStep >= 3 ? 'Escrow Settled' : 'Funds Locked'}</span>
                    </div>
                    <span className="hcs-title">Hedera Smart Escrow</span>
                    <span className="hcs-desc">Atomic Settlement: {bimaParcels[selectedParcelId].price} Disbursed</span>
                  </div>
                </div>

                <div className="sim-control-dock">
                  <button
                    type="button"
                    className="sim-execute-btn"
                    onClick={triggerSimulation}
                    disabled={isRunningSim}
                  >
                    <Shield size={14} />
                    <span>{isRunningSim ? 'Reaching Hedera aBFT Consensus...' : 'Execute Title Verification & Escrow'}</span>
                  </button>
                  {bimaStep > 0 && (
                    <button type="button" className="sim-reset-btn" onClick={resetSimulation}>
                      <RotateCcw size={13} />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* 05. SkillReceipt (Stellar Soroban Rust Escrow) */}
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
                <p className="arch-desc-paragraph">{project.extendedNarrative || project.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Formal Invariants */}
        {activeTab === 'invariants' && (
          <div className="stage-invariants-wrapper">
            <div className="invariants-blueprint-box">
              <span className="invariants-box-title">CRYPTOGRAPHIC &amp; RUNTIME INVARIANTS</span>
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
          <span className="scf-cat">{project.ecosystem}</span>
        </div>
      </div>
    </div>
  );
}

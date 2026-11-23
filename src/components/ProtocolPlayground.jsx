import React, { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProtocolPlayground() {
  const [activeVm, setActiveVm] = useState('base');
  const [copied, setCopied] = useState(false);

  const vms = [
    {
      id: 'base',
      name: 'Base L2',
      vm: 'EVM / Bedrock',
      language: 'Solidity 0.8.24',
      badge: 'EVM · Layer 2',
      project: { name: 'VERIA', url: 'https://veria-basix.vercel.app/' },
      paradigm: 'Account-based state transitions with Bedrock OP-Stack fraud proof rollups.',
      invariant: 'EIP-712 structured cryptographic signatures & 25,000 PAS slashable stake collateral.',
      code: `// VERIA Autonomous Agent Verification Stake Gate on Base L2
contract VeriaStakeGate is Ownable, ReentrancyGuard {
    struct AgentStake {
        uint256 bondedAmount;
        bytes32 mettaRuleHash;
        uint64 bondedTimestamp;
        bool isSlashed;
    }
    mapping(address => AgentStake) public stakes;

    // Collateral is locked as accountability. Misbehavior has economic weight.
    function bondAgentCollateral(bytes32 _ruleHash) external payable nonReentrant {
        require(msg.value >= MINIMUM_STAKE, "Insufficient Stake Collateral");
        stakes[msg.sender] = AgentStake(msg.value, _ruleHash, uint64(block.timestamp), false);
        emit StakeBonded(msg.sender, msg.value, _ruleHash);
    }

    // Symbolic proof verification before action execution
    function verifyProofAndExecute(bytes32 _proofTreeHash, bytes calldata _sig) external {
        require(verifySigner(msg.sender, _proofTreeHash, _sig), "Invalid MeTTa Signature");
        emit AgentActionAttested(msg.sender, _proofTreeHash);
    }
}`
    },
    {
      id: 'sui',
      name: 'Sui',
      vm: 'Sui Move VM',
      language: 'Move (Resource-Centric)',
      badge: 'Object-Centric · Sub-Second',
      project: { name: 'Trepa', url: 'https://trepa-sui.vercel.app/' },
      paradigm: 'Object-centric data storage with single-owner dual-path Byzantine consensus.',
      invariant: 'Atomic execution via Programmable Transaction Blocks without manual routing.',
      code: `// Trepa Natural Language Intent Solver Execution on Sui Move
module trepa::intent_solver {
    use sui::coin::{Self, Coin};
    use sui::tx_context::{TxContext};

    // Plain-English goals become executable PTBs with risk analysis
    public entry fun execute_intent_bundle<T>(
        intent_coin: Coin<T>,
        min_yield_bps: u64,
        ctx: &mut TxContext
    ) {
        // Enforce maximum deviation constraint at bytecode execution
        assert!(min_yield_bps >= 450, E_EXCESSIVE_SLIPPAGE);
        // Atomically deposit into audited yield strategy vault
        deposit_vault(intent_coin, ctx);
    }
}`
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin & Nostr',
      vm: 'Nostr NIP-01 / Lightning',
      language: 'Rust / TypeScript SDK',
      badge: 'Bitcoin · Nostr Protocol',
      project: { name: 'bitfund', url: 'https://bitcoin-catalyst.shakespeare.wtf/' },
      paradigm: 'Censorship-resistant decentralized event mesh coupled with Lightning zap micro-settlement.',
      invariant: 'Cryptographic Schnorr event signing, transparent relay propagation, and non-custodial zaps.',
      code: `// bitfund Nostr Proposal Publishing & Lightning Milestone Escrow
import { finalizeEvent, verifyEvent } from 'nostr-tools';

export const publishBitcoinProposal = async (proposalPayload, userPrivateKey) => {
  // Propose. Review. Fund. Track. Every step on Nostr.
  const eventTemplate = {
    kind: 30023, // Long-form proposal event
    created_at: Math.floor(Date.now() / 1000),
    tags: [
      ['d', proposalPayload.slug],
      ['title', proposalPayload.title],
      ['budget', proposalPayload.targetBtc],
      ['zap', proposalPayload.lightningAddress]
    ],
    content: proposalPayload.markdownNarrative
  };

  const signedEvent = finalizeEvent(eventTemplate, userPrivateKey);
  return await broadcastToRelays(signedEvent);
};`
    },
    {
      id: 'hedera',
      name: 'Hedera',
      vm: 'Hashgraph HCS + HTS',
      language: 'Solidity / Hedera SDK',
      badge: 'Hashgraph · aBFT',
      project: { name: 'BIMA', url: 'https://bima-heder.vercel.app/' },
      paradigm: 'Asynchronous Byzantine Fault Tolerant directed acyclic graph (DAG) consensus.',
      invariant: 'Tokenized Land Titles (HTS NFTs) & Multi-Sig Surveyor Consensus eliminate deed fraud.',
      code: `// BIMA Hedera Land Title Tokenization & Multi-Sig Escrow
import { TokenCreateTransaction, TokenType, Hbar } from "@hashgraph/sdk";

// Secure land transactions with Hedera-verified ownership
export const mintLandTitleNFT = async (client, parcelMetadata) => {
  const nftCreateTx = new TokenCreateTransaction()
    .setTokenName("BIMA Verified Land Title")
    .setTokenSymbol("BLAND")
    .setTokenType(TokenType.NonFungibleUnique)
    .setDecimals(0)
    .setInitialSupply(0)
    .setTreasuryAccountId(TREASURY_ACCOUNT)
    .setAdminKey(ADMIN_MULTI_SIG_KEY)
    .setSupplyKey(SUPPLY_KEY);

  const response = await nftCreateTx.execute(client);
  return await response.getReceipt(client);
};`
    },
    {
      id: 'stellar',
      name: 'Stellar',
      vm: 'Soroban WASM',
      language: 'Rust (no_std)',
      badge: 'Soroban · Predictable Fees',
      project: { name: 'SkillReceipt', url: 'https://skillreceiptstellar.vercel.app/' },
      paradigm: 'WebAssembly execution environment with predictable host-level state isolation.',
      invariant: 'Host-environment state isolation and formal Soroban authorization verification.',
      code: `// SkillReceipt Soroban Escrow Settlement Contract (Rust)
#[contract]
pub struct EscrowContract;

#[contractimpl]
impl EscrowContract {
    // Lock payments safely in escrow, verify Git commit, and release
    pub fn release_milestone(env: Env, milestone_id: u32, client: Address, git_sha: BytesN<20>) {
        // Enforce formal client authorization signature
        client.require_auth();
        let mut state: EscrowState = env.storage().instance().get(&milestone_id).unwrap();
        assert!(!state.is_released, "Milestone already settled");

        // Bind deliverable to verifiable digital receipt
        state.is_released = true;
        state.verified_commit = git_sha;
        env.storage().instance().set(&milestone_id, &state);
    }
}`
    }
  ];

  const currentVm = vms.find((v) => v.id === activeVm) || vms[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentVm.code);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-block" id="playground">
      <div className="section-header">
        <span className="section-badge mono">MULTI-VM ARCHITECTURE</span>
        <h2 className="section-title">Protocol Playground</h2>
        <p className="section-desc">
          Compare execution environments, smart contract invariants, and state management models implemented across the 5 production architectures.
        </p>
      </div>

      <div className="playground-container">
        {/* VM Selector Tabs */}
        <div className="vm-tabs-track">
          {vms.map((vm) => (
            <button
              key={vm.id}
              type="button"
              className={`vm-tab-btn ${activeVm === vm.id ? 'active' : ''}`}
              onClick={() => {
                sound.playTick();
                setActiveVm(vm.id);
              }}
            >
              <span className="vm-tab-name">{vm.name}</span>
              <span className="vm-tab-badge mono">{vm.badge.split('·')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Playground Console */}
        <div className="playground-console">
          {/* Console Header Bar */}
          <div className="pg-console-header">
            <div className="pg-header-meta">
              <span className="pg-chip mono">{currentVm.vm}</span>
              <span className="pg-chip mono text-emerald">{currentVm.language}</span>
              <span className="pg-project-link">
                Showcase Project: <strong>{currentVm.project.name}</strong>
              </span>
            </div>

            <div className="pg-header-actions">
              <button
                type="button"
                className="copy-code-btn"
                onClick={handleCopyCode}
                title="Copy smart contract code"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Code</span>
                  </>
                )}
              </button>

              {currentVm.project.url && (
                <a
                  href={currentVm.project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pg-launch-link"
                >
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>

          {/* Code Viewport */}
          <div className="pg-code-viewport">
            <pre className="pg-code-block mono">
              <code>{currentVm.code}</code>
            </pre>
          </div>

          {/* Invariants & Paradigm Footer Strip */}
          <div className="pg-console-footer">
            <div className="pg-footer-col">
              <span className="pg-footer-lbl mono">CONCURRENCY &amp; STATE PARADIGM:</span>
              <p className="pg-footer-val">{currentVm.paradigm}</p>
            </div>
            <div className="pg-footer-col">
              <span className="pg-footer-lbl mono">CORE SECURITY INVARIANT:</span>
              <p className="pg-footer-val text-emerald">{currentVm.invariant}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

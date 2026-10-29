import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Terminal } from 'lucide-react';
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
      project: { name: 'VERIA & Hashmark', url: 'https://veria-basix.vercel.app/' },
      paradigm: 'Account-based state transitions with Bedrock OP-Stack fraud proof rollups.',
      invariant: 'EIP-712 structured cryptographic signatures & slashable economic stake collateral.',
      code: `// VERIA Autonomous Agent Verification Stake Gate on Base L2
contract VeriaStakeGate is Ownable, ReentrancyGuard {
    struct AgentStake {
        uint256 bondedAmount;
        bytes32 mettaRuleHash;
        uint64 bondedTimestamp;
        bool isSlashed;
    }
    mapping(address => AgentStake) public stakes;

    function bondAgentCollateral(bytes32 _ruleHash) external payable nonReentrant {
        require(msg.value >= MINIMUM_STAKE, "Insufficient Stake Collateral");
        stakes[msg.sender] = AgentStake(msg.value, _ruleHash, uint64(block.timestamp), false);
        emit StakeBonded(msg.sender, msg.value, _ruleHash);
    }
}`
    },
    {
      id: 'sui',
      name: 'Sui',
      vm: 'Sui Move VM',
      language: 'Move (Resource-Centric)',
      badge: 'Object-Centric · Sub-Second',
      project: { name: 'Trepa Intent Engine', url: 'https://trepa-sui.vercel.app/' },
      paradigm: 'Object-centric data storage with single-owner dual-path Byzantine consensus.',
      invariant: 'Atomic execution via Programmable Transaction Blocks without manual routing.',
      code: `// Trepa Natural Language Intent Solver Execution on Sui Move
module trepa::intent_solver {
    use sui::coin::{Self, Coin};
    use sui::tx_context::{TxContext};

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
    pub fn release_milestone(env: Env, milestone_id: u32, client: Address) {
        // Verify caller has formal client authorization signature
        client.require_auth();
        let mut state: EscrowState = env.storage().instance().get(&milestone_id).unwrap();
        assert!(!state.is_released, "Milestone already settled");
        state.is_released = true;
        env.storage().instance().set(&milestone_id, &state);
    }
}`
    },
    {
      id: 'hedera',
      name: 'Hedera',
      vm: 'Hashgraph HCS + HSCS',
      language: 'Solidity / Hedera SDK',
      badge: 'Hashgraph · aBFT',
      project: { name: 'Bima Parametric', url: 'https://bima-heder.vercel.app/' },
      paradigm: 'Asynchronous Byzantine Fault Tolerant directed acyclic graph (DAG) consensus.',
      invariant: 'Asynchronous Byzantine Fault Tolerant fair timestamp consensus ordering.',
      code: `// Bima Parametric Weather Oracle Consensus Submission
const submitOracleConsensus = async (rainfallIndex, parcelId) => {
  const transaction = new TopicMessageSubmitTransaction({
    topicId: HEDERA_WEATHER_TOPIC_ID,
    message: JSON.stringify({
      rainfallIndex,
      parcelId,
      timestamp: Date.now(),
      oracleSignature: await signPayload(rainfallIndex)
    })
  });
  const txResponse = await transaction.execute(client);
  return txResponse.getReceipt(client);
};`
    },
    {
      id: 'stacks',
      name: 'Stacks (Bitcoin L2)',
      vm: 'Clarity VM',
      language: 'Clarity (Decidable Lisp)',
      badge: 'Bitcoin L2 · Turing-Decidable',
      project: { name: 'BlockForge Catalyst', url: 'https://bitcoin-catalyst.shakespeare.wtf/' },
      paradigm: 'Turing-incomplete decidable smart contract language anchored to Bitcoin blocks.',
      invariant: 'Non-Turing complete execution mathematically prevents reentrancy and infinite loops.',
      code: `;; BlockForge Bitcoin Catalyst Grant Governance (Clarity)
(define-public (cast-quadratic-vote (grant-id uint) (voting-credits uint))
  (let ((weight (sqrti voting-credits)))
    (begin
      (asserts! (>= (get-stx-balance tx-sender) voting-credits) (err u403))
      (map-set grant-tally grant-id (+ (default-to u0 (map-get? grant-tally grant-id)) weight))
      (ok weight))))`
    },
    {
      id: 'icp',
      name: 'Internet Computer',
      vm: 'ICP Canister Subnet',
      language: 'Motoko Actors',
      badge: 'Canister · Orthogonal State',
      project: { name: 'SecurePass Access', url: 'https://ocw66-bqaaa-aaaai-aqcrq-cai.icp0.io/' },
      paradigm: 'Actor-based orthogonal persistence eliminating external relational databases.',
      invariant: 'Subnet-replicated actor ledger immutable to hardware tampering and server reboots.',
      code: `// SecurePass Visitor Access Authorization Canister (Motoko)
import Time "mo:base/Time";
import HashMap "mo:base/HashMap";

actor class SecurePass() {
    private var passes = HashMap.HashMap<Text, PassRecord>(10, Text.equal, Text.hash);

    public shared({caller}) func issueGuestPass(guestName: Text, validHours: Nat) : async PassRecord {
        let record : PassRecord = {
            id = generatePassHash(guestName, Time.now());
            holder = guestName;
            issuedAt = Time.now();
            expiresAt = Time.now() + (validHours * 3600 * 1000000000);
        };
        passes.put(record.id, record);
        return record;
    };
}`
    },
    {
      id: 'beam',
      name: 'Elixir / BEAM',
      vm: 'BEAM Virtual Machine',
      language: 'Elixir 1.17',
      badge: 'Concurrent · Actor Model',
      project: { name: 'ROLAX IoT Telemetry', url: 'https://github.com/mokayaj857/rolax.git' },
      paradigm: 'Preemptive lightweight actor processes with dynamic supervisor trees.',
      invariant: 'BEAM GenServer process supervision isolating hardware disconnects in <3.2ms.',
      code: `# ROLAX Municipal Telemetry Dynamic Supervision Worker (Elixir)
defmodule Rolax.Telemetry.Worker do
  use GenServer, restart: :transient

  def start_link(sensor_id) do
    GenServer.start_link(__MODULE__, sensor_id, name: via_tuple(sensor_id))
  end

  @impl true
  def handle_info({:telemetry_packet, payload}, state) do
    case validate_sensor_telemetry(payload) do
      {:ok, valid_data} ->
        broadcast_flow_metrics(valid_data)
        {:noreply, state}
      {:anomaly, error} ->
        trigger_safety_valve_cutoff(state.sensor_id)
        {:stop, :sensor_breach, state}
    end
  end
end`
    }
  ];

  const currentVm = vms.find(v => v.id === activeVm) || vms[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentVm.code);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-wrapper protocol-playground-section" id="playground">
      <div className="section-header-block">
        <div className="header-meta-tag">
          <span className="meta-dot"></span>
          <span className="section-eyebrow">MULTI-VM ARCHITECTURE LAB</span>
        </div>
        <h2 className="section-heading">Cross-VM Execution &amp; Language Invariants</h2>
        <p className="section-description">
          Direct implementation comparison across 6 distinct blockchain virtual machines and the BEAM actor engine. Select an execution environment to inspect its computational paradigm, security invariant, and production contract code.
        </p>
      </div>

      <div className="vm-console-container">
        {/* VM Selector Tabs */}
        <div className="vm-tabs-ribbon">
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
              <span className="vm-tab-lang mono">{vm.language.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active VM Hardware Stage */}
        <div className="vm-active-stage">
          {/* Top Metadata Header */}
          <div className="vm-meta-banner">
            <div className="vm-meta-left">
              <span className="vm-badge-glow">{currentVm.badge}</span>
              <div className="vm-titles">
                <h3 className="vm-display-name">{currentVm.name} · {currentVm.language}</h3>
                <span className="vm-target-arch mono">Target Runtime: {currentVm.vm}</span>
              </div>
            </div>

            <div className="vm-meta-right">
              {currentVm.project.url && (
                <a
                  href={currentVm.project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="vm-project-link"
                  onClick={() => sound.playClick()}
                >
                  <span>Protocol: {currentVm.project.name}</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>

          {/* Guarantees Strip */}
          <div className="vm-guarantees-grid">
            <div className="guarantee-box">
              <span className="g-label">COMPUTATIONAL PARADIGM:</span>
              <p className="g-text">{currentVm.paradigm}</p>
            </div>
            <div className="guarantee-box">
              <span className="g-label">VERIFIED SECURITY INVARIANT:</span>
              <p className="g-text text-emerald font-medium">✓ {currentVm.invariant}</p>
            </div>
          </div>

          {/* Code Viewport with Copy Button */}
          <div className="vm-code-viewport">
            <div className="code-top-controls">
              <div className="ct-left">
                <Terminal size={14} className="text-amber" />
                <span className="ct-filename mono">
                  {currentVm.id}.{currentVm.id === 'beam' ? 'ex' : currentVm.id === 'icp' ? 'mo' : currentVm.id === 'stacks' ? 'clar' : currentVm.id === 'stellar' ? 'rs' : currentVm.id === 'sui' ? 'move' : 'sol'}
                </span>
              </div>

              <button
                type="button"
                className="code-copy-btn"
                onClick={handleCopyCode}
                title="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>

            <pre className="vm-code-pre">
              <code>{currentVm.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

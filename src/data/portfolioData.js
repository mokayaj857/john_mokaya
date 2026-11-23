import veriaImg from '../assets/veria.png';
import trepaImg from '../assets/trepa.png';
import bitfundImg from '../assets/Bitfund.png';
import bitfundImg2 from '../assets/Bitfund1.png';
import bimaImg from '../assets/Bima.png';
import skillreceiptImg from '../assets/skillreceipt.png';
import hashmarkImg from '../assets/hashmark.png';
import setiImg from '../assets/seti.png';

export const personalInfo = {
  name: "John Mokaya",
  fullName: "John Mokaya Mogaka",
  role: "Full Stack & Distributed Systems Engineer",
  location: "Nairobi, Kenya",
  timezone: "EAT (UTC+3)",
  email: "mokayaj857@gmail.com",
  status: "Available for Software Engineering Roles & Contracts",
  tagline: "Building high-craft web interfaces, resilient backend architectures, and distributed systems with a focus on simplicity, performance, and human utility.",
  about: [
    "I'm a software developer based in Nairobi, Kenya, focused on advancing technology for the benefit of humanity. I build reliable web applications, distributed systems, and modern digital products.",
    "My engineering philosophy centers on clean architecture, deterministic state management, and building software that performs flawlessly regardless of connectivity or infrastructure constraints.",
    "When I'm not writing code, I actively participate in developer communities, mentor aspiring engineers, and explore open source systems."
  ],
  socials: {
    github: "https://github.com/mokayaj857",
    linkedin: "https://www.linkedin.com/in/john-mokaya-3b926a261",
    instagram: "https://www.instagram.com/sir.juniour",
    email: "mailto:mokayaj857@gmail.com"
  },
  skills: [
    {
      category: "Frontend & Interfaces",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Design Systems", "WebSockets", "Vite"]
    },
    {
      category: "Backend & Concurrency",
      items: ["Node.js", "Express", "Elixir & Phoenix", "Python", "REST APIs", "GraphQL", "Microservices"]
    },
    {
      category: "Databases & Infrastructure",
      items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Linux CLI", "Git", "GitHub", "Vercel"]
    },
    {
      category: "Protocols & Systems",
      items: ["Smart Contracts", "EVM / Solidity", "Sui Move", "Rust / Soroban", "Hedera HCS", "Bitcoin & Nostr"]
    }
  ],
  highlights: [
    {
      title: "Avalanche DAO Kenya Hackathon Winner",
      year: "2025",
      description: "First-place distinction for engineering anti-scalping digital ticketing infrastructure with automated price ceilings."
    },
    {
      title: "Distributed Water Telemetry Architecture",
      year: "2024",
      description: "Engineered concurrent telemetry ingestion with Elixir/Phoenix process supervision, handling high-throughput sensor streams."
    },
    {
      title: "Multi-VM Protocol Implementations",
      year: "2025 – 2026",
      description: "Implemented smart contracts and state machines across multiple blockchain execution environments including Base, Sui, Hedera, Stellar, and Bitcoin/Nostr."
    }
  ]
};

export const projects = [
  {
    id: "veria",
    number: "01",
    title: "VERIA",
    subtitle: "Verifiable Intelligence for Autonomous Agents",
    headline: "The Trust Layer for AI Agents",
    tagline: "Register. Stake. Remember. Decide.",
    description: "VERIA is the trust layer for AI agents: prove who they are, learn from experience, reason about trust, and stay accountable on-chain.",
    extendedNarrative: "Bridges neurosymbolic AI reasoning with immutable on-chain accountability. AI agents register on-chain identities, bond collateral into slashable Base L2 smart contracts, record verifiable interaction logs in the decentralized memory tier, and evaluate symbolic safety constraints via MeTTa Hyperon proof trees before executing autonomous actions.",
    ecosystem: "Base L2 · MeTTa AGI",
    badge: "EVM & Symbolic AGI",
    category: "AI Agents & Trust",
    accentColor: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.18)",
    aspectRatio: 2.1,
    image: veriaImg,
    images: [veriaImg],
    imageLabels: ["Platform Interface"],
    techStack: ["Base L2", "MeTTa AGI", "EIP-712", "Solidity 0.8.24", "Hyperon Proofs", "React"],
    liveUrl: "https://veria-basix.vercel.app/",
    githubUrl: "https://github.com/mokayaj857/veria",
    featured: true,
    status: "Live Protocol",
    architecture: "Base Bedrock Rollup + OpenCog Hyperon MeTTa Symbolic Rule Engine",
    invariants: [
      "EIP-712 structured cryptographic signatures for agent intent authorization.",
      "Economic slashable stake (25k PAS) penalizing verified protocol violations.",
      "Symbolic MeTTa rule validation ensuring deterministic reasoning before settlement."
    ],
    pillars: [
      {
        num: "01",
        title: "Register Identity",
        desc: "The agent records who it is and binds a blockchain wallet so VERIA always knows the subject of a request."
      },
      {
        num: "02",
        title: "Stake Tokens",
        desc: "Collateral is locked as accountability. Misbehavior has economic weight, not just a reputation ding."
      },
      {
        num: "03",
        title: "Record the Trail",
        desc: "VERIA logs actions, successes, failures, violations, and interactions as the agent works."
      },
      {
        num: "04",
        title: "Decide, and Show Why",
        desc: "MeTTa reasons. Omega remembers. VERIA approves, rejects, or limits — with the evidence in the open."
      }
    ],
    metrics: [
      { label: "Bonded Stake", val: "25,000 PAS" },
      { label: "Verification Latency", val: "< 1.8s" },
      { label: "Reasoning Tree", val: "MeTTa Hyperon" },
      { label: "Settlement", val: "Base L2 EVM" }
    ]
  },
  {
    id: "trepa",
    number: "02",
    title: "Trepa",
    subtitle: "Self-Funding Intent Engine & PTB Solver on Sui",
    headline: "Describe a goal. Trepa executes it.",
    tagline: "Plain-English goals become executable PTBs",
    description: "The first self-funding intent engine on Sui. Plain-English goals become executable PTBs with risk analysis, user approval, and autonomous treasury growth.",
    extendedNarrative: "Built natively on Sui's object-centric Move architecture. Users describe complex DeFi objectives in natural language, which Trepa's solver parses into multi-hop Programmable Transaction Blocks (PTBs). Every intent runs through a 6-phase pipeline with 3-tier risk safeguards, requiring explicit human approval, while capturing solver yield surpluses to grow an autonomous protocol treasury.",
    ecosystem: "Sui Move · PTB Solver",
    badge: "Object Move · Sub-Second",
    category: "Intent Engine & DeFi",
    accentColor: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.18)",
    aspectRatio: 1.47,
    image: trepaImg,
    images: [trepaImg],
    imageLabels: ["Intent Engine & Treasury"],
    techStack: ["Sui Move", "PTBs", "Sui TypeScript SDK", "Intent Parsing", "Risk Engine", "Tailwind CSS"],
    liveUrl: "https://trepa-sui.vercel.app/",
    githubUrl: "https://github.com/mokayaj857/trepa_sui",
    featured: true,
    status: "Live Engine",
    architecture: "Sui Move Object Model + Sub-second Byzantine Agreement + PTB Bundling",
    invariants: [
      "Atomic PTB execution guarantees all hops settle or the entire bundle aborts.",
      "Required Human Approval gate: cryptographic client signature mandatory for execution.",
      "Strict slippage bounding: transactions revert at bytecode if yield deviation exceeds threshold."
    ],
    pillars: [
      {
        num: "01",
        title: "Intent Parsing",
        desc: "Natural language goals translated into optimized multi-step Move transaction payloads."
      },
      {
        num: "02",
        title: "PTB Bundling",
        desc: "Sui Programmable Transaction Blocks execute coin splits, swaps, and deposits atomically."
      },
      {
        num: "03",
        title: "Guardian & Confirm",
        desc: "3-tier automated risk checks verify invariants before presenting transparent human confirmation."
      },
      {
        num: "04",
        title: "Treasury Growth",
        desc: "Autonomous protocol treasury accumulates fee micro-surpluses to fuel perpetual liquidity."
      }
    ],
    metrics: [
      { label: "PTB Finality", val: "380 ms" },
      { label: "Flow Pipeline", val: "6 Steps" },
      { label: "Safety Checks", val: "3 Risk Gates" },
      { label: "Human Verification", val: "Required Gate" }
    ]
  },
  {
    id: "bitfund",
    number: "03",
    title: "bitfund",
    subtitle: "Decentralized Public Bitcoin Crowdfunding on Nostr",
    headline: "Fund Bitcoin. Publicly.",
    tagline: "Propose. Review. Fund. Track. Every step on Nostr.",
    description: "Fund Bitcoin. Publicly. Propose. Review. Fund. Track. Every step on Nostr.",
    extendedNarrative: "A censorship-resistant crowdfunding and grant allocation protocol anchored entirely on the Nostr protocol and Bitcoin Lightning Network. Eliminates centralized gatekeepers: open-source builders publish proposals as cryptographically signed Nostr notes, undergo peer review and community fraud audits, receive milestone funding via Lightning zaps, and stream verifiable progress updates directly to backers.",
    ecosystem: "Bitcoin · Nostr Protocol",
    badge: "Bitcoin & Lightning",
    category: "Bitcoin & Nostr",
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.2)",
    aspectRatio: 1.95,
    image: bitfundImg,
    images: [bitfundImg, bitfundImg2],
    imageLabels: ["Platform Overview", "4-Step Transparent Flow"],
    techStack: ["Bitcoin", "Nostr NIP-01 / NIP-57", "Lightning Network", "WebLN", "React", "Clarity L2"],
    liveUrl: "https://bitcoin-catalyst.shakespeare.wtf/",
    githubUrl: "https://github.com/mokayaj857/bitfund",
    featured: true,
    status: "Live on Nostr",
    architecture: "Nostr Decentralized Relay Mesh + Bitcoin Lightning Network Zap Settlement",
    invariants: [
      "Decentralized censorship resistance: proposals live across sovereign Nostr relays.",
      "Verifiable Schnorr pubkey signatures on all proposals, peer reviews, and milestone updates.",
      "Sub-second Lightning Zap settlement with zero custodial intermediary counterparty risk."
    ],
    pillars: [
      {
        num: "01",
        title: "Publish",
        desc: "Describe problem, budget, and milestones via signed Nostr protocol events."
      },
      {
        num: "02",
        title: "Discuss",
        desc: "Community surfaces technical risks, architecture reviews, and delivery constraints."
      },
      {
        num: "03",
        title: "Review",
        desc: "Proposals scored publicly on real-world impact, technical feasibility, and budget."
      },
      {
        num: "04",
        title: "Track & Fund",
        desc: "Milestone-based Bitcoin Lightning zaps unlocked upon verifiable public progress."
      }
    ],
    metrics: [
      { label: "Relay Protocol", val: "Nostr NIP-01" },
      { label: "Payment Rail", val: "Lightning Zaps" },
      { label: "Workflow", val: "4 Steps Public" },
      { label: "Intermediary Fee", val: "0% Rent" }
    ]
  },
  {
    id: "bima",
    number: "04",
    title: "BIMA",
    subtitle: "Decentralized Land Marketplace with Hedera-Verified Ownership",
    headline: "Decentralized Land Marketplace",
    tagline: "Trust • Speed • On-Chain Security",
    description: "Decentralized Land Marketplace: Trust • Speed • On-Chain Security. Secure land transactions with Hedera-verified ownership.",
    extendedNarrative: "Engineered to eliminate systemic land fraud, double-allocation, and paper registry forgery. BIMA leverages Hedera Hashgraph to tokenize parcel deeds into immutable NFTs, orchestrates multi-sig community validations with licensed local surveyors, and locks payments in automated smart escrows that disburse only upon cryptographically confirmed title deed transfer.",
    ecosystem: "Hedera Hashgraph · HCS",
    badge: "Hashgraph aBFT",
    category: "Real World Assets & Land",
    accentColor: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.2)",
    aspectRatio: 0.96,
    isPortrait: true,
    image: bimaImg,
    images: [bimaImg],
    imageLabels: ["Land Marketplace & Titles"],
    techStack: ["Hedera Hashgraph", "HCS", "Token Service (HTS)", "Smart Contracts", "Hedera SDK", "GIS"],
    liveUrl: "https://bima-heder.vercel.app/",
    githubUrl: "https://github.com/mokayaj857/bima11",
    featured: true,
    status: "Live Marketplace",
    architecture: "Hedera Consensus Service (HCS) Fair Timestamping + Hedera Token Service (HTS) NFTs",
    invariants: [
      "Hedera aBFT consensus guarantees fair timestamping, permanently preventing title backdating.",
      "Multi-sig verification requiring dual sign-off from licensed surveyors and local registries.",
      "Atomic Smart Escrow swapping USDC/HBAR payment and NFT title deed simultaneously."
    ],
    pillars: [
      {
        num: "01",
        title: "Tokenized Land Titles",
        desc: "NFTs on Hedera represent immutable ownership proof, completely eliminating deed fraud."
      },
      {
        num: "02",
        title: "Multi-Sig Verification",
        desc: "Trusted inspectors and licensed surveyors validate parcel boundaries through blockchain consensus."
      },
      {
        num: "03",
        title: "Smart Escrow",
        desc: "Automated payments settled instantly upon verified cryptographic title transfer."
      },
      {
        num: "04",
        title: "On-Chain Security",
        desc: "Asynchronous Byzantine Fault Tolerant consensus guarantees permanent record finality."
      }
    ],
    metrics: [
      { label: "Consensus Security", val: "Hedera aBFT" },
      { label: "Settlement Finality", val: "< 3.0s" },
      { label: "Network Fee", val: "$0.0001 Fixed" },
      { label: "Double Selling", val: "0% Prevented" }
    ]
  },
  {
    id: "skillreceipt",
    number: "05",
    title: "SkillReceipt",
    subtitle: "Trustless Freelance Escrow & Verifiable Digital Receipts",
    headline: "Trustless Freelance. Guaranteed Payments.",
    tagline: "Lock payments safely in escrow, collaborate with peace of mind, and instantly generate verifiable digital receipts.",
    description: "Trustless Freelance. Guaranteed Payments. Lock payments safely in escrow, collaborate with peace of mind, and instantly generate verifiable digital receipts when the job is done.",
    extendedNarrative: "A decentralized escrow and verifiable credentials platform built on Stellar's Soroban WebAssembly engine in Rust. Clients lock milestone payments into deterministic smart contracts, deliverables are verified against cryptographic Git commit digests, and both parties receive immutable, portable on-chain digital receipts demonstrating verified skill execution.",
    ecosystem: "Stellar · Soroban WASM",
    badge: "Soroban WASM · Rust",
    category: "Escrow & Credentials",
    accentColor: "#6366f1",
    accentGlow: "rgba(99, 102, 241, 0.2)",
    aspectRatio: 2.1,
    image: skillreceiptImg,
    images: [skillreceiptImg],
    imageLabels: ["Escrow & Receipt Engine"],
    techStack: ["Stellar", "Soroban WASM", "Rust (no_std)", "Freighter Wallet", "Milestone Escrow", "Next.js"],
    liveUrl: "https://skillreceiptstellar.vercel.app/",
    githubUrl: "https://github.com/mokayaj857/skillreceipt_stellar",
    featured: true,
    status: "Live Protocol",
    architecture: "Stellar Soroban Rust Host Environment + SHA-256 Deliverable Commitment",
    invariants: [
      "Soroban client.require_auth() guarantees non-custodial milestone release verification.",
      "Cryptographic Git commit hash binding prevents deliverable tampering or scope creep.",
      "Deterministic digital receipt minting provides irrevocable proof of completed work."
    ],
    pillars: [
      {
        num: "01",
        title: "Lock in Escrow",
        desc: "Clients lock project payments into deterministic Rust Soroban smart contracts upfront."
      },
      {
        num: "02",
        title: "Deliver & Verify",
        desc: "Contractors submit completed deliverables cryptographically tied to Git commit SHA digests."
      },
      {
        num: "03",
        title: "Instant Release",
        desc: "Formal client authorization triggers instant, zero-delay payout release."
      },
      {
        num: "04",
        title: "Verifiable Receipts",
        desc: "Generates tamper-evident digital receipts serving as permanent on-chain proof of skill."
      }
    ],
    metrics: [
      { label: "Smart Contract", val: "Soroban Rust" },
      { label: "Transaction Fee", val: "< $0.0001" },
      { label: "Payment Safety", val: "100% Escrowed" },
      { label: "Proof Binding", val: "Git Commit SHA" }
    ]
  },
  {
    id: "hashmark",
    number: "06",
    title: "Hashmark",
    subtitle: "A Ledger for Reality & Cryptographic Device Attestation",
    headline: "A LEDGER FOR REALITY",
    tagline: "Hashmark doesn't chase deepfakes. It proves reality.",
    description: "Hashmark doesn't chase deepfakes. It proves reality. Bind digital content to verified devices and decentralized identities at the moment of creation.",
    extendedNarrative: "Engineered to prove digital content authenticity at the hardware tier. Hashmark binds media captured on mobile devices to cryptographic hardware keys and decentralized identities, anchoring verifiable C2PA tamper-proof manifests onto Base L2 with sub-cent gas overhead.",
    ecosystem: "Base L2 · Device Attestation",
    badge: "EIP-712 & C2PA",
    category: "Provenance & Reality Ledger",
    accentColor: "#f43f5e",
    accentGlow: "rgba(244, 63, 94, 0.18)",
    aspectRatio: 1.49,
    image: hashmarkImg,
    images: [hashmarkImg],
    imageLabels: ["Reality Ledger & Device Attestation"],
    techStack: ["Base L2", "Hardware Attestation", "EIP-712", "C2PA Provenance", "Solidity", "Next.js"],
    liveUrl: "https://hashmark-base.vercel.app/",
    githubUrl: "https://github.com/mokayaj857/hasmark_360",
    featured: true,
    status: "Live Protocol",
    architecture: "Base Bedrock Rollup + Secure Enclave Hardware Attestation + C2PA Manifests",
    invariants: [
      "Hardware-bound cryptographic signatures verify device identity at moment of capture.",
      "Immutable C2PA content credentials anchored onto Base L2 ledger.",
      "Zero-knowledge validation preserving creator privacy while proving provenance."
    ],
    pillars: [
      {
        num: "01",
        title: "Capture & Sign",
        desc: "Digital content is cryptographically signed inside device secure enclave hardware."
      },
      {
        num: "02",
        title: "Verify Device",
        desc: "Decentralized identity confirms authorized device integrity and ownership."
      },
      {
        num: "03",
        title: "Anchor on Base",
        desc: "Tamper-evident attestation hash is recorded permanently on Base L2 blockchain."
      },
      {
        num: "04",
        title: "Prove Reality",
        desc: "Anyone can verify capture authenticity in sub-second latency without trusting intermediaries."
      }
    ],
    metrics: [
      { label: "Attestation Settlement", val: "Base L2" },
      { label: "Provenance Standard", val: "C2PA Compatible" },
      { label: "Hardware Security", val: "Secure Enclave" },
      { label: "Verification Latency", val: "< 1.5s" }
    ]
  },
  {
    id: "seti",
    number: "07",
    title: "Seti",
    subtitle: "Decentralized Binary Prediction & Settlement Engine",
    headline: "Live Yes/No Polymarket on Blockchain",
    tagline: "Decentralized binary outcome prediction markets settled autonomously on-chain.",
    description: "A live yes-or-no prediction market built on blockchain. Traders take binary outcome positions, pool liquidity, and settle oracle-verified world events trustlessly on-chain.",
    extendedNarrative: "A decentralized binary prediction market protocol inspired by Polymarket, built on EVM. Traders take 'Yes' or 'No' positions on verifiable real-world outcomes, provide automated liquidity through a constant-product conditional token pool, and resolve markets through decentralized oracle consensus with programmatic payout distribution.",
    ecosystem: "Base / EVM · Prediction Market",
    badge: "Binary AMM & Oracles",
    category: "Prediction Markets & DeFi",
    accentColor: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.18)",
    aspectRatio: 1.05,
    image: setiImg,
    images: [setiImg],
    imageLabels: ["Prediction Market & Settlement Engine"],
    techStack: ["Base EVM", "Binary AMM", "Conditional Tokens", "Oracle Settlement", "Solidity", "React"],
    liveUrl: "https://setimvp.vercel.app/",
    githubUrl: "https://github.com/mokayaj857/seti",
    featured: true,
    status: "Live Protocol",
    architecture: "Base EVM Smart Contracts + Binary Outcome AMM + Decentralized Resolution Oracle",
    invariants: [
      "Binary outcome tokens (YES/NO) guaranteed to settle at 1.00 USDC aggregate par value.",
      "Deterministic oracle resolution triggering instant, non-custodial winnings redemption.",
      "Constant-product market maker pool providing continuous liquidity for active traders."
    ],
    pillars: [
      {
        num: "01",
        title: "Market Creation",
        desc: "Arbitrators or DAO propose binary event questions with verified oracle feeds."
      },
      {
        num: "02",
        title: "Liquidity AMM",
        desc: "Automated market maker maintains continuous pricing based on collective probability."
      },
      {
        num: "03",
        title: "Trade & Hedge",
        desc: "Participants trade binary shares instantly with sub-cent transaction costs."
      },
      {
        num: "04",
        title: "Oracle Resolution",
        desc: "Verifiable oracle signals event outcome, instantly unlocking contract payouts."
      }
    ],
    metrics: [
      { label: "Market Type", val: "Binary (YES/NO)" },
      { label: "Settlement Layer", val: "Base / EVM" },
      { label: "Pricing Engine", val: "Conditional AMM" },
      { label: "Counterparty Risk", val: "0% Non-Custodial" }
    ]
  }
];

// Alias for backwards compatibility
export const projectSlots = projects;

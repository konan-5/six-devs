export type Project = {
  id: number;
  name: string;
  image: string;
  tagline: string;
  description: string;
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Gatewayz.ai",
    image: "/projects/1.png",
    tagline: "AI gateway infrastructure",
    description:
      "Production-ready API gateway that unifies access to over 10000+ AI models from providers like OpenRouter, Portkey, Featherless, and Chutes via OpenAI-compatible endpoints.",
    stack: ["Next.js", "FastAPI", "Supabase", "Vercel"],
  },
  {
    id: 2,
    name: "Olara Wallet",
    image: "/projects/2.jpg",
    tagline: "Self-custodial wallet experience",
    description:
      "A secure, user-first wallet for managing digital assets of 100+ chains with clean UX, robust key handling, and seamless on-chain interactions.",
    stack: ["Java", "Android", "iOS", "Hedera SDK"],
  },
  {
    id: 3,
    name: "SuperSol",
    image: "/projects/3.jpg",
    tagline: "Solana ecosystem tooling",
    description:
      "A next-generation Solana Layer 2 rollup scaling solution that transitions from optimistic to zero-knowledge validation to power high-performance GameFi, DePIN, and DeFi applications.",
    stack: ["Rust", "Solana", "Rollup", "Bridge", "CDK"],
  },
  {
    id: 4,
    name: "Hyperlend",
    image: "/projects/4.png",
    tagline: "On-chain lending experience",
    description:
      "High-performance lending protocol on Hyperliquid, built for capital efficiency. It offers real-time leverage, dynamic rates, and deep liquidity access. Built for traders, quants, and market makers in need of efficient lending.",
    stack: ["React", "TypeScript", "Hyperliquid", "Web3.js"],
  },
];

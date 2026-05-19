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
    image: "/projects/1.jpg",
    tagline: "AI gateway infrastructure",
    description:
      "An intelligent routing layer for model and API traffic—built for low-latency inference, observability, and production-grade reliability at scale.",
    stack: ["TypeScript", "Node.js", "Redis", "AWS"],
  },
  {
    id: 2,
    name: "Olara Wallet",
    image: "/projects/2.jpg",
    tagline: "Self-custodial wallet experience",
    description:
      "A secure, user-first wallet for managing digital assets with clean UX, robust key handling, and seamless on-chain interactions.",
    stack: ["React", "Solana", "Web3.js", "TypeScript"],
  },
  {
    id: 3,
    name: "SuperSol",
    image: "/projects/3.jpg",
    tagline: "Solana ecosystem tooling",
    description:
      "High-performance tooling on Solana—optimized transaction flows, wallet connectivity, and infrastructure tuned for speed and composability.",
    stack: ["Rust", "Solana", "Anchor", "React"],
  },
];

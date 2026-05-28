export type Deal = {
  acquirer: string;
  target: string;
  value: string;
  sector: string;
  announced: string;
  fairPremium: number;
  actualPremium: number;
  delta: number;
  overpayIndex: number;
  verdict: string;
  confidence: number;
  drivers: string[];
};

export const featuredDeals: Deal[] = [
  {
    acquirer: "Microsoft",
    target: "Activision Blizzard",
    value: "$68.7B",
    sector: "Gaming / Software",
    announced: "2022",
    fairPremium: 31,
    actualPremium: 48,
    delta: 17,
    overpayIndex: 82,
    verdict: "Likely overpaid",
    confidence: 87,
    drivers: ["Strategic scarcity", "Regulatory drag", "Content moat", "Platform synergies"]
  },
  {
    acquirer: "Broadcom",
    target: "VMware",
    value: "$61.0B",
    sector: "Infrastructure Software",
    announced: "2022",
    fairPremium: 24,
    actualPremium: 44,
    delta: 20,
    overpayIndex: 88,
    verdict: "Significant overpay",
    confidence: 91,
    drivers: ["Margin expansion", "Financing cycle", "Enterprise lock-in", "Multiple compression"]
  },
  {
    acquirer: "Elon Musk",
    target: "Twitter",
    value: "$44.0B",
    sector: "Social Media",
    announced: "2022",
    fairPremium: 14,
    actualPremium: 38,
    delta: 24,
    overpayIndex: 94,
    verdict: "Severe overpay",
    confidence: 93,
    drivers: ["Governance risk", "Market reversal", "Monetization gap", "Competitive intensity"]
  },
  {
    acquirer: "Adobe",
    target: "Figma",
    value: "$20.0B",
    sector: "Design Software",
    announced: "2022",
    fairPremium: 42,
    actualPremium: 67,
    delta: 25,
    overpayIndex: 86,
    verdict: "Strategic overpay",
    confidence: 84,
    drivers: ["Category control", "High growth", "Antitrust pressure", "Revenue multiple"]
  },
  {
    acquirer: "Amazon",
    target: "MGM",
    value: "$8.5B",
    sector: "Media",
    announced: "2021",
    fairPremium: 29,
    actualPremium: 29,
    delta: 0,
    overpayIndex: 36,
    verdict: "Fair value",
    confidence: 76,
    drivers: ["Content library", "Streaming strategy", "Moderate premium", "Scale fit"]
  },
  {
    acquirer: "Salesforce",
    target: "Slack",
    value: "$27.7B",
    sector: "Collaboration Software",
    announced: "2020",
    fairPremium: 38,
    actualPremium: 55,
    delta: 17,
    overpayIndex: 79,
    verdict: "Premium stretched",
    confidence: 82,
    drivers: ["Strategic defense", "Product adjacency", "Growth durability", "Integration risk"]
  }
];

export const marketSeries = [28, 34, 31, 43, 39, 52, 48, 61, 57, 68, 63, 71];

export const methodologyFactors = [
  "Unaffected share price premium",
  "Sector median precedent transactions",
  "Revenue growth and margin quality",
  "Strategic buyer versus financial sponsor behavior",
  "Competitive process intensity",
  "Market cycle and cost of capital",
  "Target scarcity and category leadership",
  "Synergy justification and execution risk"
];

export const platformMetrics = [
  { label: "Mock transaction observations", value: "500+" },
  { label: "Premium drivers modeled", value: "42" },
  { label: "Overpay Index score range", value: "0-100" },
  { label: "Current model mode", value: "Simulated" }
];

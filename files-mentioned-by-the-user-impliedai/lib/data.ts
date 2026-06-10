export type Deal = {
  slug: string;
  acquirer: string;
  target: string;
  value: string;
  sector: string;
  announced: string;
  announcedDate: string;
  buyerType: string;
  consideration: string;
  fairPremium: number;
  actualPremium: number;
  delta: number;
  overpayIndex: number;
  verdict: string;
  confidence: number;
  drivers: string[];
  thesis: string;
  modelCommentary: string;
  comparableDeals: string[];
};

export const featuredDeals: Deal[] = [
  {
    slug: "microsoft-activision-blizzard",
    acquirer: "Microsoft",
    target: "Activision Blizzard",
    value: "$68.7B",
    sector: "Gaming / Software",
    announced: "2022",
    announcedDate: "Jan. 18, 2022",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 31,
    actualPremium: 48,
    delta: 17,
    overpayIndex: 82,
    verdict: "Likely overpaid",
    confidence: 87,
    drivers: ["Strategic scarcity", "Regulatory drag", "Content moat", "Platform synergies"],
    thesis:
      "The acquisition gave Microsoft a scaled interactive entertainment asset and a deeper content library for Xbox Game Pass, but the announced premium screened above the model's implied fair-premium band.",
    modelCommentary:
      "ImpliedAI's preview model flags the spread as primarily driven by scarcity value, strategic control of gaming IP, and aggressive synergy assumptions offset by regulatory complexity.",
    comparableDeals: ["Take-Two / Zynga", "Microsoft / LinkedIn", "Tencent / Sumo Group"]
  },
  {
    slug: "broadcom-vmware",
    acquirer: "Broadcom",
    target: "VMware",
    value: "$61.0B",
    sector: "Infrastructure Software",
    announced: "2022",
    announcedDate: "May 26, 2022",
    buyerType: "Strategic",
    consideration: "Cash / Stock",
    fairPremium: 24,
    actualPremium: 44,
    delta: 20,
    overpayIndex: 88,
    verdict: "Significant overpay",
    confidence: 91,
    drivers: ["Margin expansion", "Financing cycle", "Enterprise lock-in", "Multiple compression"],
    thesis:
      "Broadcom acquired a large-scale infrastructure software franchise with durable enterprise penetration, but the premium was announced into a deteriorating software multiple environment.",
    modelCommentary:
      "The preview model treats VMware as a high-quality asset while penalizing the transaction for financing-cycle timing and a large premium relative to precedent infrastructure software deals.",
    comparableDeals: ["IBM / Red Hat", "Broadcom / CA Technologies", "Thoma Bravo / Anaplan"]
  },
  {
    slug: "elon-musk-twitter",
    acquirer: "Elon Musk",
    target: "Twitter",
    value: "$44.0B",
    sector: "Social Media",
    announced: "2022",
    announcedDate: "Apr. 25, 2022",
    buyerType: "Individual / Sponsor-like",
    consideration: "Cash",
    fairPremium: 14,
    actualPremium: 38,
    delta: 24,
    overpayIndex: 94,
    verdict: "Severe overpay",
    confidence: 93,
    drivers: ["Governance risk", "Market reversal", "Monetization gap", "Competitive intensity"],
    thesis:
      "Twitter carried strategic network value, but the deal was struck before a sharp reset in growth equities and with significant uncertainty around monetization and governance execution.",
    modelCommentary:
      "The preview model assigns the highest overpay signal in the current dataset because market-cycle timing, operating volatility, and premium paid all screen poorly against comparable public internet transactions.",
    comparableDeals: ["Microsoft / LinkedIn", "Salesforce / Slack", "Verizon / AOL"]
  },
  {
    slug: "adobe-figma",
    acquirer: "Adobe",
    target: "Figma",
    value: "$20.0B",
    sector: "Design Software",
    announced: "2022",
    announcedDate: "Sept. 15, 2022",
    buyerType: "Strategic",
    consideration: "Cash / Stock",
    fairPremium: 42,
    actualPremium: 67,
    delta: 25,
    overpayIndex: 86,
    verdict: "Strategic overpay",
    confidence: 84,
    drivers: ["Category control", "High growth", "Antitrust pressure", "Revenue multiple"],
    thesis:
      "Adobe sought to neutralize a fast-growing collaborative design competitor, but the price implied a major strategic-control premium.",
    modelCommentary:
      "The preview model recognizes exceptional growth and category relevance, but the implied multiple and antitrust friction push the transaction into elevated overpay territory.",
    comparableDeals: ["Salesforce / Slack", "Atlassian / Loom", "Autodesk / PlanGrid"]
  },
  {
    slug: "amazon-mgm",
    acquirer: "Amazon",
    target: "MGM",
    value: "$8.5B",
    sector: "Media",
    announced: "2021",
    announcedDate: "May 26, 2021",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 29,
    actualPremium: 29,
    delta: 0,
    overpayIndex: 36,
    verdict: "Fair value",
    confidence: 76,
    drivers: ["Content library", "Streaming strategy", "Moderate premium", "Scale fit"],
    thesis:
      "Amazon acquired a recognizable content library to strengthen Prime Video, with the transaction screening closer to fair value than the software-heavy premium outliers.",
    modelCommentary:
      "The preview model views the deal as strategically coherent and comparatively moderate on premium paid, with lower overpay risk than mega-cap software acquisitions.",
    comparableDeals: ["Disney / 21st Century Fox", "Discovery / WarnerMedia", "AT&T / Time Warner"]
  },
  {
    slug: "salesforce-slack",
    acquirer: "Salesforce",
    target: "Slack",
    value: "$27.7B",
    sector: "Collaboration Software",
    announced: "2020",
    announcedDate: "Dec. 1, 2020",
    buyerType: "Strategic",
    consideration: "Cash / Stock",
    fairPremium: 38,
    actualPremium: 55,
    delta: 17,
    overpayIndex: 79,
    verdict: "Premium stretched",
    confidence: 82,
    drivers: ["Strategic defense", "Product adjacency", "Growth durability", "Integration risk"],
    thesis:
      "Salesforce used Slack to deepen its enterprise collaboration layer and defend against Microsoft Teams, but paid a sizable premium for strategic relevance.",
    modelCommentary:
      "The preview model flags a stretched but not extreme premium, reflecting the target's growth profile and product adjacency alongside competitive pressure.",
    comparableDeals: ["Microsoft / LinkedIn", "Adobe / Figma", "Atlassian / Trello"]
  },
  {
    slug: "ibm-red-hat",
    acquirer: "IBM",
    target: "Red Hat",
    value: "$34.0B",
    sector: "Open Source Software",
    announced: "2018",
    announcedDate: "Oct. 28, 2018",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 41,
    actualPremium: 63,
    delta: 22,
    overpayIndex: 84,
    verdict: "Strategic overpay",
    confidence: 86,
    drivers: ["Cloud repositioning", "Open-source scarcity", "Revenue durability", "Transformation urgency"],
    thesis:
      "IBM paid a large premium to accelerate hybrid cloud relevance and acquire a scarce enterprise open-source platform.",
    modelCommentary:
      "The preview model gives credit for strategic urgency and asset quality but flags the premium as elevated relative to mature infrastructure software benchmarks.",
    comparableDeals: ["Broadcom / VMware", "Microsoft / GitHub", "VMware / Pivotal"]
  },
  {
    slug: "amd-xilinx",
    acquirer: "AMD",
    target: "Xilinx",
    value: "$35.0B",
    sector: "Semiconductors",
    announced: "2020",
    announcedDate: "Oct. 27, 2020",
    buyerType: "Strategic",
    consideration: "Stock",
    fairPremium: 28,
    actualPremium: 25,
    delta: -3,
    overpayIndex: 29,
    verdict: "Disciplined premium",
    confidence: 78,
    drivers: ["Stock consideration", "Portfolio expansion", "Data center exposure", "Cycle timing"],
    thesis:
      "AMD expanded its data center and adaptive computing exposure through an all-stock transaction that screened disciplined on premium paid.",
    modelCommentary:
      "The preview model classifies the deal as relatively controlled because the actual premium was near or below the implied fair-premium range.",
    comparableDeals: ["Nvidia / Mellanox", "Analog Devices / Maxim", "Marvell / Inphi"]
  },
  {
    slug: "nvidia-mellanox",
    acquirer: "Nvidia",
    target: "Mellanox",
    value: "$6.9B",
    sector: "Semiconductors",
    announced: "2019",
    announcedDate: "Mar. 11, 2019",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 24,
    actualPremium: 14,
    delta: -10,
    overpayIndex: 22,
    verdict: "Undervalued strategic asset",
    confidence: 74,
    drivers: ["Data center fit", "Networking adjacency", "Reasonable premium", "Strategic upside"],
    thesis:
      "Nvidia strengthened its data center networking position with a transaction that looks conservative relative to the strategic value created later.",
    modelCommentary:
      "The preview model screens the deal as one of the more disciplined acquisitions in the dataset due to modest premium and strong strategic adjacency.",
    comparableDeals: ["AMD / Xilinx", "Marvell / Inphi", "Intel / Altera"]
  },
  {
    slug: "oracle-cerner",
    acquirer: "Oracle",
    target: "Cerner",
    value: "$28.3B",
    sector: "Healthcare IT",
    announced: "2021",
    announcedDate: "Dec. 20, 2021",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 22,
    actualPremium: 20,
    delta: -2,
    overpayIndex: 34,
    verdict: "Fair value",
    confidence: 77,
    drivers: ["Healthcare vertical", "Cloud migration", "Recurring revenue", "Execution complexity"],
    thesis:
      "Oracle used Cerner to enter healthcare applications at scale, with the premium screening near the model's fair-value range.",
    modelCommentary:
      "The preview model balances vertical-market logic and recurring revenue against integration complexity, resulting in a moderate overpay signal.",
    comparableDeals: ["Microsoft / Nuance", "Optum / Change Healthcare", "Thoma Bravo / Medallia"]
  },
  {
    slug: "microsoft-linkedin",
    acquirer: "Microsoft",
    target: "LinkedIn",
    value: "$26.2B",
    sector: "Professional Network",
    announced: "2016",
    announcedDate: "June 13, 2016",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 34,
    actualPremium: 50,
    delta: 16,
    overpayIndex: 73,
    verdict: "Premium justified by scarcity",
    confidence: 80,
    drivers: ["Network scarcity", "Enterprise data", "Cloud adjacency", "Large premium"],
    thesis:
      "Microsoft acquired a scarce professional graph that later became strategically valuable across enterprise software and recruiting workflows.",
    modelCommentary:
      "The preview model flags the premium as elevated but partially justified by unique network effects and strategic data assets.",
    comparableDeals: ["Salesforce / Slack", "Elon Musk / Twitter", "Microsoft / GitHub"]
  },
  {
    slug: "disney-fox",
    acquirer: "Disney",
    target: "21st Century Fox",
    value: "$71.3B",
    sector: "Media",
    announced: "2017",
    announcedDate: "Dec. 14, 2017",
    buyerType: "Strategic",
    consideration: "Cash / Stock",
    fairPremium: 26,
    actualPremium: 36,
    delta: 10,
    overpayIndex: 61,
    verdict: "Moderate overpay",
    confidence: 75,
    drivers: ["Content scale", "Streaming transition", "Competitive bidding", "Integration complexity"],
    thesis:
      "Disney acquired global content scale ahead of direct-to-consumer streaming expansion, but the premium was influenced by competitive tension.",
    modelCommentary:
      "The preview model assigns a moderate overpay signal because strategic rationale was strong while integration burden and competitive bidding inflated price.",
    comparableDeals: ["Amazon / MGM", "Discovery / WarnerMedia", "AT&T / Time Warner"]
  },
  {
    slug: "lvmh-tiffany",
    acquirer: "LVMH",
    target: "Tiffany",
    value: "$15.8B",
    sector: "Luxury Retail",
    announced: "2019",
    announcedDate: "Nov. 25, 2019",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 32,
    actualPremium: 37,
    delta: 5,
    overpayIndex: 49,
    verdict: "Near fair value",
    confidence: 72,
    drivers: ["Brand scarcity", "Luxury scale", "Margin upside", "Consumer cycle"],
    thesis:
      "LVMH acquired a globally recognized luxury brand with long-term repositioning potential and a premium close to strategic fair value.",
    modelCommentary:
      "The preview model views the premium as reasonable given brand scarcity and strategic fit, with cyclical exposure keeping the score near neutral.",
    comparableDeals: ["Coach / Kate Spade", "Michael Kors / Versace", "Essilor / Luxottica"]
  },
  {
    slug: "thermo-fisher-ppd",
    acquirer: "Thermo Fisher",
    target: "PPD",
    value: "$17.4B",
    sector: "Life Sciences Services",
    announced: "2021",
    announcedDate: "Apr. 15, 2021",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 23,
    actualPremium: 24,
    delta: 1,
    overpayIndex: 41,
    verdict: "Fair value",
    confidence: 73,
    drivers: ["CRO demand", "Healthcare resilience", "Scale benefits", "Moderate premium"],
    thesis:
      "Thermo Fisher expanded its clinical research services exposure in a resilient healthcare end market with a premium close to the fair range.",
    modelCommentary:
      "The preview model treats the deal as strategically sound with limited premium stretch due to strong end-market durability.",
    comparableDeals: ["LabCorp / Covance", "ICON / PRA Health", "Danaher / GE Biopharma"]
  },
  {
    slug: "take-two-zynga",
    acquirer: "Take-Two",
    target: "Zynga",
    value: "$12.7B",
    sector: "Gaming",
    announced: "2022",
    announcedDate: "Jan. 10, 2022",
    buyerType: "Strategic",
    consideration: "Cash / Stock",
    fairPremium: 35,
    actualPremium: 64,
    delta: 29,
    overpayIndex: 89,
    verdict: "Significant overpay",
    confidence: 83,
    drivers: ["Mobile gaming exposure", "Market timing", "Growth reset", "Synergy reliance"],
    thesis:
      "Take-Two acquired mobile gaming scale, but the transaction was announced just before a sharp reset in gaming and growth-stock expectations.",
    modelCommentary:
      "The preview model flags elevated overpay risk from premium size, market timing, and reliance on cross-platform synergy realization.",
    comparableDeals: ["Microsoft / Activision Blizzard", "EA / Glu Mobile", "Tencent / Sumo Group"]
  },
  {
    slug: "microsoft-nuance",
    acquirer: "Microsoft",
    target: "Nuance",
    value: "$19.7B",
    sector: "Healthcare AI",
    announced: "2021",
    announcedDate: "Apr. 12, 2021",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 21,
    actualPremium: 23,
    delta: 2,
    overpayIndex: 43,
    verdict: "Near fair value",
    confidence: 76,
    drivers: ["Healthcare AI", "Cloud attachment", "Enterprise workflow", "Moderate premium"],
    thesis:
      "Microsoft acquired vertical AI workflow exposure in healthcare, with the premium broadly in line with strategic precedent behavior.",
    modelCommentary:
      "The preview model scores the deal near neutral, recognizing strategic value without a major premium disconnect.",
    comparableDeals: ["Oracle / Cerner", "Salesforce / Tableau", "IBM / Red Hat"]
  },
  {
    slug: "atlassian-loom",
    acquirer: "Atlassian",
    target: "Loom",
    value: "$975M",
    sector: "Collaboration Software",
    announced: "2023",
    announcedDate: "Oct. 12, 2023",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 30,
    actualPremium: 44,
    delta: 14,
    overpayIndex: 67,
    verdict: "Strategic premium",
    confidence: 69,
    drivers: ["Workflow adjacency", "AI video", "Remote collaboration", "Private-market reset"],
    thesis:
      "Atlassian added async video collaboration to its software workflow suite at a strategic premium that screens elevated but manageable.",
    modelCommentary:
      "The preview model flags a strategic premium but stops short of severe overpay because the transaction size was relatively digestible.",
    comparableDeals: ["Salesforce / Slack", "Dropbox / DocSend", "Atlassian / Trello"]
  },
  {
    slug: "cisco-splunk",
    acquirer: "Cisco",
    target: "Splunk",
    value: "$28.0B",
    sector: "Cybersecurity / Observability",
    announced: "2023",
    announcedDate: "Sept. 21, 2023",
    buyerType: "Strategic",
    consideration: "Cash",
    fairPremium: 24,
    actualPremium: 31,
    delta: 7,
    overpayIndex: 58,
    verdict: "Moderate premium",
    confidence: 79,
    drivers: ["Security platform", "Recurring revenue", "AI observability", "Portfolio transition"],
    thesis:
      "Cisco expanded recurring software and security exposure through Splunk, with the premium screening moderate relative to strategic software precedent deals.",
    modelCommentary:
      "The preview model views the premium as acceptable but not cheap, reflecting Splunk's scale and Cisco's strategic need for software expansion.",
    comparableDeals: ["Broadcom / VMware", "IBM / Red Hat", "Thoma Bravo / Proofpoint"]
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
  { label: "Illustrative transaction observations", value: "500+" },
  { label: "Premium drivers modeled", value: "42" },
  { label: "Overpay Index score range", value: "0-100" },
  { label: "Current research mode", value: "Preview" }
];

export function getDealBySlug(slug: string) {
  return featuredDeals.find((deal) => deal.slug === slug);
}

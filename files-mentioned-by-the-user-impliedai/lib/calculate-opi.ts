export type Sector = "Software" | "Healthcare" | "Industrials" | "Consumer" | "Financials" | "Energy";
export type BuyerType = "Strategic" | "Private Equity" | "Sponsor-backed" | "Founder-led";
export type DealSize = "Under $1B" | "$1B-$10B" | "$10B-$50B" | "$50B+";
export type RevenueGrowth = "Low" | "Medium" | "High";
export type StrategicFit = "Low" | "Medium" | "High";
export type RegulatoryRisk = "Low" | "Medium" | "High";

export type PremiumPredictorInput = {
  sector: Sector;
  buyerType: BuyerType;
  dealSize: DealSize;
  revenueGrowth: RevenueGrowth;
  strategicFit: StrategicFit;
  regulatoryRisk: RegulatoryRisk;
  actualPremium: number;
};

export type PremiumPredictorResult = {
  modelName: "ImpliedAI Premium Predictor V1";
  basePremium: number;
  fairPremium: number;
  actualPremium: number;
  spread: number;
  overpayIndex: number;
  verdict: "Undervalued" | "Fairly Priced" | "Slightly Aggressive" | "Likely Overpaid" | "Severe Overpay";
  adjustments: Array<{
    label: string;
    value: number;
  }>;
};

export const BASE_PREMIUM = 20;

export const sectorAdjustments: Record<Sector, number> = {
  Software: 5,
  Healthcare: 4,
  Industrials: 2,
  Consumer: 3,
  Financials: 2,
  Energy: 1
};

export const buyerTypeAdjustments: Record<BuyerType, number> = {
  Strategic: 4,
  "Private Equity": 2,
  "Sponsor-backed": 2,
  "Founder-led": 3
};

export const dealSizeAdjustments: Record<DealSize, number> = {
  "Under $1B": 1,
  "$1B-$10B": 2,
  "$10B-$50B": 3,
  "$50B+": 4
};

export const revenueGrowthAdjustments: Record<RevenueGrowth, number> = {
  Low: 0,
  Medium: 3,
  High: 6
};

export const strategicFitAdjustments: Record<StrategicFit, number> = {
  Low: 0,
  Medium: 3,
  High: 5
};

export const regulatoryRiskAdjustments: Record<RegulatoryRisk, number> = {
  Low: 0,
  Medium: -2,
  High: -5
};

export function calculateOPI(input: PremiumPredictorInput): PremiumPredictorResult {
  const adjustments = [
    { label: `Sector: ${input.sector}`, value: sectorAdjustments[input.sector] },
    { label: `Buyer Type: ${input.buyerType}`, value: buyerTypeAdjustments[input.buyerType] },
    { label: `Deal Size: ${input.dealSize}`, value: dealSizeAdjustments[input.dealSize] },
    { label: `Revenue Growth: ${input.revenueGrowth}`, value: revenueGrowthAdjustments[input.revenueGrowth] },
    { label: `Strategic Fit: ${input.strategicFit}`, value: strategicFitAdjustments[input.strategicFit] },
    { label: `Regulatory Risk: ${input.regulatoryRisk}`, value: regulatoryRiskAdjustments[input.regulatoryRisk] }
  ];

  const fairPremium = BASE_PREMIUM + adjustments.reduce((total, adjustment) => total + adjustment.value, 0);
  const actualPremium = normalizePremium(input.actualPremium);
  const spread = actualPremium - fairPremium;
  const overpayIndex = clamp(Math.round(50 + spread * 2), 0, 100);

  return {
    modelName: "ImpliedAI Premium Predictor V1",
    basePremium: BASE_PREMIUM,
    fairPremium,
    actualPremium,
    spread,
    overpayIndex,
    verdict: getVerdict(overpayIndex),
    adjustments
  };
}

function normalizePremium(value: number) {
  if (Number.isNaN(value) || !Number.isFinite(value)) {
    return 0;
  }

  return Math.max(0, value);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getVerdict(overpayIndex: number): PremiumPredictorResult["verdict"] {
  if (overpayIndex <= 20) return "Undervalued";
  if (overpayIndex <= 40) return "Fairly Priced";
  if (overpayIndex <= 60) return "Slightly Aggressive";
  if (overpayIndex <= 80) return "Likely Overpaid";
  return "Severe Overpay";
}

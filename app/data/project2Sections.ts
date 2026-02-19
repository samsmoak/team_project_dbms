// app/data/project2Sections.ts
export type Section = {
  id: string;
  title: string;
  content: string;
};

export const project2Sections: Section[] = [
  {
    id: "abstract",
    title: "Abstract",
    content: "We document Coinbase’s strategic pivot following the GENIUS Act and quantify its impact on DeFi yields and custodial products using high-frequency data and a synthetic control method.",
  },
  {
    id: "introduction",
    title: "1. Introduction & Motivation",
    content: "On November 15, 2025, Coinbase executed a major strategic shift, aggressively promoting on-chain wallet rewards. This paper analyzes the causal effect of this pivot.",
  },
  {
    id: "literature",
    title: "2. Literature Review",
    content: "Building upon Krause (2026) and prior work on regulatory arbitrage, we extend the literature by incorporating platform-specific incentives and distributor loopholes.",
  },
  {
    id: "strategy",
    title: "3. Empirical Strategy",
    content: "We employ a synthetic control method combined with event-study design around the November 15 announcement date.",
  },
  {
    id: "results",
    title: "4. Results",
    content: "On-chain wallet rewards increased 4.70% while custodial products saw only 3.85% growth. The regulatory risk premium for offshore stablecoins expanded significantly post-event.",
  },
  {
    id: "robustness",
    title: "5. Robustness & Extensions",
    content: "Results survive multiple robustness checks including alternative control groups and bandwidth selections.",
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content: "The findings highlight the importance of platform incentives in the post-GENIUS Act regulatory environment.",
  },
];
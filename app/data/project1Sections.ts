// app/data/project1Sections.ts
export type Section = {
  id: string;
  title: string;
  content: string;
};

export const project1Sections: Section[] = [
  {
    id: "abstract",
    title: "Abstract",
    content: "This study provides the first comprehensive empirical disentanglement of regulatory risk premiums following the enactment of the GENIUS Act. Using a natural experiment created by the exogenous tariff shock of October 10, 2025, we identify three distinct pricing channels: protocol-driven dynamics, strategically administered rewards, and evolving regulatory risk premiums.",
  },
  {
    id: "introduction",
    title: "1. Introduction",
    content: "The GENIUS Act fundamentally altered the regulatory landscape for digital assets. Prior literature has treated regulatory risk as a monolithic construct. This paper challenges that assumption by decomposing risk into its constituent components and exploits the sharp discontinuity in regulatory enforcement intensity.",
  },
  {
    id: "methodology",
    title: "2. Data and Methodology",
    content: "Our dataset comprises 2.4 million on-chain transactions across Aave, Compound, and Uniswap from January 2025 to January 2026. We construct a novel regulatory risk premium measure using high-frequency yield spreads and apply a two-stage least squares approach instrumented by pre-Act domicile status.",
  },
  {
    id: "results",
    title: "3. Empirical Results",
    content: "We find that protocol-driven dynamics explain 41% of the total risk premium variation, while regulatory risk accounts for 37%. The remaining 22% is attributable to strategic reward administration. Following the tariff shock, DeFi yields on Aave spiked 22.6% while custodial rewards remained stable.",
  },
  {
    id: "discussion",
    title: "4. Discussion and Policy Implications",
    content: "The results offer critical implications for the pending CLARITY Act and Responsible Financial Innovation Act. Regulators should consider protocol-specific rather than blanket rules to minimize unintended distortions in yield markets.",
  },
  {
    id: "robustness",
    title: "5. Robustness Checks",
    content: "We conduct over 40 robustness tests including alternative fixed effects, alternative instrument definitions, and placebo tests using pre-Act periods. All specifications confirm our main findings.",
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content: "This paper demonstrates that regulatory risk is not homogeneous. Future academic and policy work must disaggregate these channels to avoid mis-specification and inefficient regulation.",
  },
];
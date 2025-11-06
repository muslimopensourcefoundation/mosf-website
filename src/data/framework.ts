export const MOSF_FRAMEWORK = {
  title: "MOSF Repository Evaluation Framework",
  subtitle: "A transparent standard for assessing openness, ethical alignment, and vitality in Islamic open-source software.",
  totalPoints: 70,
  criteria: [
    {
      key: "alignment",
      name: "Alignment with MOSF Mission",
      max: 10,
      description: "Contribution to open Islamic knowledge, ethical technology, or software engineering education for Muslims."
    },
    {
      key: "openness",
      name: "Openness & Licensing",
      max: 10,
      description: "License clarity and compatibility with open-source values; explicit OSS license; contributor guidance."
    },
    {
      key: "liveness",
      name: "Liveness & Maintenance",
      max: 10,
      description: "Active development: recent commits, issues/PRs, releases, visible community activity."
    },
    {
      key: "value",
      name: "Educational or Technical Value",
      max: 10,
      description: "Innovation, usefulness, and contribution to Islamic learning or ethical technology."
    },
    {
      key: "docs",
      name: "Documentation & Accessibility",
      max: 10,
      description: "Quality of README/docs, onboarding, examples; accessibility/multilingual considerations."
    },
    {
      key: "community",
      name: "Community & Stewardship",
      max: 10,
      description: "Transparency, governance, contributor culture (CODE_OF_CONDUCT, CONTRIBUTING, roadmap)."
    },
    {
      key: "ethics",
      name: "Ethical & Faith Alignment",
      max: 10,
      description: "Consistency with Islamic ethics: honesty, public benefit, no harm, transparency; optional content filters."
    }
  ],
  classification: [
    { range: [0, 20], label: "Inactive / Low Relevance", color: "gray" },
    { range: [21, 40], label: "Emerging / Stale", color: "yellow" },
    { range: [41, 59], label: "Aligned", color: "green" },
    { range: [60, 70], label: "Model Repository", color: "emerald" }
  ],
  scoringPhilosophy: [
    "Openness as an Islamic virtue: shared knowledge, trust, service.",
    "Vitality ('liveness') as evidence of stewardship.",
    "Ethical, faith-aligned conduct in digital spaces."
  ],
  cta: {
    text: "Submit a repository for evaluation",
    link: "/evaluations#submit"
  }
};


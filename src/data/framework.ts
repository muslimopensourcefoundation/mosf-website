import type { ChangelogEntry } from "../components/ChangelogSection";

export const MOSF_FRAMEWORK = {
  title: "MOSF Repository Evaluation Framework",
  subtitle: "A transparent standard for assessing openness, ethical alignment, and vitality in Islamic open-source software.",
  version: "1.0.0",
  totalPoints: 70,
  criteria: [
    {
      key: "alignment",
      name: "Alignment with MOSF Mission",
      max: 10,
      description: "Contribution to open Islamic knowledge, ethical technology, or software engineering education for Muslims.",
      scoringRanges: [
        {
          range: [0, 3],
          label: "Weak",
          meaning: "Unclear or unrelated to Islamic knowledge, ethical tech, or public benefit.",
          indicators: ["Closed-source or secular utility without community purpose."]
        },
        {
          range: [4, 7],
          label: "Moderate",
          meaning: "Generally relevant to Islamic education or ethics but limited scope or unclear audience.",
          indicators: ["Provides benefit but lacks explicit Islamic framing or educational mission."]
        },
        {
          range: [8, 10],
          label: "Strong",
          meaning: "Directly advances Islamic knowledge, software education, or ethical technology in a public and transparent way.",
          indicators: ["Promotes community learning, digital access to Islamic content, or open-source da'wah tools."]
        }
      ]
    },
    {
      key: "openness",
      name: "Openness & Licensing",
      max: 10,
      description: "License clarity and compatibility with open-source values; explicit OSS license; contributor guidance.",
      scoringRanges: [
        {
          range: [0, 3],
          label: "Restricted",
          meaning: "No license, or a non-commercial/research-only license.",
          indicators: ["Legal reuse not allowed; source-available only."]
        },
        {
          range: [4, 7],
          label: "Partial",
          meaning: "Has a license, but unclear or moderately restrictive terms.",
          indicators: ["May allow reuse but limit commercial or derivative use."]
        },
        {
          range: [8, 10],
          label: "Open",
          meaning: "OSI-approved permissive or copyleft license (MIT, BSD, Apache, GPL, CC-BY, Unlicense).",
          indicators: ["Freely reusable, modifiable, and redistributable with attribution."]
        }
      ]
    },
    {
      key: "liveness",
      name: "Liveness & Maintenance",
      max: 10,
      description: "Active development: recent commits, issues/PRs, releases, visible community activity.",
      scoringRanges: [
        {
          range: [0, 3],
          label: "Inactive",
          meaning: "No commits, releases, or issue responses for years.",
          indicators: ["Abandoned or archived project."]
        },
        {
          range: [4, 7],
          label: "Intermittent",
          meaning: "Occasional updates or limited maintainer activity.",
          indicators: ["Irregular commits, small team, or long gaps between updates."]
        },
        {
          range: [8, 10],
          label: "Active",
          meaning: "Regular commits, open PRs/issues, recent releases, visible responsiveness.",
          indicators: ["Maintained community project with an active roadmap."]
        }
      ]
    },
    {
      key: "value",
      name: "Educational or Technical Value",
      max: 10,
      description: "Innovation, usefulness, and contribution to Islamic learning or ethical technology.",
      scoringRanges: [
        {
          range: [0, 3],
          label: "Minimal",
          meaning: "Little technical merit or originality.",
          indicators: ["Simple script, demo, or deprecated approach."]
        },
        {
          range: [4, 7],
          label: "Moderate",
          meaning: "Functional and instructive, but not groundbreaking.",
          indicators: ["Reuses known patterns or frameworks effectively."]
        },
        {
          range: [8, 10],
          label: "High",
          meaning: "Innovative, scalable, or academically significant.",
          indicators: ["Introduces new patterns, architectures, or datasets valuable to others."]
        }
      ]
    },
    {
      key: "docs",
      name: "Documentation & Accessibility",
      max: 10,
      description: "Quality of README/docs, onboarding, examples; accessibility/multilingual considerations.",
      scoringRanges: [
        {
          range: [0, 3],
          label: "Poor",
          meaning: "Missing README or setup instructions.",
          indicators: ["Unclear or empty documentation; difficult for newcomers."]
        },
        {
          range: [4, 7],
          label: "Acceptable",
          meaning: "Basic README and install guide but lacking depth or accessibility features.",
          indicators: ["Partial explanation of setup or usage; minimal multilingual support."]
        },
        {
          range: [8, 10],
          label: "Comprehensive",
          meaning: "Clear, complete documentation with examples and accessibility awareness (RTL, screen readers, multilingual).",
          indicators: ["Ready for educational reuse and contribution."]
        }
      ]
    },
    {
      key: "community",
      name: "Community & Stewardship",
      max: 10,
      description: "Transparency, governance, contributor culture (CODE_OF_CONDUCT, CONTRIBUTING, roadmap).",
      scoringRanges: [
        {
          range: [0, 3],
          label: "Closed",
          meaning: "No community engagement, no issues or contribution process.",
          indicators: ["Maintainer-only, uninviting for collaboration."]
        },
        {
          range: [4, 7],
          label: "Developing",
          meaning: "Some openness to contribution but limited processes.",
          indicators: ["Occasional PRs, incomplete governance files."]
        },
        {
          range: [8, 10],
          label: "Strong",
          meaning: "Active contributor ecosystem, transparent governance, regular triage.",
          indicators: ["Has CONTRIBUTING.md, CODE_OF_CONDUCT, templates, and responsive maintainers."]
        }
      ]
    },
    {
      key: "ethics",
      name: "Ethical & Faith Alignment",
      max: 10,
      description: "Consistency with Islamic ethics: honesty, public benefit, no harm, transparency; optional content filters.",
      scoringRanges: [
        {
          range: [0, 3],
          label: "Concerning",
          meaning: "Possible ethical or faith conflicts; unclear purpose or potential harm.",
          indicators: ["Includes un-Islamic content or monetization model."]
        },
        {
          range: [4, 7],
          label: "Acceptable",
          meaning: "Neutral or broadly ethical but lacks explicit Islamic grounding.",
          indicators: ["No harm but limited connection to Islamic ethics."]
        },
        {
          range: [8, 10],
          label: "Exemplary",
          meaning: "Clearly guided by Islamic principles, transparency, and public benefit.",
          indicators: ["Upholds honesty, justice, and community service."]
        }
      ]
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
  interpretationNotes: [
    "Scores are qualitative, not punitive.",
    "Each repository is unique and evaluated in context.",
    "MOSF encourages maintainers to treat evaluations as roadmaps toward ihsan, excellence in open-source stewardship."
  ],
  cta: {
    text: "Submit a repository for evaluation",
    link: "/evaluations#submit"
  },
  changelog: [
    {
      version: "1.0.0",
      date: "2025-11-20",
      changes: [
        {
          type: "added",
          description: "Initial release of the MOSF Repository Evaluation Framework"
        }
      ]
    }
  ] as ChangelogEntry[]
};


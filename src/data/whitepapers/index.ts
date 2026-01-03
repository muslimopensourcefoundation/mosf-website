import { ComponentType } from "react";

export interface WhitePaper {
  slug: string;
  title: string;
  subtitle?: string;
  version: string;
  date: string;
  description: string;
  ContentComponent: ComponentType;
}

import CollaborativeEcosystemAnalysis from "./collaborative-ecosystem-analysis";

export const whitePapers: WhitePaper[] = [
  {
    slug: "collaborative-ecosystem-analysis",
    title: "Collaborative Ecosystem Analysis: Reimagining Muslim Digital Innovation",
    subtitle: "A Muslim Open Source Foundation (MOSF) White Paper",
    version: "v1.0",
    date: "2026-01-03",
    description: "A framework for understanding and shaping Muslim digital innovation ecosystems through collaboration rather than competition, grounded in Islamic principles and open source values.",
    ContentComponent: CollaborativeEcosystemAnalysis,
  },
];

export function getWhitePaperBySlug(slug: string): WhitePaper | undefined {
  return whitePapers.find((wp) => wp.slug === slug);
}

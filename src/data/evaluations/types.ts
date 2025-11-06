export interface ScoreItem {
  score: number;
  comment: string;
}

export interface EvaluationScores {
  alignment: ScoreItem;
  openness: ScoreItem;
  liveness: ScoreItem;
  value: ScoreItem;
  docs: ScoreItem;
  community: ScoreItem;
  ethics: ScoreItem;
}

export interface EvaluationBadges {
  label: string;
  color: string;
  text: string;
}

export interface Evaluation {
  slug: string;
  name: string;
  repoUrl: string;
  websiteUrl?: string;
  category: string;
  evaluationDate: string;
  evaluator: string;
  scores: EvaluationScores;
  total: number;
  classification: string;
  summary: string;
  narrative: string[];
  recommendations: string[];
  badges: EvaluationBadges;
}


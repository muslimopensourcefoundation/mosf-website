import qafiyah from "./qafiyah.json";
import awesomeMuslims from "./awesome-muslims.json";
import quranFrontendNext from "./quran-frontend-next.json";
import quranFawaz from "./quran-fawazahmed0.json";
import quranApiFawaz from "./quran-api-fawaz.json";
import quranMohdovais from "./quran-mohdovais.json";
import type { Evaluation } from "./types";

export type {
  ScoreItem,
  EvaluationScores,
  EvaluationBadges,
  Evaluation,
} from "./types";

// In the future, auto-import all *.json via Vite glob if enabled:
export const evaluations: Evaluation[] = [qafiyah, awesomeMuslims, quranFrontendNext, quranFawaz, quranApiFawaz, quranMohdovais];

export const getBySlug = (slug: string): Evaluation | undefined => evaluations.find(e => e.slug === slug);


import qafiyah from "./qafiyah.json";
import awesomeMuslims from "./awesome-muslims.json";
import quranFrontendNext from "./quran-frontend-next.json";
import quranFawaz from "./quran-fawazahmed0.json";
import quranApiFawaz from "./quran-api-fawaz.json";
import quranMohdovais from "./quran-mohdovais.json";
import timeForSalahWebsite from "./timeforsalahwebsite.json";
import audioQuran from "./audio-quran.json";
import hijriJs from "./hijri-js.json";
import prayTimes from "./pray-times.json";
import quranCaption from "./quran-caption.json";
import type { Evaluation } from "./types";

export type {
  ScoreItem,
  EvaluationScores,
  EvaluationBadges,
  Evaluation,
} from "./types";

// In the future, auto-import all *.json via Vite glob if enabled:
export const evaluations: Evaluation[] = [qafiyah, awesomeMuslims, quranFrontendNext, quranFawaz, quranApiFawaz, quranMohdovais, timeForSalahWebsite, audioQuran, hijriJs, prayTimes, quranCaption];

export const getBySlug = (slug: string): Evaluation | undefined => evaluations.find(e => e.slug === slug);


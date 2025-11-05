import qafiyah from "./qafiyah.json";
import awesomeMuslims from "./awesome-muslims.json";
import quranFrontendNext from "./quran-frontend-next.json";
import quranFawaz from "./quran-fawazahmed0.json";
import quranApiFawaz from "./quran-api-fawaz.json";

// In the future, auto-import all *.json via Vite glob if enabled:
export const evaluations = [qafiyah, awesomeMuslims, quranFrontendNext, quranFawaz, quranApiFawaz];

export type Evaluation = typeof qafiyah;

export const getBySlug = (slug: string) => evaluations.find(e => e.slug === slug);


import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MOSF_FRAMEWORK } from "../data/framework";
import ChangelogSection from "../components/ChangelogSection";

export default function FrameworkRepositoryEvaluation() {
  useEffect(() => {
    document.title = `${MOSF_FRAMEWORK.title} | MOSF`;
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {MOSF_FRAMEWORK.title}
            </h1>
            {MOSF_FRAMEWORK.version && (
              <span className="px-3 py-1 text-sm font-semibold bg-gray-100 dark:bg-mosf-dark-alt text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-700">
                v{MOSF_FRAMEWORK.version}
              </span>
            )}
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {MOSF_FRAMEWORK.subtitle}
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Purpose
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            To assess existing Islamic or Muslim-oriented open-source repositories based on their alignment with MOSF's mission, their openness and accessibility, and their current vitality within the open-source ecosystem.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Criteria (0-10 each; total {MOSF_FRAMEWORK.totalPoints})
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-mosf-dark-alt">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Criterion
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Description
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">
                    Max Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {MOSF_FRAMEWORK.criteria.map((criterion, index) => (
                  <tr
                    key={criterion.key}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {index + 1}. {criterion.name}
                      </span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">
                      {criterion.description}
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">
                      {criterion.max}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Detailed Scoring Ranges per Category
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Each criterion is scored on a 0–10 scale. The following breakdown provides qualitative guidance for what each score band represents within that criterion.
          </p>
          
          <div className="space-y-12">
            {MOSF_FRAMEWORK.criteria.map((criterion) => (
              <div key={criterion.key} className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {criterion.name}
                </h3>
                {criterion.scoringRanges && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-mosf-dark-alt">
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                            Range
                          </th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                            Meaning
                          </th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                            Indicators
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {criterion.scoringRanges.map((range, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                          >
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                              <span className="font-medium text-gray-900 dark:text-white">
                                {range.range[0]}–{range.range[1]} ({range.label})
                              </span>
                            </td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">
                              {range.meaning}
                            </td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">
                              <ul className="list-disc list-inside space-y-1">
                                {range.indicators.map((indicator, idx) => (
                                  <li key={idx}>{indicator}</li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Classification Bands
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {MOSF_FRAMEWORK.classification.map((band) => {
              const emojiMap: Record<string, string> = {
                "Inactive / Low Relevance": "⬜",
                "Emerging / Stale": "🟨",
                "Aligned": "🟩",
                "Model Repository": "🟢",
              };
              const emoji = emojiMap[band.label] || "";
              const colorClasses = {
                gray: "bg-gray-100 dark:bg-mosf-dark-alt border-gray-300 dark:border-gray-600",
                yellow: "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700",
                green: "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700",
                emerald: "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700",
              };

              return (
                <div
                  key={band.label}
                  className={`border-2 rounded-lg p-4 ${colorClasses[band.color as keyof typeof colorClasses] || colorClasses.gray}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{emoji}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {band.range[0]}-{band.range[1]}
                    </span>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {band.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Scoring Philosophy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
            {MOSF_FRAMEWORK.scoringPhilosophy.map((point, index) => (
              <li key={index} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </section>

        {MOSF_FRAMEWORK.interpretationNotes && (
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
              Notes on Interpretation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              {MOSF_FRAMEWORK.interpretationNotes.map((note, index) => (
                <li key={index} className="leading-relaxed">
                  {note}
                </li>
              ))}
            </ul>
          </section>
        )}

        {MOSF_FRAMEWORK.changelog && MOSF_FRAMEWORK.changelog.length > 0 && (
          <ChangelogSection changelog={MOSF_FRAMEWORK.changelog} />
        )}

        <section className="bg-mosf-navy-50 dark:bg-mosf-navy-900/20 border-l-4 border-mosf-navy-dark dark:border-mosf-navy-light p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Call to Action
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            If you maintain an open-source project aligned with Islamic values,{" "}
            <Link
              to={MOSF_FRAMEWORK.cta.link}
              className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 underline font-medium transition-colors"
            >
              {MOSF_FRAMEWORK.cta.text}
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
}


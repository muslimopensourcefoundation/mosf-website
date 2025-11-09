import { useEffect } from "react";
import { roadmap, getCompletedItemsByMonthYear, formatCompletionDate } from "../data/roadmap";
import { compareDates } from "../utils/dateUtils";

// Helper function to convert backticks to code tags
function formatTextWithCode(text: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      const codeContent = part.slice(1, -1);
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded text-xs font-mono"
        >
          {codeContent}
        </code>
      );
    }
    return part;
  });
}

export default function Roadmap() {
  useEffect(() => {
    document.title = "Roadmap | MOSF";
  }, []);

  const completedByMonthYear = getCompletedItemsByMonthYear();

  const ongoingWorkstreams = [
    "Governance & Compliance: Maintain policies, minutes, and filings.",
    "Technical Quality: Apply linting, testing, and accessibility standards across repos.",
    "Community Relations: Respond to contributors, run quarterly check-ins, share dev updates.",
    "Islamic Alignment: Ensure all educational material reflects sound linguistic and ethical sources.",
    "Localization & Accessibility: Expand beyond Arabic to additional languages as capacity grows.",
  ];

  const endOfCycleOutcomes = [
    "MOSF legally established with 501(c)(3) status.",
    "Multilingual website live (English + Arabic).",
    "\"Learn Arabic: Level 1\" app publicly released with active users.",
    "Early translation volunteers for Urdu and Bahasa Indonesia onboarded.",
    "Transparent governance repos + first annual report published.",
    "Clear 2027 plan for scaling curriculum and new educational projects.",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Muslim Open Source Foundation
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Rolling 12-Month Roadmap
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This roadmap outlines our month-by-month objectives over the next 12 months (Nov 2025 → Oct 2026). As a rolling roadmap, it will be updated monthly to maintain a forward-looking 12-month view as we transition from formation to active operations and our first open-source project.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Monthly Goals
          </h2>
          <div className="space-y-8">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-mosf-dark-alt hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="inline-block px-4 py-2 bg-mosf-navy-dark dark:bg-mosf-navy-light text-white font-semibold rounded-lg">
                      {item.month}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.focus}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          📘 Objectives
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                          {item.objectives.map((obj, i) => (
                            <li key={i} className={obj.completedDate ? "text-green-800 dark:text-green-400 font-medium" : ""}>
                              {obj.text}
                              {obj.completedDate && (
                                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 italic">
                                  (Completed {formatCompletionDate(obj.completedDate)})
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          📄 Deliverables
                        </h4>
                        <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                          {item.deliverables.map((del, i) => (
                            <li key={i} className={del.completedDate ? "text-green-800 dark:text-green-400 font-medium" : ""}>
                              {del.completedDate && <span className="mr-2">✅</span>}
                              {formatTextWithCode(del.text)}
                              {del.completedDate && (
                                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 italic">
                                  ({formatCompletionDate(del.completedDate)})
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-mosf-navy-50 dark:bg-mosf-navy-900/20 border-l-4 border-mosf-navy-dark dark:border-mosf-navy-light p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🔁 Ongoing Workstreams (All Year)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {ongoingWorkstreams.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            📈 Expected Outcomes (Oct 2026)
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            As this is a rolling 12-month roadmap, these outcomes represent targets for October 2026. The roadmap will be updated monthly to reflect the next 12-month period.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            {endOfCycleOutcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            ✅ Completed Goals by Month
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            All completed objectives and deliverables organized by month and year.
          </p>
          {Object.keys(completedByMonthYear).length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 italic">No completed items yet.</p>
          ) : (
            <div className="space-y-6">
              {Object.entries(completedByMonthYear)
                .sort(([monthA], [monthB]) => {
                  // Sort by year first, then month
                  const [monthStrA, yearA] = monthA.split(" ");
                  const [monthStrB, yearB] = monthB.split(" ");
                  const yearNumA = parseInt(yearA);
                  const yearNumB = parseInt(yearB);
                  if (yearNumA !== yearNumB) {
                    return yearNumB - yearNumA; // Descending order (newest first)
                  }
                  // Simple month comparison (works for this use case)
                  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                  return monthOrder.indexOf(monthStrB) - monthOrder.indexOf(monthStrA); // Descending order
                })
                .map(([monthYear, items]) => (
                  <div
                    key={monthYear}
                    className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-green-50 dark:bg-green-900/10"
                  >
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{monthYear}</h3>
                    <ul className="space-y-2">
                      {items
                        .sort((a, b) => compareDates(b.completedDate, a.completedDate)) // Descending order
                        .map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 dark:text-gray-300">
                            <span className="mr-2">✅</span>
                            {formatTextWithCode(item.text)}
                            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                              ({formatCompletionDate(item.completedDate)})
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          )}
        </section>

        <section className="bg-gray-50 dark:bg-mosf-dark-alt border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            This is a rolling 12-month roadmap that will be updated monthly. As each month passes, the roadmap will be refreshed to maintain a forward-looking 12-month window, allowing us to adapt to actual progress, board decisions, and external factors. Last updated: November 2025.
          </p>
        </section>
      </main>
    </div>
  );
}


import { useState } from "react";
import { formatDateLong } from "../utils/dateUtils";

export type ChangelogChangeType = "added" | "changed" | "deprecated" | "removed" | "fixed" | "security";

export interface ChangelogChange {
  type: ChangelogChangeType;
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: ChangelogChange[];
}

export default function ChangelogSection({ changelog }: { changelog: ChangelogEntry[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const changeTypeLabels: Record<string, string> = {
    added: "Added",
    changed: "Changed",
    deprecated: "Deprecated",
    removed: "Removed",
    fixed: "Fixed",
    security: "Security",
  };

  const changeTypeColors: Record<string, string> = {
    added: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700",
    changed: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700",
    deprecated: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700",
    removed: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700",
    fixed: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700",
    security: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700",
  };

  return (
    <section className="space-y-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left p-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-mosf-dark-alt hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Changelog
        </h2>
        <svg
          className={`w-6 h-6 text-gray-700 dark:text-gray-300 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="space-y-6 pt-4">
          {changelog.map((entry, index) => (
            <div
              key={index}
              className="border-l-4 border-mosf-navy-dark dark:border-mosf-navy-light pl-6 space-y-3"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Version {entry.version}
                </h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDateLong(entry.date)}
                </span>
              </div>
              <ul className="space-y-2">
                {entry.changes.map((change, changeIndex) => (
                  <li
                    key={changeIndex}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded border ${
                        changeTypeColors[change.type] ||
                        changeTypeColors.changed
                      }`}
                    >
                      {changeTypeLabels[change.type] || change.type}
                    </span>
                    <span className="flex-1">{change.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}


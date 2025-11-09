import { MOSF_FRAMEWORK } from "../../data/framework";

export interface ScoreEntry {
  score: number;
  comment: string;
}

export interface ScoreTableProps {
  scores: {
    alignment?: ScoreEntry;
    openness?: ScoreEntry;
    liveness?: ScoreEntry;
    value?: ScoreEntry;
    docs?: ScoreEntry;
    community?: ScoreEntry;
    ethics?: ScoreEntry;
  };
}

export default function ScoreTable({ scores }: ScoreTableProps) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-50 dark:bg-mosf-dark-alt">
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Criterion
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-center font-semibold text-gray-900 dark:text-white min-w-[80px]">
              Score
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Comment
            </th>
          </tr>
        </thead>
        <tbody>
          {MOSF_FRAMEWORK.criteria.map((criterion) => {
            const scoreEntry = scores[criterion.key as keyof typeof scores];
            if (!scoreEntry) return null;

            return (
              <tr
                key={criterion.key}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {criterion.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {criterion.description}
                  </div>
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-center">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {scoreEntry.score}/{criterion.max}
                  </span>
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">
                  {scoreEntry.comment}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


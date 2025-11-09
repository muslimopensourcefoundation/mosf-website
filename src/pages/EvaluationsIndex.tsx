import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { evaluations, type Evaluation } from "../data/evaluations";
import TotalBadge from "../components/evaluations/TotalBadge";
import { formatDateShort, compareDates } from "../utils/dateUtils";

export default function EvaluationsIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"score" | "name" | "date">("score");
  const [sortedEvaluations, setSortedEvaluations] = useState<Evaluation[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Repository Evaluations | MOSF";
  }, []);

  useEffect(() => {
    let filtered = [...evaluations];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (evaluation) =>
          evaluation.name.toLowerCase().includes(query) ||
          evaluation.category.toLowerCase().includes(query) ||
          evaluation.slug.toLowerCase().includes(query)
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "score":
          return b.total - a.total;
        case "name":
          return a.name.localeCompare(b.name);
        case "date":
          return compareDates(b.evaluationDate, a.evaluationDate); // Descending order
        default:
          return 0;
      }
    });

    setSortedEvaluations(filtered);
  }, [searchQuery, sortBy]);


  const getClassificationColor = (classification: string): string => {
    const colorMap: Record<string, string> = {
      "Inactive / Low Relevance": "gray",
      "Emerging": "yellow",
      "Stale": "gray",
      "Aligned": "green",
      "Model Repository": "emerald",
    };
    return colorMap[classification] || "green";
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("contact@muslimopensource.org");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Repository Evaluations
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Transparent assessments of Islamic open-source repositories using the{" "}
            <Link
              to="/frameworks/repository-evaluation"
              className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 underline"
            >
              MOSF Repository Evaluation Framework
            </Link>
            .
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search evaluations
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name, category, or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-mosf-dark-alt text-gray-900 dark:text-white focus:ring-2 focus:ring-mosf-navy-dark focus:border-transparent"
              aria-label="Search evaluations"
            />
          </div>
          <div>
            <label htmlFor="sort" className="sr-only">
              Sort by
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "score" | "name" | "date")}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-mosf-dark-alt text-gray-900 dark:text-white focus:ring-2 focus:ring-mosf-navy-dark focus:border-transparent"
              aria-label="Sort evaluations"
            >
              <option value="score">Sort by Score</option>
              <option value="name">Sort by Name</option>
              <option value="date">Sort by Date</option>
            </select>
          </div>
        </div>

        {sortedEvaluations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No evaluations found matching your search.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {sortedEvaluations.map((evaluation) => (
              <article
                key={evaluation.slug}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-mosf-dark-alt"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        <Link
                          to={`/evaluations/${evaluation.slug}`}
                          className="hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300 transition-colors"
                        >
                          {evaluation.name}
                        </Link>
                      </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {evaluation.category}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Evaluated {formatDateShort(evaluation.evaluationDate)} by {evaluation.evaluator}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                      {evaluation.summary}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-3 md:ml-4">
                    <TotalBadge
                      classification={evaluation.classification}
                      total={evaluation.total}
                      color={getClassificationColor(evaluation.classification)}
                      label={evaluation.badges?.label}
                      text={evaluation.badges?.text}
                    />
                    <Link
                      to={`/evaluations/${evaluation.slug}`}
                      className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 font-medium flex items-center gap-1 transition-colors"
                    >
                      View Evaluation
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <section
          id="submit"
          className="bg-mosf-navy-50 dark:bg-mosf-navy-900/20 border-l-4 border-mosf-navy-dark dark:border-mosf-navy-light p-6 rounded-r-lg mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Submit Your Project
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Have an open-source project aligned with Islamic values? Submit it for evaluation.
          </p>
          <div className="space-y-3 mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              To submit your repository for evaluation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>
                Email us at{" "}
                <button
                  onClick={copyEmailToClipboard}
                  className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 underline font-medium cursor-pointer transition-colors"
                  title="Click to copy email"
                >
                  {copied ? "Copied!" : "contact@muslimopensource.org"}
                </button>
              </li>
              <li>Use the subject line: <strong>"Repo Evaluation Submission"</strong></li>
              <li>Include a link to your repository (GitHub, GitLab, etc.)</li>
            </ul>
          </div>
          <a
            href="mailto:contact@muslimopensource.org?subject=Repo Evaluation Submission"
            className="inline-block px-6 py-3 bg-mosf-navy-dark dark:bg-mosf-navy-light text-white font-semibold rounded-lg hover:bg-mosf-navy-700 dark:hover:bg-mosf-navy-500 transition-colors"
          >
            Open Email Client
          </a>
        </section>
      </main>
    </div>
  );
}


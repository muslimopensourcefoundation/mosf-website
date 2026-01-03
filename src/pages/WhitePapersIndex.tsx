import { useEffect } from "react";
import { Link } from "react-router-dom";
import { whitePapers } from "../data/whitepapers";

export default function WhitePapersIndex() {
  useEffect(() => {
    document.title = "White Papers | MOSF";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            White Papers
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            In-depth research and frameworks from the Muslim Open Source Foundation
          </p>
        </header>

        <section className="space-y-6">
          {whitePapers.map((paper) => (
            <Link
              key={paper.slug}
              to={`/white-papers/${paper.slug}`}
              className="block bg-white dark:bg-mosf-dark-alt rounded-lg border border-gray-300 dark:border-gray-700 p-6 hover:border-mosf-navy-dark dark:hover:border-mosf-navy-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {paper.title}
                    </h2>
                    {paper.subtitle && (
                      <p className="text-gray-600 dark:text-gray-400 italic mb-2">
                        {paper.subtitle}
                      </p>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {paper.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  {paper.version && (
                    <span className="bg-mosf-navy-50 dark:bg-mosf-navy-900/20 px-3 py-1 rounded-full">
                      {paper.version}
                    </span>
                  )}
                  {paper.date && <span>{paper.date}</span>}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

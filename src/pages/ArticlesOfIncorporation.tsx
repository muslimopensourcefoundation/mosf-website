import { useEffect } from "react";

export default function ArticlesOfIncorporation() {
  useEffect(() => {
    document.title = "Articles of Incorporation | MOSF";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Articles of Incorporation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The Articles of Incorporation for the Muslim Open Source Foundation (MOSF), filed and approved in Washington State.
          </p>
        </header>

        <section className="space-y-6">
          <div className="bg-white dark:bg-mosf-dark-alt rounded-lg border border-gray-300 dark:border-gray-700 p-6">
            <div className="flex justify-center items-center">
              <img
                src="/images/MOSF_WA_Articles_of_Incorporation.png"
                alt="MOSF Washington State Articles of Incorporation"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-mosf-navy-50 dark:bg-mosf-navy-900/20 border-l-4 border-mosf-navy-dark dark:border-mosf-navy-light p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-mosf-navy-dark dark:text-mosf-navy-300 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  The Muslim Open Source Foundation is a Washington State nonprofit corporation pursuing 501(c)(3) status. This document represents our official Articles of Incorporation filed with and approved by the Washington Secretary of State.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


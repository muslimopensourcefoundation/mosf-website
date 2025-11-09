import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBySlug } from "../data/evaluations";
import MetaHeader from "../components/evaluations/MetaHeader";
import TotalBadge from "../components/evaluations/TotalBadge";
import ScoreTable from "../components/evaluations/ScoreTable";
import Recommendations from "../components/evaluations/Recommendations";

export default function EvaluationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const evaluation = slug ? getBySlug(slug) : null;

  useEffect(() => {
    if (evaluation) {
      document.title = evaluation.metaTitle || `${evaluation.name} - MOSF Evaluation`;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      // Use custom description if available, otherwise create a concise description with score and classification
      const description = evaluation.metaDescription || `MOSF evaluates ${evaluation.name}, ${evaluation.category.toLowerCase()}. Score ${evaluation.total}/70 - ${evaluation.classification}.`;
      metaDescription.setAttribute('content', description);
    } else {
      document.title = "Evaluation Not Found | MOSF";
    }
  }, [evaluation]);

  if (!evaluation) {
    return (
      <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Evaluation Not Found
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              The evaluation you're looking for doesn't exist.
            </p>
            <Link
              to="/evaluations"
              className="inline-block text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 underline"
            >
              View all evaluations
            </Link>
          </div>
        </main>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <Link
            to="/evaluations"
            className="hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300 transition-colors"
          >
            ← Back to Evaluations
          </Link>
        </nav>

        <MetaHeader
          name={evaluation.name}
          repoUrl={evaluation.repoUrl}
          websiteUrl={evaluation.websiteUrl}
          category={evaluation.category}
          evaluationDate={evaluation.evaluationDate}
          evaluator={evaluation.evaluator}
        />

        <div className="mb-8">
          <TotalBadge
            classification={evaluation.classification}
            total={evaluation.total}
            color={getClassificationColor(evaluation.classification)}
            label={evaluation.badges?.label}
            text={evaluation.badges?.text}
          />
        </div>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Summary
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {evaluation.summary}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Score Breakdown
          </h2>
          <ScoreTable scores={evaluation.scores} />
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Narrative Analysis
          </h2>
          <div className="space-y-4">
            {evaluation.narrative.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <Recommendations recommendations={evaluation.recommendations} />

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
          <TotalBadge
            classification={evaluation.classification}
            total={evaluation.total}
            color={getClassificationColor(evaluation.classification)}
            label={evaluation.badges?.label}
            text={evaluation.badges?.text}
          />
        </div>
      </main>
    </div>
  );
}


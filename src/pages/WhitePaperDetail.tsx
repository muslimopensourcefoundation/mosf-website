import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getWhitePaperBySlug } from "../data/whitepapers";

export default function WhitePaperDetail() {
  const { slug } = useParams<{ slug: string }>();
  const paper = slug ? getWhitePaperBySlug(slug) : undefined;

  useEffect(() => {
    if (paper) {
      document.title = `${paper.title} | MOSF`;
    }
  }, [paper]);

  if (!paper) {
    return (
      <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              White Paper Not Found
            </h1>
            <Link
              to="/white-papers"
              className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:underline"
            >
              Back to White Papers
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const ContentComponent = paper.ContentComponent;

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <div className="mb-6">
          <Link
            to="/white-papers"
            className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:underline text-sm font-medium"
          >
            ← Back to White Papers
          </Link>
        </div>

        <div className="bg-white dark:bg-mosf-dark-alt rounded-lg border border-gray-300 dark:border-gray-700 p-8 md:p-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ContentComponent />
          </div>
        </div>
      </main>
    </div>
  );
}

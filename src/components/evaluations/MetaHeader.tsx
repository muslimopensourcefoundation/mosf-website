import { formatDateLong } from "../../utils/dateUtils";

export interface MetaHeaderProps {
  name: string;
  repoUrl?: string;
  websiteUrl?: string;
  category: string;
  evaluationDate: string;
  evaluator: string;
  frameworkVersion?: string;
}

export default function MetaHeader({
  name,
  repoUrl,
  websiteUrl,
  category,
  evaluationDate,
  evaluator,
  frameworkVersion,
}: MetaHeaderProps) {

  return (
    <div className="space-y-4 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {name}
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300 transition-colors"
            aria-label={`View ${name} repository`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Repository</span>
          </a>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300 transition-colors"
            aria-label={`Visit ${name} website`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>Website</span>
          </a>
        )}
        <span className="flex items-center gap-1">
          <span className="font-medium">Category:</span>
          <span>{category}</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="font-medium">Evaluated:</span>
          <time dateTime={evaluationDate}>{formatDateLong(evaluationDate)}</time>
        </span>
        <span className="flex items-center gap-1">
          <span className="font-medium">By:</span>
          <span>{evaluator}</span>
        </span>
        {frameworkVersion && (
          <span className="flex items-center gap-1">
            <span className="font-medium">Framework:</span>
            <span className="px-2 py-0.5 text-xs font-semibold bg-gray-100 dark:bg-mosf-dark-alt text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-700">
              v{frameworkVersion}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}


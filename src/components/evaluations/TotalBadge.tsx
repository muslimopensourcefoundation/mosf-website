export interface TotalBadgeProps {
  classification: string;
  total: number;
  max?: number;
  color?: string;
  label?: string;
  text?: string;
}

export default function TotalBadge({
  classification,
  total,
  max = 70,
  color = "green",
  label,
  text,
}: TotalBadgeProps) {
  const colorClasses = {
    gray: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600",
    yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700",
    green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700",
    emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700",
  };

  const emojiMap: Record<string, string> = {
    "Inactive / Low Relevance": "⬜",
    "Emerging": "🟨",
    "Stale": "⬜",
    "Aligned": "🟩",
    "Model Repository": "🟢",
  };

  const displayLabel = label || classification;
  const displayText = text || `${total}/${max}`;
  const emoji = emojiMap[classification] || "";

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-semibold ${colorClasses[color as keyof typeof colorClasses] || colorClasses.green}`}
      role="status"
      aria-label={`Classification: ${classification}, Score: ${total} out of ${max}`}
    >
      <span className="text-lg">{emoji}</span>
      <span>{displayLabel}</span>
      <span className="ml-1 font-mono">{displayText}</span>
    </div>
  );
}


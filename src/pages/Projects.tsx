import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "Development Projects | MOSF";
  }, []);

  const projects = [
    {
      name: "Learn Arabic: Level 1",
      status: "Planned",
      description: "An educational application for learning Arabic as part of MOSF's mission to provide free Islamic knowledge through open-source software.",
      roadmapMonth: "Apr 2026",
      features: [
        "Structured curriculum with lesson units and learning objectives",
        "Audio pronunciations and transliteration",
        "Progress tracking and assessment",
        "Bilingual interface (English/Arabic)",
        "Accessible design with RTL support",
      ],
      techStack: ["React", "Node.js or .NET API", "Audio integration"],
      timeline: "Development starting April 2026, with alpha release targeted for August 2026",
      repo: "learn-arabic",
    },
    {
      name: "Qiblah & Adhan Alarm for Smartwatches",
      status: "Concept",
      description: "A smartwatch and fitness tracker application that provides Qiblah direction and Adhan (prayer call) alarms, addressing a common need for Muslim users on mainstream wearable devices.",
      source: "Community suggestion from LinkedIn",
      features: [
        "Real-time Qiblah compass/direction indicator",
        "Configurable Adhan alarms for all five daily prayers",
        "Location-based prayer time calculations",
        "Compatibility with Apple Watch, Samsung Galaxy Watch, Huawei, Xiaomi, Google, and Garmin devices",
        "Offline functionality for prayer times and Qiblah",
      ],
      techStack: ["Platform-specific SDKs", "Location services", "Audio playback", "Compass/Magnetometer"],
      timeline: "Under consideration - pending additional research and planning",
      note: "This project addresses a gap where some devices (like Infinix GT 30 Pro) have this feature, but major platforms like Apple, Samsung, Huawei, Xiaomi, Google, and Garmin lack comprehensive solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Internal Development Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            MOSF's internal development initiatives focus on creating open-source software that serves the Muslim community. These projects align with our mission of providing free, ethical, and accessible technology solutions.
          </p>
        </header>

        <section className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-mosf-dark-alt hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.name}
                    </h2>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Planned"
                          ? "bg-mosf-navy-100 dark:bg-mosf-navy-900/30 text-mosf-navy-800 dark:text-mosf-navy-200"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  {project.source && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
                      Source: {project.source}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Features
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Technical Details
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Timeline:</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {project.timeline}
                      </p>
                    </div>
                    {project.roadmapMonth && (
                      <div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Roadmap:</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Planned for {project.roadmapMonth} in our{" "}
                          <a
                            href="/roadmap"
                            className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 underline"
                          >
                            rolling 12-month roadmap
                          </a>
                        </p>
                      </div>
                    )}
                    {project.repo && (
                      <div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Repository:</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-mono">
                          {project.repo}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {project.note && (
                <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    {project.note}
                  </p>
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="bg-mosf-navy-50 dark:bg-mosf-navy-900/20 border-l-4 border-mosf-navy-dark dark:border-mosf-navy-light p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Contributing to Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            These projects are in various stages of planning and development. Once projects move into active development, we'll seek contributions from the community.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            For questions, suggestions, or to express interest in contributing, please contact us at{" "}
            <a
              href="mailto:contact@muslimopensource.org"
              className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 underline font-medium"
            >
              contact@muslimopensource.org
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}


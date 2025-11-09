import DarkModeToggle from "../components/DarkModeToggle";
import NavLinks from "../components/NavLinks";

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-50 to-mosf-navy-50 dark:from-mosf-dark-alt dark:to-mosf-dark border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/images/logo.svg"
                  alt="MOSF Logo"
                  className="h-16 md:h-20 w-auto flex-shrink-0 block dark:hidden"
                />
                <img
                  src="/images/logo-dark.jpg"
                  alt="MOSF Logo"
                  className="h-16 md:h-20 w-auto flex-shrink-0 hidden dark:block"
                />
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Muslim Open Source Foundation
                </h1>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base ml-20 md:ml-24">
                Empowering Muslims through open-source education and ethical technology
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 ml-20 md:ml-24 mt-1">
                A Washington State nonprofit corporation
              </p>
            </div>
            <DarkModeToggle />
          </div>
          <NavLinks />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Mission Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Empower the global Muslim community to gain Islamic and software engineering knowledge freely through open-source collaboration, education, and innovation.
          </p>
        </section>

        {/* Vision Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Vision
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A world where Muslims lead in ethical technology and open knowledge, advancing society through faith-aligned, transparent, and accessible digital solutions.
          </p>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            About
          </h2>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              The Muslim Open Source Foundation (MOSF) is a Washington State nonprofit corporation dedicated to promoting education, free and open-source software development, and Islamic ethical values in technology.
            </p>
            <p>
              We believe that knowledge should be freely accessible, and technology should align with ethical principles that benefit society. Through open-source collaboration, we aim to create tools and resources that serve the Muslim community and beyond.
            </p>
            <p>Our focus areas include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>Free and open-source software for Islamic learning and ethical technology</li>
              <li>Educational initiatives that combine modern engineering skills with Islamic principles</li>
              <li>Grants and mentorship for Muslim developers and educators</li>
            </ul>
          </div>
        </section>

        {/* Status Notice */}
        <section className="bg-mosf-navy-50 dark:bg-mosf-navy-900/20 border-l-4 border-mosf-navy-dark dark:border-mosf-navy-light p-6 rounded-r-lg">
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
                The Muslim Open Source Foundation is a Washington State nonprofit corporation pursuing 501(c)(3) status. Donations are not being accepted yet.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-mosf-navy-200 dark:border-mosf-navy-800 pb-2">
            Contact
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            For inquiries, please reach out to us at:{" "}
            <a
              href="mailto:contact@muslimopensource.org"
              className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 underline font-medium transition-colors"
            >
              contact@muslimopensource.org
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-mosf-dark-alt border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2025 Muslim Open Source Foundation - All rights reserved.
          </p>
          <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-2">
            Muslim Open Source Foundation is a Washington State nonprofit corporation pursuing 501(c)(3) status.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://github.com/muslimopensourcefoundation/mosf-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Visit our GitHub repository"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


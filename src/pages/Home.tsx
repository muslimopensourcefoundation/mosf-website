import DarkModeToggle from "../components/DarkModeToggle";
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-50 to-mosf-navy-50 dark:from-mosf-dark-alt dark:to-mosf-dark border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-between justify-between mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-1/3 max-w-[120px] sm:w-[15%] flex-shrink-0">
              <img src="/images/logo.svg" className="h-auto w-full block dark:hidden" />
              <img src="/images/logo-dark.png" className="h-auto w-full hidden dark:block" />
            </div>
            <div className="flex-1 mt-2 sm:mt-5 text-center sm:text-left">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-[#5170FE] mb-2">
                Muslim Open Source Foundation
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                Empowering Muslims through open-source education and ethical technology
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                A Washington State nonprofit corporation
              </p>
            </div>
            <DarkModeToggle />
          </div>
          <NavLinks />
        </div>
      </header>


      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
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
      <Footer />
    </div>
  );
}


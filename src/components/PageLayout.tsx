import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import NavLinks from "./NavLinks";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <header className="bg-gradient-to-br from-slate-50 to-mosf-navy-50 dark:from-mosf-dark-alt dark:to-mosf-dark border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Link
                  to="/"
                  className="flex-shrink-0"
                >
                  <img
                    src="/images/logo.svg"
                    alt="MOSF Logo"
                    className="h-16 md:h-20 w-auto block dark:hidden"
                  />
                  <img
                    src="/images/logo-dark.jpg"
                    alt="MOSF Logo"
                    className="h-16 md:h-20 w-auto hidden dark:block"
                  />
                </Link>
                <Link
                  to="/"
                  className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-mosf-navy-light dark:hover:text-mosf-navy-300 transition-colors"
                >
                  Muslim Open Source Foundation
                </Link>
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
      {children}
    </div>
  );
}


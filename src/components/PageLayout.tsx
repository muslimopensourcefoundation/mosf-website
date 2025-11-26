import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import NavLinks from "./NavLinks";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
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
      {children}
      <Footer />
    </div>
  );
}


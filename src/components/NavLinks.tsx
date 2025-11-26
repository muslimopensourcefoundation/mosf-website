import { Link, useLocation } from "react-router-dom";

export default function NavLinks() {
  const location = useLocation();
  const isActive = (path: string) => 
    location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <nav className="ml-5 md:ml-24 flex flex-wrap items-center gap-4">
      <Link
        to="/"
        className={`text-sm font-medium transition-colors ${
          isActive("/") && location.pathname === "/"
            ? "text-mosf-navy-dark dark:text-mosf-navy-300 border-b-2 border-mosf-navy-dark dark:border-mosf-navy-300 pb-1"
            : "text-gray-700 dark:text-gray-300 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300"
        }`}
      >
        Home
      </Link>
      <Link
        to="/evaluations"
        className={`text-sm font-medium transition-colors ${
          isActive("/evaluations") || location.pathname.startsWith("/evaluations/")
            ? "text-mosf-navy-dark dark:text-mosf-navy-300 border-b-2 border-mosf-navy-dark dark:border-mosf-navy-300 pb-1"
            : "text-gray-700 dark:text-gray-300 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300"
        }`}
      >
        Evaluations
      </Link>
      <Link
        to="/frameworks/repository-evaluation"
        className={`text-sm font-medium transition-colors ${
          isActive("/frameworks/repository-evaluation")
            ? "text-mosf-navy-dark dark:text-mosf-navy-300 border-b-2 border-mosf-navy-dark dark:border-mosf-navy-300 pb-1"
            : "text-gray-700 dark:text-gray-300 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300"
        }`}
      >
        Framework
      </Link>
      <Link
        to="/roadmap"
        className={`text-sm font-medium transition-colors ${
          isActive("/roadmap")
            ? "text-mosf-navy-dark dark:text-mosf-navy-300 border-b-2 border-mosf-navy-dark dark:border-mosf-navy-300 pb-1"
            : "text-gray-700 dark:text-gray-300 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300"
        }`}
      >
        Roadmap
      </Link>
      <Link
        to="/projects"
        className={`text-sm font-medium transition-colors ${
          isActive("/projects")
            ? "text-mosf-navy-dark dark:text-mosf-navy-300 border-b-2 border-mosf-navy-dark dark:border-mosf-navy-300 pb-1"
            : "text-gray-700 dark:text-gray-300 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300"
        }`}
      >
        Projects
      </Link>
      <Link
        to="/donate"
        className={`text-sm font-medium transition-colors ${
          isActive("/donate")
            ? "text-mosf-navy-dark dark:text-mosf-navy-300 border-b-2 border-mosf-navy-dark dark:border-mosf-navy-300 pb-1"
            : "text-gray-700 dark:text-gray-300 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300"
        }`}
      >
        Donate
      </Link>
      <Link
        to="/articles-of-incorporation"
        className={`text-sm font-medium transition-colors ${
          isActive("/articles-of-incorporation") || location.pathname.startsWith("/articles-of-incorporation")
            ? "text-mosf-navy-dark dark:text-mosf-navy-300 border-b-2 border-mosf-navy-dark dark:border-mosf-navy-300 pb-1"
            : "text-gray-700 dark:text-gray-300 hover:text-mosf-navy-dark dark:hover:text-mosf-navy-300"
        }`}
      >
        Articles of Incorporation
      </Link>
    </nav>
  );
}


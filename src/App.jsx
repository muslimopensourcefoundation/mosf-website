import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrameworkRepositoryEvaluation from "./pages/FrameworkRepositoryEvaluation";
import EvaluationsIndex from "./pages/EvaluationsIndex";
import EvaluationDetail from "./pages/EvaluationDetail";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";
import ArticlesOfIncorporation from "./pages/ArticlesOfIncorporation";
import Donate from "./pages/Donate";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";

function App() {
  // Initialize dark mode from localStorage on app load
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    const isDark = stored ? JSON.parse(stored) : false;
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/frameworks/repository-evaluation"
          element={
            <PageLayout>
              <FrameworkRepositoryEvaluation />
            </PageLayout>
          }
        />
        <Route
          path="/evaluations"
          element={
            <PageLayout>
              <EvaluationsIndex />
            </PageLayout>
          }
        />
        <Route
          path="/evaluations/:slug"
          element={
            <PageLayout>
              <EvaluationDetail />
            </PageLayout>
          }
        />
        <Route
          path="/roadmap"
          element={
            <PageLayout>
              <Roadmap />
            </PageLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <PageLayout>
              <Projects />
            </PageLayout>
          }
        />
        <Route
          path="/articles-of-incorporation"
          element={
            <PageLayout>
              <ArticlesOfIncorporation />
            </PageLayout>
          }
        />
        <Route
          path="/donate"
          element={
            <PageLayout>
              <Donate />
            </PageLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageLayout>
              <AboutUs />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


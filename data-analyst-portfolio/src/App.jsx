import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReadingProgress from "./components/ReadingProgress";
import { legacyDestination, resolveRoute } from "./utils/routes";
import { getMetadata } from "./utils/metadata";
import "./styles/index.css";

export default function App() {
  const route = resolveRoute(window.location.pathname);
  useEffect(() => {
    const meta = getMetadata(window.location.pathname);
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    const redirect = () => {
      const destination = legacyDestination(
        window.location.pathname,
        window.location.hash,
      );
      if (destination) window.location.replace(destination);
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      {route.type === "project" && <ReadingProgress />}
      <main id="main" tabIndex={-1}>
        {route.type === "home" && <HomePage />}
        {route.type === "projects" && <ProjectsPage />}
        {route.type === "about" && <AboutPage />}
        {route.type === "project" && <CaseStudyPage project={route.project} />}
        {route.type === "not-found" && (
          <section className="section container not-found">
            <p className="eyebrow">404 / Page not found</p>
            <h1>Let's get you back to the work.</h1>
            <a className="btn" href="/projects">
              Explore projects
            </a>
          </section>
        )}
      </main>
      <Footer />
    </MotionConfig>
  );
}

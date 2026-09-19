import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { siteData } from "../data/siteData";
import { projectDetails } from "../data/caseStudyData";
import PortfolioProjectCard from "../components/PortfolioProjectCard";
import Reveal from "../components/Reveal";
import Contact from "../components/Contact";

const filters = [
  { id: "all", label: "All work" },
  { id: "analysis", label: "Data analysis", resume: 0 },
  { id: "analytics", label: "Analytics engineering", resume: 1 },
  { id: "engineering", label: "Data engineering", resume: 2 },
  { id: "ai", label: "Applied AI", resume: 0 },
];
function readFocus() {
  const value = new URLSearchParams(window.location.search).get("focus");
  return filters.some((filter) => filter.id === value) ? value : "all";
}
export default function ProjectsPage() {
  const [focus, setFocus] = useState(readFocus);
  useEffect(() => {
    const update = () => setFocus(readFocus());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  const projects = siteData.projects.filter(
    (project) =>
      focus === "all" || projectDetails[project.slug].focus.includes(focus),
  );
  const resume =
    siteData.resumeVariants[
      filters.find((filter) => filter.id === focus)?.resume ?? 0
    ];
  function changeFocus(value) {
    setFocus(value);
    const url = new URL(window.location.href);
    if (value === "all") url.searchParams.delete("focus");
    else url.searchParams.set("focus", value);
    window.history.pushState({}, "", url);
  }
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Portfolio / 04 projects</p>
            <h1>
              Questions to answer.
              <br />
              <span>Systems to build.</span>
            </h1>
            <div className="page-intro-bottom">
              <p>
                Retail intelligence, forensic analysis, marketing decisions, and
                AI learning. A closer look at what I built and why.
              </p>
              <a
                className="text-link"
                href={siteData.github}
                target="_blank"
                rel="noreferrer"
              >
                Explore GitHub <FiArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section project-gallery">
        <div className="container">
          <div className="filter-toolbar">
            <fieldset className="project-filters">
              <legend className="sr-only">Filter projects by focus</legend>
              {filters.map((filter) => (
                <label key={filter.id}>
                  <input
                    type="radio"
                    name="project-focus"
                    value={filter.id}
                    checked={focus === filter.id}
                    onChange={() => changeFocus(filter.id)}
                  />
                  <span>{filter.label}</span>
                </label>
              ))}
            </fieldset>
            <span className="result-count" role="status">
              {projects.length} {projects.length === 1 ? "project" : "projects"}
            </span>
          </div>
          <div className="project-grid">
            <AnimatePresence mode="popLayout">
              {projects.map((project) => (
                <PortfolioProjectCard
                  key={project.slug}
                  project={project}
                  index={siteData.projects.indexOf(project)}
                />
              ))}
            </AnimatePresence>
          </div>
          <div className="gallery-resume">
            <div>
              <p className="eyebrow">Keep the conversation going</p>
              <h2>
                {focus === "all"
                  ? "The experience behind the work."
                  : resume.title.replace(" Resume", "") + " resume"}
              </h2>
            </div>
            <a className="btn btn-ghost" href={resume.url} download>
              <FiDownload />
              Download resume
            </a>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

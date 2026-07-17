import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub, FiTrendingUp } from "react-icons/fi";
import ButtonLink from "./ButtonLink";
import ProjectPreview from "./ProjectPreview";

const linkIcons = {
  GitHub: FiGithub,
  Demo: FiExternalLink,
  "Case Study": FiArrowUpRight,
};

export default function ProjectDeepDive({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailId = `case-study-${project.slug}`;

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === `#${detailId}`) {
        setIsOpen(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [detailId]);

  return (
    <Motion.details
      id={detailId}
      className={`deep-dive-card${project.featured ? " featured-card" : ""}`}
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <summary>
        <div className="deep-dive-summary-media">
          <img src={project.image} alt={project.imageAlt || `${project.title} preview`} loading="lazy" />
        </div>
        <div className="deep-dive-summary-copy">
          <div className="card-title-row">
            <h3>{project.title}</h3>
            {project.badge ? <span className="pill pill-accent">{project.badge}</span> : null}
          </div>
          <p>
            <FiTrendingUp aria-hidden="true" />
            {project.impact}
          </p>
          <div className="project-role-tags" aria-label={`${project.title} role tags`}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <span className="deep-dive-toggle" aria-hidden="true" />
      </summary>

      <div className="deep-dive-content">
        {project.highlights?.length ? (
          <div className="project-highlights" aria-label={`${project.title} impact metrics`}>
            {project.highlights.map((metric) => (
              <div key={`${metric.label}-${metric.value}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        ) : null}

        <p className="muted">{project.description}</p>

        <ProjectPreview preview={project.preview} />

        {project.caseStudy ? (
          <div className="case-study">
            <div>
              <span>Problem</span>
              <p>{project.caseStudy.problem}</p>
            </div>
            <div>
              <span>What I Built</span>
              <p>{project.caseStudy.approach}</p>
            </div>
            <div>
              <span>Outcome</span>
              <p>{project.caseStudy.result}</p>
            </div>
          </div>
        ) : null}

        {project.decisions?.length ? (
          <div className="technical-decisions">
            <span>Technical Decisions</span>
            <ul>
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="stack">
          {project.tech.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>

        <div className="links">
          {project.links.map((link) => (
            <ButtonLink
              key={link.label}
              href={link.url}
              className="project-link"
              variant={link.label === "Demo" ? "primary" : "ghost"}
              icon={linkIcons[link.label] || FiArrowUpRight}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </Motion.details>
  );
}

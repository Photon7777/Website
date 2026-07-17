import { FiArrowDown, FiExternalLink, FiGithub } from "react-icons/fi";
import ButtonLink from "./ButtonLink";

const linkIcons = {
  GitHub: FiGithub,
  Demo: FiExternalLink,
};

export default function ProjectIndexCard({ project }) {
  const visibleHighlights = project.highlights?.slice(0, 3) || [];

  return (
    <article className="project-index-card">
      <div className="project-index-media">
        <img src={project.image} alt={project.imageAlt || `${project.title} preview`} loading="lazy" />
      </div>

      <div className="project-index-body">
        <div className="card-title-row">
          <h3>{project.title}</h3>
          {project.badge ? <span className="pill pill-accent">{project.badge}</span> : null}
        </div>

        <p>{project.impact}</p>

        <div className="project-role-tags" aria-label={`${project.title} focus areas`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {visibleHighlights.length ? (
          <div className="project-index-metrics" aria-label={`${project.title} quick metrics`}>
            {visibleHighlights.map((metric) => (
              <span key={`${metric.label}-${metric.value}`}>
                <strong>{metric.value}</strong>
                {metric.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="project-index-actions">
        <ButtonLink href={`#case-study-${project.slug}`} variant="subtle" icon={FiArrowDown}>
          Deep Dive
        </ButtonLink>
        {project.links.map((link) => (
          <ButtonLink
            key={link.label}
            href={link.url}
            variant={link.label === "Demo" ? "primary" : "ghost"}
            icon={linkIcons[link.label] || FiExternalLink}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </ButtonLink>
        ))}
      </div>
    </article>
  );
}

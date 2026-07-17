import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import ButtonLink from "./ButtonLink";

const linkIcons = {
  GitHub: FiGithub,
  Demo: FiExternalLink,
};

export default function FeaturedProjectCard({ project }) {
  return (
    <article className="featured-project-card">
      <a className="featured-project-media" href={`#case-study-${project.slug}`} aria-label={`Open ${project.title} deep dive`}>
        <img src={project.image} alt={project.imageAlt || `${project.title} preview`} loading="lazy" />
        <div className="featured-project-overlay">
          <span>Quick Preview</span>
          <p>{project.caseStudy.problem}</p>
        </div>
      </a>

      <div className="featured-project-body">
        <div className="card-title-row">
          <h3>{project.title}</h3>
          {project.badge ? <span className="pill pill-accent">{project.badge}</span> : null}
        </div>

        <p className="featured-impact">{project.impact}</p>

        <div className="project-role-tags" aria-label={`${project.title} role tags`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a className="case-study-link" href={`#case-study-${project.slug}`}>
          Deep dive <FiArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="featured-project-actions">
        {project.links.map((link) => (
          <ButtonLink
            key={link.label}
            href={link.url}
            className="project-link"
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

import { motion as Motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import SkillBadge from "./SkillBadge";
export default function PortfolioProjectCard({ project, index, ref }) {
  const reduced = useReducedMotion();
  return (
    <Motion.article
      ref={ref}
      layout={!reduced}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : 0.35 }}
      className="project-card"
    >
      <a
        href={`/projects/${project.slug}`}
        className={`project-image project-${project.slug}`}
        aria-label={`Read ${project.shortTitle} case study`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1280"
          height="720"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <span className="image-cta">
          <FiArrowUpRight />
        </span>
      </a>
      <div className="project-card-body">
        <div className="project-title-row">
          <span className="eyebrow">{project.badge}</span>
          <span className="project-number">0{index + 1}</span>
        </div>
        <h2>
          <a href={`/projects/${project.slug}`}>{project.shortTitle}</a>
        </h2>
        <p>{project.impact}</p>
        <div className="skill-list">
          {project.tech.slice(0, 5).map((tech) => (
            <SkillBadge key={tech}>{tech}</SkillBadge>
          ))}
        </div>
        <div className="project-card-actions">
          <a className="text-link" href={`/projects/${project.slug}`}>
            Read case study <FiArrowUpRight />
          </a>
          <div>
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.shortTitle} ${link.label}`}
                title={link.label}
              >
                {link.label === "GitHub" ? <FiGithub /> : <FiExternalLink />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Motion.article>
  );
}

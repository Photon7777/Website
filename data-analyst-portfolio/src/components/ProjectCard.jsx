import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub, FiTrendingUp } from "react-icons/fi";
import ButtonLink from "./ButtonLink";

const linkIcons = {
  GitHub: FiGithub,
  Demo: FiExternalLink,
  "Case Study": FiArrowUpRight,
};

export default function ProjectCard({ p }) {
  return (
    <Motion.article
      className="card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {p.image ? (
        <div className="project-media">
          <img src={p.image} alt={p.imageAlt || `${p.title} preview`} loading="lazy" />
        </div>
      ) : null}

      <div className="card-top">
        <div className="card-title-row">
          <h3>{p.title}</h3>
          {p.badge ? <span className="pill pill-accent">{p.badge}</span> : null}
        </div>
        <p className="impact">
          <FiTrendingUp aria-hidden="true" />
          {p.impact}
        </p>
      </div>

      <p className="muted">{p.description}</p>

      {p.caseStudy ? (
        <div className="case-study">
          <div>
            <span>Problem</span>
            <p>{p.caseStudy.problem}</p>
          </div>
          <div>
            <span>Approach</span>
            <p>{p.caseStudy.approach}</p>
          </div>
          <div>
            <span>Result</span>
            <p>{p.caseStudy.result}</p>
          </div>
        </div>
      ) : null}

      <div className="stack">
        {p.tech.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      {p.links?.length ? (
        <div className="links">
          {p.links.map((l) => (
            <ButtonLink
              key={l.label}
              href={l.url}
              className="project-link"
              variant={l.label === "Demo" ? "primary" : "ghost"}
              icon={linkIcons[l.label] || FiArrowUpRight}
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </ButtonLink>
          ))}
        </div>
      ) : null}
    </Motion.article>
  );
}

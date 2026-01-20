import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ p }) {
  return (
    <motion.article
      className="card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div className="card-top">
        <div className="card-title-row">
          <h3>{p.title}</h3>
          {p.badge ? <span className="pill pill-accent">{p.badge}</span> : null}
        </div>
        <p className="impact">{p.impact}</p>
      </div>

      <p className="muted">{p.description}</p>

      <div className="stack">
        {p.tech.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <div className="links">
        {p.links?.map((l) => (
          <a key={l.label} href={l.url} className="link" target="_blank" rel="noreferrer">
            {l.label} <FiExternalLink />
          </a>
        ))}
      </div>
    </motion.article>
  );
}

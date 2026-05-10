import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

export default function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="timeline-marker" aria-hidden="true">
        <FiBriefcase />
      </div>

      <div className="experience-content">
        <div className="experience-head">
          <div>
            <p className="eyebrow">{experience.company}</p>
            <h3>{experience.role}</h3>
          </div>
          <span className="pill">{experience.period}</span>
        </div>

        <div className="experience-meta">
          <span>
            <FiMapPin aria-hidden="true" /> {experience.location}
          </span>
          <span>
            <FiCalendar aria-hidden="true" /> {experience.period}
          </span>
        </div>

        <ul>
          {experience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {experience.tools?.length ? (
          <div className="experience-tags">
            {experience.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

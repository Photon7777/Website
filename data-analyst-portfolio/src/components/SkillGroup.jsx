import {
  FiBarChart2,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiTool,
} from "react-icons/fi";

const icons = {
  Programming: FiCode,
  "Data Analysis": FiBarChart2,
  "Machine Learning / AI": FiCpu,
  "Cloud / Data Engineering": FiDatabase,
  Visualization: FiBarChart2,
  Tools: FiTool,
};

export default function SkillGroup({ title, items }) {
  const Icon = icons[title] || FiCloud;

  return (
    <article className="skill-card">
      <div className="skill-card-head">
        <span className="skill-icon">
          <Icon aria-hidden="true" />
        </span>
        <h3>{title}</h3>
      </div>
      <div className="skill-list">
        {items.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

import { FiExternalLink } from "react-icons/fi";

export default function Navbar({ name, resumeUrl }) {
  const items = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top">{name}</a>

        <nav className="nav-links">
          {items.map((it) => (
            <a key={it.href} href={it.href}>{it.label}</a>
          ))}
        </nav>

        <a className="btn btn-ghost" href={resumeUrl} target="_blank" rel="noreferrer">
          Resume <FiExternalLink />
        </a>
      </div>
    </header>
  );
}

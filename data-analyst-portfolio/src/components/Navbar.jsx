import { useState } from "react";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ name, resumeUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Distinctions", href: "#distinctions" },
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

        <div className="nav-actions">
          <a className="btn btn-ghost" href={resumeUrl} target="_blank" rel="noreferrer">
            Resume <FiExternalLink />
          </a>
          <button
            className="icon-btn mobile-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav id="mobile-menu" className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={() => setIsMenuOpen(false)}>
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

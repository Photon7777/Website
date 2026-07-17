import { useEffect, useState } from "react";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";

const items = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Resumes", href: "#resumes" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ name, resumeUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("projects");
  const isResumeAnchor = resumeUrl?.startsWith("#");

  useEffect(() => {
    const updateActive = () => {
      const anchor = Math.min(window.innerHeight * 0.42, 360);
      const current = items.reduce((latest, item) => {
        const section = document.querySelector(item.href);
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top <= anchor && rect.bottom > anchor) {
          return item.href.slice(1);
        }
        return latest;
      }, "projects");

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top">{name}</a>

        <nav className="nav-links">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className={activeId === it.href.slice(1) ? "active" : ""}
              aria-current={activeId === it.href.slice(1) ? "page" : undefined}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="btn btn-ghost"
            href={resumeUrl}
            target={isResumeAnchor ? undefined : "_blank"}
            rel={isResumeAnchor ? undefined : "noreferrer"}
          >
            Resumes {isResumeAnchor ? null : <FiExternalLink />}
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
            <a
              key={it.href}
              href={it.href}
              className={activeId === it.href.slice(1) ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

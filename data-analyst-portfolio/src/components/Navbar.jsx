import { useEffect, useState } from "react";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";

const items = [
  { id: "home", label: "Home", href: "/#top" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Navbar({ name, resumeUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const isResumeAnchor = resumeUrl?.startsWith("#") || resumeUrl?.startsWith("/#");

  useEffect(() => {
    const updateActive = () => {
      if (window.location.pathname.startsWith("/projects")) {
        setActiveId("projects");
        return;
      }

      if (window.scrollY < 220) {
        setActiveId("home");
        return;
      }

      const anchor = Math.min(window.innerHeight * 0.42, 360);
      const current = items.reduce((latest, item) => {
        const hash = item.href.includes("#") ? item.href.split("#")[1] : "";
        const section = hash ? document.querySelector(`#${hash}`) : null;
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top <= anchor && rect.bottom > anchor) {
          return item.id;
        }
        return latest;
      }, "home");

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
        <a className="brand" href="/#top">{name}</a>

        <nav className="nav-links">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className={activeId === it.id ? "active" : ""}
              aria-current={activeId === it.id ? "page" : undefined}
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
            Resumes {isResumeAnchor ? null : <FiExternalLink aria-hidden="true" />}
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
              className={activeId === it.id ? "active" : ""}
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

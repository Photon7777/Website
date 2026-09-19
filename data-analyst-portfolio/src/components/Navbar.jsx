import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import ResumeMenu from "./ResumeMenu";

const items = [
  { label: "Home", href: "/", path: "/" },
  { label: "Projects", href: "/projects", path: "/projects" },
  { label: "About", href: "/about", path: "/about" },
  { label: "Skills", href: "/#skills", hash: "#skills" },
  { label: "Contact", href: "/#contact", hash: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const update = () => {
      setHash(window.location.hash);
      setOpen(false);
    };
    const trackSection = () => {
      if (window.location.pathname !== "/") return;
      const anchor = Math.min(window.innerHeight * 0.3, 200);
      const current = ["contact", "skills"].find((id) => {
        const bounds = document.getElementById(id)?.getBoundingClientRect();
        return bounds && bounds.top <= anchor && bounds.bottom > anchor;
      });
      setHash(current ? `#${current}` : "");
    };
    window.addEventListener("keydown", close);
    window.addEventListener("hashchange", update);
    window.addEventListener("scroll", trackSection, { passive: true });
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("hashchange", update);
      window.removeEventListener("scroll", trackSection);
    };
  }, []);
  return (
    <header className="nav" id="top">
      <div className="container nav-inner">
        <a className="brand" href="/" aria-label="Sai Praneeth home">
          <span className="brand-symbol" aria-hidden="true">
            sp.
          </span>
          <span>Sai Praneeth</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {items.map((item) => {
            const active = item.hash
              ? path === "/" && hash === item.hash
              : item.path === "/"
                ? path === "/" && !["#skills", "#contact"].includes(hash)
                : path.startsWith(item.path);
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="nav-actions">
          <ResumeMenu compact />
          <button
            className="icon-btn mobile-toggle"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        inert={!open}
      >
        {items.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}

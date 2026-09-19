import { useEffect, useRef } from "react";
import { FiChevronDown, FiDownload } from "react-icons/fi";
import { siteData } from "../data/siteData";

export default function ResumeMenu({ compact = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const outside = (event) => {
      if (!ref.current?.contains(event.target))
        ref.current?.removeAttribute("open");
    };
    const escape = (event) => {
      if (event.key === "Escape" && ref.current?.open) {
        ref.current.removeAttribute("open");
        ref.current.querySelector("summary").focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <details className={`resume-menu ${compact ? "compact" : ""}`} ref={ref}>
      <summary className="btn btn-ghost">
        <FiDownload aria-hidden="true" />
        Resume
        <FiChevronDown className="chevron" aria-hidden="true" />
      </summary>
      <div className="resume-options">
        <span className="eyebrow">Choose your focus</span>
        {siteData.resumeVariants.map((resume) => (
          <a
            key={resume.url}
            href={resume.url}
            download
            onClick={() => ref.current?.removeAttribute("open")}
          >
            {resume.title.replace(" Resume", "")}
            <FiDownload aria-hidden="true" />
          </a>
        ))}
      </div>
    </details>
  );
}

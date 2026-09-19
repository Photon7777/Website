import { useEffect, useState } from "react";
import { FiArrowUpRight, FiPlay, FiX } from "react-icons/fi";
export default function LivePreview({ project }) {
  const [status, setStatus] = useState("idle");
  const isLoading = status === "loading";
  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => setStatus("slow"), 15000);
    return () => clearTimeout(timer);
  }, [isLoading]);
  const demo = project.links.find((link) => link.label === "Demo");
  return (
    <div className="live-preview">
      <div className="live-preview-head">
        <div>
          <p className="eyebrow">Interactive product</p>
          <h3>Explore Mixalyzer.</h3>
          <p>
            The app starts with sample data. Model estimates are for planning,
            not realized returns.
          </p>
        </div>
        <a
          className="text-link"
          href={demo.url}
          target="_blank"
          rel="noreferrer"
        >
          Open app <FiArrowUpRight />
        </a>
      </div>
      {status === "idle" ? (
        <button
          type="button"
          className="preview-cover"
          onClick={() => setStatus("loading")}
        >
          <img
            src={project.image}
            alt="Mixalyzer application preview"
            width="1280"
            height="720"
            loading="lazy"
          />
          <span className="play-label">
            <FiPlay aria-hidden="true" />
            Launch live preview
          </span>
        </button>
      ) : (
        <>
          <div className="embed-toolbar">
            <span role="status">
              {status === "loading"
                ? "Connecting to Mixalyzer..."
                : status === "slow"
                  ? "Taking longer than expected? Open the app in a new tab."
                  : "Mixalyzer / Sample-data demo"}
            </span>
            <button
              className="icon-btn"
              type="button"
              aria-label="Close live preview"
              onClick={() => setStatus("idle")}
            >
              <FiX />
            </button>
          </div>
          <iframe
            src={project.preview.liveEmbed}
            title="Mixalyzer live application"
            onLoad={() => setStatus("ready")}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="embed-note">
            If the embedded app is unavailable,{" "}
            <a href={demo.url} target="_blank" rel="noreferrer">
              open Mixalyzer directly <FiArrowUpRight />
            </a>
            .
          </p>
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import { FiActivity, FiBarChart2, FiCpu, FiDatabase, FiExternalLink, FiPlay } from "react-icons/fi";

const mixalyzerScenarios = {
  Baseline: [62, 44, 54, 34],
  Optimized: [48, 68, 58, 46],
  Conservative: [56, 50, 42, 30],
};

const mixalyzerChannels = ["Search", "Social", "Email", "Retail"];

function MixalyzerPreview({ preview }) {
  const [scenario, setScenario] = useState("Baseline");
  const [isEmbedLoaded, setIsEmbedLoaded] = useState(false);
  const bars = mixalyzerScenarios[scenario];

  return (
    <div className="project-preview-body">
      <div className="scenario-controls" aria-label="Mixalyzer scenario preview controls">
        {Object.keys(mixalyzerScenarios).map((name) => (
          <button
            key={name}
            className={scenario === name ? "active" : ""}
            type="button"
            onClick={() => setScenario(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="allocation-chart" aria-label={`${scenario} allocation preview`}>
        {mixalyzerChannels.map((channel, index) => (
          <div key={channel} className="allocation-row">
            <span>{channel}</span>
            <div className="allocation-track">
              <div style={{ width: `${bars[index]}%` }} />
            </div>
          </div>
        ))}
      </div>

      {preview.liveEmbed ? (
        <div className="live-preview">
          <button className="live-preview-toggle" type="button" onClick={() => setIsEmbedLoaded((loaded) => !loaded)}>
            {isEmbedLoaded ? <FiExternalLink aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
            {isEmbedLoaded ? "Hide live preview" : "Load live Streamlit preview"}
          </button>

          {isEmbedLoaded ? (
            <iframe
              src={preview.liveEmbed}
              title="Mixalyzer live Streamlit preview"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function PipelinePreview() {
  const steps = [
    { label: "Ingest", icon: FiDatabase },
    { label: "Model", icon: FiBarChart2 },
    { label: "Validate", icon: FiActivity },
    { label: "Serve", icon: FiExternalLink },
  ];

  return (
    <div className="pipeline-preview" aria-label="RetailIQ pipeline preview">
      {steps.map((step) => {
        const StepIcon = step.icon;

        return (
          <div key={step.label} className="pipeline-step">
            <StepIcon aria-hidden="true" />
            <span>{step.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function ForensicPreview() {
  return (
    <div className="forensic-preview" aria-label="Forensic analytics triage preview">
      <div>
        <strong>45.2%</strong>
        <span>Invoices flagged</span>
      </div>
      <div>
        <strong>818</strong>
        <span>Pre-release anomalies</span>
      </div>
      <div>
        <strong>4,673</strong>
        <span>Line items reviewed</span>
      </div>
    </div>
  );
}

function AgenticPreview() {
  const steps = ["Ingest", "Retrieve", "Prompt", "Respond"];

  return (
    <div className="agentic-preview" aria-label="NexGen agentic RAG flow preview">
      {steps.map((step) => (
        <div key={step}>
          <FiCpu aria-hidden="true" />
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectPreview({ preview }) {
  if (!preview) return null;

  return (
    <aside className="project-preview" aria-label={preview.title}>
      <div className="project-preview-head">
        <p className="eyebrow">{preview.title}</p>
        <p>{preview.caption}</p>
      </div>

      {preview.type === "mixalyzer" ? <MixalyzerPreview preview={preview} /> : null}
      {preview.type === "pipeline" ? <PipelinePreview /> : null}
      {preview.type === "forensic" ? <ForensicPreview /> : null}
      {preview.type === "agentic" ? <AgenticPreview /> : null}
    </aside>
  );
}

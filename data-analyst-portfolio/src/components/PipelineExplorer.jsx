import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from "framer-motion";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiDatabase,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";
import { pipelineStages } from "../data/caseStudyData";
const icons = [FiDatabase, FiLayers, FiCheckCircle, FiMonitor];

export default function PipelineExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const reduced = useReducedMotion();
  const stage = pipelineStages[active];
  function onKeyDown(event, index) {
    const keys = {
      ArrowRight: (index + 1) % 4,
      ArrowLeft: (index + 3) % 4,
      Home: 0,
      End: 3,
    };
    if (keys[event.key] !== undefined) {
      event.preventDefault();
      setActive(keys[event.key]);
      tabs.current[keys[event.key]].focus();
    }
  }
  return (
    <div className="pipeline-explorer">
      <div
        className="pipeline-tabs"
        role="tablist"
        aria-label="RetailIQ pipeline stages"
      >
        {pipelineStages.map((item, index) => {
          const Icon = icons[index];
          return (
            <button
              type="button"
              role="tab"
              key={item.id}
              id={`tab-${item.id}`}
              aria-selected={active === index}
              aria-controls="architecture-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              ref={(el) => {
                tabs.current[index] = el;
              }}
            >
              <span className="stage-index">0{index + 1}</span>
              <Icon className="stage-icon" aria-hidden="true" />
              <strong>{item.label}</strong>
              <span className="stage-tool">{item.tool}</span>
              {index < 3 && (
                <FiArrowRight className="stage-arrow" aria-hidden="true" />
              )}
              {active === index && (
                <Motion.span
                  className="stage-indicator"
                  layoutId="active-stage"
                  transition={{ duration: reduced ? 0 : 0.3 }}
                />
              )}
            </button>
          );
        })}
      </div>
      <div
        id="architecture-panel"
        role="tabpanel"
        aria-labelledby={`tab-${stage.id}`}
        tabIndex={0}
      >
        <AnimatePresence mode="wait" initial={false}>
          <Motion.div
            className="pipeline-content"
            key={stage.id}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
          >
            <div className="pipeline-copy">
              <p className="eyebrow">{stage.tool}</p>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <div className="output-contract">
                <span className="eyebrow">Output contract</span>
                <p>{stage.output}</p>
              </div>
            </div>
            <div className="code-sample">
              <div className="code-heading">
                <span>{stage.language}</span>
                <a href={stage.source} target="_blank" rel="noreferrer">
                  View source <FiArrowUpRight />
                </a>
              </div>
              <pre tabIndex={0} aria-label={`${stage.language} source excerpt`}>
                <code>{stage.code}</code>
              </pre>
              <span className="code-filename">{stage.file}</span>
            </div>
          </Motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

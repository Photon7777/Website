import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import { siteData } from "../data/siteData";
import { projectDetails } from "../data/caseStudyData";
import Reveal from "../components/Reveal";
import SkillBadge from "../components/SkillBadge";
import ImageViewer from "../components/ImageViewer";
import PipelineExplorer from "../components/PipelineExplorer";
import LivePreview from "../components/LivePreview";
import SectionHeading from "../components/SectionHeading";
import Contact from "../components/Contact";

export default function CaseStudyPage({ project }) {
  const detail = projectDetails[project.slug];
  const next =
    siteData.projects[
      (siteData.projects.indexOf(project) + 1) % siteData.projects.length
    ];
  return (
    <>
      <section className="case-intro">
        <div className="container">
          <a className="text-link back-link" href="/projects">
            <FiArrowLeft />
            All projects
          </a>
          <Reveal>
            <p className="eyebrow">{detail.discipline}</p>
            <h1>{project.shortTitle}</h1>
            <p className="case-lead">{project.impact}</p>
            <div className="case-meta">
              <div>
                <span className="eyebrow">Contribution</span>
                <p>{detail.role}</p>
              </div>
              <div>
                <span className="eyebrow">Context</span>
                <p>{detail.context}</p>
              </div>
              <div className="case-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className={`btn ${link.label === "GitHub" ? "btn-ghost" : ""}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label === "GitHub" ? (
                      <FiGithub />
                    ) : (
                      <FiExternalLink />
                    )}
                    {link.label === "Demo" ? "Live app" : "Source code"}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="container">
        <ImageViewer
          src={project.image}
          alt={project.imageAlt}
          caption={project.title}
          priority
        />
      </div>
      <section className="section">
        <div className="container case-layout">
          <aside className="case-sidebar">
            <p className="eyebrow">In this case study</p>
            <nav aria-label="Case study sections">
              <a href="#overview">Overview</a>
              <a href="#decisions">Build decisions</a>
              {project.slug === "retailiq" && (
                <a href="#architecture">Inside the pipeline</a>
              )}
              {project.slug === "mixalyzer" && (
                <a href="#live-demo">Live preview</a>
              )}
              <a href="#outcomes">Outcomes & validation</a>
            </nav>
            <p className="eyebrow">Built with</p>
            <div className="skill-list">
              {project.tech.map((tech) => (
                <SkillBadge key={tech}>{tech}</SkillBadge>
              ))}
            </div>
          </aside>
          <div className="case-body">
            <Reveal>
              <section id="overview" className="case-section">
                <p className="eyebrow">01 / The problem</p>
                <h2>{project.caseStudy.problem}</h2>
                <p>{project.description}</p>
                <div className="case-approach">
                  <h3>What I built</h3>
                  <p>{project.caseStudy.approach}</p>
                </div>
              </section>
            </Reveal>
            <section id="decisions" className="case-section">
              <Reveal>
                <p className="eyebrow">02 / Build decisions</p>
                <h2>The choices behind the result.</h2>
              </Reveal>
              <div className="decision-list">
                {detail.decisions.map((decision, index) => (
                  <Reveal key={decision.title} delay={index * 0.04}>
                    <article>
                      <span className="decision-number">0{index + 1}</span>
                      <div>
                        <h3>{decision.title}</h3>
                        <p>{decision.text}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      {project.slug === "retailiq" && (
        <section className="architecture-section" id="architecture">
          <div className="container">
            <Reveal>
              <SectionHeading
                number="03"
                title="Inside RetailIQ"
                description="Follow the data. Inspect the code."
              />
            </Reveal>
            <PipelineExplorer />
          </div>
        </section>
      )}
      {project.slug === "mixalyzer" && (
        <section className="section live-section" id="live-demo">
          <div className="container">
            <LivePreview project={project} />
          </div>
        </section>
      )}
      <section className="section" id="outcomes">
        <div className="container">
          <Reveal>
            <SectionHeading
              number={
                ["retailiq", "mixalyzer"].includes(project.slug) ? "04" : "03"
              }
              title="Outcomes & validation"
              description={detail.resultTitle}
            />
          </Reveal>
          <div className="outcome-grid">
            {project.highlights.map((highlight, index) => (
              <Reveal key={highlight.label} delay={index * 0.05}>
                <div className="outcome-item">
                  <strong
                    className={highlight.value.length > 8 ? "long-value" : ""}
                  >
                    {highlight.value}
                  </strong>
                  <span>{highlight.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="validation-grid">
            <Reveal>
              <h3>Validation & evidence</h3>
              <p>{detail.validation}</p>
              <a
                className="text-link"
                href={detail.evidenceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {detail.evidenceLabel}
                <FiArrowUpRight />
              </a>
            </Reveal>
            <Reveal delay={0.06}>
              <h3>Scope & limitations</h3>
              <p>{detail.limits}</p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="next-project">
        <div className="container">
          <a href={`/projects/${next.slug}`}>
            <div>
              <p className="eyebrow">Next case study</p>
              <h2>{next.shortTitle}</h2>
            </div>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <Contact />
    </>
  );
}

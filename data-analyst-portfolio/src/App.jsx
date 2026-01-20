import "./styles/index.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { siteData } from "./data/siteData";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

export default function App() {
  return (
    <div id="top">
      <Navbar name="Sai Praneeth" resumeUrl={siteData.resumeUrl} />

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div>
            <p className="kicker">{siteData.location}</p>
            <h1>{siteData.name}</h1>
            <p className="subtitle">{siteData.headline}</p>

            <div className="hero-cta">
              <a className="btn" href="#projects">View Projects</a>
              <a className="btn btn-ghost" href="#contact">Contact</a>
            </div>

            <div className="panel">
              <p className="strong">Summary</p>
              <ul>
                {siteData.summary.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="panel">
            <p className="strong">What I’m strongest at</p>
            <ul>
              <li>SQL analysis + data quality checks</li>
              <li>Python pipelines (validation, automation)</li>
              <li>BI dashboards (Power BI) + storytelling</li>
              <li>Documentation + agile execution (JIRA/Confluence)</li>
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          title="About"
          subtitle="A data analyst who ships reliable insights and clean reporting pipelines."
        >
          <div className="panel">
            <p className="muted">
              I focus on building accurate, repeatable analytics—starting from data validation and EDA,
              through KPI definitions, and ending with dashboards and business recommendations.
            </p>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills" subtitle="Grouped like a real resume.">
          <div className="two-col">
            {Object.entries(siteData.skills).map(([group, items]) => (
              <div key={group} className="item">
                <h3>{group}</h3>
                <p className="muted small">{items.join(" • ")}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects" subtitle="A mix of analytics + applied AI engineering.">
          <div className="grid">
            {siteData.projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience" subtitle="Impact-first bullets.">
          <div className="two-col">
            {siteData.experience.map((e) => (
              <div key={e.role + e.company} className="item">
                <h3>{e.role}</h3>
                <p className="muted small">
                  {e.company} • {e.location} • {e.period}
                </p>
                <ul>
                  {e.bullets.map((b, i) => (
                    <li key={i} className="muted">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education" subtitle="Current MS + undergraduate degree.">
          <div className="two-col">
            {siteData.education.map((ed) => (
              <div key={ed.school} className="item">
                <h3>{ed.school}</h3>
                <p className="muted">{ed.degree}</p>
                <p className="muted small">{ed.location} • {ed.date}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" subtitle="Best ways to reach me.">
          <div className="panel">
            <div style={{ display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
              <a className="btn" href={`mailto:${siteData.email}`}>
                <FiMail /> Email
              </a>
              <a className="btn btn-ghost" href={siteData.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin /> LinkedIn
              </a>
              <a className="btn btn-ghost" href={siteData.github} target="_blank" rel="noreferrer">
                <FiGithub /> GitHub
              </a>
              <a className="btn btn-ghost" href={`tel:${siteData.phone.replace(/[^0-9+]/g, "")}`}>
                <FiPhone /> Call
              </a>
            </div>

            <p className="muted small" style={{ marginTop: ".8rem" }}>
              Update these links in <code>src/data/siteData.js</code>.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

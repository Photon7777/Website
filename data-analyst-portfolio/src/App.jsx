import "./styles/index.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import ButtonLink from "./components/ButtonLink";
import SkillGroup from "./components/SkillGroup";
import ExperienceCard from "./components/ExperienceCard";
import MetricCard from "./components/MetricCard";
import { siteData } from "./data/siteData";
import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { motion as Motion } from "framer-motion";

export default function App() {
  return (
    <div id="top">
      <Navbar name={siteData.displayName} resumeUrl="#resumes" />

      <main>
        <section className="hero section-grid-bg">
          <div className="container hero-inner">
            <Motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="kicker">{siteData.location}</p>
              <h1>{siteData.displayName}</h1>
              <p className="role-line">{siteData.roleHeadline}</p>
              <div className="target-role-strip" aria-label="Target roles">
                {siteData.targetRoles.map((role) => (
                  <span key={role.title}>{role.title}</span>
                ))}
              </div>
              <p className="subtitle">{siteData.summary[1]}</p>

              <div className="hero-cta">
                <ButtonLink href="#resumes" icon={FiDownload}>
                  Resumes
                </ButtonLink>
                <ButtonLink href={siteData.github} icon={FiGithub} variant="ghost" target="_blank" rel="noreferrer">
                  GitHub
                </ButtonLink>
                <ButtonLink href={siteData.linkedin} icon={FiLinkedin} variant="ghost" target="_blank" rel="noreferrer">
                  LinkedIn
                </ButtonLink>
                <ButtonLink href="#projects" icon={FiArrowDown} variant="subtle">
                  Projects
                </ButtonLink>
              </div>

              <div className="metric-grid hero-metrics">
                {siteData.metrics.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </div>
            </Motion.div>

            <Motion.aside
              className="profile-panel"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              aria-label="Profile summary"
            >
              <div className="profile-frame">
                <img src={siteData.profileImage} alt={`${siteData.displayName} profile image`} />
              </div>
              <div className="profile-card-content">
                <p className="eyebrow">Analytics Focus</p>
                <h2>{siteData.headline}</h2>
                <div className="featured-skill-row">
                  {siteData.featuredSkills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </Motion.aside>
          </div>
        </section>

        <div className="container">
          <Section
            id="roles"
            title="Where I Fit"
            subtitle="One profile, three recruiter pathways: analysis, analytics engineering, and data engineering."
          >
            <div className="role-grid">
              {siteData.targetRoles.map((role) => (
                <article key={role.title} className="role-card">
                  <p className="eyebrow">{role.title}</p>
                  <h3>{role.summary}</h3>
                  <p>{role.evidence}</p>
                  <div className="role-tool-row">
                    {role.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="about"
            title="About"
            subtitle="A data builder who ships reliable insights, automation, and production-style analytics products."
          >
            <div className="about-layout">
              <div className="panel editorial-panel">
                {siteData.summary.map((item) => (
                  <p key={item} className="muted">
                    {item}
                  </p>
                ))}
              </div>

              <aside className="quick-facts" aria-label="Quick facts">
                <p className="eyebrow">Quick Facts</p>
                {siteData.quickFacts.map((fact) => (
                  <div key={fact} className="quick-fact">
                    {fact}
                  </div>
                ))}
              </aside>
            </div>
          </Section>

          <Section id="skills" title="Skills" subtitle="Organized by the roles I am targeting: analytics, analytics engineering, data engineering, and AI-enabled analysis.">
            <div className="skill-matrix">
              {siteData.skillMatrix.map((group) => (
                <article key={group.title} className="matrix-card">
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="skills-grid">
              {Object.entries(siteData.skills).map(([group, items]) => (
                <SkillGroup key={group} title={group} items={items} />
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects" subtitle="Portfolio projects framed by problem, approach, and result.">
            <div className="project-grid">
              {siteData.projects.map((project) => (
                <ProjectCard key={project.title} p={project} />
              ))}
            </div>
          </Section>

          <Section id="resumes" title="Resume Downloads" subtitle="Choose the version that matches the role you are hiring for.">
            <div className="resume-grid">
              {siteData.resumeVariants.map((resume) => (
                <article key={resume.title} className="resume-card">
                  <div>
                    <p className="eyebrow">Resume</p>
                    <h3>{resume.title}</h3>
                    <p>{resume.description}</p>
                  </div>
                  <div className="role-tool-row">
                    {resume.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <ButtonLink href={resume.url} icon={FiDownload} target="_blank" rel="noreferrer">
                    Download PDF
                  </ButtonLink>
                </article>
              ))}
            </div>
          </Section>

          <Section id="distinctions" title="Awards" subtitle="Recent recognitions across analytics, AI, automation, and delivery.">
            <div className="distinction-grid">
              {siteData.distinctions.map((distinction) => (
                <article key={distinction.title} className="distinction-card">
                  <span className="metric-dot" aria-hidden="true" />
                  <h3>{distinction.title}</h3>
                  <p>{distinction.detail}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience" subtitle="Impact-first work history with tools and outcomes made easy to scan.">
            <div className="experience-list">
              {siteData.experience.map((experience) => (
                <ExperienceCard key={`${experience.role}-${experience.company}`} experience={experience} />
              ))}
            </div>
          </Section>

          <Section id="education" title="Education" subtitle="Current MS + undergraduate degree.">
            <div className="education-grid">
              {siteData.education.map((education) => (
                <article key={education.school} className="education-card">
                  <p className="eyebrow">{education.date}</p>
                  <h3>{education.school}</h3>
                  <p>{education.degree}</p>
                  <span>{education.location}</span>
                </article>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Let’s Connect" subtitle="Open to Summer 2026 internships in data analytics, data science, AI, and data engineering.">
            <div className="contact-panel">
              <div>
                <p className="eyebrow">Contact</p>
                <h2>Ready to talk data, analytics, and business impact.</h2>
                <p className="muted">
                  Best reached by email or LinkedIn. Resume, GitHub, and live project demos are available from this page.
                </p>
              </div>

              <div className="contact-actions">
                <ButtonLink href={`mailto:${siteData.email}`} icon={FiMail}>
                  Email
                </ButtonLink>
                <ButtonLink href={siteData.linkedin} icon={FiLinkedin} variant="ghost" target="_blank" rel="noreferrer">
                  LinkedIn
                </ButtonLink>
                <ButtonLink href={siteData.github} icon={FiGithub} variant="ghost" target="_blank" rel="noreferrer">
                  GitHub
                </ButtonLink>
                <ButtonLink href="#resumes" icon={FiDownload} variant="ghost">
                  Resumes
                </ButtonLink>
                <ButtonLink href={`tel:${siteData.phone.replace(/[^0-9+]/g, "")}`} icon={FiPhone} variant="subtle">
                  Call
                </ButtonLink>
              </div>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

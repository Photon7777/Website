import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ProjectIndexCard from "../components/ProjectIndexCard";
import ProjectDeepDive from "../components/ProjectDeepDive";
import ButtonLink from "../components/ButtonLink";
import { siteData } from "../data/siteData";
import { FiArrowLeft, FiDownload, FiMail } from "react-icons/fi";

export default function ProjectsPage() {
  const defaultResume = siteData.resumeVariants[0]?.url || siteData.resumeUrl;

  return (
    <div id="top">
      <Navbar name={siteData.displayName} resumeUrl="/#resumes" />

      <main>
        <section className="projects-page-hero section-grid-bg">
          <div className="container projects-page-hero-inner">
            <div>
              <p className="kicker">Project Portfolio</p>
              <h1>Project work, without making the homepage carry everything.</h1>
              <p className="subtitle">
                A dedicated view for live demos, GitHub repos, compact summaries, and optional deep dives into the build decisions behind each project.
              </p>
            </div>

            <div className="projects-page-actions">
              <ButtonLink href="/#top" icon={FiArrowLeft} variant="ghost">
                Back Home
              </ButtonLink>
              <ButtonLink href={defaultResume} icon={FiDownload} target="_blank" rel="noreferrer">
                Resume PDF
              </ButtonLink>
              <ButtonLink href={`mailto:${siteData.email}`} icon={FiMail} variant="subtle">
                Email
              </ButtonLink>
            </div>
          </div>
        </section>

        <div className="container">
          <Section
            id="projects"
            title="Project Index"
            subtitle="Quick summaries first. Open a deep dive only when you want the full problem, build, outcome, and technical decisions."
          >
            <div className="project-index-grid">
              {siteData.projects.map((project) => (
                <ProjectIndexCard key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section
            id="case-studies"
            title="Project Deep Dives"
            subtitle="Collapsed by default so the page stays skimmable."
          >
            <div className="case-study-list">
              {siteData.projects.map((project) => (
                <ProjectDeepDive key={project.title} project={project} />
              ))}
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

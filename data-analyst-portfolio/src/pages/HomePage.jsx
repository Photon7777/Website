import { motion as Motion, useReducedMotion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { siteData } from "../data/siteData";
import Reveal from "../components/Reveal";
import ResumeMenu from "../components/ResumeMenu";
import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";
import Contact from "../components/Contact";
import ButtonLink from "../components/ButtonLink";
export default function HomePage() {
  const reduced = useReducedMotion();
  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="intro-top">
            <p className="eyebrow">Analytics / Engineering / Applied AI</p>
            <span className="location-label">College Park, MD</span>
          </div>
          <Motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 aria-label="Sai Praneeth" className="name-reveal">
              {["Sai", "Praneeth"].map((word, index) => (
                <span className="name-word" aria-hidden="true" key={word}>
                  <Motion.span
                    initial={reduced ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                    {index === 1 && <span className="accent-dot">.</span>}
                  </Motion.span>
                </span>
              ))}
            </h1>
            <div className="intro-description">
              <h2>
                I build the data behind
                <br />
                <span>better decisions.</span>
              </h2>
              <p>
                From reliable SQL pipelines and tested data models to dashboards
                and AI tools people can act on.
              </p>
            </div>
            <div className="intro-actions">
              <ButtonLink
                href="/projects"
                icon={FiArrowUpRight}
                iconPosition="end"
              >
                Explore my work
              </ButtonLink>
              <ResumeMenu />
              <div className="social-links">
                <a
                  href={`mailto:${siteData.email}`}
                  aria-label="Email Sai Praneeth"
                  title="Email"
                >
                  <FiMail />
                </a>
                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </Motion.div>
          <div className="intro-bottom">
            <span>
              Data Analyst <b>/</b> Analytics Engineer <b>/</b> Data Engineer
            </span>
            <a href="#selected-work">
              Selected work <FiArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section selected-work" id="selected-work">
        <div className="container">
          <Reveal>
            <SectionHeading
              number="01"
              title="Selected work"
              description="Built to answer real questions."
            >
              <a className="text-link" href="/projects">
                All projects <FiArrowUpRight />
              </a>
            </SectionHeading>
          </Reveal>
          <div className="selected-grid">
            {siteData.projects.slice(0, 2).map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <a
                  className="selected-project"
                  href={`/projects/${project.slug}`}
                >
                  <div className={`project-image project-${project.slug}`}>
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width="1280"
                      height="720"
                      loading="lazy"
                    />
                    <span className="image-cta">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                  <div className="project-title-row">
                    <span className="eyebrow">
                      {project.tags.slice(0, 2).join(" / ")}
                    </span>
                    <span className="project-number">0{index + 1}</span>
                  </div>
                  <h3>{project.shortTitle}</h3>
                  <p>{project.caseStudy.problem}</p>
                  <div className="selected-outcome">
                    <span>
                      {index === 0
                        ? "421K sales rows / 77 declared dbt checks"
                        : "Best Data Scientist / EY x UMD"}
                    </span>
                    <FiArrowRight aria-hidden="true" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="proof-band">
        <div className="container proof-grid">
          <Reveal>
            <p className="eyebrow">Experience that translates</p>
            <a className="text-link" href="/about#experience">
              My background <FiArrowUpRight />
            </a>
          </Reveal>
          <Reveal delay={0.05}>
            <strong>2 years</strong>
            <p>Of industry retail analytics experience</p>
          </Reveal>
          <Reveal delay={0.1}>
            <strong>$20M</strong>
            <p>Growth opportunities identified at Mathco</p>
          </Reveal>
          <Reveal delay={0.15}>
            <strong>60%</strong>
            <p>Reduction in recurring pipeline errors</p>
          </Reveal>
        </div>
      </section>
      <section className="section" id="skills">
        <div className="container skills-layout">
          <Reveal>
            <SectionHeading
              number="02"
              title="Capabilities"
              description="From raw data to a useful answer."
            />
            <p className="section-intro">
              A connected toolkit for building, validating, and explaining data
              products.
            </p>
            <a className="text-link" href="/about">
              More about me <FiArrowUpRight />
            </a>
          </Reveal>
          <div className="skill-rows">
            {siteData.skillMatrix.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05}>
                <div className="skill-row">
                  <div className="skill-row-title">
                    <h3>{group.title}</h3>
                    <a
                      href={`/projects?focus=${index === 3 ? "ai" : ["analysis", "analytics", "engineering"][index]}`}
                      aria-label={`See ${group.title} projects`}
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                  <div className="skill-list">
                    {group.items.map((item) => (
                      <SkillBadge key={item}>{item}</SkillBadge>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

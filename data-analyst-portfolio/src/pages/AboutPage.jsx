import { FiArrowUpRight, FiDownload, FiPhone } from "react-icons/fi";
import { siteData } from "../data/siteData";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import SkillBadge from "../components/SkillBadge";
import Contact from "../components/Contact";
export default function AboutPage() {
  return (
    <>
      <section className="section about-intro" id="about">
        <div className="container about-intro-grid">
          <Reveal>
            <p className="eyebrow">The person behind the work</p>
            <h1>
              Curious about data.
              <br />
              <span>Focused on its use.</span>
            </h1>
            {siteData.summary.map((paragraph) => (
              <p className="about-paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="availability-note">
              <span className="status-dot" aria-hidden="true" />
              <p>{siteData.availability}</p>
            </div>
            <a
              className="text-link"
              href={siteData.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <FiArrowUpRight />
            </a>
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="portrait">
              <img
                src={siteData.profileImage}
                alt="Sai Praneeth"
                width="640"
                height="640"
              />
              <figcaption>
                <strong>Sai Praneeth</strong>
                <span>MSIS / University of Maryland</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
      <section className="section ruled-section" id="experience">
        <div className="container">
          <SectionHeading
            number="01"
            title="Experience"
            description="Turning analysis into dependable work."
          />
          <div className="experience-list">
            {siteData.experience.map((experience) => (
              <Reveal key={experience.company}>
                <ExperienceCard experience={experience} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section education-band" id="education">
        <div className="container">
          <SectionHeading
            number="02"
            title="Education"
            description="A foundation in systems and engineering."
          />
          <div className="education-grid">
            {siteData.education.map((education) => (
              <Reveal key={education.school}>
                <article>
                  <p className="eyebrow">{education.date}</p>
                  <h3>{education.degree}</h3>
                  <p>{education.school}</p>
                  <span>{education.location}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="distinctions">
        <div className="container">
          <SectionHeading
            number="03"
            title="Recognition"
            description="Work that earned a second look."
          />
          <div className="award-list">
            {siteData.distinctions.map((award, index) => (
              <Reveal key={award.title} delay={index * 0.04}>
                <article>
                  <span className="award-number">0{index + 1}</span>
                  <h3>{award.title}</h3>
                  <p>{award.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section education-band" id="roles">
        <div className="container">
          <SectionHeading
            number="04"
            title="Where I fit"
            description="One foundation. Three ways to contribute."
          />
          <div className="role-grid">
            {siteData.targetRoles.map((role, index) => (
              <Reveal key={role.title} delay={index * 0.05}>
                <article>
                  <h3>{role.title}</h3>
                  <p>{role.summary}</p>
                  <p className="role-evidence">{role.evidence}</p>
                  <div className="skill-list">
                    {role.tools.map((tool) => (
                      <SkillBadge key={tool}>{tool}</SkillBadge>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="collaboration">
            <h3>How I work</h3>
            <div className="skill-list">
              {siteData.skills["Soft Skills"].map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="resumes">
        <div className="container">
          <SectionHeading
            number="05"
            title="Resumes"
            description="Find the experience relevant to your team."
          />
          <div className="resume-list">
            {siteData.resumeVariants.map((resume) => (
              <article key={resume.url}>
                <div>
                  <h3>{resume.title}</h3>
                  <p>{resume.description}</p>
                </div>
                <a
                  className="btn btn-ghost"
                  href={resume.url}
                  download
                  aria-label={`Download ${resume.title}`}
                >
                  <FiDownload />
                  PDF
                </a>
              </article>
            ))}
          </div>
          <a
            className="text-link phone-link"
            href={`tel:${siteData.phone.replace(/\D/g, "")}`}
          >
            <FiPhone />
            {siteData.phone}
          </a>
        </div>
      </section>
      <Contact />
    </>
  );
}

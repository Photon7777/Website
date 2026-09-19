import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { siteData } from "../data/siteData";
import Reveal from "./Reveal";
import ResumeMenu from "./ResumeMenu";
export default function Contact() {
  return (
    <section className="contact-band" id="contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Next conversation</p>
          <div className="contact-heading">
            <h2>
              Good work starts
              <br />
              with a conversation.
            </h2>
            <a
              className="contact-arrow"
              href={`mailto:${siteData.email}`}
              aria-label="Email Sai Praneeth"
            >
              <FiArrowUpRight />
            </a>
          </div>
          <div className="contact-bottom">
            <div>
              <p>{siteData.availability}</p>
              <a className="email-link" href={`mailto:${siteData.email}`}>
                {siteData.email}
              </a>
            </div>
            <div className="contact-links">
              <a href={`mailto:${siteData.email}`}>
                <FiMail />
                Email
              </a>
              <a href={siteData.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin />
                LinkedIn
              </a>
              <a href={siteData.github} target="_blank" rel="noreferrer">
                <FiGithub />
                GitHub
              </a>
              <ResumeMenu />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

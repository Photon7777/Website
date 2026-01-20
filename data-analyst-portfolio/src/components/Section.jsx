import Reveal from "./Reveal";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <Reveal>
        <div className="section-head">
          <h2>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        {children}
      </Reveal>
    </section>
  );
}

export default function SectionHeading({
  number,
  title,
  description,
  children,
  id,
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {title}
        </p>
        <h2 id={id}>{description || title}</h2>
      </div>
      {children}
    </div>
  );
}

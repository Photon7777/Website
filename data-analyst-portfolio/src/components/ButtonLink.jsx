export default function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className = "",
  ...props
}) {
  const variantClass = variant === "primary" ? "" : ` btn-${variant}`;

  return (
    <a className={`btn${variantClass} ${className}`.trim()} href={href} {...props}>
      {Icon ? <Icon aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}

export default function ButtonLink({
  href,
  children,
  icon: Icon,
  iconPosition = "start",
  variant = "primary",
  className = "",
  ...props
}) {
  const variantClass = variant === "primary" ? "" : ` btn-${variant}`;

  return (
    <a
      className={`btn${variantClass} ${className}`.trim()}
      href={href}
      {...props}
    >
      {Icon && iconPosition === "start" ? <Icon aria-hidden="true" /> : null}
      <span>{children}</span>
      {Icon && iconPosition === "end" ? <Icon aria-hidden="true" /> : null}
    </a>
  );
}

import { FiArrowUp } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          Sai Praneeth{" "}
          <span className="muted">/ {new Date().getFullYear()}</span>
        </span>
        <span className="footer-location">College Park, Maryland</span>
        <a href="#top">
          Back to top <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

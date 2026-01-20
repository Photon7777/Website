export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="muted">© {new Date().getFullYear()} • Sai Praneeth</p>
        <a className="muted" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

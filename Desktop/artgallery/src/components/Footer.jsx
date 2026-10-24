import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="footer-brand" to="/">RangKala</Link>
          <p>A little closer to the colours, stories, and artists of India.</p>
        </div>
        <div className="footer-links">
          <Link to="/gallery">Explore the collection</Link>
          <Link to="/about">Art traditions</Link>
          <Link to="/signup">Become a member</Link>
        </div>
        <small>© 2026 RangKala · A student gallery project</small>
      </div>
    </footer>
  );
}

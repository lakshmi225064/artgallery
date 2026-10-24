import { NavLink, Link } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/gallery', 'Art Display'],
  ['/about', 'About Indian Art'],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="RangKala home">
          <span className="brand-mark" aria-hidden="true">र</span>
          <span><strong>RangKala</strong><small>Indian Paintings Gallery</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="login-link" to="/login">Log in</Link>
          <Link className="button button-small" to="/signup">Join us</Link>
        </div>
      </div>
    </header>
  );
}

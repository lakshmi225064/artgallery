import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <section className="not-found"><span className="eyebrow">404 · Lost in the gallery?</span><h1>This frame is empty.</h1><p>We couldn’t find the page you were looking for.</p><Link className="button" to="/">Return to RangKala <span aria-hidden="true">→</span></Link></section>;
}

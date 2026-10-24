import { Link } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard.jsx';
import PaintingImage from '../components/PaintingImage.jsx';
import { artworks, featuredArtworks } from '../data/artworks.js';

export default function HomePage() {
  const featured = featuredArtworks.map((id) => artworks.find((artwork) => artwork.id === id));
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">A window into India’s art</span>
          <h1>Where every colour<br />has a <em>story.</em></h1>
          <p>Meet the artists, traditions, and unforgettable paintings that shaped the visual imagination of India.</p>
          <div className="hero-actions">
            <Link className="button" to="/gallery">Explore the gallery <span aria-hidden="true">→</span></Link>
            <Link className="button button-outline" to="/about">Discover art traditions</Link>
          </div>
          <div className="hero-note"><span className="note-line" /> 12 artworks · 7 traditions · centuries of stories</div>
        </div>
        <div className="hero-art-wrap">
          <PaintingImage className="hero-art" src={featured[0].image} alt={featured[0].alt} />
          <div className="hero-art-label"><span>Featured artwork</span><strong>Shakuntala</strong><small>Raja Ravi Varma · c. 1898</small></div>
          <span className="hero-stamp" aria-hidden="true">कला<br /><small>ART</small></span>
        </div>
      </section>
      <section className="intro-band">
        <span className="intro-number">01 / 03</span>
        <div>
          <span className="eyebrow">Welcome to RangKala</span>
          <h2>A gallery without walls.</h2>
        </div>
        <p>From intimate court miniatures to bold modern canvases, explore the people and ideas behind India’s rich painting heritage.</p>
        <Link to="/about" className="arrow-link" aria-label="Read about Indian art">↗</Link>
      </section>
      <section className="section-shell featured-section">
        <div className="section-heading">
          <div><span className="eyebrow">Curator’s selection</span><h2>Stories worth a closer look</h2></div>
          <Link className="underlined-link" to="/gallery">View all artworks <span aria-hidden="true">→</span></Link>
        </div>
        <div className="art-grid featured-grid">{featured.map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} />)}</div>
      </section>
      <section className="tradition-banner">
        <div><span className="eyebrow">Beyond the canvas</span><h2>Seven traditions.<br /><em>Infinite ways</em> to see.</h2></div>
        <p>Discover folk, court, devotional, and modern art traditions across the subcontinent.</p>
        <Link className="button button-light" to="/about">Explore the traditions <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}

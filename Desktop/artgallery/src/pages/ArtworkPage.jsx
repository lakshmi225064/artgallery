import { Link, useParams } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import PaintingImage from '../components/PaintingImage.jsx';
import { getArtwork, getRelatedArtworks } from '../data/artworks.js';

export default function ArtworkPage() {
  const { id } = useParams();
  const artwork = getArtwork(id);
  if (!artwork) return <NotFoundPage />;
  const related = getRelatedArtworks(id, 3);
  return (
    <>
      <div className="artwork-top section-shell"><Link to="/gallery" className="back-link">← Back to all artworks</Link><span className="eyebrow">The collection / {artwork.category}</span></div>
      <article className="artwork-detail section-shell">
        <div className="detail-image-frame"><PaintingImage src={artwork.image} alt={artwork.alt} className="detail-image" /></div>
        <div className="detail-copy">
          <span className="eyebrow">{artwork.category}</span>
          <h1>{artwork.title}</h1>
          <p className="detail-artist">{artwork.artist}</p>
          <div className="detail-rule" />
          <dl className="artwork-meta"><div><dt>Date</dt><dd>{artwork.date}</dd></div><div><dt>Tradition</dt><dd>{artwork.category}</dd></div></dl>
          <h2>The story behind the painting</h2>
          <p className="detail-description">{artwork.description}</p>
          <p className="image-credit">Image source: Wikimedia Commons. Attribution and dating may vary by collection record.</p>
        </div>
      </article>
      <section className="section-shell related-section">
        <div className="section-heading"><div><span className="eyebrow">Keep exploring</span><h2>Related artworks</h2></div><Link className="underlined-link" to="/gallery">Full collection <span aria-hidden="true">→</span></Link></div>
        <div className="art-grid related-grid">{related.map((item) => <ArtworkCard key={item.id} artwork={item} />)}</div>
      </section>
    </>
  );
}

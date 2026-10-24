import { Link } from 'react-router-dom';
import PaintingImage from './PaintingImage.jsx';

export default function ArtworkCard({ artwork }) {
  return (
    <article className="art-card">
      <Link className="card-image-link" to={`/artwork/${artwork.id}`} aria-label={`View ${artwork.title}`}>
        <PaintingImage src={artwork.image} alt={artwork.alt} className="art-card-image" />
        <span className="image-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="art-card-copy">
        <span className="eyebrow">{artwork.category}</span>
        <h3><Link to={`/artwork/${artwork.id}`}>{artwork.title}</Link></h3>
        <p>{artwork.artist}</p>
      </div>
    </article>
  );
}

import { useMemo, useState } from 'react';
import ArtworkCard from '../components/ArtworkCard.jsx';
import PageIntro from '../components/PageIntro.jsx';
import { artworks } from '../data/artworks.js';

export default function GalleryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All traditions');
  const categories = ['All traditions', ...new Set(artworks.map((artwork) => artwork.category))];
  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return artworks.filter((artwork) => {
      const matchesQuery = !normalizedQuery || `${artwork.title} ${artwork.artist}`.toLowerCase().includes(normalizedQuery);
      return matchesQuery && (category === 'All traditions' || artwork.category === category);
    });
  }, [query, category]);

  return (
    <div className="section-shell gallery-page">
      <PageIntro eyebrow="The collection · 12 works" title="Art on view" description="A handpicked journey through Indian painting, from courtly miniatures to modern masters." />
      <div className="gallery-tools">
        <label className="search-field"><span aria-hidden="true">⌕</span><input type="search" placeholder="Search by title or artist…" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search paintings by title or artist" /></label>
        <label className="filter-field"><span className="sr-only">Filter by category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
        <span className="result-count">{filtered.length} {filtered.length === 1 ? 'artwork' : 'artworks'}</span>
      </div>
      {filtered.length ? <div className="art-grid gallery-grid">{filtered.map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} />)}</div> : <div className="empty-state"><span aria-hidden="true">✦</span><h2>No artworks found</h2><p>Try another title, artist, or category.</p><button className="button button-small" type="button" onClick={() => { setQuery(''); setCategory('All traditions'); }}>Clear filters</button></div>}
    </div>
  );
}

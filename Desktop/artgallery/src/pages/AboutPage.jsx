import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';

const traditions = [
  ['01', 'Madhubani', 'Bihar', 'Known for bold outlines, intricate patterns, and vibrant natural pigments, Madhubani paintings draw on mythology, nature, and everyday life. Traditionally made by women on walls and floors, the practice is now also celebrated on paper and cloth.'],
  ['02', 'Warli', 'Maharashtra', 'Warli artists use circles, triangles, and lines to picture village life, harvests, rituals, and the natural world. Their distinctive white figures traditionally appear against an earthy red-brown surface.'],
  ['03', 'Pattachitra', 'Odisha & Bengal', 'The name means “painting on cloth.” Pattachitra is a meticulous narrative tradition featuring mythological stories, decorative borders, and mineral or vegetable pigments.'],
  ['04', 'Tanjore', 'Tamil Nadu', 'Tanjore painting is renowned for devotional subjects, vivid colour, and raised gesso work embellished with gold foil. The richly ornamented panels often portray Hindu deities.'],
  ['05', 'Mughal miniature', 'North India', 'Mughal atelier painting blended Persian miniature conventions with close observation of Indian people, plants, animals, and court life. These small-scale works are remarkable for their fine detail.'],
  ['06', 'Rajput painting', 'Rajasthan & North India', 'A broad family of court styles, Rajput painting ranges from bold Mewar compositions to the lyrical Kishangarh school. Epic stories, devotional poetry, and royal life are recurring themes.'],
  ['07', 'Bengal School', 'Bengal', 'Emerging in the early twentieth century, the Bengal School sought an artistic language shaped by Indian histories and aesthetics. Artists including Abanindranath Tagore used soft wash effects and literary or national themes.'],
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero section-shell"><PageIntro eyebrow="A map of visual culture" title={<>Many hands.<br /><em>Many Indias.</em></>} description="Indian painting is not one style or story. It is a vivid conversation across regions, communities, courts, and generations." /><div className="about-quote"><span aria-hidden="true">“</span><p>Every tradition carries a way of seeing the world—and a way of passing it on.</p></div></section>
      <section className="traditions-section section-shell"><div className="section-heading"><div><span className="eyebrow">A brief introduction</span><h2>Seven traditions to know</h2></div><p>Explore a few of the many artistic languages that make up India’s painting heritage.</p></div>
        <div className="tradition-list">{traditions.map(([number, title, place, description]) => <article className="tradition-row" key={title}><span className="tradition-number">{number}</span><div><h3>{title}</h3><span className="tradition-place">{place}</span></div><p>{description}</p><span className="tradition-symbol" aria-hidden="true">✳</span></article>)}</div>
      </section>
      <section className="about-end section-shell"><span className="eyebrow">Keep looking</span><h2>The story is still being painted.</h2><p>Visit the collection to meet a few of the artists and artworks featured in RangKala.</p><Link className="button" to="/gallery">Explore the artworks <span aria-hidden="true">→</span></Link></section>
    </div>
  );
}

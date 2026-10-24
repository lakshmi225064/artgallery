const commons = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`;

export const artworks = [
  {
    id: 'shakuntala',
    title: 'Shakuntala (Looking Back)',
    artist: 'Raja Ravi Varma',
    date: '1898',
    category: 'Oil painting',
    image: commons('Raja Ravi Varma - Mahabharata - Shakuntala.jpg'),
    alt: 'Shakuntala turns to look back while pretending to remove a thorn from her foot',
    description:
      'In this celebrated scene from the Mahabharata, Shakuntala glances back toward Dushyanta as her companions look on. Raja Ravi Varma brought Indian epic subjects to life with European academic techniques, dramatic gesture, and richly modelled figures. The exact date can vary across versions and catalogues; this work is generally dated to the late nineteenth century.',
  },
  {
    id: 'bharat-mata',
    title: 'Bharat Mata',
    artist: 'Abanindranath Tagore',
    date: '1905',
    category: 'Bengal School',
    image: commons('Bharat Mata by Abanindranath Tagore.jpg'),
    alt: 'Abanindranath Tagore’s saffron-robed Bharat Mata holding symbolic gifts',
    description:
      'Created during the Swadeshi movement, this vision of Bharat Mata presents the nation as a serene, four-armed ascetic figure carrying symbolic gifts. Abanindranath Tagore’s delicate wash technique and restrained palette helped shape the Bengal School and its search for a modern Indian artistic identity.',
  },
  {
    id: 'three-girls',
    title: 'Three Girls (Group of Three Girls)',
    artist: 'Amrita Sher-Gil',
    date: '1935',
    category: 'Modern Indian',
    image: commons('Amrita Sher-Gil Group of Three Girls.jpg'),
    alt: 'Three young women sit together in a quiet, contemplative group',
    description:
      'Painted after Sher-Gil returned to India, Three Girls turns away from idealised portraiture to convey the quiet gravity of everyday lives. Its earthy reds and ochres, simplified forms, and inward-looking figures reveal the artist’s synthesis of European modernism with subjects and colours rooted in India.',
  },
  {
    id: 'bani-thani',
    title: 'Bani Thani',
    artist: 'Nihal Chand (attributed)',
    date: 'c. 1750',
    category: 'Kishangarh miniature',
    image: commons('4 Radha (Bani Thani), Kishangarh, ca. 1750, National Museum New Delhi.jpg'),
    alt: 'Elegant profile portrait of Bani Thani from the Kishangarh painting tradition',
    description:
      'Often called the “Indian Mona Lisa,” this portrait of Bani Thani is a refined court painting associated with the Kishangarh school of Rajasthan. The work is traditionally attributed to Nihal Chand and is dated to around 1750. Its elongated features, arched brows, lotus-like eyes, and lyrical profile became hallmarks of the school.',
  },
  {
    id: 'radha-krishna',
    title: 'Raja Savant Singh and Bani Thani as Krishna and Radha',
    artist: 'Nihal Chand (attributed)',
    date: 'c. 1760',
    category: 'Kishangarh miniature',
    image: commons('7 attrib to Nihal Chand Raja Savant Singh and Bani Thani as Krishna and Radha Artwork ca 1760 Fine Arts Museums of San Francisco.jpg'),
    alt: 'Raja Savant Singh and Bani Thani portrayed as Krishna and Radha in a Kishangarh miniature',
    description:
      'This Kishangarh court painting portrays Raja Savant Singh and Bani Thani in the roles of Krishna and Radha. The work is attributed to Nihal Chand and dated to around 1760. Its intimate devotional subject and idealised profile figures reflect the close relationship between courtly portraiture and Krishna bhakti in Kishangarh.',
  },
  {
    id: 'there-comes-papa',
    title: 'There Comes Papa',
    artist: 'Raja Ravi Varma',
    date: '1893',
    category: 'Oil painting',
    image: commons('Raja Ravi Varma, There Comes Papa (1893).jpg'),
    alt: 'A child reacts as her father arrives in Raja Ravi Varma’s domestic scene',
    description:
      'In this playful domestic scene, a young child reacts to the arrival of her father. Painted in 1893, the work demonstrates Ravi Varma’s skill at combining naturalistic figures with the warmth and immediacy of everyday life.',
  },
  {
    id: 'nair-lady',
    title: 'Nair Lady Adorning Her Hair',
    artist: 'Raja Ravi Varma',
    date: '1873',
    category: 'Oil painting',
    image: commons('Nair Lady Adorning Her Hair.jpg'),
    alt: 'A Nair woman adorns her hair with flowers in front of a mirror',
    description:
      'This 1873 domestic scene depicts a Nair woman adorning her hair with a garland of flowers before a mirror. The painting brought early recognition to Ravi Varma and shows his interest in rendering familiar moments with careful observation and academic oil technique.',
  },
  {
    id: 'galaxy-of-musicians',
    title: 'Galaxy of Musicians',
    artist: 'Raja Ravi Varma',
    date: '1889',
    category: 'Oil painting',
    image: commons('Raja Ravi Varma, Galaxy of Musicians.jpg'),
    alt: 'Indian women from different regions play traditional musical instruments together',
    description:
      'Raja Ravi Varma’s 1889 composition brings together women from different regions of India, each holding a traditional musical instrument. The richly detailed painting celebrates cultural diversity while displaying the artist’s characteristic naturalistic style.',
  },
  {
    id: 'young-girls',
    title: 'Young Girls',
    artist: 'Amrita Sher-Gil',
    date: '1932',
    category: 'Modern Indian',
    image: commons('Young Girls.jpg'),
    alt: 'Two young women sit together in Amrita Sher-Gil’s 1932 painting',
    description:
      'Painted in Paris in 1932, Young Girls earned Sher-Gil a gold medal at the Paris Salon and marked an early high point in her career. The work combines her European training with a sensitive portrayal of women and their inner lives.',
  },
  {
    id: 'sakhi-persuades-radha',
    title: 'Sakhi Persuades Radha to Meet Krishna',
    artist: 'Kangra painting tradition',
    date: '19th century',
    category: 'Pahari miniature',
    image: commons('India, Pahari Hills, Kangra school, Lambagraon series, 19th century - Sakhi Persuades Radha to Meet Krishna, from the "Lambagraon" Gita Govinda ( - 1989.334 - Cleveland Museum of Art.tif'),
    alt: 'A companion persuades Radha to meet Krishna in a Kangra Gita Govinda miniature',
    description:
      'From a Kangra-school series illustrating the Gita Govinda, this miniature depicts Radha’s companion persuading her to meet Krishna. The Kangra tradition is known for lyrical devotional scenes, delicate landscapes, and expressive storytelling.',
  },
  {
    id: 'krishna-celebrates-holi',
    title: 'Krishna Celebrates Holi with Radha and the Gopis',
    artist: 'Nihal Chand (attributed)',
    date: 'c. 1750–1760',
    category: 'Kishangarh miniature',
    image: commons('3 Nichal Chand (attr) Krishna Celebrates Holi with Radha and the Gopis 1750-60 Boston MFA.jpg'),
    alt: 'Krishna celebrates Holi with Radha and the gopis in a Kishangarh miniature',
    description:
      'This lively Kishangarh miniature depicts Krishna celebrating Holi with Radha and the gopis. The work is attributed to Nihal Chand and dated to around 1750–1760, a period when the Kishangarh court developed its distinctive devotional style.',
  },
  {
    id: 'krishna-and-radha',
    title: 'Krishna and Radha',
    artist: 'Unknown artist, Indian miniature tradition',
    date: 'c. 1750',
    category: 'Indian miniature',
    image: commons('Maker unknown, India - Krishna and Radha - Google Art Project.jpg'),
    alt: 'Krishna and Radha in an eighteenth-century Indian miniature',
    description:
      'This eighteenth-century miniature uses opaque watercolour and gold to depict Radha and Krishna. The artist is not known. Such intimate scenes transform devotional poetry into a carefully composed image of longing, union, and divine love.',
  },
];

export const featuredArtworks = ['shakuntala', 'bharat-mata', 'three-girls'];

export function getArtwork(id) {
  return artworks.find((artwork) => artwork.id === id);
}

export function getRelatedArtworks(id, limit = 3) {
  const artwork = getArtwork(id);
  if (!artwork) return [];
  const related = artworks.filter(
    (candidate) => candidate.id !== id && candidate.category === artwork.category,
  );
  const remaining = artworks.filter(
    (candidate) => candidate.id !== id && !related.includes(candidate),
  );
  return [...related, ...remaining].slice(0, limit);
}

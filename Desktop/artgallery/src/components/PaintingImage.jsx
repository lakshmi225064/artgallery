import { useEffect, useState } from 'react';

const fallbackImage = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#eee5d5"/><path d="M220 450 340 290l90 110 70-80 110 130z" fill="#b77d55"/><circle cx="400" cy="210" r="70" fill="#d6ad63"/><text x="400" y="550" text-anchor="middle" font-family="Georgia,serif" font-size="24" fill="#6d302f">Artwork image unavailable</text></svg>',
)}`;

export default function PaintingImage({ src, alt, className = '', ...props }) {
  const [imageSrc, setImageSrc] = useState(src);
  useEffect(() => setImageSrc(src), [src]);
  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImageSrc(fallbackImage)}
      {...props}
    />
  );
}

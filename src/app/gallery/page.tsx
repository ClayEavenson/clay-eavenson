import fs from 'fs';
import path from 'path';

export default function Gallery() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let images: string[] = [];
  try {
    images = fs.readdirSync(galleryDir).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
  } catch (e) {
    console.error("Could not read gallery directory", e);
  }

  return (
    <main className="flex-1 w-full pb-24">
      <div className="w-full h-auto border-b-[2px] border-[#2b2a28]">
        <img src="/hero-banner.png" alt="Sit Down, Shut Up, Hold On" className="w-full object-cover" />
      </div>

      <section className="about" style={{ borderTop: "none", marginTop: 0, paddingBottom: "78px" }}>
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <span className="rule" aria-hidden="true"></span>
        </div>
        
        <h1 className="hero-title" style={{ fontSize: "56px", lineHeight: 0.94, marginBottom: "48px", color: "var(--bone-bright)" }}>
          Life in pictures.
        </h1>

        <div 
          style={{ 
            display: "grid", 
            gap: "var(--rule-w)", 
            background: "var(--rule)", 
            border: "var(--rule-w) solid var(--rule)"
          }}
          className="gallery-grid"
        >
          <style dangerouslySetInnerHTML={{__html: `
            .gallery-grid {
              grid-template-columns: repeat(4, 1fr);
            }
            @media (max-width: 960px) {
              .gallery-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            .gallery-img {
              width: 100%;
              aspect-ratio: 1 / 1;
              object-fit: cover;
              filter: var(--photofx);
              transition: filter 0.3s ease;
            }
            .gallery-img:hover {
              filter: grayscale(0) contrast(1);
            }
          `}} />
          
          {images.map((img, idx) => (
            <div key={idx} style={{ background: "var(--ink)" }}>
              <img 
                src={`/gallery/${img}`} 
                alt={`Gallery image ${idx + 1}`} 
                className="gallery-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

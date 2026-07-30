import fs from 'fs';
import path from 'path';
import GalleryGrid from '@/components/GalleryGrid';

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

      {/* Replaced className="about" with standard padding and background to avoid the 2-column constraint */}
      <section style={{ padding: "74px var(--pad) 78px", background: "var(--ink-2)" }}>
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <span className="rule" aria-hidden="true"></span>
        </div>
        
        <h1 className="hero-title" style={{ fontSize: "56px", lineHeight: 0.94, marginBottom: "48px", color: "var(--bone-bright)" }}>
          Life in pictures.
        </h1>

        <GalleryGrid images={images} />
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import fs from 'fs';

export const metadata: Metadata = {
  title: "Gallery",
  description: "Life in pictures. A visual journey through Clay Eavenson's life and career.",
};
import path from 'path';
import GalleryGrid from '@/components/GalleryGrid';

export default function Gallery() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let images: string[] = [];
  try {
    images = fs.readdirSync(galleryDir).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
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

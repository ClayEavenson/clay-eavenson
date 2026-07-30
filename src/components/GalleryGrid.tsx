"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryGrid({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
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
            cursor: pointer;
          }
          .gallery-img:hover {
            filter: grayscale(0) contrast(1);
          }
        `}} />
        
        {images.map((img, idx) => (
          <div key={idx} style={{ background: "var(--ink)" }} onClick={() => setSelectedImage(img)}>
            <img 
              src={`/gallery/${img}`} 
              alt={`Gallery image ${idx + 1}`} 
              className="gallery-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(11, 12, 13, 0.95)",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--pad)",
              cursor: "zoom-out"
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              src={`/gallery/${selectedImage}`} 
              alt="Expanded gallery image"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                border: "var(--rule-w) solid var(--rule)"
              }}
              onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking the image itself */
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

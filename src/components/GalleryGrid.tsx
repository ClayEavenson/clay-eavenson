"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryGrid({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  const showPreviousImage = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    });
  }, [images.length]);

  const showNextImage = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNextImage, showPreviousImage]);

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
          .gallery-lightbox-button {
            position: fixed;
            top: 50%;
            z-index: 101;
            width: 54px;
            height: 54px;
            border: var(--rule-w) solid var(--rule-strong);
            border-radius: 999px;
            background: rgba(20, 19, 18, 0.72);
            color: var(--bone);
            font: inherit;
            font-size: 32px;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transform: translateY(-50%);
            transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
          }
          .gallery-lightbox-button:hover {
            background: var(--gold);
            border-color: var(--gold);
            color: var(--ink);
          }
          .gallery-lightbox-button-prev {
            left: max(24px, calc(var(--pad) / 2));
          }
          .gallery-lightbox-button-next {
            right: max(24px, calc(var(--pad) / 2));
          }
          @media (max-width: 720px) {
            .gallery-lightbox-button {
              width: 44px;
              height: 44px;
              font-size: 26px;
            }
            .gallery-lightbox-button-prev {
              left: 10px;
            }
            .gallery-lightbox-button-next {
              right: 10px;
            }
          }
        `}} />
        
        {images.map((img, idx) => (
          <div key={idx} style={{ background: "var(--ink)" }} onClick={() => setSelectedIndex(idx)}>
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
            onClick={() => setSelectedIndex(null)}
          >
            {images.length > 1 && (
              <button
                type="button"
                className="gallery-lightbox-button gallery-lightbox-button-prev"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
              >
                &#8249;
              </button>
            )}
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
            {images.length > 1 && (
              <button
                type="button"
                className="gallery-lightbox-button gallery-lightbox-button-next"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
              >
                &#8250;
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

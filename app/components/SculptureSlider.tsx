"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

interface SculptureSliderProps {
  images: string[];
}

const SculptureSlider = ({ images }: SculptureSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const lightboxImages = images.map((src) => ({ src }));

  return (
    <>
      <div
        className='relative w-full h-80 overflow-hidden group bg-[#e8e3dc] cursor-pointer'
        onClick={() => {
          setPhotoIndex(currentIndex);
          setOpen(true);
        }}
      >
        <Image
          src={images[currentIndex]}
          alt={`Sculpture image ${currentIndex + 1}`}
          fill
          style={{
            objectFit: "cover",
          }}
          className='transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        <div className='absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className='bg-[#c9a961] bg-opacity-90 text-white p-3 rounded-full ml-4 hover:bg-opacity-100 hover:scale-110 transition-all duration-300 shadow-lg'
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className='bg-[#c9a961] bg-opacity-90 text-white p-3 rounded-full mr-4 hover:bg-opacity-100 hover:scale-110 transition-all duration-300 shadow-lg'
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {images.length > 1 && (
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-[#c9a961] w-6' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxImages}
        index={photoIndex}
        plugins={[Thumbnails]}
      />
    </>
  );
};

export default SculptureSlider;

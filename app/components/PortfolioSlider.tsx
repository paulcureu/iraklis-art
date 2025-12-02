"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

const portfolioImages = [
  { src: "/art/Basreliefs/1.jpg", alt: "Basrelief 1", category: "Bas-relief" },
  { src: "/art/ChurchGeorgia/1.jpg", alt: "Church Georgia 1", category: "Architecture" },
  { src: "/art/IconsArt/1.jpg", alt: "Icons Art 1", category: "Religious Art" },
  { src: "/art/NewYork/1.jpg", alt: "New York 1", category: "Monumental" },
  { src: "/art/Basreliefs/2.jpg", alt: "Basrelief 2", category: "Bas-relief" },
  { src: "/art/ChurchGeorgia/2.jpg", alt: "Church Georgia 2", category: "Architecture" },
  { src: "/art/IconsArt/2.jpg", alt: "Icons Art 2", category: "Religious Art" },
  { src: "/art/NewYork/2.jpg", alt: "New York 2", category: "Monumental" },
];

export default function PortfolioSlider() {
  return (
    <section className='py-32 bg-secondary relative overflow-hidden'>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up'>
          <div className="max-w-2xl">
            <h2 className='text-5xl md:text-6xl font-serif font-bold text-primary mb-6'>
              Selected <span className="text-accent">Works</span>
            </h2>
            <p className='text-lg text-primary-light/80 font-light leading-relaxed'>
              A curated collection of masterpieces, each telling a unique story through the timeless medium of stone.
            </p>
          </div>
          <Link href='/gallery' className="hidden md:inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300 uppercase tracking-widest text-sm font-medium group">
            View All Works
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className='!overflow-visible'
        >
          {portfolioImages.map((image, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className='relative aspect-[4/5] rounded-sm overflow-hidden group cursor-pointer'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent text-sm uppercase tracking-widest mb-2">{image.category}</p>
                    <h3 className="text-white text-2xl font-serif">{image.alt}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='text-center mt-12 md:hidden'>
          <Link href='/gallery' className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300 uppercase tracking-widest text-sm font-medium group">
            View All Works
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

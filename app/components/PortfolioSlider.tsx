"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

const portfolioImages = [
  { src: "/art/Basreliefs/1.jpg", alt: "Basrelief 1" },
  { src: "/art/ChurchGeorgia/1.jpg", alt: "Church Georgia 1" },
  { src: "/art/IconsArt/1.jpg", alt: "Icons Art 1" },
  { src: "/art/NewYork/1.jpg", alt: "New York 1" },
  { src: "/art/Basreliefs/2.jpg", alt: "Basrelief 2" },
  { src: "/art/ChurchGeorgia/2.jpg", alt: "Church Georgia 2" },
  { src: "/art/IconsArt/2.jpg", alt: "Icons Art 2" },
  { src: "/art/NewYork/2.jpg", alt: "New York 2" },
];

export default function PortfolioSlider() {
  return (
    <Link href='/gallery' passHref>
      <section className='py-24 bg-gradient-to-b from-[#f5f3f0] to-white cursor-pointer'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16 animate-fade-in-up'>
            <h2 className='text-5xl md:text-6xl font-bold text-[#3d3a36] mb-4'>
              Portfolio
            </h2>
            <div className='w-24 h-1 bg-[#c9a961] mx-auto mb-4'></div>
            <p className='text-xl text-[#8b8680] max-w-2xl mx-auto'>
              A glimpse into the masterful works of art
            </p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className='mySwiper'
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='relative w-full h-80 rounded-2xl overflow-hidden shadow-xl hover-lift group border-2 border-transparent hover:border-[#c9a961]/30 transition-all duration-300'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    className='transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='text-center mt-12'>
            <span className='text-[#8b8680] text-lg'>Click to explore more →</span>
          </div>
        </div>
      </section>
    </Link>
  );
}

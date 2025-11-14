"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    image: "/backgrounds/hero-background1.jpg",
  },

  {
    image: "/backgrounds/hero-background3.jpg",
  },
  {
    image: "/backgrounds/hero-background4.jpg",
  },
];

export default function HeroSlider() {
  return (
    <div className='relative h-[calc(100vh-4rem)]'>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className='mySwiper h-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill // Aceasta o face să umple div-ul părinte (care trebuie să aibă position: relative/absolute)
              style={{
                objectFit: "cover", // Folosiți CSS-ul standard prin prop-ul style
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute inset-0 gradient-overlay'></div>
      <div className='absolute inset-0 flex flex-col justify-center text-center z-10 px-4'>
        <div className='animate-fade-in-up'>
          <h1 className='text-6xl md:text-8xl lg:text-9xl text-white font-serif mb-6 text-elegant tracking-tight'>
            Iraklis
          </h1>
          <p className='mt-6 text-xl md:text-3xl lg:text-4xl text-[#e8e3dc] font-light mb-12 tracking-wide'>
            Timeless Beauty, Carved in Stone
          </p>
          <Link
            href='/gallery'
            className='mt-8 inline-block bg-[#c9a961] text-white font-semibold py-4 px-10 rounded-full shadow-2xl hover:bg-[#b89a7a] hover:shadow-[#c9a961]/50 transition-all duration-300 transform hover:scale-105 text-lg tracking-wide'
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}

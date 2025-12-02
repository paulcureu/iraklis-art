"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination, Parallax } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const slides = [
  {
    id: 1,
    image: "/art/Basreliefs/1.jpg",
    title: "Timeless Elegance",
    subtitle: "Masterpieces in Stone",
  },
  {
    id: 2,
    image: "/art/ChurchGeorgia/1.jpg",
    title: "Sacred Architecture",
    subtitle: "Building for Eternity",
  },
  {
    id: 3,
    image: "/art/IconsArt/1.jpg",
    title: "Divine Inspiration",
    subtitle: "Art that Transcends",
  },
];

export default function HeroSlider() {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        speed={1500}
        parallax={true}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              ' bg-white! w-2! h-2! opacity-50! hover:opacity-100! transition-opacity"></span>'
            );
          },
        }}
        modules={[EffectFade, Autoplay, Pagination, Parallax]}
        className='h-full w-full'
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className='relative h-full w-full overflow-hidden'
          >
            <div
              className='absolute inset-0 w-full h-full transition-transform duration-10000 ease-linear scale-100 hover:scale-110'
              data-swiper-parallax-scale='1.1'
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black/40' />
            </div>

            <div className='absolute inset-0 flex items-center justify-center text-center z-10'>
              <div className='max-w-4xl px-6'>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className='text-accent text-lg md:text-xl uppercase tracking-[0.3em] mb-4'
                  data-swiper-parallax='-200'
                >
                  {slide.subtitle}
                </motion.p>

                <div
                  className='mb-8 flex justify-center'
                  data-swiper-parallax='-400'
                >
                  <TextReveal
                    text={slide.title}
                    className='text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight justify-center'
                    delay={0.4}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  data-swiper-parallax='-600'
                >
                  <Link
                    href='/gallery'
                    className='inline-block border border-white/30 bg-white/10 backdrop-blur-sm text-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-primary transition-all duration-300'
                  >
                    View Gallery
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce'>
        <svg
          className='w-6 h-6 text-white/50'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          ></path>
        </svg>
      </div>
    </div>
  );
}

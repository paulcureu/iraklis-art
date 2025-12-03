"use client";

import { useState } from "react";
import SculptureSlider from "../components/SculptureSlider";
import { Playfair_Display } from "next/font/google";

const bokorFont = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
});

type ArtCategory = "byzantine" | "modern";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ArtCategory>("byzantine");

  // Data updated with the correct paths to your images
  const sculptures = [
    {
      id: 1,
      title: "Basreliefs",
      category: "modern" as ArtCategory,
      images: [
        "/art/Basreliefs/1.jpg",
        "/art/Basreliefs/2.jpg",
        "/art/Basreliefs/3.jpg",
        "/art/Basreliefs/4.jpg",
        "/art/Basreliefs/5.jpg",
        "/art/Basreliefs/6.jpg",
      ],
    },
    {
      id: 2,
      title: "Church Georgia ~ 2008-2012",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/ChurchGeorgia/1.jpg",
        "/art/ChurchGeorgia/2.jpg",
        "/art/ChurchGeorgia/3.jpg",
      ],
    },
    {
      id: 3,
      title: "Church Georgia ~ 2013",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/ChurchGeorgia1/3.jpg",
        "/art/ChurchGeorgia1/2.jpg",
        "/art/ChurchGeorgia1/4.jpg",
        "/art/ChurchGeorgia1/1.jpg",
      ],
    },
    {
      id: 4,
      title: "Church Georgia ~ 2019",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/ChurchGeorgia2/1.jpg",
        "/art/ChurchGeorgia2/2.jpg",
        "/art/ChurchGeorgia2/3.jpg",
        "/art/ChurchGeorgia2/4.jpg",
        "/art/ChurchGeorgia2/5.jpg",
        "/art/ChurchGeorgia2/6.jpg",
        "/art/ChurchGeorgia2/7.jpg",
        "/art/ChurchGeorgia2/8.jpg",
      ],
    },
    {
      id: 5,
      title: "Holy Table ~ Rusia",
      category: "byzantine" as ArtCategory,
      images: ["/art/HollyTable/2.jpg", "/art/HollyTable/1.jpg"],
    },
    {
      id: 6,
      title: "Iconostas Moscow",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/IconostasMoscow/1.jpg",
        "/art/IconostasMoscow/2.jpg",
        "/art/IconostasMoscow/3.jpg",
        "/art/IconostasMoscow/4.jpg",
        "/art/IconostasMoscow/5.jpg",
        "/art/IconostasMoscow/6.jpg",
        "/art/IconostasMoscow/7.jpg",
        "/art/IconostasMoscow/8.jpg",
        "/art/IconostasMoscow/9.jpg",
        "/art/IconostasMoscow/10.jpg",
        "/art/IconostasMoscow/11.jpg",
        "/art/IconostasMoscow/12.jpg",
      ],
    },
    {
      id: 7,
      title: "Icons",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/IconsArt/1.jpg",
        "/art/IconsArt/2.jpg",
        "/art/IconsArt/3.jpg",
        "/art/IconsArt/4.jpg",
        "/art/IconsArt/5.jpg",
        "/art/IconsArt/6.jpg",
        "/art/IconsArt/7.jpg",
        "/art/IconsArt/8.jpg",
        "/art/IconsArt/9.jpg",
        "/art/IconsArt/10.jpg",
        "/art/IconsArt/11.jpg",
        "/art/IconsArt/12.jpg",
      ],
    },
    {
      id: 8,
      title: "New York ~ exterior stone design ~ 2008-2009",
      category: "modern" as ArtCategory,
      images: [
        "/art/NewYork/1.jpg",
        "/art/NewYork/2.jpg",
        "/art/NewYork/3.jpg",
        "/art/NewYork/4.jpg",
        "/art/NewYork/5.jpg",
        "/art/NewYork/6.jpg",
        "/art/NewYork/7.jpg",
        "/art/NewYork/8.jpg",
      ],
    },
    {
      id: 9,
      title: "Georgia ~ exterior stone design ~ 2012-2013",
      category: "modern" as ArtCategory,
      images: ["/art/Georgia/1.jpg", "/art/Georgia/2.jpg"],
    },
    {
      id: 10,
      title: "Marble Kapitels of St.Evangelists ~ Mount Athos ",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/StEvangelists/1.jpg",
        "/art/StEvangelists/2.jpg",
        "/art/StEvangelists/3.jpg",
        "/art/StEvangelists/4.jpg",
      ],
    },
    {
      id: 11,
      title: "Greece ~ Mount Athos ~ 2023-2025",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/GreecAthos2023/1.jpg",
        "/art/GreecAthos2023/2.jpg",
        "/art/GreecAthos2023/3.jpg",
        "/art/GreecAthos2023/4.jpg",
        "/art/GreecAthos2023/5.jpg",
        "/art/GreecAthos2023/6.jpg",
      ],
    },
    {
      id: 12,
      title: "Greece ~ Mount Athos ~ Archangels",
      category: "byzantine" as ArtCategory,
      images: ["/art/ArchangelsAthos/1.jpg"],
    },
    {
      id: 13,
      title: "Greece ~ Mount Athos",
      category: "byzantine" as ArtCategory,
      images: ["/art/ArchangelsAthos/5.jpg"],
    },
    {
      id: 14,
      title: "Greece ~ Mount Athos ~ St.George",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/ArchangelsAthos/6.jpg",
        "/art/ArchangelsAthos/3.jpg",
        "/art/ArchangelsAthos/4.jpg",
      ],
    },
    {
      id: 15,
      title: "Greece ~ Mount Athos ~ Monastery",
      category: "byzantine" as ArtCategory,
      images: [
        "/art/AthosMonastery/1.jpg",
        "/art/AthosMonastery/2.jpg",
        "/art/AthosMonastery/3.jpg",
        "/art/AthosMonastery/4.jpg",
        "/art/AthosMonastery/5.jpg",
      ],
    },
  ];

  const filteredSculptures = sculptures.filter(
    (sculpture) => sculpture.category === selectedCategory
  );

  return (
    <div className='min-h-screen bg-linear-to-b from-secundary to-white'>
      <div className='container mx-auto px-4 py-16 pt-24'>
        <div className='text-center mb-16 animate-fade-in-up'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-[#3d3a36] mb-6'>
            Gallery
          </h1>
          <div className='w-32 h-1 bg-accent mx-auto mb-6'></div>
          <p className='text-xl md:text-2xl text-[#8b8680] max-w-3xl mx-auto mb-8'>
            Explore the masterful collection of sculptures and artistic works
          </p>

          {/* Category Selection Buttons */}
          <div className='flex justify-center gap-4 mb-8'>
            <button
              onClick={() => setSelectedCategory("byzantine")}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                selectedCategory === "byzantine"
                  ? "bg-accent text-white shadow-lg scale-105"
                  : "bg-white text-[#3d3a36] border-accent hover:bg-accent/10"
              }`}
            >
              Byzantine Art
            </button>
            <button
              onClick={() => setSelectedCategory("modern")}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                selectedCategory === "modern"
                  ? "bg-accent text-white shadow-lg scale-105"
                  : "bg-white text-[#3d3a36] border-2 border-accent hover:bg-accent/10"
              }`}
            >
              Modern Art
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12'>
          {filteredSculptures.map((sculpture, index) => (
            <div
              key={sculpture.id}
              className='animate-fade-in-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='bg-white rounded-2xl shadow-xl overflow-hidden hover-lift border border-accent/20 transition-all duration-300'>
                <SculptureSlider images={sculpture.images} />
                <div className='p-6'>
                  <h3
                    className={`text-xl md:text-2xl text-[#3d3a36] text-center font-semibold ${bokorFont.className} leading-tight`}
                  >
                    {sculpture.title}
                  </h3>
                  <p className='text-center text-[#8b8680] mt-2 text-sm'>
                    {sculpture.images.length}{" "}
                    {sculpture.images.length === 1 ? "image" : "images"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;

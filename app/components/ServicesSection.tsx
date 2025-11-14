"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "Marble Sculptor",
      description: "Specializing in the intricate art of marble carving, bringing timeless beauty to life through skilled craftsmanship and precision.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Designer",
      description: "Creating bespoke designs that blend classical aesthetics with modern sensibilities, ensuring each piece is a unique masterpiece.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Painter",
      description: "Adding vibrant colors and intricate details to sculptures, enhancing their visual appeal and narrative depth with expert painting techniques.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: "Arhitect",
      description: "Designing architectural elements and structural components that seamlessly integrate artistic vision with functional excellence, creating harmonious spaces that stand the test of time.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16 animate-fade-in-up'>
          <h2 className='text-5xl md:text-6xl font-bold text-[#3d3a36] mb-4'>
            Expertise
          </h2>
          <div className='w-24 h-1 bg-[#c9a961] mx-auto mb-4'></div>
          <p className='text-xl text-[#8b8680] max-w-2xl mx-auto'>
            Mastery across multiple artistic disciplines
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-[#f5f3f0] to-[#e8e3dc] rounded-2xl shadow-xl p-10 text-center hover-lift border border-[#c9a961]/20 transition-all duration-300 group'
            >
              <div className='text-[#c9a961] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300'>
                {service.icon}
              </div>
              <h3 className='text-2xl md:text-3xl font-bold text-[#3d3a36] mb-6'>
                {service.title}
              </h3>
              <p className='text-[#8b8680] leading-relaxed text-lg'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

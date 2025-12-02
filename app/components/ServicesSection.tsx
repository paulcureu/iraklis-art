"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "Marble Sculptor",
      description:
        "Specializing in the intricate art of marble carving, bringing timeless beauty to life through skilled craftsmanship and precision.",
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
        </svg>
      ),
    },
    {
      title: "Designer",
      description:
        "Creating bespoke designs that blend classical aesthetics with modern sensibilities, ensuring each piece is a unique masterpiece.",
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
        </svg>
      ),
    },
    {
      title: "Painter",
      description:
        "Adding vibrant colors and intricate details to sculptures, enhancing their visual appeal and narrative depth with expert painting techniques.",
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' />
        </svg>
      ),
    },
    {
      title: "Architect",
      description:
        "Designing architectural elements and structural components that seamlessly integrate artistic vision with functional excellence.",
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
        </svg>
      ),
    },
  ];

  return (
    <section className='py-32 bg-primary text-secondary relative'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-20 animate-fade-in-up'>
          <h2 className='text-5xl md:text-6xl font-serif font-bold text-white mb-6'>
            Expertise
          </h2>
          <div className='w-24 h-1 bg-accent mx-auto mb-6 rounded-full'></div>
          <p className='text-xl text-secondary/60 max-w-2xl mx-auto font-light'>
            Mastery across multiple artistic disciplines
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white/5 backdrop-blur-sm border border-white/10 p-10 text-center hover:bg-white/10 transition-all duration-500 group rounded-sm'
            >
              <div className='text-accent mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100'>
                {service.icon}
              </div>
              <h3 className='text-2xl font-serif font-medium text-white mb-6'>
                {service.title}
              </h3>
              <p className='text-secondary/60 leading-relaxed font-light group-hover:text-secondary/80 transition-colors duration-300'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

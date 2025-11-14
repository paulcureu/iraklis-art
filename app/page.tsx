import HeroSlider from "./components/HeroSlider";
import PortfolioSlider from "./components/PortfolioSlider";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className='py-24 gradient-marble'>
        <div className='container mx-auto px-4 text-center max-w-4xl'>
          <div className='animate-fade-in-up'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-[#3d3a36] font-light italic leading-relaxed'>
              "The essence of all beautiful art, all great art, is gratitude."
            </p>
            <p className='mt-6 text-xl md:text-2xl text-[#8b8680] font-medium'>- Friedrich Nietzsche</p>
          </div>
        </div>
      </section>

      <section
        className='py-32 relative overflow-hidden'
        style={{
          backgroundImage: "url('/gif/sculpture-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='absolute inset-0 gradient-overlay'></div>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10'>
          <div className='md:w-1/2 animate-fade-in-up'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl hover-lift border-4 border-[#c9a961]/30'>
              <img
                src='/artist.jpg'
                alt='Sculptor Iraklis'
                className='w-full h-auto'
              />
            </div>
          </div>
          <div className='md:w-1/2 text-center md:text-left animate-fade-in-up'>
            <h2 className='text-5xl md:text-6xl font-bold text-white mb-8 text-elegant'>
              About the Artist
            </h2>
            <div className='space-y-6'>
              <p className='text-lg md:text-xl text-[#e8e3dc] leading-relaxed'>
                Iraklis is a master sculptor renowned for his ability to breathe
                life into stone. With decades of experience, he transforms raw
                marble into breathtaking works of art that capture the essence of
                classical beauty and modern sensibility.
              </p>
              <p className='text-lg md:text-xl text-[#e8e3dc] leading-relaxed'>
                His dedication to craftsmanship and his profound understanding of
                form and texture are evident in every piece. Iraklis's sculptures
                often explore themes of mythology, human emotion, and the natural
                world, inviting viewers into a dialogue with timeless narratives.
              </p>
              <p className='text-lg md:text-xl text-[#e8e3dc] leading-relaxed'>
                From intricate bas-reliefs to monumental figures, Iraklis's work
                stands as a testament to the enduring power of sculpture to
                inspire and move the human spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSlider />

      <ServicesSection />
    </>
  );
}

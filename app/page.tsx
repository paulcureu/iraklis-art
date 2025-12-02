import HeroSlider from "./components/HeroSlider";
import PortfolioSlider from "./components/PortfolioSlider";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className='py-20 md:py-32 bg-secondary relative overflow-hidden'>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary-dark/5 to-transparent pointer-events-none"></div>
        <div className='container mx-auto px-6 max-w-5xl text-center relative z-10'>
          <div className='animate-fade-in-up'>
            <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-8 text-accent opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H11.983C10.8784 16 9.983 16.8954 9.983 18L9.983 21H2.00004V8.00002C2.00004 5.79088 3.7909 4.00002 6.00004 4.00002H18C20.2092 4.00002 22 5.79088 22 8.00002V21H14.017ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path></svg>
            <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary font-serif font-light italic leading-relaxed px-4'>
              "The essence of all beautiful art, all great art, is gratitude."
            </p>
            <div className="w-20 md:w-24 h-1 bg-accent mx-auto my-6 md:my-8 rounded-full"></div>
            <p className='text-base md:text-lg lg:text-xl text-primary-light font-medium tracking-widest uppercase'>- Friedrich Nietzsche</p>
          </div>
        </div>
      </section>

      <section id="about" className='py-20 md:py-32 relative overflow-hidden bg-primary text-secondary'>
        <div className='absolute inset-0 opacity-30'
          style={{
            backgroundImage: "url('/gif/sculpture-img.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"></div>

        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 relative z-10'>
          <div className='md:w-1/2 animate-fade-in-up'>
            <div className='relative rounded-sm overflow-hidden shadow-2xl group'>
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src='/artist.jpg'
                alt='Sculptor Iraklis'
                className='w-full h-auto transform group-hover:scale-105 transition-transform duration-700'
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 border-r-2 border-b-2 border-accent z-20"></div>
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 border-l-2 border-t-2 border-accent z-20"></div>
            </div>
          </div>
          <div className='md:w-1/2 text-center md:text-left animate-fade-in-up animation-delay-200'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 md:mb-10'>
              About the <span className="text-accent">Artist</span>
            </h2>
            <div className='space-y-6 md:space-y-8 text-base md:text-lg text-secondary/80 font-light leading-relaxed'>
              <p>
                Iraklis is a master sculptor renowned for his ability to breathe
                life into stone. With decades of experience, he transforms raw
                marble into breathtaking works of art that capture the essence of
                classical beauty and modern sensibility.
              </p>
              <p>
                His dedication to craftsmanship and his profound understanding of
                form and texture are evident in every piece. Iraklis's sculptures
                often explore themes of mythology, human emotion, and the natural
                world, inviting viewers into a dialogue with timeless narratives.
              </p>
              <div className="pt-4">
                <a href="/contact" className="inline-block px-6 md:px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-medium">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSlider />

      <ServicesSection />
    </>
  );
}

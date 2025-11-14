const ContactPage = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "narikaleli1@gmail.com",
      link: "mailto:narikaleli1@gmail.com",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+30 697 542 1099",
      link: "tel:+306975421099",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      label: "Instagram",
      value: "@athoneli.iraklis.art",
      link: "https://www.instagram.com/athoneli.iraklis.art/",
      external: true,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#f5f3f0] to-white'>
      <div className='container mx-auto px-4 py-16 pt-24'>
        <div className='text-center mb-16 animate-fade-in-up'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-[#3d3a36] mb-6'>
            Contact
          </h1>
          <div className='w-32 h-1 bg-[#c9a961] mx-auto mb-6'></div>
          <p className='text-xl md:text-2xl text-[#8b8680] max-w-3xl mx-auto leading-relaxed'>
            For any questions, collaborations or requests, please contact us directly. 
            We are here to provide you with the best artistic solutions.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in-up'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.external ? '_blank' : undefined}
                  rel={info.external ? 'noopener noreferrer' : undefined}
                  className='group flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#f5f3f0] to-[#e8e3dc] hover-lift border border-[#c9a961]/20 transition-all duration-300'
                >
                  <div className='text-[#c9a961] mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {info.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-[#3d3a36] mb-2'>
                    {info.label}
                  </h3>
                  <p className='text-[#8b8680] group-hover:text-[#c9a961] transition-colors duration-300 break-all'>
                    {info.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className='mt-12 text-center animate-fade-in-up'>
            <p className='text-lg text-[#8b8680]'>
              Looking forward to hearing from you and discussing your artistic vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

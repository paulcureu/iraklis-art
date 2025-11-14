import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iraklis - Sculptor",
  description: "Portfolio of marble sculptor Iraklis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/icon/logo-Iraklis.svg' type='image/svg+xml' />
      </head>
      <body
        className={`${playfair.className} flex flex-col min-h-screen antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main className='flex-grow'>{children}</main>
        <footer className='bg-gradient-to-b from-[#3d3a36] to-[#2a2724] text-[#e8e3dc] py-12 mt-20'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-bold mb-4 text-[#c9a961]'>Iraklis</h3>
                <p className='text-[#d4c9b8]'>
                  Master sculptor creating timeless works of art in marble and stone.
                </p>
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-4 text-[#c9a961]'>Quick Links</h4>
                <ul className='space-y-2 text-[#d4c9b8]'>
                  <li><a href='/' className='hover:text-[#c9a961] transition-colors'>Home</a></li>
                  <li><a href='/gallery' className='hover:text-[#c9a961] transition-colors'>Gallery</a></li>
                  <li><a href='/contact' className='hover:text-[#c9a961] transition-colors'>Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-4 text-[#c9a961]'>Connect</h4>
                <div className='space-y-2 text-[#d4c9b8]'>
                  <p>Email: narikaleli1@gmail.com</p>
                  <p>Phone: +30 697 542 1099</p>
                  <a 
                    href='https://www.instagram.com/athoneli.iraklis.art/' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='hover:text-[#c9a961] transition-colors inline-block'
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className='border-t border-[#8b8680] pt-8 text-center text-[#8b8680]'>
              <p>
                &copy; {new Date().getFullYear()} Iraklis. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

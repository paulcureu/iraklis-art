import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import TextureOverlay from "./components/TextureOverlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Iraklis | Sculptor & Artist",
  description: "Portfolio of Iraklis, a master sculptor and artist specializing in marble, wood, and religious art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-secondary text-primary antialiased selection:bg-accent selection:text-white overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          <TextureOverlay />
          <Navbar />
          <main className="relative z-10 bg-secondary mb-[200px] md:mb-[400px] shadow-2xl">
            {children}
          </main>
          <footer className="fixed bottom-0 left-0 w-full z-0 bg-primary text-white py-8 md:py-12 border-t border-white/10 h-[200px] md:h-[300px] flex flex-col justify-center">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">IRAKLIS</h3>
                  <p className="text-white/60 text-xs md:text-sm">Sculpting eternity in stone.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm uppercase tracking-widest text-white/60">
                  <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                  <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
                  <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
                </div>
                <div className="text-white/40 text-xs">
                  © {new Date().getFullYear()} Iraklis Art
                </div>
              </div>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}

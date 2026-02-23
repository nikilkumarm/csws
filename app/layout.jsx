import { Inter, Outfit, MonteCarlo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./components/Footer"), { ssr: true });
const ScrollReveal = dynamic(() => import("./components/ScrollReveal"), { ssr: false });
const SmoothScroll = dynamic(() => import("./components/SmoothScroll"), { ssr: false });
const Spotlight = dynamic(() => import("./components/Spotlight"), { ssr: false });
const WhatsAppButton = dynamic(() => import("./components/WhatsAppButton"), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const monteCarlo = MonteCarlo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
});

export const metadata = {
  title: "Cineline Studios",
  description: "Cinematic photography and film production crafted with precision."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${monteCarlo.variable} font-sans antialiased bg-white text-black selection:bg-black selection:text-white`}>

        {/* 1. SMOOTH SCROLL ENGINE */}
        <SmoothScroll />

        {/* 2. ATMOSPHERIC LIGHTING */}
        <Spotlight />

        {/* 3. SCROLL REVEAL LOGIC */}
        <ScrollReveal />

        {/* 4. MAIN LAYOUT */}
        <Navbar />

        {/* Added relative & z-index to ensure content sits ABOVE the spotlight/grain */}
        <main className="min-h-screen relative z-10">
          {children}
        </main>

        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
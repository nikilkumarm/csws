"use client";

import PortfolioGallery from "../components/PortfolioGallery";

// Expanded + organized images
const images = [
  // --- Main gallery ---
  "/images/portfolio/1.jpg",
  "/images/portfolio/2.jpg",
  "/images/portfolio/3.jpg",
  "/images/portfolio/4.jpg",
  "/images/portfolio/5.jpg",
  "/images/portfolio/6.jpg",

  // --- Wedding set ---
  "/images/portfolio/wedding1.jpg",
  "/images/portfolio/wedding2.jpg",
  "/images/portfolio/wedding3.jpg",

  // --- Editorial / Event set ---
  "/images/portfolio/event1.jpg",
  "/images/portfolio/event2.jpg",
  "/images/portfolio/event3.jpg",
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">


      {/* Added premium spacing similar to Services page */}
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-4 text-black">Portfolio</h1>

          <p className="text-gray-600 mb-10 text-lg">
            Selected works — cinematic, editorial and commercial.
          </p>

          {/* Gallery */}
          <PortfolioGallery images={images} />

        </div>
      </main>
    </div>
  );
}

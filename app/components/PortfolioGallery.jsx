"use client";
import Image from "next/image";

export default function PortfolioGallery() {
  const items = [
    "/images/portfolio/wedding1.jpg",
    "/images/portfolio/wedding2.jpg",
    "/images/portfolio/wedding3.jpg",
  ];
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {items.map((src, idx) => (
        <div key={idx} className="rounded-lg overflow-hidden">
          <Image src={src} width={800} height={600} className="object-cover w-full h-56" alt={`p-${idx}`} />
        </div>
      ))}
    </div>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const pictures = [
    "/images/portfolio/wedding1.jpg",
    "/images/portfolio/wedding2.jpg",
    "/images/portfolio/wedding3.jpg"
  ];
  const [active, setActive] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Selected Works</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {pictures.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl cursor-pointer" onClick={() => setActive(src)}>
              <Image src={src} width={800} height={600} className="object-cover w-full h-64" alt="" />
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <Image src={active} width={1400} height={900} className="max-h-[90vh] rounded-lg object-contain" alt="" />
        </div>
      )}
    </section>
  );
}

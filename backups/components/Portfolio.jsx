"use client";
import Image from "next/image";
import Link from "next/link";

const photos = [
  "/images/portfolio/wedding1.jpg",
  "/images/portfolio/wedding2.jpg",
  "/images/portfolio/wedding3.jpg",
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sr">
          Featured Portfolio
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl sr sr-delay-1">
          A glimpse into our storytelling through photography & film.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {photos.map((src, i) => (
            <div key={i} className={`sr sr-delay-${i}`}>
              <Image
                src={src}
                width={600}
                height={400}
                alt="Portfolio Image"
                className="rounded-xl object-cover w-full h-64"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sr sr-delay-3">
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-md bg-black text-white inline-block"
          >
            View Full Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}

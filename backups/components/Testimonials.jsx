"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Client One",
    text: "Cineline made our wedding look like a movie. Beautiful shots, great team.",
    image: "/images/testimonials/client1.jpg"
  },
  {
    name: "Client Two",
    text: "Stunning visuals and professional work. Highly recommended!",
    image: "/images/testimonials/client2.jpg"
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sr">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {testimonials.map((t, i) => (
            <div key={i} className={`sr sr-delay-${i}`}>
              <div className="p-8 rounded-2xl bg-white border border-gray-200">
                <Image
                  src={t.image}
                  width={80}
                  height={80}
                  alt={t.name}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700">"{t.text}"</p>
                <h4 className="mt-3 font-semibold text-gray-900">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

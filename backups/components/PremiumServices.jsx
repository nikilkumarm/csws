"use client";
import ServiceCard from "./ServiceCard";

const services = [
  { title: "Wedding", image: "/images/services/wedding.png" },
  { title: "Event", image: "/images/services/event.png" },
  { title: "Product", image: "/images/services/product.png" },
  { title: "Film", image: "/images/services/film.png" },
];

export default function PremiumServices() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sr">
          Our Premium Services
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto sr sr-delay-1">
          We provide world-class cinematic production services for weddings,
          commercial shoots, branding films, and creative storytelling.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {services.map((s, i) => (
            <div key={i} className={`sr sr-delay-${i % 4}`}>
              <ServiceCard title={s.title} image={s.image} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

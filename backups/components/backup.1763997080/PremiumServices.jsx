"use client";
import Image from "next/image";
import Link from "next/link";

export default function PremiumServices() {
  const services = [
    { title: "Wedding Films", icon: "/images/services/wedding.png" },
    { title: "Product Shoots", icon: "/images/services/product.png" },
    { title: "Event Coverage", icon: "/images/services/event.png" },
    { title: "Streaming", icon: "/images/services/film.png" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-semibold mb-6">Our Premium Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Link key={i} href="/services" className="p-6 border rounded-xl hover:shadow-lg text-center">
              <Image src={s.icon} width={72} height={72} alt="" />
              <h4 className="mt-4 font-medium">{s.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
export default function Testimonials() {
  const items = [
    { name: "Client A", img: "/images/testimonials/client1.jpg", text: "Amazing work." },
    { name: "Client B", img: "/images/testimonials/client2.jpg", text: "Highly recommended." },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Testimonials</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <div className="flex items-center gap-4">
                <Image src={t.img} width={64} height={64} alt={t.name} className="rounded-full" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

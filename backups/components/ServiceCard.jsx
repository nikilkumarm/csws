"use client";
import Image from "next/image";

export default function ServiceCard({ title, image }) {
  return (
    <div className="service-card border border-gray-200 rounded-2xl p-6 bg-white text-center">
      <Image
        src={image}
        width={90}
        height={90}
        alt={title}
        className="mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

"use client";
import Image from "next/image";

export default function TeamCard({ name, role, img }) {
  return (
    <div className="p-4 border rounded-xl text-center">
      <div className="mx-auto w-28 h-28 relative">
        <Image src={img || "/images/team/nikil.jpg"} alt={name} fill className="object-cover rounded-full" />
      </div>
      <h4 className="mt-3 font-semibold">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}

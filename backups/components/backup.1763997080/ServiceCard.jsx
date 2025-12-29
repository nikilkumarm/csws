"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, icon, href }) {
  return (
    <Link href={href || "/services"} className="block p-4 border rounded-xl text-center hover:shadow">
      <Image src={icon} width={56} height={56} alt={title} />
      <h4 className="mt-3 font-medium">{title}</h4>
    </Link>
  );
}

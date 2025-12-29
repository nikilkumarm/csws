"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Clean White Studio</h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Cinematic photography and film production.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/portfolio" className="inline-block px-5 py-3 rounded-md bg-gray-900 text-white">View Work</Link>
            <Link href="/booking" className="inline-block px-4 py-3 rounded-md border border-gray-200">Book Project</Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/about-hero.jpg" alt="Hero" width="900" height="600" className="object-cover w-full h-80 md:h-[420px]" />
        </div>
      </div>
    </section>
  );
}

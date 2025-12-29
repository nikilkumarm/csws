"use client";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sr">
          Welcome to Cineline Studios
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto sr sr-delay-1">
          A creative studio crafting cinematic photography and unforgettable stories
          through film, light, composition, and emotion.
        </p>

        <div className="mt-10 sr sr-delay-2">
          <Image
            src="/images/cs-logo-tb.png"
            width={180}
            height={80}
            alt="Cineline Logo"
            className="mx-auto opacity-95"
          />
        </div>

      </div>
    </section>
  );
}

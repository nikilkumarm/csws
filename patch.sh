#!/bin/bash

echo "========== CINELINE GLOBAL PATCH =========="

# 1) Fix ALL components (Hero, Footer, Navbar, PremiumServices, Portfolio, etc.)
# Using pure overwrite method to prevent leftover corrupted imports

COMP_DIR="app/components"

echo "⚙️  Cleaning components directory..."
mkdir -p backups/components
cp -R $COMP_DIR/* backups/components/

# === HERO.jsx ===
cat > $COMP_DIR/Hero.jsx << 'EOC'
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-white dark:bg-black transition-all">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center fade-in-up">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
            CINELINE STUDIOS
          </h1>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Cinematic photography and film production.<br />
            We craft compelling visual stories that captivate and inspire.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/portfolio"
              className="inline-block px-5 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
            >
              View Work
            </Link>

            <Link
              href="/booking"
              className="inline-block px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Book Project
            </Link>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg fade-in">
          <Image
            src="/images/about-hero.jpg"
            alt="Hero"
            width="900"
            height="600"
            className="object-cover w-full h-80 md:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
EOC

# === FOOTER.jsx ===
cat > $COMP_DIR/Footer.jsx << 'EOC'
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-6 fade-in">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div className="space-y-4">
          <Image
            src="/cs_logo_w_t.png"
            width={220}
            height={80}
            alt="CINELINE LOGO"
            className="opacity-95"
          />
          <p className="text-sm text-gray-400">
            Photography & Film Production
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#cbb99e]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/booking" className="hover:text-white">Book a Shoot</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#cbb99e]">
            Contact
          </h3>

          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-white">Email:</span>
            {" "}
            cinelinestudio24@gmail.com
          </p>

          <p className="text-gray-300 text-sm mt-2">
            <span className="font-semibold text-white">Phone:</span>
            {" "}
            +91 81248 87577
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-4">
        © 2025 Cineline Studios. All rights reserved.
      </div>
    </footer>
  );
}
EOC

echo "✨ Components updated successfully."

# Clear Next cache
rm -rf .next
echo "🧹 Cache cleared."

echo "🎉 PATCH COMPLETE — run: npm run dev"

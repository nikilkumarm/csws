#!/bin/zsh

echo "🔥 Applying FULL CINELINE UI Patch..."

mkdir -p backups

# Backup important components
for f in Navbar.jsx Footer.jsx PremiumServices.jsx PortfolioGallery.jsx; do
  if [ -f app/components/$f ]; then
    cp app/components/$f backups/${f}.bak.$(date +%s)
  fi
done


# ------------------------------
# 1️⃣ FIX NAVBAR (Right side menu)
# ------------------------------
cat > app/components/Navbar.jsx << 'NAV'
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/cs logo t b.png"
            width={48}
            height={48}
            alt="Cineline Logo"
            className="object-contain"
          />
        </Link>

        {/* Nav Right */}
        <nav className="flex gap-10 font-medium text-[15px] text-gray-700">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/services" className="hover:text-black">Services</Link>
          <Link href="/portfolio" className="hover:text-black">Portfolio</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
          <Link href="/booking" className="hover:text-black">Booking</Link>
        </nav>

      </div>
    </header>
  );
}
NAV


# ------------------------------
# 2️⃣ FIX FOOTER – Solid Black
# ------------------------------
cat > app/components/Footer.jsx << 'FOOT'
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">

        <div>
          <h3 className="font-semibold tracking-wide text-[18px]">Cineline Studios</h3>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Crafting cinematic visuals with passion, precision, and storytelling excellence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[16px] mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/booking" className="hover:text-white">Booking</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[16px] mb-3">Contact</h4>
          <p className="text-gray-400 text-sm">📍 Tamil Nadu, India</p>
          <p className="text-gray-400 text-sm mt-1">📞 +91 00000 00000</p>
          <p className="text-gray-400 text-sm mt-1">✉️ support@cineline.com</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © ${YEAR:-2025} Cineline Studios. All Rights Reserved.
      </div>
    </footer>
  );
}
FOOT


# -------------------------------------------
# 3️⃣ PREMIUM SERVICES – Make icons clickable
# -------------------------------------------
cat > app/components/PremiumServices.jsx << 'SERV'
"use client";
import Image from "next/image";
import Link from "next/link";

export default function PremiumServices() {
  const services = [
    { title: "Wedding Films", icon: "/wedding-icon.png", link: "/services/wedding" },
    { title: "Product Shoots", icon: "/product-icon.png", link: "/services/product" },
    { title: "Event Coverage", icon: "/event-icon.png", link: "/services/event" },
    { title: "Broadcast & Streaming", icon: "/film-icon.png", link: "/services/broadcast" },
  ];

  return (
    <section className="container py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Premium Services</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
        {services.map((s, i) => (
          <Link
            key={i}
            href={s.link}
            className="group flex flex-col items-center text-center"
          >
            <div className="p-6 rounded-xl bg-white shadow-md group-hover:shadow-xl transition">
              <Image src={s.icon} alt={s.title} width={64} height={64} />
            </div>
            <p className="mt-4 text-gray-700 group-hover:text-black text-sm font-medium">
              {s.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
SERV


# ---------------------------------------------------------------------
# 4️⃣ SELECTED WORKS – Fix full-screen image stretch (cover + crop)
# ---------------------------------------------------------------------
cat > app/components/PortfolioGallery.jsx << 'PORT'
"use client";
import Image from "next/image";

export default function PortfolioGallery() {
  const images = [
    "/wedding1.jpg",
    "/wedding2.jpg",
    "/wedding3.jpg"
  ];

  return (
    <section className="container py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">Selected Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md">
            <Image
              src={src}
              alt="Selected Work"
              width={600}
              height={400}
              className="object-cover w-full h-[260px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
PORT


echo "🎉 UI Patch Complete! Restart with:  npm run dev"

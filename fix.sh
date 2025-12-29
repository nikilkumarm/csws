#!/bin/bash

echo Starting clean overwrite...

mkdir -p backups/components
cp app/components/*.jsx backups/components/ 2>/dev/null

# Navbar
cat > app/components/Navbar.jsx << 'END'
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between py-4 bg-[rgba(255,255,255,0.48)] backdrop-blur-lg rounded-full px-4 shadow-[var(--nav-shadow)]">
          <Link href="/" className="block">
            <Image src="/cs_logo_t.png" width={140} height={36} alt="Cineline" />
          </Link>
          <ul className="flex items-center gap-6 text-sm font-medium ml-auto">
            <li><Link href="/" className="hover:text-[#cbb99e] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#cbb99e] transition">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#cbb99e] transition">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-[#cbb99e] transition">Services</Link></li>
            <li><Link href="/booking" className="px-3 py-2 rounded-md border border-[rgba(0,0,0,0.06)] hover:bg-[rgba(203,185,158,0.06)] transition">Book</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
END

# Footer
cat > app/components/Footer.jsx << 'END'
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="cineline-footer bg-[#0b0b0b] text-white pt-12 pb-6 mt-16">
      <div className="cineline-footer-grid">
        <div>
          <Image src="/cs_logo_w_t.png" width={200} height={64} alt="Cineline Logo" />
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Cinematic photography and film production
          </p>
        </div>
        <div>
          <h3 className="cineline-footer-title">Quick Links</h3>
          <ul className="cineline-footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/booking">Booking</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="cineline-footer-title">Contact</h3>
          <p>Email: cinelinestudio24@gmail.com</p>
          <p>Phone: +91 81248 87577</p>
          <p>Tamil Nadu, India</p>
        </div>
      </div>
      <div className="cineline-footer-copy">
        © 2025 Cineline Studios. All rights reserved.
      </div>
    </footer>
  );
}
END

rm -rf .next

echo Patch complete. Run npm run dev


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

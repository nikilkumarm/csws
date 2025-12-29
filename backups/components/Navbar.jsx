"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between py-4 bg-[rgba(255,255,255,0.48)] backdrop-blur-lg rounded-full px-4 shadow-[var(--nav-shadow)] shadow-lg">
          <Link href="/" className="block">
            <Image src="/cs_logo_only_b_t.png" width={70} height={36} alt="Cineline" className="drop-shadow-lg" />
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

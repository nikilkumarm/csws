"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end gap-8">
        <Link href="/" className="sr-only">Home</Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-800 hover:underline">Home</Link>
          <Link href="/portfolio" className="text-sm font-medium text-gray-800 hover:underline">Portfolio</Link>
          <Link href="/services" className="text-sm font-medium text-gray-800 hover:underline">Services</Link>
          <Link href="/about" className="text-sm font-medium text-gray-800 hover:underline">About</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-800 hover:underline">Contact</Link>
          <Link href="/booking" className="px-3 py-1 rounded-md border border-gray-200 text-sm">Book</Link>
        </nav>
      </div>
    </header>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Navbar Items
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <header className="fixed top-8 left-0 right-0 z-[9999]">
      <div className="max-w-full mx-auto px-4">

        {/* NAVBAR CONTAINER WITH CINEMATIC ROTATION */}
        <div
          className="
            cinematic-glass
            flex items-center justify-between w-full
            rounded-full border border-gray-200
            px-8 py-3
            bg-white/20 backdrop-blur-lg
          "
        >
          {/* LOGO */}
          <div className="cinematic-item">
            <Link href="/">
              <Image
                src="/cs_logo_only_b_t.png"
                alt="Cineline Studios"
                width={58}
                height={34}
                className="w-auto h-auto"
                priority
              />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-normal text-black cinematic-item">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative px-1 py-1 group
                  transition-colors duration-300
                "
              >
                {item.label}
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            ))}

            {/* BOOK BUTTON */}
            <Link
              href="/booking"
              className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              Book
            </Link>
          </div>

          {/* MOBILE MENU BUTTON - ANIMATED */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[10001] relative group"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-8 h-[1.5px] bg-black transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${open ? "rotate-45 translate-y-2 bg-cinelineGold" : "group-hover:bg-cinelineGold"
                }`}
            />
            <span
              className={`w-8 h-[1.5px] bg-black transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${open ? "opacity-0" : "group-hover:bg-cinelineGold"
                }`}
            />
            <span
              className={`w-8 h-[1.5px] bg-black transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${open ? "-rotate-45 -translate-y-2 bg-cinelineGold" : "group-hover:bg-cinelineGold"
                }`}
            />
          </button>

        </div>
      </div>

      {/* MOBILE MENU - GOD MODE MINIMAL */}
      <div
        className={`md:hidden fixed inset-0 bg-[#080808] z-[10000] flex flex-col justify-center items-center transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${open ? "clip-path-circle-full opacity-100 visible" : "clip-path-circle-zero opacity-0 invisible delay-300"
          }`}
        style={{
          clipPath: open ? "circle(150% at 90% 5%)" : "circle(0% at 90% 5%)",
          WebkitClipPath: open ? "circle(150% at 90% 5%)" : "circle(0% at 90% 5%)"
        }}
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at center, #2a2a2a 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-cinelineGold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] bg-cinelineGold/5 rounded-full blur-[120px] pointer-events-none" />

        <nav className="flex flex-col gap-2 text-center z-10 w-full px-6 container mx-auto">

          {/* Menu Logo */}
          <div className={`mb-8 flex justify-center transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
            }`}>
            <Image
              src="/cs_logo_w_t.png"
              alt="Cineline Studios"
              width={160}
              height={50}
              className="w-40 h-auto opacity-90"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            {NAV_ITEMS.map((item, i) => (
              <div key={item.href} className="relative group overflow-hidden">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`relative block text-4xl md:text-6xl font-black uppercase italic tracking-tighter transition-all duration-500 ease-out transform ${open ? "translate-y-0 opacity-100 rotate-0" : "translate-y-20 opacity-0 rotate-3"
                    }`}
                  style={{ transitionDelay: `${100 + i * 100}ms` }}
                >
                  <span className="absolute -left-6 top-0 text-xs font-mono text-cinelineGold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2">
                    0{i + 1}
                  </span>
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-gray-900 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                  {/* Glitch/Ghost Effect on Hover */}
                  <span className="absolute top-0 left-0 text-cinelineGold opacity-0 group-hover:opacity-30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none">
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 w-full flex justify-center transition-all duration-700 delay-500 ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"
              }`}
          >
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="group relative px-12 py-5 bg-transparent border border-white/10 text-white text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all hover:border-cinelineGold hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
            >
              <span className="absolute inset-0 bg-cinelineGold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom ease-[0.22, 1, 0.36, 1]" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Starts Here</span>
            </Link>
          </div>
        </nav>
      </div>

      <style jsx>{`
        /* Define the subtle 3D floating animation */
        @keyframes cinematicFloat {
          0% { transform: rotateX(0deg) rotateY(0deg) translateY(0px); }
          25% { transform: rotateX(1.5deg) rotateY(1deg) translateY(-2px); }
          50% { transform: rotateX(0deg) rotateY(0deg) translateY(0px); }
          75% { transform: rotateX(-1.5deg) rotateY(-1deg) translateY(-2px); }
          100% { transform: rotateX(0deg) rotateY(0deg) translateY(0px); }
        }

        .cinematic-glass {
          /* Give it 3D depth perspective */
          perspective: 1000px;
          transform-style: preserve-3d;
          /* Apply the slow, continuous animation */
          animation: cinematicFloat 20s ease-in-out infinite;
          /* Optimize performance */
          will-change: transform;
          /* Slight shadow to enhance 3D effect */
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }

        /* Optional: Ensure items inside remain sharp during rotation */
        .cinematic-item {
          transform: translateZ(1px);
        }
      `}</style>
    </header>
  );
}
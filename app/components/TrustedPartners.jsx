"use client";
import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
    "Sony", "Canon", "Red Digital Cinema", "Arri", "Blackmagic Design", "Zeiss", "Fujifilm", "Panasonic"
];

export default function TrustedPartners() {
    return (
        <section className="py-20 bg-black overflow-hidden relative border-t border-white/5">
            <div className="container mx-auto px-6 mb-12">
                <span className="block text-cinelineGold text-xs font-bold uppercase tracking-[0.6em] mb-4 opacity-80 text-center">
                    Trusted By Industry Leaders
                </span>
            </div>

            <div className="flex relative items-center">
                <div className="flex animate-scroll-left w-max hover:[animation-play-state:paused]">
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                        <div key={index} className="mx-8 md:mx-16 group cursor-default">
                            <span className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tighter group-hover:text-cinelineGold/80 transition-colors duration-500 select-none whitespace-nowrap">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Animation Style - Inline for simplicity if global css doesn't have it */}
            <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
        </section>
    );
}

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Aperture, ArrowUpRight, Play, Camera, Star, Sparkles } from "lucide-react";
import { CinematicGrain, SubtleGrid } from "../../components/Patterns";

// --- SIMULATED CMS DATA ---
const serviceContent = {
    "wedding-films": {
        title: "Wedding Cinema",
        subtitle: "The Art of Forever.",
        image: "/images/portfolio/wedding1.jpg",
        desc: "We don't just record events; we weave emotion, sound, and light into a masterpiece. Our wedding films are graded with cinema-quality color science and edited to tell your unique love story.",
        gallery: [
            "/images/portfolio/wedding2.jpg",
            "/images/portfolio/wedding3.jpg"
        ],
        features: [
            "4K Cinema Line Cameras",
            "Drone Aerial Coverage",
            "Master Level Color Grading",
            "Teaser + Feature Film"
        ]
    },
    "event-photography": {
        title: "Event Coverage",
        subtitle: "Capturing the Pulse.",
        image: "/images/pile/p6.JPG",
        desc: "Whether it’s a high-stakes corporate summit or an exclusive gala, our team operates seamlessly in the background to capture candid moments, keynotes, and the electric atmosphere.",
        gallery: [
            "/images/pile/p7.jpg",
            "/images/pile/p2.jpg"
        ],
        features: [
            "Multi-Photographer Teams",
            "Same-Day Edit Delivery",
            "Private Online Gallery",
            "Global Usage Rights"
        ]
    },
    "product-campaigns": {
        title: "Product Visuals",
        subtitle: "Aesthetics that Sell.",
        image: "/images/pile/p5.JPG",
        desc: "Elevate your brand with high-fidelity product photography and short-form video content designed for engagement. We focus on texture, lighting, and composition to make your product the hero.",
        gallery: [
            "/images/pile/p1.JPG",
            "/images/pile/p10.JPG"
        ],
        features: [
            "Creative Art Direction",
            "Styling & Set Design",
            "Stop Motion & Reels",
            "E-commerce Optimized"
        ]
    },
    "broadcast-commercials": {
        title: "Commercial Film",
        subtitle: "Stories that Move Markets.",
        image: "/images/pile/p1.JPG",
        desc: "From 30-second TV spots to brand documentaries, we handle end-to-end production. Scripting, casting, filming, and post-production—all executed with broadcast standards in mind.",
        gallery: [
            "/images/pile/p9.JPG",
            "/images/pile/p3.jpg"
        ],
        features: [
            "Script to Screen",
            "Casting & Talent",
            "High-End VFX & Color",
            "Cinema Sound Mixing"
        ]
    }
};

export default function ServiceDetail({ params }) {
    const { slug } = params;
    const data = serviceContent[slug];
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    if (!data) return null;

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-cinelineGold selection:text-black font-sans relative overflow-x-hidden">
            <CinematicGrain opacity={0.1} />



            {/* IMMERSIVE HERO - CINEMATIC SCALE */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <motion.div style={{ y: yImg, opacity: opacityHero }} className="absolute inset-0 z-0">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        priority
                        className="object-cover grayscale contrast-125 brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6"
                    >
                        <span className="inline-block py-1 px-4 border border-cinelineGold/30 rounded-full text-cinelineGold text-xs uppercase tracking-[0.5em] backdrop-blur-sm">
                            {data.subtitle}
                        </span>
                        <h1 className="text-[15vw] md:text-[10vw] font-black uppercase leading-none tracking-tighter text-white">
                            {data.title}
                        </h1>
                        <p className="text-sm md:text-xl font-light text-white/70 tracking-[0.3em] uppercase max-w-2xl mx-auto italic">
                            “We pursue <span className="text-cinelineGold">perfection</span> in every frame.”
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cinelineGold to-transparent" />
                </div>
            </section>

            {/* SECTION 1: THE MANIFESTO */}
            <section className="py-24 md:py-48 relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-cinelineGold text-xs font-bold uppercase tracking-[0.4em]">The Standard</span>
                                <h2 className="text-4xl md:text-7xl font-black uppercase leading-tight tracking-tighter text-white relative z-10">
                                    Quality is <br />
                                    <span className="text-cinelineGold italic font-serif lowercase block mt-2 text-3xl md:text-5xl">non-negotiable.</span>
                                </h2>
                            </div>

                            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-cinelineGold/30 pl-8">
                                {data.desc}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                                {data.features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-4 group/item">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-cinelineGold transition-colors">
                                            <Aperture size={18} className="text-cinelineGold" />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">{f}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CASE STUDY IMAGE */}
                        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden group">
                            <Image
                                src={data.gallery[1]}
                                alt="Excellence"
                                fill
                                className="object-cover filter grayscale group-hover:grayscale-0 contrast-125 transition-all duration-[2s]"
                            />
                            {/* Frame Accents */}
                            <div className="absolute inset-8 border border-white/10 opacity-50 group-hover:opacity-100 transition-opacity" />

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE ARCHIVE (GALLERY) */}
            <section className="py-24 md:py-40 bg-[#080808]">
                <div className="container mx-auto px-6 mb-20 text-center md:text-left">
                    <span className="text-cinelineGold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Visual Proof</span>
                    <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4 text-white relative z-10">The Archive</h2>
                    <div className="w-24 h-[1px] bg-cinelineGold/50 mx-auto md:mx-0" />
                </div>

                <div className="flex gap-4 md:gap-8 overflow-x-auto pb-12 px-6 scrollbar-hide snap-x">
                    {data.gallery.map((img, i) => (
                        <div key={i} className="flex-none w-[90vw] md:w-[45vw] aspect-video relative snap-center group overflow-hidden border border-white/5">
                            <Image
                                src={img}
                                alt={`Archive 0${i + 1}`}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                            <div className="absolute bottom-6 left-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                                <ArrowUpRight size={14} className="text-cinelineGold" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 md:py-64 relative overflow-hidden text-center">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cinelineGold blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-[12vw] font-black uppercase leading-[0.85] tracking-tighter text-white mb-16">
                            Start Your <br />
                            <span className="text-cinelineGold italic font-serif lowercase">Legacy</span>
                        </h2>

                        <Link href="/contact" className="group relative inline-flex items-center gap-6 px-16 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs md:text-sm overflow-hidden hover:bg-cinelineGold hover:text-white transition-all duration-500">
                            <span className="relative z-10">Initiate Production</span>
                            <ArrowUpRight size={20} className="relative z-10 group-hover:rotate-45 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <footer className="py-12 border-t border-white/5 bg-black flex justify-center">
                <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">Cineline Studios — Archive Version 2024.1</span>
            </footer>

        </div>
    );
}

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, CheckCircle2, Star, Zap, Aperture, ArrowUpRight } from "lucide-react";

// --- SIMULATED CMS DATA ---
const serviceContent = {
    "wedding-films": {
        title: "Wedding Cinema",
        subtitle: "The Art of Forever.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop",
        desc: "We don't just record events; we weave emotion, sound, and light into a masterpiece. Our wedding films are graded with cinema-quality color science and edited to tell your unique love story.",
        gallery: [
            "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
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
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop",
        desc: "Whether it’s a high-stakes corporate summit or an exclusive gala, our team operates seamlessly in the background to capture candid moments, keynotes, and the electric atmosphere.",
        gallery: [
            "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1475721027767-f43f0aa78cc7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop"
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
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop",
        desc: "Elevate your brand with high-fidelity product photography and short-form video content designed for engagement. We focus on texture, lighting, and composition to make your product the hero.",
        gallery: [
            "https://images.unsplash.com/photo-1523293188086-b469b90660a1?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop"
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
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2000&auto=format&fit=crop",
        desc: "From 30-second TV spots to brand documentaries, we handle end-to-end production. Scripting, casting, filming, and post-production—all executed with broadcast standards in mind.",
        gallery: [
            "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop"
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
    // IMAGE SHUFFLE REMOVED AS REQUESTED - FIXED HERO IMAGE

    if (!data) return null;

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0b0b0b] text-white selection:bg-cinelineGold selection:text-black font-sans relative overflow-x-hidden">


            {/* FLOATING NAV BACK */}
            <div className="fixed top-8 left-8 z-50 mix-blend-difference">
                <Link href="/services" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowLeft size={16} />
                    </span>
                    <span className="text-sm font-medium tracking-widest uppercase hidden md:block">Back</span>
                </Link>
            </div>

            {/* IMMERSIVE HERO */}
            <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
                <motion.div
                    style={{ scale: 1.1 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="w-full h-full bg-cover bg-center opacity-80 blur-lg transition-all duration-1000"
                        style={{ backgroundImage: `url(${data.image})` }}
                    />
                    {/* Stronger overlay for maximum text contrast */}
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent opacity-90" />
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-[90vw]">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-cinelineGold/90 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium drop-shadow-md">
                            {data.subtitle}
                        </h2>
                        {/* Brighter White + Text Shadow + No Wrap */}
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] whitespace-nowrap">
                            {data.title}
                        </h1>
                        <p className="text-sm md:text-lg font-light tracking-[0.2em] uppercase text-gray-400 animate-pulse">
                            We pursue <span className="text-cinelineGold">perfection</span> in every frame.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase animate-pulse"
                >
                    Scroll to Explore
                </motion.div>
            </section>

            {/* EDITORIAL CONTENT */}
            <section className="relative py-32 px-6 max-w-7xl mx-auto z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-400">
                            We pursue <span className="text-cinelineGold">perfection</span> in every frame.
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                            {data.desc}
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            {data.features.map((f, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <Aperture className="text-cinelineGold" size={24} />
                                    <span className="text-sm font-medium uppercase tracking-wider text-gray-300">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[600px] lg:h-auto rounded-none overflow-hidden group">
                        {/* Abstract Video/Image Placeholder */}
                        <div className="absolute inset-0 bg-white/5 animate-pulse" />
                        <img
                            src={data.gallery[0] || data.image}
                            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale hover:grayscale-0"
                            alt="Showcase"
                        />
                    </div>
                </div>
            </section>

            {/* GALLERY STRIP */}
            <section className="py-20 border-y border-white/5 bg-[#0f0f0f]">
                <div className="max-w-[1920px] mx-auto px-6 mb-12 flex justify-between items-end">
                    <h3 className="text-2xl font-bold">Selected Stills</h3>
                    <span className="text-cinelineGold text-sm uppercase tracking-widest">01 / 03</span>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">
                    {data.gallery.map((img, i) => (
                        <div key={i} className="flex-none w-[85vw] md:w-[40vw] aspect-video relative snap-center group overflow-hidden cursor-none">
                            <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cinelineGold/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter text-white drop-shadow-xl">
                        Let's Create.
                    </h2>
                    <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-cinelineGold hover:text-white transition-all duration-300 hover:scale-105">
                        Start Project
                    </Link>
                </div>
            </section>

        </div>
    );
}


"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

function FounderProfile({ name, role, title, quote, image, reverse = false, index }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);



    return (
        <div ref={containerRef} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-16 lg:gap-24 relative z-10 py-20`}>

            {/* PORTRAIT - GOD MODE FRAME */}
            <motion.div
                style={{ y }}
                className="relative w-full lg:w-5/12 aspect-[3/4] group"
            >
                {/* Frame Borders */}
                <div className="absolute -inset-4 border border-white/5 opacity-50 rounded-sm scale-95 group-hover:scale-100 transition-transform duration-1000" />
                <div className="absolute -inset-4 border border-cinelineGold/10 opacity-0 group-hover:opacity-100 rounded-sm scale-110 group-hover:scale-100 transition-all duration-1000 delay-100" />

                <div className="relative h-full w-full overflow-hidden bg-gray-900 shadow-2xl shadow-black/50">
                    <motion.div className="absolute inset-0 bg-cinelineGold/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" />
                </div>

                {/* Floating Badge */}
                <div className={`absolute -bottom-6 ${reverse ? '-left-6' : '-right-6'} bg-cinelineGold text-black p-4 md:p-6 backdrop-blur-md z-30 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)]`}>
                    <Quote size={24} fill="currentColor" stroke="none" />
                </div>
            </motion.div>

            {/* TEXT CONTENT - CINEMATIC LAYOUT */}
            <motion.div
                style={{ y: textY }}
                className="w-full lg:w-6/12 space-y-8 lg:text-left"
            >
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-3 py-1 border border-cinelineGold/30 rounded-full text-cinelineGold text-xs font-bold uppercase tracking-[0.2em] mb-4 bg-cinelineGold/5">
                            {title}
                        </span>
                    </motion.div>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold via-white to-cinelineGold leading-[0.9] tracking-tighter">
                    {name}
                </h2>

                <div className="w-24 h-[1px] bg-gradient-to-r from-cinelineGold to-transparent my-8" />

                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                    "{quote}"
                </p>

                <p className="text-sm font-bold uppercase tracking-widest text-white/40">{role}</p>

                <div className="pt-8">
                    <Link href="/about" className="group relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden rounded-full bg-white/5 border border-white/10 hover:border-cinelineGold/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-cinelineGold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10 text-white text-sm font-bold uppercase tracking-widest group-hover:text-cinelineGold transition-colors">Read Details</span>
                        <ArrowUpRight className="relative z-10 w-4 h-4 text-gray-400 group-hover:text-cinelineGold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </Link>
                </div>

            </motion.div>
        </div>
    );
}

export default function FounderNote() {
    return (
        <section className="relative py-32 bg-black overflow-hidden border-t border-white/5">
            {/* GLOBAL AMBIENCE */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-cinelineGold/5 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/5 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* MASSIVE BACKGROUND WATERMARK */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
                    <h2 className="text-[15vw] font-black leading-none text-white/[0.02] tracking-tighter uppercase select-none">
                        Visionaries
                    </h2>
                </div>

                <div className="space-y-32">
                    <FounderProfile
                        name="Nikilkumar"
                        role="Founder & Creative Director"
                        title="The Architect"
                        quote="We don't just capture moments; we architect memories. Every frame is a deliberate stroke of art."
                        image="/images/team/nikil.jpg"
                        index={0}
                    />

                    <FounderProfile
                        name="Rakshan"
                        role="Co-Founder & Lead Strategist"
                        title="The Catalyst"
                        quote="Great stories don't just happen—they are forged in the fires of strategy and pure passion."
                        image="/images/team/rakshan.jpg"
                        reverse={true}
                        index={1}
                    />
                </div>

            </div>
        </section>
    );
}


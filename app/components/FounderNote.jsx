
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function FounderProfile({ name, role, title, quote, image, reverse = false, index }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

    return (
        <div ref={containerRef} className={`relative flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-0 pt-20 md:pt-40 pb-10 md:pb-20 last:pb-0 border-b border-white/5 last:border-0`}>

            {/* PORTRAIT SIDE - THE CANVAS */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <motion.div
                    style={{ opacity }}
                    className="relative w-full max-w-[500px] aspect-[4/5] overflow-hidden bg-black group"
                >
                    <motion.div style={{ y }} className="relative h-full w-full">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover contrast-125 brightness-[0.8] transition-all duration-1000 group-hover:scale-110 group-hover:brightness-100"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>

                </motion.div>
            </div>

            {/* TEXT SIDE - THE NARRATIVE */}
            <div className={`w-full lg:w-1/2 space-y-10 ${reverse ? 'lg:pr-20' : 'lg:pl-20'} px-6 flex flex-col justify-center`}>
                <div className="space-y-4">
                    <span className="text-cinelineGold text-xs font-bold uppercase tracking-[0.4em]">{title}</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-1">
                        {name}
                    </h2>
                    <span className="text-sm font-serif italic text-white/60 tracking-wider block">{role}</span>
                </div>

                <div className="max-w-xl space-y-10">
                    <p className="text-base md:text-xl text-white/70 font-light leading-relaxed italic border-l border-cinelineGold/30 pl-8">
                        “{quote}”
                    </p>

                    <div className="pt-4">
                        <Link href="/about" className="group flex items-center gap-4 text-white/50 hover:text-cinelineGold transition-colors">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-transparent group-hover:border-cinelineGold pb-2">Read Philosophy</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Subtle Index Background */}
            <span className={`absolute top-20 ${reverse ? 'left-20' : 'right-20'} text-[10vw] font-black text-white/[0.02] pointer-events-none select-none`}>
                0{index + 1}
            </span>
        </div>
    );
}

export default function FounderNote() {
    return (
        <section className="bg-black relative overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <FounderProfile
                        name="Nikilkumar"
                        role="Founder & Creative Director"
                        title="Visionary"
                        quote="We don't just capture moments; we architect memories. Every frame is a deliberate stroke of art."
                        image="/images/team/nikil.jpg"
                        index={0}
                    />

                    <FounderProfile
                        name="Rakshan"
                        role="Co-Founder & Lead Strategist"
                        title="Catalyst"
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

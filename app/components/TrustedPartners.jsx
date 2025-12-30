"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";

// Brand Data
const BRANDS = [
    {
        name: "RAMO PHOTOGRAPHY",
        service: "High-End Wedding & Editorial",
        logo: "/images/team/ramo photography logo.png",
        hasLogo: true,
        desc: "Capturing the raw emotion of luxury weddings with cinematic precision.",
        color: "from-yellow-400 to-orange-500",
    },
    {
        name: "JUST CLICKS",
        service: "Event & Visual Storytelling",
        logo: null,
        hasLogo: false,
        initials: "JC",
        desc: "Comprehensive coverage focused on candid, unscripted moments.",
        color: "from-cyan-400 to-blue-500",
    },
    {
        name: "BRNDX",
        service: "Strategic Brand Identity",
        logo: "/images/team/BRNDX Logo.png",
        hasLogo: true,
        desc: "Visual overhauls aligning brand aesthetics with modern digital standards.",
        color: "from-purple-400 to-pink-500",
    },
    {
        name: "JUST SAAPPAADU",
        service: "Culinary Visuals & Styling",
        logo: "/images/team/just sappaduu.png",
        hasLogo: true,
        desc: "Mouth-watering campaigns defining vibrant culinary presence.",
        color: "from-orange-400 to-red-500",
    },
];

function Card({ brand, i }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="group relative h-[500px] w-full bg-black overflow-hidden border border-white/10 hover:border-cinelineGold/50 transition-colors duration-700"
            onMouseMove={handleMouseMove}
        >
            {/* 1. Subtle Cinematic Noise */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

            {/* 2. Spotlight Gradient (Dark & Gold) */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-screen"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15), 
              transparent 80%
            )
          `,
                }}
            />

            {/* 3. CONTENT */}
            <div className="relative h-full flex flex-col p-8 z-20">

                {/* TOP: Index & Tag */}
                <div className="flex justify-between items-start opacity-30 group-hover:opacity-100 transition-opacity duration-500 shrink-0">
                    <span className="font-mono text-xs text-cinelineGold">0{i + 1}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20 px-2 py-1 rounded-full text-white">{brand.service.split(' ')[0]}</span>
                </div>

                {/* MIDDLE: LOGO - FLEX GROW TO CENTER */}
                <div className="flex-1 flex items-center justify-center relative py-6">
                    {/* Glow behind logo */}
                    <div className="absolute w-32 h-32 bg-white/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* WHITE STYLED BACKGROUND CONTAINER */}
                    <div className={`relative w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-white/5 transform group-hover:scale-110 transition-transform duration-700 ${brand.name === "RAMO PHOTOGRAPHY" ? "p-0 overflow-hidden" : brand.name === "JUST SAAPPAADU" ? "p-2" : brand.name === "BRNDX" ? "p-4" : "p-6"}`}>
                        {brand.hasLogo ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    className={`object-contain ${brand.name === "RAMO PHOTOGRAPHY" ? "scale-125" : ""}`}
                                />
                            </div>
                        ) : (
                            <h3 className="text-4xl font-black text-black tracking-tighter transition-colors duration-500">
                                {brand.initials}
                            </h3>
                        )}
                    </div>
                </div>

                {/* BOTTOM INFO - FIXED ALIGNMENT */}
                <div className="shrink-0 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-4 mix-blend-screen break-words hyphens-auto min-h-[2.4em]">
                        {brand.name}
                    </h3>

                    <div className="h-[1px] w-full bg-white/10 group-hover:bg-cinelineGold transition-colors duration-700 mb-4" />

                    <p className="text-gray-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                        {brand.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function TrustedPartners() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">

            {/* Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Title */}
                <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="block text-cinelineGold text-xs font-bold uppercase tracking-[0.4em] mb-4 pl-1"
                        >
                            The Collective
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white"
                        >
                            Trusted <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">Partners</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="hidden md:block w-full h-[1px] bg-white/10 flex-1 mx-12 mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 max-w-xs text-sm leading-relaxed text-right md:text-left"
                    >
                        We collaborate with industry leaders to deliver comprehensive solutions beyond the frame.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BRANDS.map((brand, i) => (
                        <Card key={i} brand={brand} i={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}

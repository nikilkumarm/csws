"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play, Sparkles } from "lucide-react";
import Image from "next/image";

export default function ManifestoPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-cinelineGold selection:text-black overflow-hidden relative">

            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div style={{ y }} className="fixed top-0 left-0 w-full h-[150vh] opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
                        alt="Cinematic Background"
                        fill
                        className="object-cover blur-[10px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]"></div>
                </motion.div>
                <div className="fixed top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
                </Link>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 pt-24 md:pt-40 pb-20 md:pb-32 px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-20 md:mb-32 text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                            <Sparkles size={14} className="text-cinelineGold" />
                            <span className="text-xs uppercase tracking-[0.2em] text-white">Our Philosophy</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
                            The Search for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold to-white italic font-serif pr-2">Truth</span> in Every Frame.
                        </h1>
                    </motion.div>

                    {/* Manifesto Text */}
                    <div className="space-y-12 md:space-y-20">
                        <ManifestoSection title="01. Light as Language">
                            <p>
                                We believe that light isn't just illumination; it's a narrative force. It shapes emotion, directs attention, and whispers what cannot be spoken. Our work is a constant conversation with light, bending it to reveal the soul of the moment.
                            </p>
                        </ManifestoSection>

                        <ManifestoSection title="02. The Unscripted Moment">
                            <p>
                                Perfection is often found in the imperfect. The nervous glance, the tear that falls unbidden, the laugh that breaks the tension. We don't just capture events; we hunt for these fleeting, unrepeatable instances of raw humanity. They are the heartbeat of our films.
                            </p>
                        </ManifestoSection>

                        <ManifestoSection title="03. Kinetic Emotion">
                            <p>
                                A camera should breathe. It should move with the rhythm of the scene. We reject static observation in favor of dynamic participation. Our lens dances with the subject, creating a visceral, immersive experience that pulls the viewer inside the frame.
                            </p>
                        </ManifestoSection>

                        <ManifestoSection title="04. Timelessness Over Trend">
                            <p>
                                Trends fade; emotion endures. We strip away the gimmicks and focus on the core elements of storytelling: composition, color, and connection. We craft visual legacies designed not just to be seen today, but to be felt decades from now.
                            </p>
                        </ManifestoSection>
                    </div>

                    {/* Signature */}
                    <div className="mt-40 text-center">
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cinelineGold to-transparent mx-auto mb-10" />
                        <p className="text-2xl md:text-3xl font-display text-white italic">
                            "We don't correct reality; we elevate it."
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-2">
                            <h4 className="text-white font-bold text-lg tracking-wide">CINELINE STUDIOS</h4>
                            <p className="text-gray-500 text-sm uppercase tracking-widest">Est. 2024</p>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer Simple */}


        </div>
    );
}

function ManifestoSection({ title, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group relative border-l border-white/10 pl-6 md:pl-16 hover:border-cinelineGold/50 transition-colors duration-500"
        >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-cinelineGold transition-colors">{title}</h2>
            <div className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                {children}
            </div>
        </motion.div>
    )
}

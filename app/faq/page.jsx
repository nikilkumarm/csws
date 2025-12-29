"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// --- GOD-LEVEL VISUAL COMPONENTS ---

function AtmosphericDust() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = [...Array(15)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 20,
            delay: Math.random() * 10,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        y: [-20, -100],
                        x: Math.random() * 40 - 20
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                    className="absolute rounded-full bg-cinelineGold mix-blend-screen"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: p.size,
                        height: p.size,
                        filter: "blur(1px)",
                    }}
                />
            ))}
        </div>
    );
}

function PerspectiveGrid() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.05] transform-gpu perspective-1000 z-0">
            <div
                className="absolute inset-0 w-[200%] h-[200%] -left-[50%] -top-[50%]"
                style={{
                    backgroundSize: "60px 60px",
                    backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    transform: "rotateX(60deg) translateY(-100px) translateZ(-200px)",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-transparent" />
        </div>
    );
}

// --- DATA ---
const faqs = [
    {
        question: "What defines the 'Cineline' aesthetic?",
        answer: "Our signature style blends cinematic lighting, obsessive composition, and authentic emotion. We don't just document reality; we heighten it, creating imagery that feels like a frame from a high-budget film."
    },
    {
        question: "Do you travel for international commissions?",
        answer: "Absolutely. We are a globally mobile studio. Whether it's a campaign in Tokyo, a wedding in Tuscany, or a documentary in Patagonia, we bring our full kit and creative vision effectively anywhere on Earth."
    },
    {
        question: "What is your typical turnaround time?",
        answer: "Perfection takes patience, but we respect deadlines. For photography, expect proofs within 5 days and finals within 2 weeks. For film productions, the editing and color grading process typically spans 3-5 weeks depending on project complexity."
    },
    {
        question: "Do you handle the entire production process?",
        answer: "Yes. We offer end-to-end production services including creative direction, scriptwriting, location scouting, casting, shooting, and full post-production (editing, sound design, color grading)."
    },
    {
        question: "How far in advance should we book?",
        answer: "Our calendar fills quickly, typically 3-6 months in advance for major projects. However, we always try to accommodate last-minute conceptual shoots if our schedule permits. Contact us to check availability."
    }
];

// --- COMPONENT ---

function FAQItem({ item, isOpen, onClick, index }) {
    // Pad number with leading zero
    const num = (index + 1).toString().padStart(2, '0');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative mb-4 ${isOpen ? 'z-20' : 'z-10'}`}
        >
            <button
                onClick={onClick}
                className={`relative w-full text-left p-8 rounded-2xl transition-all duration-500 overflow-hidden 
          ${isOpen
                        ? 'bg-cinelineGold/10 border-cinelineGold/50'
                        : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20'} 
          border text-[var(--text)]`}
            >
                {/* Glow Effect */}
                {isOpen && <div className="absolute inset-0 bg-cinelineGold/5 blur-xl" />}

                <div className="relative flex items-center justify-between gap-6">

                    <div className="flex items-start gap-6 md:gap-8">
                        {/* Cinematic Index Number */}
                        <span className={`text-4xl md:text-5xl font-display font-bold leading-none select-none transition-colors duration-500
                 ${isOpen ? 'text-cinelineGold' : 'text-gray-200/20 dark:text-white/10 group-hover:text-gray-300/40'}`}>
                            {num}
                        </span>

                        <span className={`text-xl md:text-2xl font-medium tracking-tight pt-2 transition-colors duration-300 
                 ${isOpen ? 'text-cinelineGold' : 'text-[var(--text)]'}`}>
                            {item.question}
                        </span>
                    </div>

                    {/* Animated Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 
              ${isOpen
                            ? 'bg-cinelineGold border-cinelineGold text-black rotate-[135deg]'
                            : 'border-white/20 text-gray-400 group-hover:border-cinelineGold/50 group-hover:text-cinelineGold'}`}>
                        <Plus size={24} />
                    </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 pl-[4.5rem] md:pl-[6rem] pr-4">
                                <div className="w-full h-px bg-cinelineGold/20 mb-6" /> {/* Divider */}
                                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl">
                                    {item.answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </motion.div>
    );
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden font-sans relative selection:bg-cinelineGold/30">

            <PerspectiveGrid />
            <AtmosphericDust />

            <main className="container mx-auto px-6 pt-44 md:pt-64 pb-64 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cinelineGold/30 bg-cinelineGold/5 text-cinelineGold text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                            <HelpCircle size={14} />
                            Insights
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-cinelineDark dark:text-white leading-[0.9]">
                            Common <br /><span className="text-cinelineGold font-display italic">Curiosities.</span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Unveiling the process behind the magic.
                        </p>
                    </motion.div>
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            item={faq}
                            index={index}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-40 text-center"
                >
                    <p className="text-gray-400 mb-8 font-medium tracking-wide uppercase text-sm">Still have questions?</p>
                    <Link href="/contact" className="inline-block group">
                        <div className="relative overflow-hidden rounded-full p-[1px]">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cbb99e_0%,#000_50%,#cbb99e_100%)]" />
                            <div className="relative inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full font-bold group-hover:scale-[1.02] transition-transform backdrop-blur-3xl">
                                <MessageCircle size={20} className="text-cinelineGold" />
                                <span className="tracking-wide">Start a Conversation</span>
                                <ArrowRight size={18} className="text-cinelineGold group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Explicit bottom spacer */}
                <div className="h-64 w-full"></div>

            </main>

            <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
        </div>
    );
}

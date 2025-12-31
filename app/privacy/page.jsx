"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone, Globe } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-cinelineGold selection:text-black">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 border-b border-white/5 bg-cinelineDark text-center overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cinelineGold/5 blur-[150px] pointer-events-none -z-10" />

                <h2 className="text-zinc-500 text-sm tracking-[0.3em] font-medium mb-4 uppercase">Cineline Studios</h2>
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Privacy Policy</h1>
                <p className="text-2xl font-display italic text-cinelineGold mb-8">“Trust is our foundation.”</p>
                <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Your privacy is important to us. We are committed to protecting the personal information you share with us.
                </p>
            </section>

            {/* Privacy Content */}
            <section className="py-20 px-6 max-w-4xl mx-auto space-y-16">

                {/* 1. Information Collection */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">01.</span> Information Collection
                    </h2>
                    <p className="text-gray-400 leading-relaxed ml-6 border-l border-white/10 pl-6">
                        We collect personal information such as your name, email address, phone number, and event details when you fill out our booking form or contact us directly. This information is used solely for the purpose of communicating with you and planning your shoot.
                    </p>
                </div>

                {/* 2. Use of Information */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">02.</span> Use of Information
                    </h2>
                    <p className="text-gray-400 leading-relaxed ml-6 border-l border-white/10 pl-6">
                        We use the information we collect to provide our services, manage bookings, and improve our customer experience. We may also use your contact information to send you updates or promotional materials, but you can opt out at any time.
                    </p>
                </div>

                {/* 3. Data Protection */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">03.</span> Data Protection
                    </h2>
                    <p className="text-gray-400 leading-relaxed ml-6 border-l border-white/10 pl-6">
                        We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure networks and is only accessible by a limited number of persons who have special access rights.
                    </p>
                </div>

                {/* 4. Third-Party Disclosure */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">04.</span> Third-Party Disclosure
                    </h2>
                    <p className="text-gray-400 leading-relaxed ml-6 border-l border-white/10 pl-6">
                        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.
                    </p>
                </div>

                {/* 5. Cookie Policy */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">05.</span> Cookie Policy
                    </h2>
                    <div className="text-gray-400 leading-relaxed ml-6 border-l border-white/10 pl-6 space-y-2">
                        <p>We use cookies to:</p>
                        <ul className="list-disc list-outside ml-4 space-y-1 marker:text-cinelineGold">
                            <li>Understand and save user's preferences for future visits.</li>
                            <li>Compile aggregate data about site traffic and site interactions.</li>
                        </ul>
                    </div>
                </div>

                {/* 6. Consent */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">06.</span> Consent
                    </h2>
                    <p className="text-gray-400 leading-relaxed ml-6 border-l border-white/10 pl-6">
                        By using our site, you consent to our website's privacy policy.
                    </p>
                </div>

            </section>

            {/* Contact Footer */}
            <div className="bg-[#0a0a0a] py-16 px-6 border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center space-y-10">

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
                        <p className="text-gray-500 max-w-lg mx-auto">For inquiries regarding our privacy practices.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                        <a href="tel:+918124887577" className="flex flex-col items-center gap-3 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cinelineGold group-hover:text-white transition-all">
                                <Phone size={20} />
                            </div>
                            <span className="text-gray-300 group-hover:text-white font-medium">+91 8124887577</span>
                        </a>

                        <a href="mailto:cinelinestudio24@gmail.com" className="flex flex-col items-center gap-3 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cinelineGold group-hover:text-white transition-all">
                                <Mail size={20} />
                            </div>
                            <span className="text-gray-300 group-hover:text-white font-medium">cinelinestudio24@gmail.com</span>
                        </a>

                        <a href="https://cinelinestudios.vercel.app" className="flex flex-col items-center gap-3 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cinelineGold group-hover:text-white transition-all">
                                <Globe size={20} />
                            </div>
                            <span className="text-gray-300 group-hover:text-white font-medium">cinelinestudios.vercel.app</span>
                        </a>
                    </div>

                    <div className="pt-10 border-t border-white/5">
                        <h4 className="text-white font-display text-3xl font-bold mb-2">Nikilkumar & Rakshan</h4>
                        <p className="text-cinelineGold text-sm tracking-widest uppercase">Founders, Cineline Studios</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

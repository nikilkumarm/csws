"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone, Globe } from "lucide-react";

export default function TermsPage() {
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
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Terms & Conditions</h1>
                <p className="text-2xl font-display italic text-cinelineGold mb-8">“Capturing emotions effortlessly.”</p>
                <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Welcome to Cineline Studios! By engaging our services, you agree to the terms outlined below.
                </p>
            </section>

            {/* Terms Content */}
            <section className="py-20 px-6 max-w-4xl mx-auto space-y-16">

                {/* 1. Booking Confirmation */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">01.</span> Booking Confirmation
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>A booking is confirmed only after an advance payment of 50% of the total package price.</li>
                        <li>The remaining balance must be settled on or before the scheduled shoot/event date.</li>
                        <li>Advance payments are non-refundable in case of cancellation by the client.</li>
                    </ul>
                </div>

                {/* 2. Service Inclusions */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">02.</span> Service Inclusions
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>The agreed package includes the specified services (photoshoot, photo editing, video shooting, or editing).</li>
                        <li>Additional costs such as studio rent, equipment rental, or accommodation (if applicable) are the client’s responsibility unless explicitly agreed otherwise.</li>
                    </ul>
                </div>

                {/* 3. Deliverables */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">03.</span> Deliverables
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>Deliverables (photos or videos) will be provided in the agreed format within the timeline discussed at booking.</li>
                        <li>Any additional revisions requested after final delivery will incur extra charges.</li>
                    </ul>
                </div>

                {/* 4. Client Responsibilities */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">04.</span> Client Responsibilities
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>The client must provide all necessary details (theme, location, schedule, and specific requirements) well in advance.</li>
                        <li>It is the client’s responsibility to arrange permissions or permits for specific shoot locations if required.</li>
                    </ul>
                </div>

                {/* 5. Equipment and Studio Usage */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">05.</span> Equipment and Studio Usage
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>Studio costs and equipment rentals are not included in the package price unless specified.</li>
                        <li>Any damage caused by the client or their associates to rented equipment or studio property will be charged accordingly.</li>
                    </ul>
                </div>

                {/* 6. Copyright and Usage */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">06.</span> Copyright and Usage
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>Cineline Studios retains copyright ownership of all photos and videos unless agreed otherwise in writing.</li>
                        <li>We reserve the right to use our work for promotional purposes (e.g., social media, portfolio, and advertisements) unless the client explicitly requests otherwise in writing.</li>
                    </ul>
                </div>

                {/* 7. Liability */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">07.</span> Liability
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>Cineline Studios is not liable for delays caused by unforeseen circumstances such as weather, equipment malfunctions, or accidents.</li>
                        <li>In case of cancellation due to emergencies or technical issues on our end, we will either reschedule or refund the full advance payment.</li>
                    </ul>
                </div>

                {/* 8. Client Approval */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">08.</span> Client Approval
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>All deliverables will be shared with the client for review. Feedback must be provided within the agreed review period.</li>
                        <li>Delays in feedback may result in extended delivery timelines.</li>
                    </ul>
                </div>

                {/* 9. Confidentiality */}
                <div className="space-y-4 group">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-cinelineGold transition-colors">
                        <span className="text-cinelineGold/50 text-lg font-mono">09.</span> Confidentiality
                    </h2>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-400 marker:text-cinelineGold">
                        <li>We respect your privacy and will keep all sensitive materials confidential. Similarly, we request the same respect for Cineline Studios’s proprietary materials.</li>
                    </ul>
                </div>

                {/* Acknowledgment */}


            </section>

            {/* Contact Footer */}
            <div className="bg-[#0a0a0a] py-16 px-6 border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center space-y-10">

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
                        <p className="text-gray-500 max-w-lg mx-auto">For inquiries or clarifications, reach out to us. We are here to help you frame your perfect moment.</p>
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

                        <a href="https://cinelinestudios.com" className="flex flex-col items-center gap-3 group">
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

            {/* Legal Footer */}


        </div>
    );
}

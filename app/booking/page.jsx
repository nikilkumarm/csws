"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import BookingPopup from "../components/BookingPopup";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  Camera,
  MessageSquare,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { CinematicGrain, SubtleGrid } from "../components/Patterns";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    service: "",
    date: "",
    notes: "",
  });

  const update = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      address: "",
      service: "",
      date: "",
      notes: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://formsubmit.co/ajax/cinelinestudio24@gmail.com", form);
      setPopup({
        type: "success",
        message: "Your booking request has been sent directly to our inbox!",
      });
      resetForm();
    } catch (err) {
      setPopup({
        type: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cinelineGold selection:text-black relative overflow-hidden font-sans">
      <CinematicGrain opacity={0.12} />
      <SubtleGrid opacity={0.05} />

      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cinelineGold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">

        {/* POPUP MODAL */}
        <AnimatePresence>
          {popup && (
            <BookingPopup
              type={popup.type}
              message={popup.message}
              onClose={() => setPopup(null)}
            />
          )}
        </AnimatePresence>

        {/* TOP NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em] font-bold"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cinelineGold transition-colors">
              <ArrowLeft size={14} />
            </div>
            Back to Home
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-16 md:gap-24 items-start">

          {/* LEFT SIDE: MANIFESTO */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-4 border border-cinelineGold/30 rounded-full text-cinelineGold text-[10px] uppercase tracking-[0.4em] mb-8 backdrop-blur-md">
                Initiate Project
              </span>
              <h1 className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
                Start Your <br />
                <span className="text-cinelineGold italic font-serif lowercase">Legacy.</span>
              </h1>
              <p className="text-lg text-gray-400 font-light leading-relaxed border-l-2 border-cinelineGold/30 pl-8 max-w-md">
                We believe every story is a masterpiece waiting to be told. Provide your details, and our production team will craft the visual architecture for your project.
              </p>
            </motion.div>

            {/* ARTISTIC ACCENT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative aspect-square w-full max-w-[300px] border border-white/5 rounded-2xl overflow-hidden group grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <Image
                src="https://images.unsplash.com/photo-1492691452771-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop"
                alt="Cinema"
                fill
                className="object-cover opacity-40 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] font-mono text-cinelineGold tracking-widest uppercase mb-1">Live_Preview_Mode</p>
                <p className="text-white text-sm font-bold uppercase tracking-widest">Cinema Standards</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE FORM (GLASS CONTAINER) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent"
          >
            <div className="bg-[#050505] backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cinelineGold/5 blur-3xl rounded-full" />

              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">

                {/* SECTION 1: IDENTITY */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-8 bg-cinelineGold/50" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">The Identity</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField icon={User} placeholder="Full Name" value={form.name} onChange={(v) => update("name", v)} required />
                    <FormField icon={Mail} placeholder="Email Address" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                  </div>
                </div>

                {/* SECTION 2: LOGISTICS */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-8 bg-cinelineGold/50" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Logistic Hub</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField icon={Phone} placeholder="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} required />
                    <FormField icon={MapPin} placeholder="Primary Location" value={form.location} onChange={(v) => update("location", v)} />
                  </div>
                  <FormField icon={Sparkles} placeholder="Full Studio Address" value={form.address} onChange={(v) => update("address", v)} />
                </div>

                {/* SECTION 3: PROJECT SPECS */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-8 bg-cinelineGold/50" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Project Specs</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      icon={Camera}
                      placeholder="Select Service"
                      type="select"
                      value={form.service}
                      onChange={(v) => update("service", v)}
                      required
                      options={[
                        "Wedding Film",
                        "Product Shoot",
                        "Event Coverage",
                        "Broadcast & Streaming",
                      ]}
                    />
                    <FormField
                      icon={Calendar}
                      placeholder="Production Date"
                      type="date"
                      value={form.date}
                      onChange={(v) => update("date", v)}
                      required
                    />
                  </div>
                  <FormField
                    icon={MessageSquare}
                    placeholder="Vision & Creative Notes..."
                    type="textarea"
                    value={form.notes}
                    onChange={(v) => update("notes", v)}
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full py-6 bg-white text-black font-black uppercase text-xs tracking-[0.4em] overflow-hidden transition-all duration-500 hover:tracking-[0.6em] disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Processing_Request
                        </>
                      ) : (
                        <>
                          Initiate Production
                          <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-cinelineGold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </button>
                  <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.3em] mt-6 italic">Secure Transmission Active — Cineline Studios 2024</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function FormField({ placeholder, type = "text", value, onChange, required, options, icon: Icon }) {
  const isSelect = type === "select";
  const isTextarea = type === "textarea";

  return (
    <div className="relative group/field">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/field:text-cinelineGold transition-colors pointer-events-none">
        {isTextarea ? null : <Icon size={18} strokeWidth={1.5} />}
      </div>

      {isTextarea ? (
        <div className="relative">
          <div className="absolute left-6 top-6 text-white/20 group-focus-within/field:text-cinelineGold transition-colors pointer-events-none">
            <Icon size={18} strokeWidth={1.5} />
          </div>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 pt-6 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cinelineGold/50 focus:bg-white/[0.08] transition-all resize-none"
          />
        </div>
      ) : isSelect ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 text-sm text-white focus:outline-none focus:border-cinelineGold/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
        >
          <option value="" disabled className="bg-black text-white/30">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-black text-white">{o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cinelineGold/50 focus:bg-white/[0.08] transition-all"
        />
      )}

      {/* Visual Accent */}
      <div className="absolute inset-0 rounded-2xl border border-cinelineGold/0 group-hover/field:border-white/10 transition-colors pointer-events-none" />
    </div>
  );
}
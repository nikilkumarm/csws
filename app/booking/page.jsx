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
  ChevronRight,
  Activity,
  Maximize2
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
      <CinematicGrain opacity={0.15} />
      <SubtleGrid opacity={0.07} />

      {/* BACKGROUND DEPTH */}
      <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-cinelineGold/5 blur-[200px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-900/5 blur-[200px] rounded-full pointer-events-none" />

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

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

        {/* TOP HUD NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex justify-between items-center border-b border-white/5 pb-8"
        >
          <Link
            href="/"
            className="group flex items-center gap-4 text-white/60 hover:text-white transition-all uppercase text-[9px] tracking-[0.5em] font-black"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowLeft size={16} />
            </div>
            Exit Portal
          </Link>

          <div className="flex items-center gap-6 text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase hidden md:flex">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-white/80">Live Record</span>
            <span>ISO 400</span>
            <span>WB 5600K</span>
            <span>4K // 60FPS</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 md:gap-32">

          {/* LEFT COLUMN: BRAND STORY */}
          <div className="space-y-16 lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="space-y-2">
                <div className="h-[1px] w-24 bg-cinelineGold/50 animate-width" />
                <span className="text-cinelineGold font-black uppercase text-[10px] tracking-[0.5em] block">
                  Project Premiere
                </span>
              </div>

              <h1 className="flex flex-col gap-1 leading-none">
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white"
                >
                  Start
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                  className="font-script italic capitalize text-cinelineGold text-7xl md:text-9xl tracking-normal -mt-4 -mb-4 drop-shadow-2xl"
                >
                  Legacy
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
                  className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white/40"
                >
                  Project.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-lg text-gray-400 font-light leading-relaxed max-w-sm border-l-2 border-cinelineGold/20 pl-8"
              >
                Crafting visual masterpieces that define generations. <br />
                <span className="text-white italic">Your story, elevated to cinema.</span>
              </motion.p>
            </motion.div>

            {/* DECORATIVE STUDIO META */}
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
              <div className="space-y-1">
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">LAT CORD</p>
                <p className="text-sm font-bold text-white/80">13.0827° N</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">LONG CORD</p>
                <p className="text-sm font-bold text-white/80">80.2707° E</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE CINEMATIC FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* VIEWFINDER CORNERS */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t-[2px] border-l-[2px] border-white/10 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-16 h-16 border-t-[2px] border-r-[2px] border-white/10 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-[2px] border-l-[2px] border-white/10 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-[2px] border-r-[2px] border-white/10 pointer-events-none" />

            <div className="bg-[#030303] border border-white/10 rounded-sm p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group">
              <form onSubmit={handleSubmit} className="space-y-14">

                {/* 01 Identity */}
                <div className="space-y-10">
                  <FormSectionHeader number="01" title="Identity Check" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <GodField icon={User} label="Project Owner" placeholder="Enter Full Name" value={form.name} onChange={(v) => update("name", v)} required />
                    <GodField icon={Mail} label="Secure Email" placeholder="client@legacy.com" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                  </div>
                </div>

                {/* 02 Logistics */}
                <div className="space-y-10">
                  <FormSectionHeader number="02" title="Logistics Hub" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <GodField icon={Phone} label="Direct Line" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(v) => update("phone", v)} required />
                    <GodField icon={MapPin} label="Base Location" placeholder="City, State" value={form.location} onChange={(v) => update("location", v)} />
                  </div>
                  <GodField icon={Activity} label="Shoot Address" placeholder="Detailed Venue/Address" value={form.address} onChange={(v) => update("address", v)} />
                </div>

                {/* 03 Production Specs */}
                <div className="space-y-10">
                  <FormSectionHeader number="03" title="Production Specs" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <GodField
                      icon={Camera}
                      label="Service Type"
                      type="select"
                      value={form.service}
                      onChange={(v) => update("service", v)}
                      required
                      options={["Wedding Film", "Product Shoot", "Event Coverage", "Broadcast & Streaming"]}
                    />
                    <GodField
                      icon={Calendar}
                      label="Target Date"
                      type="date"
                      value={form.date}
                      onChange={(v) => update("date", v)}
                      required
                    />
                  </div>
                  <GodField
                    icon={MessageSquare}
                    label="Creative Manifesto"
                    placeholder="Describe your vision, core emotions, and visual goals..."
                    type="textarea"
                    value={form.notes}
                    onChange={(v) => update("notes", v)}
                  />
                </div>

                {/* MASTER SUBMIT */}
                <div className="pt-10">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full h-24 bg-[#0A0A0A] border border-white/10 overflow-hidden rounded-sm transition-all duration-500 hover:border-cinelineGold/50"
                  >
                    {/* Animated HUD Corners */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cinelineGold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cinelineGold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cinelineGold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cinelineGold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

                    {/* Gold Liquid Fill Effect */}
                    <div className="absolute inset-0 bg-cinelineGold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.7,0,0.3,1]" />

                    {/* Button Content */}
                    <div className="relative z-20 flex items-center justify-center gap-6">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-4 text-white group-hover:text-black transition-colors duration-500">
                          <span className="text-sm md:text-base font-black uppercase tracking-[0.4em] group-hover:tracking-[0.6em] transition-all duration-500">
                            {loading ? "Data Transmitting..." : "Initiate Production"}
                          </span>
                          <ChevronRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* High-Precision Laser Scan */}
                    <motion.div
                      animate={{ top: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-[1px] bg-cinelineGold shadow-[0_0_15px_#cbb99e] z-30 opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Subtle Background Glow */}
                    <div className="absolute inset-0 bg-gradient-radial from-cinelineGold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function FormSectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-6">
      <span className="text-cinelineGold font-mono text-[12px] font-bold border-b border-cinelineGold pb-1">{number}</span>
      <span className="text-white/60 uppercase text-[10px] tracking-[0.5em] font-black">{title}</span>
      <div className="flex-grow h-[1px] bg-white/10" />
    </div>
  );
}

function GodField({ label, placeholder, type = "text", value, onChange, required, options, icon: Icon }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative space-y-4">
      <div className="flex justify-between items-end px-1">
        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 group-focus-within/field:text-cinelineGold transition-colors">
          {label} {required && <span className="text-cinelineGold/80">*</span>}
        </label>
        {focused && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] font-mono text-cinelineGold uppercase tracking-widest"
          >
            Awaiting_Input...
          </motion.span>
        )}
      </div>

      <div className={`relative transition-all duration-500 ${focused ? 'scale-[1.02]' : ''}`}>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 px-2 pointer-events-none group-focus-within:text-cinelineGold transition-colors">
          <Icon size={16} strokeWidth={1} />
        </div>

        {type === "textarea" ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-white/20 py-4 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cinelineGold transition-all h-32 resize-none leading-relaxed"
          />
        ) : type === "select" ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required={required}
            className="w-full bg-transparent border-b border-white/20 py-4 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cinelineGold transition-all cursor-pointer appearance-none"
          >
            <option value="" disabled className="bg-black text-white/40">{placeholder}</option>
            {options.map((o) => (
              <option key={o} value={o} className="bg-black text-white">{o}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-white/20 py-4 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cinelineGold transition-all"
          />
        )}

        {/* Focus Glow Background */}
        <AnimatePresence>
          {focused && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="absolute bottom-0 left-0 w-full h-[2px] bg-cinelineGold shadow-[0_0_15px_rgba(212,175,55,0.8)] origin-left"
            />
          )}
        </AnimatePresence>
      </div>

      {/* VIEWPORT CROSSHAIR (Subtle) */}
      <div className="absolute -right-2 top-11 opacity-10 pointer-events-none">
        <Maximize2 size={12} strokeWidth={1} />
      </div>
    </div>
  );
}
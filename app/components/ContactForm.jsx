"use client";
import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, X } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("https://formsubmit.co/ajax/cinelinestudio24@gmail.com", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full">
      {/* Glow behind form */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cinelineGold/20 to-transparent blur-2xl opacity-50" />

      <form
        onSubmit={submit}
        className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl overflow-hidden"
      >
        <div className="space-y-6">
          <InputGroup
            label="What's your name?"
            placeholder="John Doe"
            value={form.name}
            onChange={e => update("name", e.target.value)}
          />
          <InputGroup
            label="Your email address"
            placeholder="john@example.com"
            type="email"
            value={form.email}
            onChange={e => update("email", e.target.value)}
          />
          <div className="space-y-2">
            <label className="text-sm font-medium text-cinelineGold/80 uppercase tracking-widest pl-1">Tell us about your vision</label>
            <textarea
              required
              placeholder="Describe your project..."
              value={form.message}
              onChange={e => update("message", e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cinelineGold/50 focus:bg-black/60 transition-all duration-300 resize-none h-40"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="min-h-[24px]">
            {status === "error" && (
              <p className="text-red-400 font-medium text-sm">Something went wrong. Please try again.</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-500
                ${status === "loading" ? "bg-white/10 text-gray-400" : "bg-white text-black hover:bg-cinelineGold hover:scale-105"}`}
          >
            {status === "loading" ? (
              <>Sending <Loader2 size={16} className="animate-spin" /></>
            ) : (
              <>Send Message <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
        </div>
      </form>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-cinelineGold/30 p-10 rounded-3xl text-center shadow-[0_0_50px_rgba(203,185,158,0.15)]"
            >
              <button
                onClick={() => setStatus("idle")}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cinelineGold/10 mb-8 border border-cinelineGold/20">
                <CheckCircle2 size={40} className="text-cinelineGold" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Mission Received.</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Your message has been successfully encrypted and sent. Our team will review your vision and reach out to you shortly.
              </p>

              <button
                onClick={() => setStatus("idle")}
                className="w-full py-4 bg-cinelineGold text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors duration-500"
              >
                Close Portal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InputGroup({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-cinelineGold/80 uppercase tracking-widest pl-1">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cinelineGold/50 focus:bg-black/60 transition-all duration-300"
      />
    </div>
  );
}

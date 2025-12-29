"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("/api/contact", form);
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
          {status === "success" ? (
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-green-400 font-medium">
              Message sent successfully. We'll be in touch.
            </motion.p>
          ) : status === "error" ? (
            <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>
          ) : (
            <span />
          )}

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
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

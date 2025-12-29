"use client";
import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(null);

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", form).catch(() => {});
      setSent("Thanks — we'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setSent("Something went wrong.");
    }
  };

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-2xl" style={{ boxShadow: "0 10px 26px rgba(10,8,6,0.12)" }}>
      <input required placeholder="Full name" value={form.name} onChange={e=>update("name",e.target.value)} className="input w-full mb-3" />
      <input required placeholder="Email address" value={form.email} onChange={e=>update("email",e.target.value)} className="input w-full mb-3" />
      <textarea required placeholder="How can we help?" value={form.message} onChange={e=>update("message",e.target.value)} className="input w-full h-32 mb-3" />
      <button type="submit" className="px-5 py-3 rounded-md font-semibold" style={{ background: "linear-gradient(180deg,#cbb99e,#b89a70)", color: "#140f0a" }}>
        Send Message
      </button>
      {sent && <p className="text-sm text-green-600 mt-2">{sent}</p>}
    </form>
  );
}

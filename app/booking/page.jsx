"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import BookingPopup from "../components/BookingPopup";

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
    files: [],
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
      files: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(form).forEach((key) => {
        if (key === "files") {
          (form.files || []).forEach((file) =>
            data.append("attachments", file)
          );
        } else {
          data.append(key, form[key]);
        }
      });

      await axios.post("/api/bookings", data);

      setPopup({
        type: "success",
        message: "Your booking has been submitted successfully!",
      });

      resetForm();
    } catch (err) {
      setPopup({
        type: "error",
        message: err?.response?.data?.error || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    // UPDATED: Increased pt-16 to pt-32 to push content down
    <section className="pt-32 pb-20 px-4 max-w-2xl mx-auto fade-up-slow">

      {popup && (
        <BookingPopup
          type={popup.type}
          message={popup.message}
          onClose={() => setPopup(null)}
        />
      )}

      {/* UPDATED: Styled 'Back to Home' Button */}
      <div className="flex justify-start mb-8">
        <Link
          href="/"
          className="
            group inline-flex items-center gap-2.5 
            px-5 py-2.5 
            bg-white border border-gray-200 
            rounded-full 
            text-sm font-medium text-gray-600 
            transition-all duration-300 
            hover:border-black hover:bg-black hover:text-white hover:shadow-lg
          "
        >
          {/* Animated Arrow Icon */}
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="flex justify-center mb-5">
        <Image
          src="/images/cs-logo-tb.png"
          width={200}
          height={70}
          alt="Cineline Logo"
          priority
        />
      </div>

      <h1 className="text-3xl font-semibold text-center text-black fade-up">
        Book a Project
      </h1>

      <p className="text-center text-gray-600 mt-2 mb-8 fade-up">
        Tell us about your project — we’ll respond with availability.
      </p>

      <div className="fade-card bg-white border border-[rgb(233_230_226)] rounded-2xl p-7 shadow-[0_14px_30px_rgb(10_8_6/6%)]">
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Full Name" value={form.name} onChange={(v) => update("name", v)} required />
            <FormField label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} required />
            <FormField label="Location" value={form.location} onChange={(v) => update("location", v)} />
          </div>

          <FormField label="Address" value={form.address} onChange={(v) => update("address", v)} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Service"
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
              label="Preferred Date"
              type="date"
              value={form.date}
              onChange={(v) => update("date", v)}
              required
            />
          </div>

          <FormField
            label="Additional Notes"
            type="textarea"
            value={form.notes}
            onChange={(v) => update("notes", v)}
          />

          <div>
            <label className="block text-sm mb-2 text-[rgb(99_88_79)]">Upload Reference Files</label>
            <input
              type="file"
              multiple
              onChange={(e) => update("files", Array.from(e.target.files))}
              className="text-[rgb(99_88_79)] file:bg-[rgb(246_242_239)] file:border file:border-[rgb(233_230_226)] file:px-4 file:py-2 file:rounded-md cursor-pointer"
            />
          </div>

          <div className="flex gap-3 items-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-gold px-8 py-3 rounded-md font-semibold disabled:opacity-60 flex-1 text-center justify-center"
            >
              {loading ? "Sending..." : "Submit Booking"}
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 rounded-md border border-[rgb(203_185_158)] text-[rgb(43_31_23)] bg-white hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>

        </form>
      </div>

    </section>
  );
}

function FormField({ label, type = "text", value, onChange, required, options }) {
  return (
    <div className="fade-up">
      <label className="block text-sm mb-2 text-[rgb(99_88_79)] font-medium">{label}</label>

      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input-clean w-full h-32 resize-none"
        />
      ) : type === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input-clean w-full"
          required={required}
        >
          <option value="">Select Option</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className="input-clean w-full"
        />
      )}
    </div>
  );
}
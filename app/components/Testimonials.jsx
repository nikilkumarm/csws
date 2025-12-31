"use client";
import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aditi & Rohit",
    role: "Wedding Clients",
    text: "Literally speechless. The team felt like part of our family only and captured every emotion perfectly. Superb experience!",
    image: "/images/testimonials/client1.jpg"
  },
  {
    name: "Sanjay Gupta",
    role: "Business Owner",
    text: "Best decision for our launch. The cinematic shots look extremely premium and 'hatke'. Pure passion and full value for money.",
    image: "/images/testimonials/client2.jpg"
  },
  {
    name: "Meera Iyer",
    role: "Independent Artist",
    text: "Cineline totally nailed my vision! Patient, creative, and the results are just next level. Highly recommended to everyone!",
    image: "/images/testimonials/client2.jpg"
  }
];



export default function Testimonials({ darkMode = true }) {
  return (
    <section className="relative w-full h-full">
      {/* Decorative large quote mark - Adjusted for dark mode */}
      <div className={`absolute top-0 left-10 opacity-[0.05] pointer-events-none ${darkMode ? 'text-white' : 'text-black'}`}>
        <Quote size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'} p-10 rounded-none border hover:border-cinelineGold/50 transition-colors duration-500 flex flex-col backdrop-blur-sm`}
            >
              <div className="flex gap-1 text-cinelineGold mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed italic mb-8 flex-grow font-light`}>
                "{t.text}"
              </p>

              <div className={`flex items-center gap-4 pt-6 border-t ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600 relative grayscale">
                  <Image
                    src={t.image}
                    fill
                    className="object-cover"
                    alt={t.name}
                    sizes="50px"
                  />
                </div>
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-cinelineDark'}`}>{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}

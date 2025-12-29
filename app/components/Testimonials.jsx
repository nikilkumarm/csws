"use client";
import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah & James",
    role: "Wedding Clients",
    text: "Cineline made our wedding look like a movie. The attention to detail was incredible, and they captured moments we didn't even notice happening.",
    image: "/images/testimonials/client1.jpg"
  },
  {
    name: "Elena Rodriguez",
    role: "Brand Director, Vogue",
    text: "Reviewing the final shots was an emotional experience. They didn't just take photos; they captured the soul of our brand campaign.",
    image: "/images/testimonials/client2.jpg"
  },
  {
    name: "Michael Chen",
    role: "Event Planner",
    text: "Professional, punctual, and incredibly talented. The live broadcast for our summit was seamless. Highly recommended for high-stakes events.",
    image: "/images/testimonials/client2.jpg" // Placeholder if 3rd image missing
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
        <div className="grid md:grid-cols-3 gap-8 mb-24">
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

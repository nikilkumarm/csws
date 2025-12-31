"use client";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Camera, ImageOff } from "lucide-react";
import Image from "next/image";

// --- CURATED PROJECTS DATA ---
const allProjects = [
  // Editorial / Fashion
  { id: 101, src: "/images/portfolio-gallery/editorial-1.jpg", category: "editorial", title: "Atmospheric Portraits", client: "Studio Session", available: true },
  { id: 102, src: "/images/portfolio-gallery/editorial-2.jpg", category: "editorial", title: "Urban Shadows", client: "Street Series", available: true },
  { id: 103, src: "/images/portfolio-gallery/IMG_2114.JPG", category: "editorial", title: "Ethereal Essence", client: "Vogue India", available: true },

  // Weddings
  { id: 201, src: "/images/portfolio-gallery/IMG_0001.jpg", category: "wedding", title: "The Royal Union", client: "Palace Wedding", available: true },
  { id: 202, src: "/images/portfolio-gallery/IMG_6835.jpg", category: "wedding", title: "Golden Hour Vows", client: "Heritage Resort", available: true },
  { id: 203, src: "/images/portfolio-gallery/IMG_1804.JPG", category: "wedding", title: "Eternal Love", client: "Church Ceremony", available: true },
  { id: 204, src: "/images/portfolio-gallery/IMG_2048.JPG", category: "wedding", title: "Sacred Rituals", client: "Temple Tradition", available: true },

  // Commercial / Product
  { id: 301, src: "/images/portfolio-gallery/commercial-1.jpg", category: "commercial", title: "Brand Narrative", client: "Corporate Campaign", available: true },
  { id: 302, src: "/images/portfolio-gallery/commercial-2.jpg", category: "commercial", title: "Visual Language", client: "Product Showcase", available: true },
  { id: 303, src: "/images/portfolio-gallery/IMG_3419.JPG", category: "commercial", title: "Luxe Kinetics", client: "Aura Watch", available: true },

  // Events
  { id: 401, src: "/images/portfolio-gallery/event-1.jpg", category: "events", title: "The Grand Launch", client: "Corporate Gala", available: true },
  { id: 402, src: "/images/portfolio-gallery/IMG_0198-2.JPG", category: "events", title: "Neon Pulse", client: "Music Festival", available: true },
].filter(p => p.available);

export default function PortfolioPage() {
  const [hovered, setHovered] = useState(null);
  const [shuffledProjects, setShuffledProjects] = useState([]);

  useEffect(() => {
    // Shuffling projects on mount
    const shuffled = [...allProjects].sort(() => Math.random() - 0.5);
    setShuffledProjects(shuffled);
  }, []);

  const filtered = shuffledProjects;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">


      <main className="pt-32 pb-20 md:pt-48">

        {/* Header */}
        <section className="px-6 max-w-7xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Selected <span className="text-cinelineGold">Works</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              A curation of moments that define our vision. From intimate celebrations
              to global commercial campaigns.
            </p>
          </motion.div>


        </section>

        {/* Gallery Grid */}
        <section className="px-6 max-w-[1600px] mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm flex items-center justify-center">
                    {project.available ? (
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 4}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-4 text-gray-300 group-hover:text-cinelineGold transition-colors duration-500">
                        <ImageOff size={48} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Image Coming Soon</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

      </main>

    </div>
  );
}

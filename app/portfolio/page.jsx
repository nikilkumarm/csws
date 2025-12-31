"use client";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// --- CURATED PROJECTS DATA ---
const allProjects = [
  // Editorial / Fashion
  { id: 101, src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop", category: "editorial", title: "Vogue Cover", client: "Fashion Week '24" },
  { id: 102, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", category: "editorial", title: "Urban Shadows", client: "Adidas Originals" },

  // Weddings
  { id: 201, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", category: "wedding", title: "Sarah & John", client: "Lake Como, Italy" },
  { id: 202, src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop", category: "wedding", title: "Golden Hour Vows", client: "Napa Valley" },
  { id: 203, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", category: "wedding", title: "The Royal Union", client: "Jaipur Palace" },
  { id: 204, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", category: "wedding", title: "Intimate Elopement", client: "Swiss Alps" },

  // Commercial / Product
  { id: 301, src: "https://images.unsplash.com/photo-1523293188086-b469b90660a1?q=80&w=800&auto=format&fit=crop", category: "commercial", title: "Luxe Perfume", client: "Chanel Beauty" },
  { id: 302, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop", category: "commercial", title: "Automotive Art", client: "Porsche Design" },

  // Events
  { id: 401, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", category: "events", title: "Tech Summit Keynote", client: "Google I/O" },
  { id: 402, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", category: "events", title: "Neon Nights", client: "Coachella Festival" },
  { id: 403, src: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop", category: "events", title: "Gala Dinner", client: "Met Museum" },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "wedding", label: "Weddings" },
  { id: "editorial", label: "Editorial" },
  { id: "commercial", label: "Commercial" },
  { id: "events", label: "Events" },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [hovered, setHovered] = useState(null);

  const filtered = activeTab === "all"
    ? allProjects
    : allProjects.filter(p => p.category === activeTab);

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

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat.id
                  ? "bg-cinelineDark text-white shadow-lg scale-105"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-cinelineGold hover:text-cinelineGold"
                  }`}
              >
                {cat.label}
              </button>
            ))}
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
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm">
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 4}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Overlay - Always on for Mobile, Hover for Desktop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content Layer - Always on for Mobile, Hover for Desktop */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-cinelineGold text-xs font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                        <div className="flex justify-between items-end">
                          <div>
                            <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                            <p className="text-gray-300 text-sm mt-1">{project.client}</p>
                          </div>
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-cinelineGold hover:border-cinelineGold transition-colors duration-300">
                            <ArrowUpRight size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
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

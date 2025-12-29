"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { Video, Camera, Package, Clapperboard, MonitorPlay } from "lucide-react";

const services = [
  {
    title: "Cinematic Wedding Films",
    desc: "Every love story deserves a masterpiece. We craft wedding films that feel like cinema.",
    icon: Video,
    slug: "wedding-films",
  },
  {
    title: "Event Photography",
    desc: "From corporate galas to private celebrations, we capture the essence of every moment.",
    icon: Camera,
    slug: "event-photography",
  },
  {
    title: "Product Campaigns",
    desc: "Identify your brand's visual language with high-fidelity product photography.",
    icon: Package,
    slug: "product-campaigns",
  },
  {
    title: "Broadcast & Commercials",
    desc: "End-to-end production for commercials, documentaries, and live broadcasts.",
    icon: MonitorPlay,
    slug: "broadcast-commercials",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function PremiumServices() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20">
        <div className="max-w-xl">
          <span className="text-cinelineGold uppercase tracking-widest text-sm font-medium">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-cinelineDark">
            Premium Services for <br />
            <span className="text-gray-400">Modern Brands & Couples.</span>
          </h2>
        </div>

      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((s, i) => (
          <motion.div key={i} variants={item} className="h-full">
            <ServiceCard
              index={i}
              title={s.title}
              desc={s.desc}
              icon={s.icon}
              slug={s.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

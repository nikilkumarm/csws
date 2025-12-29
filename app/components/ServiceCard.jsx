"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ title, desc, icon: Icon, index, slug }) {
  return (
    <Link href={`/services/${slug}`} className="block h-full">
      <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-cinelineGold/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col justify-between">

        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cinelineGold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div>
          <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-cinelineDark group-hover:bg-cinelineGold group-hover:text-white transition-colors duration-300 relative z-10">
            {Icon ? <Icon size={24} /> : null}
          </div>

          <h3 className="text-xl font-medium text-cinelineDark mb-3 relative z-10 group-hover:text-black">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed relative z-10 group-hover:text-gray-700">
            {desc}
          </p>
        </div>

        <div className="mt-8 flex items-center text-sm font-medium text-cinelineGold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 relative z-10">
          <span>Learn More</span>
          <ArrowUpRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
}

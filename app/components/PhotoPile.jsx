"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const photos = [
  "/images/pile/p1.JPG",
  "/images/pile/p2.JPG",
  "/images/pile/p3.JPG",
  "/images/pile/p4.JPG",
  "/images/pile/p5.JPG",
  "/images/pile/p6.JPG",
  "/images/pile/p7.JPG",
  "/images/pile/p8.JPG",
];

export default function PhotoPile() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const pos = photos.map(() => ({
      x: Math.random() * 80 - 40,
      y: Math.random() * 50 - 25,
      rot: Math.random() * 20 - 10,
    }));
    setPositions(pos);
  }, []);

  return (
    <div className="relative w-full h-[420px] flex items-center justify-center">
      {positions.length > 0 &&
        photos.map((src, i) => (
          <div
            key={i}
            className="absolute p-2 bg-white shadow-xl rounded-xl animate-float"
            style={{
              transform: `translate(${positions[i].x}px, ${positions[i].y}px) rotate(${positions[i].rot}deg)`,
            }}
          >
            <div className="relative w-40 h-40">
              <Image src={src} alt="pile" fill className="object-cover rounded-lg" />
            </div>
          </div>
        ))}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

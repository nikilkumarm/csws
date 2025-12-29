"use client";
import { useEffect, useState } from "react";

export default function WelcomeModal({ onEnter }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold">Welcome to Cineline Studios</h2>
          <p className="mt-2 text-gray-600">Where stories are crafted frame by frame.</p>
          <div className="mt-6 flex gap-3">
            <button className="btn-gold px-4 py-2 rounded-md" onClick={() => { setShow(false); onEnter?.(); }}>Enter</button>
            <button className="px-4 py-2 rounded-md border" onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}

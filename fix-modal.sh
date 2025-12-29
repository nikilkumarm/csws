#!/bin/zsh

echo "🎬 Updating CINELINE CINEMATIC MODAL..."

# Backup old modal
mkdir -p backups
cp app/components/WelcomeModal.jsx backups/WelcomeModal.bak.$(date +%s) 2>/dev/null

# Write modal file
cat > app/components/WelcomeModal.jsx << 'MODAL'
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function WelcomeModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="cineline-modal-overlay">
      <div className="cineline-modal">
        <button className="cineline-close" onClick={() => setShow(false)}>
          ✕
        </button>

        <div className="cineline-modal-content">
          <h1 className="cineline-title">Welcome to Cineline Studios</h1>
          <p className="cineline-sub">Where cinematic stories come alive.</p>

          <div className="cineline-actions">
            <Link href="/portfolio" className="btn-gold">View Portfolio</Link>
            <Link href="/booking" className="btn-outline">Book a Shoot</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
MODAL

echo "✔ WelcomeModal.jsx updated."

# Append CSS
cat >> app/globals.css << 'CSS'
/* CINELINE CINEMATIC MODAL */
.cineline-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(14px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.4s ease forwards;
}

.cineline-modal {
  background: rgba(255,255,255,0.86);
  backdrop-filter: blur(22px);
  border-radius: 18px;
  padding: 40px 32px;
  width: min(92%, 480px);
  box-shadow: 0 25px 70px rgba(0,0,0,0.20);
  transform: scale(0.92) translateY(14px);
  opacity: 0;
  animation: modalPop 0.5s cubic-bezier(.16,.9,.36,1) forwards;
  position: relative;
}

.cineline-close {
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  font-size: 20px;
  color: rgba(60,50,42,0.9);
  transition: opacity 0.2s ease;
  cursor: pointer;
}
.cineline-close:hover { opacity: 0.5; }

.cineline-title {
  font-size: clamp(26px, 4vw, 34px);
  color: rgb(43,31,23);
  font-weight: 600;
  text-align: center;
  margin-bottom: 6px;
}

.cineline-sub {
  text-align: center;
  color: rgb(99,88,79);
  margin-bottom: 24px;
}

.cineline-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn-outline {
  border: 1px solid rgb(203,185,158);
  color: rgb(43,31,23);
  padding: 10px 18px;
  border-radius: 8px;
  background: white;
  transition: all 0.2s ease;
}
.btn-outline:hover {
  background: rgb(246,242,239);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalPop {
  0% { opacity: 0; transform: scale(0.92) translateY(20px); }
  60% { opacity: 1; transform: scale(1.02) translateY(-4px); }
  100% { transform: scale(1) translateY(0); }
}
CSS

echo "🎉 CINEMATIC MODAL UPDATED. Restart dev server!"

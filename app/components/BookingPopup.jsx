"use client";
import { useEffect } from "react";

export default function BookingPopup({ type, message, onClose }) {
  // Auto-close the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div
      className={`
        fixed left-1/2 -translate-x-1/2 
        /* FIX: Increased from top-32 to top-44 to definitely clear the navbar */
        top-44
        z-[10000]
        flex items-center gap-4
        px-6 py-4
        rounded-2xl shadow-2xl
        backdrop-blur-xl
        border
        min-w-[320px] max-w-[90%]
        transition-all duration-300 animate-in slide-in-from-top-8 fade-in zoom-in-95
        ${
          isSuccess 
            ? "bg-white/95 border-green-200/50 text-green-900" 
            : "bg-white/95 border-red-200/50 text-red-900"
        }
      `}
    >
      {/* Status Icon */}
      <div 
        className={`
          flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full 
          ${isSuccess ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}
        `}
      >
        {isSuccess ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )}
      </div>

      {/* Message Content */}
      <div className="flex flex-col flex-1">
        <span className="font-bold text-sm tracking-wide uppercase opacity-80">
          {isSuccess ? "Success" : "Error"}
        </span>
        <span className="text-[15px] font-medium leading-snug">
          {message}
        </span>
      </div>

      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="p-2 hover:bg-black/5 rounded-full transition-colors opacity-60 hover:opacity-100"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
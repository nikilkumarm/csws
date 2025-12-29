"use client";
export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"
       className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg z-50">
      <img src="/images/whatsapp.png" alt="whatsapp" width="28" height="28" />
    </a>
  );
}

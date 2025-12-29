"use client";
export default function WhatsAppButton() {
  const sampleText = encodeURIComponent("Hi! I'm interested in your services. Could you share more details?");
  const href = `https://wa.me/918124887577?text=${sampleText}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
      aria-label="Open WhatsApp chat"
    >
      <img src="/images/whatsapp.png" alt="whatsapp" width="28" height="28" />
    </a>
  );
}

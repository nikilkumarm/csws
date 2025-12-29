"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-black text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400">&copy; {year} Cineline Studios. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

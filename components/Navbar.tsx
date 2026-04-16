"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Tentang", href: "#about" },
    { name: "Galeri", href: "#gallery" },
    { name: "Kontak", href: "#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId= href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 64; // 64px = tinggi navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    setIsOpen(false); // Tutup mobile menu setelah klik link
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              Sugi AC Mobil
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick = {(e) => handleClick(e, link.href)}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Phone Button Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/6285974550459?text=Halo%20Sugi%20AC%20Mobil,%20saya%20ingin%20konsultasi%20mengenai%20service%20AC%20mobil%20saya."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 btn-primary"
            >
              <Phone size={18} />
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick = {(e) => handleClick(e, link.href)}
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6285974550459?text=Halo%20Sugi%20AC%20Mobil,%20saya%20ingin%20konsultasi%20mengenai%20service%20AC%20mobil%20saya."
              target="_blank" rel="noopener noreferrer"
              className="block px-3 py-2 text-primary font-semibold"
            >
              📞 Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

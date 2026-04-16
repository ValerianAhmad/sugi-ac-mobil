"use client";

import { Wind, Facebook, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Wind className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-white">
                Sugi AC Mobil
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Spesialis AC mobil terpercaya di Bekasi dengan pengalaman 
              lebih dari 15 tahun. Kami berkomitmen memberikan pelayanan 
              terbaik untuk kenyamanan berkendara Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/6285974550459"
                target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Whatsapp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Beranda", href: "#home" },
                { name: "Layanan", href: "#services" },
                { name: "Tentang Kami", href: "#about" },
                { name: "Galeri", href: "#gallery" },
                { name: "Kontak", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.replace('#', ''));
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop - 64,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-primary" />
                <span className="text-sm">
                  Jl. Raya Jatiasih, Kec. Jatiasih, Kota Bekasi, Jawa Barat
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a href="tel:+6285974550459" className="text-sm hover:text-primary">
                  0859-7455-0459
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@acmobilsamsugi.com" className="text-sm hover:text-primary">
                  info@acmobilsamsugi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Sugi AC Mobil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Wind, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wind className="text-primary" size={32} />
              <span className="text-primary font-semibold">
                Sugi AC Mobil - Spesialis AC Mobil
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bengkel AC Mobil Terpercaya di Bekasi
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Solusi lengkap untuk AC mobil Anda. Kami melayani service,
              perbaikan, dan perawatan AC mobil semua merk dengan teknisi
              berpengalaman.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Teknisi berpengalaman",
                "Garansi service & spare part original",
                "Harga transparan & kompetitif",
                "Pengerjaan cepat & berkualitas",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary text-center"
              >
                Booking Sekarang
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("services");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 64,
                      behavior: "smooth",
                    });
                  }
                }}
                className="btn-secondary text-center"
              >
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <div className="text-center">
                <Wind size={80} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  AC Mobil Tidak Dingin?
                </h3>
                <p className="mb-6">Segera konsultasikan dengan kami!</p>
                <div className="bg-white text-primary rounded-lg p-4">
                  <p className="text-sm font-semibold mb-1">Hubungi Kami:</p>
                  <a href="https://wa.me/6285974550459?text=Halo%20Sugi%20AC%20Mobil,%20saya%20ingin%20konsultasi%20mengenai%20service%20AC%20mobil%20saya." target="_blank" rel="noopener noreferrer" className="text-2xl font-bold block hover:scale-105 transition-transform">0859-7455-0459</a>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-white rounded-full p-4 shadow-lg">
              <p className="text-sm font-bold">Buka Setiap Hari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

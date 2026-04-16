"use client";

import {
  Wrench,
  Droplets,
  Wind,
  Gauge,
  Snowflake,
  Settings,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      icon: <Snowflake size={40} />,
      title: "Isi Freon R134a",
      description: "Pengisian freon berkualitas untuk suhu dingin maksimal",
      features: ["Freon murni R134a", "Pengecekan kebocoran", "Tekanan stabil"],
    },
    {
      icon: <Wrench size={40} />,
      title: "Perbaikan AC Mobil",
      description: "Diagnosa & perbaikan untuk semua jenis kerusakan",
      features: ["AC tidak dingin", "AC berbau", "Bunyi berisik"],
    },
    {
      icon: <Gauge size={40} />,
      title: "Servis Kompresor",
      description: "Diagnosa & servis kompresor AC mobil Anda",
      features: ["Deteksi kerusakan dini", "Perawatan berkala", "Suara halus"],
    },
    {
      icon: <Wind size={40} />,
      title: "Servis Blower",
      description: "Pembersihan untuk hembusan angin segar dan kuat",
      features: ["Hilangkan bau apek", "Putaran blower maksimal", "Udara bersih"],
    },
    {
      icon: <Settings size={40} />,
      title: "Penggantian Part",
      description: "Suku cadang berkualitas dengan pengerjaan rapi",
      features: ["Suku cadang original", "Kondensor & Filter", "Ekspansi valve"],
    },
    {
      icon: <Wrench size={40} />,
      title: "Pasang Unit AC Baru",
      description: "Instalasi AC mobil secara keseluruhan dari awal",
      features: ["Pemasangan rapi", "Sesuai spesifikasi mobil", "Tahan lama"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Layanan Kami</h2>
          <p className="section-subtitle">
            Solusi lengkap untuk semua kebutuhan AC mobil Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary inline-block"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}

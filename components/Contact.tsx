"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Redirect ke WhatsApp
    const text = `Halo Sugi Ac Mobil, saya ingin booking layanan:
Nama: ${formData.name}
No. HP: ${formData.phone}
Mobil: ${formData.car}
Layanan: ${formData.service}
${formData.message ? `Keluhan/Keterangan: ${formData.message}` : ''}`;

    const waLink = `https://wa.me/6285974550459?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
    
    setFormData({
      name: "",
      phone: "",
      car: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Alamat",
      content: "Jl. Raya Jatiasih, Kec. Jatiasih, Kota Bekasi, Jawa Barat",
      link: "https://maps.app.goo.gl/CJ2Pfhggz4GzBqt46"
    },
    {
      icon: <Phone size={24} />,
      title: "Telepon",
      content: "0859-7455-0459",
      link: "tel:+6285974550459"
    },
    // TODO: Tambahkan email
    // {
    //   icon: <Mail size={24} />,
    //   title: "Email",
    //   content: "info@acmobilsamsugi.com",
    //   link: "mailto:info@acmobilsamsugi.com"
    // },
    {
      icon: <Clock size={24} />,
      title: "Jam Buka",
      content: "Setiap Hari: 08.30-18.00",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-subtitle">
            Konsultasi gratis untuk AC mobil Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-primary bg-blue-50 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.app.goo.gl/CJ2Pfhggz4GzBqt46"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Form Booking
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  No. Telepon/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="08xx-xxxx-xxxx"
                />
              </div>

              <div>
                <label htmlFor="car" className="block text-sm font-semibold text-gray-700 mb-2">
                  Merk/Tipe Mobil *
                </label>
                <input
                  type="text"
                  id="car"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Contoh: Toyota Avanza 2020"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Jenis Layanan *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="">Pilih layanan</option>
                  <option value="service">Service AC Lengkap</option>
                  <option value="repair">Perbaikan AC</option>
                  <option value="freon">Isi Freon</option>
                  <option value="evaporator">Cuci Evaporator</option>
                  <option value="compressor">Cek Kompresor</option>
                  <option value="sparepart">Ganti Spare Part</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Keterangan/Keluhan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  placeholder="Deskripsikan masalah AC mobil Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Mengirim..."
                ) : (
                  <>
                    <Send size={18} />
                    Kirim Booking
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Area Bengkel",
      description: "Fasilitas Sugi AC Mobil untuk pelayanan Anda",
      image: "/images/bengkel-depan.jpeg"
    },
    {
      title: "Pengerjaan Servis",
      description: "Dedikasi pengerjaan servis AC dengan hati-hati",
      image: "/images/sedang-service.jpeg"
    },
    {
      title: "Pengecekan Rutin",
      description: "Pemeriksaan detail kebersihan evaporator",
      image: "/images/service-1.jpeg"
    },
    {
      title: "Kompresor AC",
      description: "Perbaikan dan penggantian kompresor",
      image: "/images/service-2.jpeg"
    },
    {
      title: "Tekanan Freon",
      description: "Cek tekanan freon stabil untuk performa maksimal",
      image: "/images/service-3.jpeg"
    },
    {
      title: "Hasil Dingin Maksimal",
      description: "Pengerjaan bersih dan AC dingin maksimal",
      image: "/images/service-4.jpeg"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Galeri</h2>
          <p className="section-subtitle">
            Dokumentasi pekerjaan dan fasilitas bengkel kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video bg-gray-200"
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-10">
                <div className="p-6 text-white w-full">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

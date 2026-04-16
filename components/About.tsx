import { Award, Users, Clock, ThumbsUp } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Award size={32} />,
      number: "15+",
      label: "Tahun Pengalaman"
    },
    {
      icon: <Users size={32} />,
      number: "5000+",
      label: "Pelanggan Puas"
    },
    {
      icon: <Clock size={32} />,
      number: "100%",
      label: "Tepat Waktu"
    },
    {
      icon: <ThumbsUp size={32} />,
      number: "98%",
      label: "Rating Kepuasan"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title">Tentang Kami</h2>
            <p className="text-lg text-gray-600 mb-6">
              <strong className="text-primary">Sugi Ac Mobil</strong> telah 
              melayani masyarakat Bekasi dan sekitarnya selama lebih dari 3 tahun dengan dedikasi 
              penuh untuk memberikan layanan terbaik.
            </p>
            
            <p className="text-gray-600 mb-6">
              Kami memahami bahwa AC mobil yang berfungsi dengan baik adalah kebutuhan 
              penting untuk kenyamanan berkendara, terutama di iklim tropis Indonesia. 
              Oleh karena itu, kami berkomitmen untuk memberikan solusi yang cepat, 
              tepat, dan berkualitas.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Mengapa Memilih Kami?</h3>
              <ul className="space-y-3">
                {[
                  "Teknisi dengan pengalaman bertahun-tahun",
                  "Peralatan modern dan teknologi terkini",
                  "Spare part original dengan garansi resmi",
                  "Harga transparan tanpa biaya tersembunyi",
                  "Lokasi strategis dan mudah dijangkau",
                  "Layanan konsultasi gratis",
                  "Melayani Panggilan (Home Service)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Box */}
            <div className="mt-8 bg-primary text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Jam Operasional</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Buka Setiap Hari</span>
                  <span className="font-semibold">08.30 - 18.00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

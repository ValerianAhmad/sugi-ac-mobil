# Bengkel AC Mobil Sam Sugi - Website

Website profesional untuk Bengkel AC Mobil Sam Sugi di Yogyakarta, dibangun dengan Next.js 14, TypeScript, dan Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (.tsx)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Runtime:** Node.js

## 📁 Struktur Project

```
bengkel-ac-sam-sugi/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── About.tsx           # About section
│   ├── Gallery.tsx         # Gallery section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/
│   └── images/             # Folder untuk gambar
├── lib/                    # Utilities (untuk database, dll)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## 🛠️ Instalasi & Setup

### 1. Clone atau Copy Project
Salin semua file ke folder project Anda.

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka browser dan akses: **http://localhost:3000**

### 4. Build untuk Production
```bash
npm run build
npm start
```

## 🎨 Kustomisasi

### Mengubah Warna
Edit file `tailwind.config.ts`:
```typescript
colors: {
  primary: "#1e40af",    // Warna utama
  secondary: "#0ea5e9",  // Warna sekunder
  accent: "#f59e0b",     // Warna aksen
}
```

### Mengubah Informasi Kontak
Edit file `components/Contact.tsx` dan `components/Footer.tsx`:
- Nomor telepon
- Email
- Alamat
- Link Google Maps

### Menambahkan Gambar
1. Buat folder `public/images/`
2. Tambahkan foto bengkel Anda
3. Update komponen `Gallery.tsx` untuk menggunakan gambar asli

### Mengubah Layanan
Edit array `services` di `components/Services.tsx` untuk menambah/mengubah layanan.

## 📱 Fitur

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI dengan Tailwind CSS
- ✅ SEO optimized
- ✅ Form booking interaktif
- ✅ Google Maps integration
- ✅ Smooth scrolling navigation
- ✅ TypeScript untuk type safety

## 🔧 Development Tips

### Menambahkan Halaman Baru
1. Buat folder baru di `app/`, misal `app/blog/`
2. Buat file `page.tsx` di dalam folder tersebut
3. Route otomatis: `/blog`

### Membuat API Route
1. Buat folder `app/api/`
2. Buat file `route.ts`, contoh:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Process data
  return Response.json({ success: true });
}
```

### Menambahkan Database
Gunakan Prisma untuk ORM:
```bash
npm install prisma @prisma/client
npx prisma init
```

## 🌐 Deploy

### Deploy ke Vercel (Recommended)
1. Push code ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Deploy otomatis!

### Deploy ke Hosting Lain
```bash
npm run build
```
Upload folder `.next`, `public`, dan file config ke hosting.

## 📝 TODO / Pengembangan Selanjutnya

- [ ] Integrasi WhatsApp untuk booking langsung
- [ ] Admin panel untuk kelola booking
- [ ] Database untuk menyimpan data booking
- [ ] Blog/artikel tentang perawatan AC mobil
- [ ] Sistem rating & review pelanggan
- [ ] Galeri foto asli bengkel
- [ ] Multi-language support (ID/EN)
- [ ] PWA (Progressive Web App)

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📞 Support

Jika ada pertanyaan atau butuh bantuan development:
- Baca dokumentasi di atas
- Check Next.js documentation
- Google/Stack Overflow untuk troubleshooting

## 📄 License

MIT License - bebas digunakan untuk project pribadi atau komersial.

---

**Dibuat dengan ❤️ untuk Bengkel AC Mobil Sam Sugi**

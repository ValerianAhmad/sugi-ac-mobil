# 🚀 Quick Start Guide

Panduan cepat untuk memulai development website Bengkel AC Mobil Sam Sugi.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Jalankan Development Server

```bash
npm run dev
```

Buka browser: **http://localhost:3000**

## Step 3: Kustomisasi Konten

### 1️⃣ Update Informasi Kontak
**File:** `components/Contact.tsx` dan `components/Footer.tsx`

Cari dan ganti:
- `0812-3456-7890` → nomor telepon asli
- `info@acmobilsamsugi.com` → email asli
- `Jl. Kaliurang Km 8, Sleman, Yogyakarta` → alamat asli
- Link Google Maps di Contact.tsx

### 2️⃣ Ganti Warna Brand
**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: "#1e40af",    // Warna utama (biru)
  secondary: "#0ea5e9",  // Warna sekunder
  accent: "#f59e0b",     // Warna aksen (orange)
}
```

### 3️⃣ Update Jam Operasional
**File:** `components/About.tsx`

Cari bagian "Jam Operasional" dan sesuaikan dengan jam buka bengkel Anda.

### 4️⃣ Tambahkan Foto Asli
1. Buat folder: `public/images/`
2. Upload foto bengkel, service, tim teknisi
3. Edit `components/Gallery.tsx`:

```tsx
const galleryItems = [
  {
    title: "Service AC",
    description: "Proses service AC mobil",
    image: "/images/service-1.jpg"  // Ganti dengan foto asli
  },
  // ... tambah foto lain
];
```

## Step 4: Membuat Fitur Form Booking Berfungsi

Saat ini form hanya simulasi. Untuk membuat form bekerja:

### Opsi A: Kirim ke WhatsApp
Edit `components/Contact.tsx`, ganti function `handleSubmit`:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const message = `
Booking Baru:
- Nama: ${formData.name}
- No. HP: ${formData.phone}
- Mobil: ${formData.car}
- Layanan: ${formData.service}
- Pesan: ${formData.message}
  `;
  
  const waNumber = "6281234567890"; // Ganti dengan nomor WA Anda
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(waLink, '_blank');
};
```

### Opsi B: Kirim ke Email (dengan API Route)
1. Install nodemailer:
```bash
npm install nodemailer
```

2. Buat file `app/api/booking/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Kirim email menggunakan nodemailer
  // atau save ke database
  
  return NextResponse.json({ success: true });
}
```

## Step 5: SEO & Meta Tags

Edit `app/layout.tsx` untuk SEO:

```typescript
export const metadata: Metadata = {
  title: "Bengkel AC Mobil Sam Sugi - Yogyakarta",
  description: "Bengkel AC mobil terpercaya...",
  keywords: "bengkel ac mobil, service ac yogyakarta...",
  openGraph: {
    title: "Bengkel AC Mobil Sam Sugi",
    description: "...",
    images: ['/images/og-image.jpg'],
  }
};
```

## Step 6: Build & Deploy

### Build untuk Production
```bash
npm run build
```

### Deploy ke Vercel
1. Push ke GitHub
2. Import di vercel.com
3. Deploy!

### Deploy ke cPanel/VPS
```bash
npm run build
```
Upload folder: `.next`, `public`, `package.json`, `next.config.js`

## 🔥 Tips Development

1. **Hot Reload**: Setiap perubahan auto-refresh browser
2. **TypeScript**: Gunakan TypeScript untuk error checking
3. **Tailwind**: Cek [Tailwind docs](https://tailwindcss.com) untuk class CSS
4. **Components**: Buat component reusable di folder `components/`

## ❓ Troubleshooting

### Error: "Module not found"
```bash
npm install
```

### Port 3000 sudah digunakan
```bash
npm run dev -- -p 3001
```

### Build error
```bash
rm -rf .next
npm run build
```

## 📚 Next Steps

- [ ] Tambah halaman blog
- [ ] Integrasi database (Prisma + PostgreSQL)
- [ ] Admin dashboard
- [ ] WhatsApp integration
- [ ] Google Analytics

---

**Happy Coding! 🚀**

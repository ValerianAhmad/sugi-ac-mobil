import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sugi AC Mobil | Bengkel AC Mobil Spesialis",
  description: "Bengkel AC mobil terpercaya di Bekasi. Melayani service part, isi freon, perawatan berkala, dan pasang baru unit AC mobil. Melayani panggilan (Home Service).",
  keywords: "sugi ac mobil, bengkel ac mobil spesialis, service ac mobil bekasi, perbaikan ac mobil, isi freon, service panggilan ac mobil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

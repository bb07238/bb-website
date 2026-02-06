import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Banke Bihari Creations - Divine Idols, Spiritual Essentials & Pooja Items",
  description: "Premium quality god idols, marble dust murtis, ittars, agarbattis, Laddu Gopal poshak, jewellery and vastu items. Shop authentic spiritual products from Vrindavan.",
  keywords: "god idols, marble murtis, ittars, agarbattis, pooja items, vastu items, laddu gopal poshak, radha rani jewellery, spiritual items, vrindavan",
  authors: [{ name: "Banke Bihari Creations" }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Banke Bihari Creations - Divine Spiritual Items",
    description: "Your trusted destination for authentic spiritual items, god idols, and pooja essentials from Vrindavan.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banke Bihari Creations",
    description: "Premium quality spiritual items and divine essentials for your worship needs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Café Aroma | El Mejor Café de Apodaca, Nuevo León",
  description:
    "Café Aroma es la cafetería de especialidad favorita de Apodaca, Nuevo León. Disfruta de café artesanal, postres deliciosos y un ambiente acogedor. Visítanos hoy.",
  keywords: [
    "café",
    "cafetería",
    "Apodaca",
    "Nuevo León",
    "café de especialidad",
    "café artesanal",
    "coffee shop",
  ],
  openGraph: {
    title: "Café Aroma | El Mejor Café de Apodaca, Nuevo León",
    description:
      "Café de especialidad, postres artesanales y el mejor ambiente en Apodaca. Ven a descubrir tu nueva cafetería favorita.",
    type: "website",
    locale: "es_MX",
    siteName: "Café Aroma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google"; // New Fonts
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";

import { FloatingWhatsapp } from "@/components/floating-whatsapp";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notaría 71 CDMX - Legal Excellence",
  description: "Certeza Jurídica, Legado y Confianza. Servicios notariales de alta gama en la Ciudad de México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <ScrollToTop />
        {children}
        <FloatingWhatsapp />
      </body>
    </html>
  );
}

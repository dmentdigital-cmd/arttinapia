import type { Metadata } from "next";
import { Aileron, Caveat } from "next/font/google";
import "./globals.css";

const aileron = Aileron({
  variable: "--font-aileron",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Artinapia | Ilustradora & Artista Visual",
  description: "Ilustradora colombiana. Marca personal, Cielo en la Tierra, Servicios creativos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${aileron.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-gray-900 font-aileron">{children}</body>
    </html>
  );
}

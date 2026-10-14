import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BotonWhatsApp from "@/components/BotonWhatsApp";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "5J's Repostería Artesanal",
  description:
    "Tortas y postres artesanales en Bogotá. Pide por WhatsApp para tu celebración.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BotonWhatsApp />
      </body>
    </html>
  );
}

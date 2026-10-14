import type { Metadata } from "next";
import CatalogoFiltrable from "@/components/CatalogoFiltrable";

export const metadata: Metadata = {
  title: "Catálogo | 5J's Repostería Artesanal",
  description: "Tortas y postres artesanales por ocasión: cumpleaños, bautizos y Navidad.",
};

export default function CatalogoPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-serif text-4xl text-pizarra">Catálogo</h1>
      <p className="mt-2 mb-8 text-texto/80">
        Elige por ocasión y toca un producto para ver sus ingredientes.
      </p>
      <CatalogoFiltrable />
    </section>
  );
}

import Link from "next/link";
import ProductoCard from "@/components/ProductoCard";
import { productos } from "@/data/productos";
import { enlaceWhatsApp } from "@/lib/whatsapp";

export default function Home() {
  const destacados = productos.slice(0, 3);

  return (
    <>
      <section className="bg-crema-oscuro">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-sm uppercase tracking-widest text-dorado">Repostería artesanal · Bogotá</p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-pizarra md:text-5xl">
            Tortas y postres hechos con calma, para tu celebración
          </h1>
          <p className="mt-4 max-w-xl text-lg text-texto">
            Cumpleaños, bautizos y Navidad. Elige tu torta en el catálogo y escríbenos por WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/catalogo"
              className="rounded-full bg-pizarra px-6 py-3 font-medium text-crema hover:bg-pizarra-oscuro"
            >
              Ver catálogo
            </Link>
            <a
              href={enlaceWhatsApp("Hola, quisiera hacer un pedido.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-pizarra px-6 py-3 font-medium text-pizarra hover:bg-crema"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-pizarra">Destacados</h2>
          <Link href="/catalogo" className="text-sm text-pizarra underline-offset-4 hover:underline">
            Ver todo
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map((p) => (
            <ProductoCard key={p.slug} producto={p} />
          ))}
        </div>
      </section>
    </>
  );
}

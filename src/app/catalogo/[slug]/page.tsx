import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OCASIONES, productos } from "@/data/productos";
import { obtenerProductoPorSlug } from "@/lib/catalogo";
import { enlaceWhatsApp, mensajeSobreProducto } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = obtenerProductoPorSlug(slug);
  if (!producto) return {};
  return {
    title: `${producto.nombre} | 5J's Repostería Artesanal`,
    description: producto.descripcion,
  };
}

export default async function FichaProducto({ params }: Props) {
  const { slug } = await params;
  const producto = obtenerProductoPorSlug(slug);
  if (!producto) notFound();

  const nombresOcasiones = OCASIONES.filter((o) =>
    producto.ocasiones.includes(o.slug),
  ).map((o) => o.nombre);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/catalogo" className="text-sm text-pizarra underline-offset-4 hover:underline">
        ← Volver al catálogo
      </Link>

      <div className="relative mt-6 aspect-4/3 w-full overflow-hidden rounded-xl border border-dorado/40 bg-crema-oscuro">
        <Image
          src={producto.foto}
          alt={producto.nombre}
          fill
          unoptimized
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      {producto.esEjemplo && (
        <p className="mt-4 inline-block rounded bg-dorado/20 px-2 py-1 text-xs font-medium text-pizarra">
          Producto de ejemplo: datos de prueba
        </p>
      )}

      <h1 className="mt-4 font-serif text-4xl text-pizarra">{producto.nombre}</h1>
      <p className="mt-2 text-xs uppercase tracking-wide text-dorado">
        {nombresOcasiones.join(" · ")}
      </p>
      <p className="mt-6 text-lg text-texto">{producto.descripcion}</p>

      <h2 className="mt-8 font-serif text-2xl text-pizarra">Ingredientes</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-texto">
        {producto.ingredientes.map((ingrediente) => (
          <li key={ingrediente}>{ingrediente}</li>
        ))}
      </ul>

      <a
        href={enlaceWhatsApp(mensajeSobreProducto(producto.nombre))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block rounded-full bg-pizarra px-6 py-3 font-medium text-crema hover:bg-pizarra-oscuro"
      >
        Pedir este producto por WhatsApp
      </a>
    </article>
  );
}

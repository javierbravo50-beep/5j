import Image from "next/image";
import Link from "next/link";
import { OCASIONES, type Producto } from "@/data/productos";

export default function ProductoCard({ producto }: { producto: Producto }) {
  const nombresOcasiones = OCASIONES.filter((o) =>
    producto.ocasiones.includes(o.slug),
  ).map((o) => o.nombre);

  return (
    <Link
      href={`/catalogo/${producto.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-dorado/40 bg-white/60 transition hover:shadow-md"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden bg-crema-oscuro">
        <Image
          src={producto.foto}
          alt={producto.nombre}
          fill
          unoptimized
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-serif text-xl text-pizarra">{producto.nombre}</h3>
        <p className="text-sm text-texto/80">{producto.descripcion}</p>
        <p className="mt-auto pt-2 text-xs uppercase tracking-wide text-dorado">
          {nombresOcasiones.join(" · ")}
        </p>
      </div>
    </Link>
  );
}

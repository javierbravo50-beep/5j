"use client";

import { useState } from "react";
import ProductoCard from "@/components/ProductoCard";
import { filtrarProductos, type FiltroOcasion } from "@/lib/catalogo";
import { OCASIONES, type Producto } from "@/data/productos";

const opciones: { valor: FiltroOcasion; texto: string }[] = [
  { valor: "todas", texto: "Todas" },
  ...OCASIONES.map((o) => ({ valor: o.slug, texto: o.nombre })),
];

export default function CatalogoFiltrable() {
  const [filtro, setFiltro] = useState<FiltroOcasion>("todas");
  const visibles: Producto[] = filtrarProductos(filtro);

  return (
    <div className="flex flex-col gap-8">
      <div role="group" aria-label="Filtrar por ocasión" className="flex flex-wrap gap-2">
        {opciones.map((op) => {
          const activo = filtro === op.valor;
          return (
            <button
              key={op.valor}
              type="button"
              aria-pressed={activo}
              onClick={() => setFiltro(op.valor)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                activo
                  ? "border-pizarra bg-pizarra text-crema"
                  : "border-pizarra/40 text-pizarra hover:border-pizarra"
              }`}
            >
              {op.texto}
            </button>
          );
        })}
      </div>

      {visibles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((p) => (
            <ProductoCard key={p.slug} producto={p} />
          ))}
        </div>
      ) : (
        <p className="text-texto/80">No hay productos para esta ocasión todavía.</p>
      )}
    </div>
  );
}

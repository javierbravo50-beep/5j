import { productos, type OcasionSlug, type Producto } from "@/data/productos";

export type FiltroOcasion = OcasionSlug | "todas";

/** Productos de una ocasión, o todos si el filtro es "todas". */
export function filtrarProductos(filtro: FiltroOcasion): Producto[] {
  if (filtro === "todas") return productos;
  return productos.filter((p) => p.ocasiones.includes(filtro));
}

export function obtenerProductoPorSlug(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}

/** Lista de problemas del catálogo. Vacía significa que está bien formado. */
export function revisarCatalogo(lista: Producto[] = productos): string[] {
  const problemas: string[] = [];
  const slugs = new Set<string>();

  for (const p of lista) {
    if (slugs.has(p.slug)) problemas.push(`slug repetido: ${p.slug}`);
    slugs.add(p.slug);
    if (p.ocasiones.length === 0) problemas.push(`sin ocasión: ${p.slug}`);
    if (p.ingredientes.length === 0) problemas.push(`sin ingredientes: ${p.slug}`);
  }

  return problemas;
}

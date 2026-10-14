import { describe, expect, it } from "vitest";
import { filtrarProductos, obtenerProductoPorSlug, revisarCatalogo } from "@/lib/catalogo";
import { OCASIONES, productos, type Producto } from "@/data/productos";

describe("catálogo de datos", () => {
  it("está bien formado (slugs únicos, con ocasión e ingredientes)", () => {
    expect(revisarCatalogo()).toEqual([]);
  });

  it("solo usa ocasiones que existen en OCASIONES", () => {
    const validas = new Set(OCASIONES.map((o) => o.slug));
    for (const p of productos) {
      for (const o of p.ocasiones) expect(validas.has(o)).toBe(true);
    }
  });

  it("tiene productos de ejemplo marcados como tales", () => {
    expect(productos.length).toBeGreaterThanOrEqual(6);
    expect(productos.every((p) => p.esEjemplo)).toBe(true);
  });
});

describe("filtrarProductos", () => {
  it("'todas' devuelve todo el catálogo", () => {
    expect(filtrarProductos("todas")).toHaveLength(productos.length);
  });

  it("filtra por ocasión y solo devuelve productos de esa ocasión", () => {
    const navidad = filtrarProductos("navidad");
    expect(navidad.length).toBeGreaterThan(0);
    expect(navidad.every((p) => p.ocasiones.includes("navidad"))).toBe(true);
  });

  it("un producto con varias ocasiones aparece en cada una", () => {
    const slugs = (ocasion: Parameters<typeof filtrarProductos>[0]) =>
      filtrarProductos(ocasion).map((p) => p.slug);
    expect(slugs("cumpleanos")).toContain("torta-tres-leches");
    expect(slugs("bautizos-celebraciones")).toContain("torta-tres-leches");
  });
});

describe("obtenerProductoPorSlug", () => {
  it("encuentra un producto existente", () => {
    expect(obtenerProductoPorSlug("torta-tres-leches")?.nombre).toBe("Torta de tres leches");
  });

  it("devuelve undefined si el slug no existe", () => {
    expect(obtenerProductoPorSlug("no-existe")).toBeUndefined();
  });
});

describe("revisarCatalogo detecta errores", () => {
  const base: Producto = {
    slug: "a",
    nombre: "A",
    tipo: "torta",
    ocasiones: ["navidad"],
    descripcion: "",
    ingredientes: ["Harina"],
    foto: "",
    esEjemplo: true,
  };

  it("reporta slugs repetidos", () => {
    expect(revisarCatalogo([base, base])).toContain("slug repetido: a");
  });

  it("reporta productos sin ocasión o sin ingredientes", () => {
    const problemas = revisarCatalogo([{ ...base, ocasiones: [], ingredientes: [] }]);
    expect(problemas).toContain("sin ocasión: a");
    expect(problemas).toContain("sin ingredientes: a");
  });
});

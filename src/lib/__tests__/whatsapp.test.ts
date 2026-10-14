import { describe, expect, it } from "vitest";
import { enlaceWhatsApp, mensajeSobreProducto } from "@/lib/whatsapp";

describe("enlaceWhatsApp", () => {
  it("apunta al número de Julia", () => {
    expect(enlaceWhatsApp("hola")).toMatch(/^https:\/\/wa\.me\/573014671591\?text=/);
  });

  it("codifica tildes, signos y saltos de línea", () => {
    const url = new URL(enlaceWhatsApp("Torta de cumpleaños\n¿Para cuántas personas? & más"));
    expect(url.searchParams.get("text")).toBe(
      "Torta de cumpleaños\n¿Para cuántas personas? & más",
    );
  });

  it("no deja espacios sin codificar", () => {
    expect(enlaceWhatsApp("hola mundo")).not.toContain(" ");
  });
});

describe("mensajeSobreProducto", () => {
  it("incluye el nombre del producto", () => {
    expect(mensajeSobreProducto("Torta de tres leches")).toBe(
      "Hola, quisiera información sobre: Torta de tres leches.",
    );
  });
});

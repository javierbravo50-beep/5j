import { describe, expect, it } from "vitest";
import {
  type DatosPedido,
  fechaMinimaPedido,
  formatearFecha,
  mensajePedido,
  sumarDias,
  validarPedido,
} from "@/lib/pedido";

// 14 de octubre de 2026, hora local
const hoy = new Date(2026, 9, 14);

const datosValidos: DatosPedido = {
  fecha: "2026-10-30",
  tipo: "Torta de tres leches",
  sabor: "",
  personas: "20",
  alergias: "",
  zona: "Recogida",
  referido: "",
};

describe("fecha mínima del pedido", () => {
  it("es hoy más 7 días", () => {
    expect(fechaMinimaPedido(hoy)).toBe("2026-10-21");
  });

  it("cruza bien el cambio de mes", () => {
    expect(fechaMinimaPedido(new Date(2026, 9, 28))).toBe("2026-11-04");
  });

  it("sumarDias cruza fin de año", () => {
    expect(sumarDias("2026-12-28", 7)).toBe("2027-01-04");
  });
});

describe("validación de fecha", () => {
  it("rechaza la fecha de hoy", () => {
    const errores = validarPedido({ ...datosValidos, fecha: "2026-10-14" }, hoy);
    expect(errores.fecha).toBeDefined();
  });

  it("rechaza una fecha a 6 días", () => {
    const errores = validarPedido({ ...datosValidos, fecha: "2026-10-20" }, hoy);
    expect(errores.fecha).toBeDefined();
  });

  it("acepta una fecha exactamente a 7 días", () => {
    const errores = validarPedido({ ...datosValidos, fecha: "2026-10-21" }, hoy);
    expect(errores.fecha).toBeUndefined();
  });

  it("pide la fecha si está vacía", () => {
    const errores = validarPedido({ ...datosValidos, fecha: "" }, hoy);
    expect(errores.fecha).toBeDefined();
  });
});

describe("validación de otros campos", () => {
  it("un pedido completo no tiene errores", () => {
    expect(validarPedido(datosValidos, hoy)).toEqual({});
  });

  it("exige el tipo de torta", () => {
    expect(validarPedido({ ...datosValidos, tipo: "  " }, hoy).tipo).toBeDefined();
  });

  it("exige un número entero de personas mayor a cero", () => {
    expect(validarPedido({ ...datosValidos, personas: "" }, hoy).personas).toBeDefined();
    expect(validarPedido({ ...datosValidos, personas: "0" }, hoy).personas).toBeDefined();
    expect(validarPedido({ ...datosValidos, personas: "2.5" }, hoy).personas).toBeDefined();
    expect(validarPedido({ ...datosValidos, personas: "abc" }, hoy).personas).toBeDefined();
  });

  it("rechaza una zona de entrega que no existe", () => {
    expect(validarPedido({ ...datosValidos, zona: "Otra" }, hoy).zona).toBeDefined();
  });
});

describe("mensajePedido", () => {
  it("incluye todos los datos del pedido", () => {
    const mensaje = mensajePedido({
      ...datosValidos,
      sabor: "Vainilla",
      alergias: "Sin nueces",
      referido: "AMIGA-123",
    });

    expect(mensaje).toContain("Fecha del evento: 30/10/2026");
    expect(mensaje).toContain("Tipo: Torta de tres leches");
    expect(mensaje).toContain("Sabor: Vainilla");
    expect(mensaje).toContain("Número de personas: 20");
    expect(mensaje).toContain("Alergias o restricciones: Sin nueces");
    expect(mensaje).toContain("Entrega: Recogida");
    expect(mensaje).toContain("Código de referido: AMIGA-123");
  });

  it("marca como 'No indicado' los campos opcionales vacíos", () => {
    const mensaje = mensajePedido(datosValidos);
    expect(mensaje).toContain("Sabor: No indicado");
    expect(mensaje).toContain("Alergias o restricciones: No indicado");
    expect(mensaje).toContain("Código de referido: No indicado");
  });

  it("formatea la fecha como DD/MM/AAAA", () => {
    expect(formatearFecha("2026-11-04")).toBe("04/11/2026");
  });
});

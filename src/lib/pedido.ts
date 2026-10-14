// Reglas del formulario de pedido. Sin base de datos: el pedido solo viaja por WhatsApp.

export const DIAS_ANTELACION = 7;

export const ZONAS_ENTREGA = [
  "Domicilio zona norte de Bogotá",
  "Domicilio fuera de la zona norte (lo paga el cliente)",
  "Recogida",
] as const;

export interface DatosPedido {
  fecha: string; // formato AAAA-MM-DD
  tipo: string;
  sabor: string;
  personas: string;
  alergias: string;
  zona: string;
  referido: string;
}

export type ErroresPedido = Partial<Record<keyof DatosPedido, string>>;

/** Suma días a una fecha AAAA-MM-DD. Trabaja en UTC para no depender de la zona horaria. */
export function sumarDias(fechaIso: string, dias: number): string {
  const [anio, mes, dia] = fechaIso.split("-").map(Number);
  const resultado = new Date(Date.UTC(anio, mes - 1, dia + dias));
  return resultado.toISOString().slice(0, 10);
}

/** Fecha local de hoy en formato AAAA-MM-DD. */
export function fechaLocalIso(fecha: Date): string {
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");
  return `${fecha.getFullYear()}-${mes}-${dia}`;
}

/** Primera fecha que se puede pedir: hoy más los días de antelación. */
export function fechaMinimaPedido(hoy: Date): string {
  return sumarDias(fechaLocalIso(hoy), DIAS_ANTELACION);
}

/** AAAA-MM-DD -> DD/MM/AAAA, para mostrar en el mensaje. */
export function formatearFecha(fechaIso: string): string {
  const [anio, mes, dia] = fechaIso.split("-");
  return `${dia}/${mes}/${anio}`;
}

export function validarPedido(datos: DatosPedido, hoy: Date): ErroresPedido {
  const errores: ErroresPedido = {};

  if (!datos.fecha) {
    errores.fecha = "Elige la fecha del evento.";
  } else if (datos.fecha < fechaMinimaPedido(hoy)) {
    errores.fecha = `Los pedidos necesitan al menos ${DIAS_ANTELACION} días de anticipación.`;
  }

  if (!datos.tipo.trim()) {
    errores.tipo = "Elige el tipo de torta o postre.";
  }

  const personas = Number(datos.personas);
  if (!datos.personas.trim() || !Number.isInteger(personas) || personas < 1) {
    errores.personas = "Indica un número de personas (1 o más).";
  }

  if (!(ZONAS_ENTREGA as readonly string[]).includes(datos.zona)) {
    errores.zona = "Elige cómo quieres recibir el pedido.";
  }

  return errores;
}

/** Mensaje prellenado que se envía por WhatsApp. Los campos vacíos aparecen como "No indicado". */
export function mensajePedido(datos: DatosPedido): string {
  const valor = (texto: string) => (texto.trim() ? texto.trim() : "No indicado");

  return [
    "Hola, quisiera hacer un pedido en 5J's Repostería.",
    "",
    `Fecha del evento: ${formatearFecha(datos.fecha)}`,
    `Tipo: ${valor(datos.tipo)}`,
    `Sabor: ${valor(datos.sabor)}`,
    `Número de personas: ${valor(datos.personas)}`,
    `Alergias o restricciones: ${valor(datos.alergias)}`,
    `Entrega: ${valor(datos.zona)}`,
    `Código de referido: ${valor(datos.referido)}`,
  ].join("\n");
}

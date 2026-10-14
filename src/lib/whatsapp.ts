import { WHATSAPP_URL } from "@/lib/contacto";

/** Arma el enlace de WhatsApp con el mensaje ya escrito (codificado para la URL). */
export function enlaceWhatsApp(mensaje: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}`;
}

/** Mensaje inicial cuando alguien pregunta por un producto desde su ficha. */
export function mensajeSobreProducto(nombre: string): string {
  return `Hola, quisiera información sobre: ${nombre}.`;
}

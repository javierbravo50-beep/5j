import { WHATSAPP_URL } from "@/lib/contacto";

export default function BotonWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-4 right-4 z-40 rounded-full bg-pizarra px-4 py-3 text-sm font-medium text-crema shadow-lg hover:bg-pizarra-oscuro"
    >
      WhatsApp
    </a>
  );
}

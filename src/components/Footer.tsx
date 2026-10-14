import Link from "next/link";
import {
  INSTAGRAM_URL,
  INSTAGRAM_USUARIO,
  WHATSAPP_URL,
} from "@/lib/contacto";

export default function Footer() {
  return (
    <footer className="mt-16 bg-pizarra text-crema">
      {/* pb extra para que el botón flotante de WhatsApp no tape el texto */}
      <div className="mx-auto grid max-w-5xl gap-6 px-4 pb-24 pt-10 md:grid-cols-3 md:pb-10">
        <div>
          <p className="font-serif text-xl">5J&apos;s Repostería Artesanal</p>
          <p className="mt-2 text-sm text-crema/80">Bogotá, Colombia</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a href={WHATSAPP_URL} className="underline-offset-4 hover:underline">
            Escríbenos por WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            className="underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram {INSTAGRAM_USUARIO}
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/privacidad" className="underline-offset-4 hover:underline">
            Aviso de privacidad
          </Link>
          <p className="text-crema/70">
            © 2026 5J&apos;s Repostería Artesanal
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/catalogo", texto: "Catálogo" },
  { href: "/nuestra-historia", texto: "Nuestra historia" },
  { href: "/entregas", texto: "Entregas" },
  { href: "/opiniones", texto: "Opiniones" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-dorado/40 bg-crema/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-serif text-2xl text-pizarra">
          5J&apos;s
          <span className="ml-2 text-xs uppercase tracking-widest text-dorado">
            Repostería
          </span>
        </Link>

        {/* Menú móvil: <details> funciona sin JavaScript */}
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-pizarra px-3 py-1.5 text-sm text-pizarra">
            Menú
          </summary>
          <nav
            aria-label="Principal"
            className="absolute right-0 mt-2 flex w-56 flex-col rounded-lg border border-dorado/40 bg-crema p-2 shadow-md"
          >
            {enlaces.map((enlace) => (
              <Link
                key={enlace.href}
                href={enlace.href}
                className="rounded-md px-3 py-2 text-pizarra hover:bg-crema-oscuro"
              >
                {enlace.texto}
              </Link>
            ))}
          </nav>
        </details>

        <nav aria-label="Principal" className="hidden gap-5 md:flex">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="text-pizarra hover:text-dorado"
            >
              {enlace.texto}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

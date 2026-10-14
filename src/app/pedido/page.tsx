import type { Metadata } from "next";
import FormularioPedido from "@/components/FormularioPedido";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Hacer un pedido | 5J's Repostería Artesanal",
  description: "Completa el formulario y envía tu pedido de torta o postre por WhatsApp.",
};

export default function PedidoPage() {
  const nombresProductos = productos.map((p) => p.nombre);

  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-serif text-4xl text-pizarra">Hacer un pedido</h1>
      <p className="mt-2 mb-8 text-texto/80">
        Cuéntanos los detalles de tu evento. Al enviarlo, WhatsApp se abre con el mensaje listo para
        que lo confirmes.
      </p>
      <FormularioPedido nombresProductos={nombresProductos} />
    </section>
  );
}

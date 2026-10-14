"use client";

import { useState, type FormEvent } from "react";
import { enlaceWhatsApp } from "@/lib/whatsapp";
import {
  DIAS_ANTELACION,
  ZONAS_ENTREGA,
  mensajePedido,
  validarPedido,
  type DatosPedido,
  type ErroresPedido,
} from "@/lib/pedido";

const datosIniciales: DatosPedido = {
  fecha: "",
  tipo: "",
  sabor: "",
  personas: "",
  alergias: "",
  zona: "",
  referido: "",
};

const claseCampo =
  "mt-1 w-full rounded-md border border-pizarra/40 bg-white px-3 py-2 text-texto focus:border-pizarra focus:outline-none";

export default function FormularioPedido({ nombresProductos }: { nombresProductos: string[] }) {
  const [datos, setDatos] = useState<DatosPedido>(datosIniciales);
  const [errores, setErrores] = useState<ErroresPedido>({});

  function actualizar(campo: keyof DatosPedido, valor: string) {
    setDatos((anterior) => ({ ...anterior, [campo]: valor }));
  }

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const nuevosErrores = validarPedido(datos, new Date());
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    window.open(enlaceWhatsApp(mensajePedido(datos)), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={enviar} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="fecha" className="block font-medium text-pizarra">
          Fecha del evento *
        </label>
        <input
          id="fecha"
          type="date"
          value={datos.fecha}
          onChange={(e) => actualizar("fecha", e.target.value)}
          aria-invalid={Boolean(errores.fecha)}
          aria-describedby={errores.fecha ? "error-fecha" : "ayuda-fecha"}
          className={claseCampo}
        />
        <p id="ayuda-fecha" className="mt-1 text-sm text-texto/70">
          Necesitamos al menos {DIAS_ANTELACION} días de anticipación.
        </p>
        {errores.fecha && <p id="error-fecha" className="mt-1 text-sm text-red-700">{errores.fecha}</p>}
      </div>

      <div>
        <label htmlFor="tipo" className="block font-medium text-pizarra">
          Tipo de torta o postre *
        </label>
        <select
          id="tipo"
          value={datos.tipo}
          onChange={(e) => actualizar("tipo", e.target.value)}
          aria-invalid={Boolean(errores.tipo)}
          aria-describedby={errores.tipo ? "error-tipo" : undefined}
          className={claseCampo}
        >
          <option value="">Elige una opción</option>
          {nombresProductos.map((nombre) => (
            <option key={nombre} value={nombre}>
              {nombre}
            </option>
          ))}
          <option value="Otra (consultar con Julia)">Otra (consultar con Julia)</option>
        </select>
        {errores.tipo && <p id="error-tipo" className="mt-1 text-sm text-red-700">{errores.tipo}</p>}
      </div>

      <div>
        <label htmlFor="sabor" className="block font-medium text-pizarra">
          Sabor o relleno
        </label>
        <input
          id="sabor"
          type="text"
          value={datos.sabor}
          onChange={(e) => actualizar("sabor", e.target.value)}
          className={claseCampo}
        />
      </div>

      <div>
        <label htmlFor="personas" className="block font-medium text-pizarra">
          Número de personas *
        </label>
        <input
          id="personas"
          type="number"
          inputMode="numeric"
          min={1}
          value={datos.personas}
          onChange={(e) => actualizar("personas", e.target.value)}
          aria-invalid={Boolean(errores.personas)}
          aria-describedby={errores.personas ? "error-personas" : undefined}
          className={claseCampo}
        />
        {errores.personas && (
          <p id="error-personas" className="mt-1 text-sm text-red-700">{errores.personas}</p>
        )}
      </div>

      <div>
        <label htmlFor="alergias" className="block font-medium text-pizarra">
          Alergias o restricciones
        </label>
        <textarea
          id="alergias"
          rows={3}
          value={datos.alergias}
          onChange={(e) => actualizar("alergias", e.target.value)}
          className={claseCampo}
        />
      </div>

      <fieldset>
        <legend className="font-medium text-pizarra">Entrega *</legend>
        <div className="mt-2 flex flex-col gap-2">
          {ZONAS_ENTREGA.map((zona) => (
            <label key={zona} className="flex items-start gap-2 text-texto">
              <input
                type="radio"
                name="zona"
                value={zona}
                checked={datos.zona === zona}
                onChange={(e) => actualizar("zona", e.target.value)}
                className="mt-1"
              />
              {zona}
            </label>
          ))}
        </div>
        {errores.zona && <p className="mt-1 text-sm text-red-700">{errores.zona}</p>}
      </fieldset>

      <div>
        <label htmlFor="referido" className="block font-medium text-pizarra">
          Código de referido (si alguien te recomendó)
        </label>
        <input
          id="referido"
          type="text"
          value={datos.referido}
          onChange={(e) => actualizar("referido", e.target.value)}
          className={claseCampo}
        />
      </div>

      <p className="text-sm text-texto/70">
        Al enviar, se abre WhatsApp con tu pedido escrito. Tus datos no se guardan en esta página.
      </p>

      <button
        type="submit"
        className="self-start rounded-full bg-pizarra px-6 py-3 font-medium text-crema hover:bg-pizarra-oscuro"
      >
        Enviar pedido por WhatsApp
      </button>
    </form>
  );
}

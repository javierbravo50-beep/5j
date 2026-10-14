# Plan del proyecto: Sitio web de 5J's Repostería Artesanal

Fecha del plan: 14 de octubre de 2026

---

## 1. Nombre del proyecto

**5J's Repostería Artesanal — Catálogo web con pedidos por WhatsApp, comentarios verificados y panel de administración**

---

## 2. Qué es y para quién es

Una página web para el emprendimiento de repostería de Julia (Bogotá): un catálogo de tortas y postres ya elaborados, con ficha por producto (foto, descripción e ingredientes), contacto directo por WhatsApp y opiniones de clientes que realmente compraron.
Está dirigida a personas de Bogotá y alrededores (al inicio familiares, amigos y referidos) que buscan una torta o un postre para un evento social. Debe transmitir calma, cuidado y calidad superior.

---

## 3. Funciones principales

**Página pública**
- Inicio con mensaje de marca, fotos destacadas y un botón claro para pedir.
- Catálogo organizado por ocasión (cumpleaños, bautizos y celebraciones religiosas, Navidad, etc.), con filtro simple.
- Ficha de producto: al tocar la foto se abre la descripción y los ingredientes.
- Formulario corto de pedido (fecha del evento, tipo de torta, número de personas, sabor, alergias, zona de entrega) que abre WhatsApp con el mensaje ya redactado.
- Sección "Nuestra historia": el texto de Julia sobre los cinco nombres.
- Información de entrega: domicilio dentro de la zona norte de Bogotá (lo cubre Julia), fuera de la zona (lo cubre el cliente) y recogida. Aviso de 7 días de antelación y de capacidad limitada por semana.
- Opiniones de clientes con foto opcional.
- Referidos: cada cliente recibe un código personal; el amigo lo menciona al pedir por WhatsApp.
- Botón al perfil de Instagram (@5jsreposteria).
- Aviso de privacidad y autorización de publicación en los comentarios.

**Comentarios**
- Julia envía al cliente, después de entregar el pedido, un enlace personal y de un solo uso (con mensaje de WhatsApp ya redactado para copiar y pegar).
- El cliente indica qué pidió, para qué evento y qué le gustó más, y puede subir una foto (opcional).
- El cliente marca una casilla de autorización para publicar su opinión y su foto.
- Nada se publica hasta que Julia lo aprueba.

**Panel privado de Julia (con clave, pensado para computador)**
- Agregar, editar y ocultar productos (foto, nombre, categoría, descripción, ingredientes).
- Generar el enlace de opinión para cada cliente.
- Aprobar o rechazar comentarios y fotos (esta acción también debe funcionar bien desde el celular).
- Registrar códigos de referidos y su uso.

---

## 4. Qué se construye PRIMERO (versión mínima funcional)

**Fase 1: página pública sin base de datos.**
- Inicio, catálogo por ocasión, fichas de producto, historia de Julia, información de entrega y capacidad, botón a Instagram.
- Formulario de pedido que abre WhatsApp con el mensaje armado.
- Aviso de privacidad básico.
- Diseño sobrio con la paleta del logo (azul pizarra, crema y dorado), pensado primero para celular.
- Los productos viven en un archivo de datos dentro del proyecto (sin panel todavía).

**Por qué esto primero:**
1. Es lo que permite que Julia reciba pedidos mejor organizados desde ya.
2. No necesita servidor ni base de datos, así que es más barato, más rápido y tiene menos riesgos de seguridad.
3. Con 10 a 15 productos, un archivo de datos alcanza para arrancar.
4. Valida lo importante antes de invertir más: si los clientes entran, usan el formulario y piden.
5. Lo difícil de la fase 1 no es técnico: son las descripciones, los ingredientes y las fotos. Empezar ya da tiempo para reunirlos.

**Limitación honesta de esta fase:** mientras no exista el panel, cualquier cambio en el catálogo lo hace quien construye la página, no Julia. Por eso el panel es la fase 2 y no un extra lejano.

---

## 5. Qué va DESPUÉS

**Fase 2: panel de administración y base de datos**
- Inicio de sesión para Julia.
- Gestión de productos desde el panel (reemplaza el archivo de datos).

**Fase 3: comentarios verificados**
- Enlaces personales de un solo uso con vencimiento.
- Formulario de opinión guiado (qué pidió, para qué evento, qué le gustó) con foto opcional y casilla de autorización.
- Cola de aprobación en el panel; solo se publica lo aprobado.

**Fase 4: referidos**
- Códigos personales por cliente y registro manual de su uso en el panel.

**Fase 5: mejoras**
- "Desde $X" por producto (precios), cuando Julia lo decida.
- Calificación con estrellas en los comentarios (decisión pendiente).
- Mostrar fotos del Instagram (con botón al perfil como alternativa más estable).
- Compra directa con carrito y pagos en línea (la estructura queda preparada para esto).
- Definir la zona de cobertura por barrios o localidades en un mapa o lista.

---

## 6. Tecnologías recomendadas

| Necesidad | Recomendación | Razón |
|---|---|---|
| Sitio web | Next.js (React) con Tailwind CSS | Rápido en celular, buen posicionamiento en buscadores, crece hacia compra directa. |
| Base de datos, login y almacenamiento de fotos | Supabase | Una sola herramienta para productos, comentarios, login de Julia y fotos subidas. Tiene plan gratuito. |
| Publicación | Vercel (o similar) | Plan gratuito suficiente para empezar; se publica desde el código. |
| Dominio | Registrador a nombre de Julia (por ejemplo 5jsreposteria.com, si está libre) | Es lo único que se pierde si alguien más lo toma. |
| Pedidos | Enlace de WhatsApp con mensaje prellenado (wa.me/573014671591) | No requiere servidor. |

**Advertencias importantes:**
- Un hosting compartido "básico" tradicional (de los que se administran con cPanel) normalmente no sirve para esta tecnología. Conviene comprar solo el dominio y usar el hosting gratuito de la lista, o cambiar de tecnología si insisten en ese tipo de plan. **No compren el hosting antes de confirmar esto.**
- Los límites y precios de los planes gratuitos cambian; hay que verificarlos al momento de contratar, sobre todo el límite de almacenamiento de fotos.
- Alternativa más simple, con otras limitaciones: WordPress. Es más fácil de administrar, pero el flujo de comentarios con enlace de un solo uso y el panel a la medida costarían más trabajo o más complementos.

**Seguridad y datos personales (revisar con alguien de confianza o un abogado):**
- Se guardarán nombres, comentarios y fotos de clientes en Colombia, así que aplica la normativa de protección de datos personales (Ley 1581 de 2012). Se necesita aviso de privacidad y autorización expresa para publicar.
- Los enlaces de comentarios deben ser únicos, de un solo uso y con vencimiento.
- Las fotos subidas se revisan antes de mostrarse y se limita su tamaño y formato.
- El panel debe usar una clave fuerte y, si es posible, verificación en dos pasos.

---

## 7. Estructura de archivos sugerida

```
5js-reposteria/
├── README.md
├── package.json
├── .env.local                  (claves; nunca se sube al repositorio)
├── public/
│   ├── logo/                   (logo original en buena resolución)
│   └── productos/              (fotos del catálogo)
├── src/
│   ├── app/
│   │   ├── page.tsx            (inicio)
│   │   ├── catalogo/
│   │   │   ├── page.tsx        (catálogo por ocasión)
│   │   │   └── [slug]/page.tsx (ficha de producto)
│   │   ├── pedido/page.tsx     (formulario que abre WhatsApp)
│   │   ├── nuestra-historia/page.tsx
│   │   ├── entregas/page.tsx   (cobertura, recogida, antelación, capacidad)
│   │   ├── opiniones/
│   │   │   ├── page.tsx        (opiniones aprobadas)
│   │   │   └── [token]/page.tsx (formulario con enlace personal)
│   │   ├── privacidad/page.tsx
│   │   └── admin/              (fase 2 en adelante)
│   │       ├── login/page.tsx
│   │       ├── productos/page.tsx
│   │       ├── comentarios/page.tsx
│   │       ├── enlaces/page.tsx
│   │       └── referidos/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductoCard.tsx
│   │   ├── ProductoModal.tsx
│   │   ├── FormularioPedido.tsx
│   │   └── BotonWhatsApp.tsx
│   ├── data/
│   │   └── productos.ts        (fase 1: catálogo en archivo; luego pasa a Supabase)
│   ├── lib/
│   │   ├── whatsapp.ts         (arma el mensaje prellenado)
│   │   ├── supabase.ts
│   │   └── tokens.ts           (enlaces de un solo uso)
│   └── styles/
│       └── globals.css         (colores: azul pizarra, crema, dorado)
└── docs/
    ├── plantilla-producto.md   (ficha para que Julia llene cada producto)
    └── mensaje-whatsapp-opinion.md (texto para copiar y pegar al cliente)
```

---

## Decisiones ya tomadas

- Catálogo sin precios por ahora.
- Pedido por WhatsApp; compra directa para más adelante.
- Comentarios solo con enlace personal tras la entrega, aprobados por Julia, con foto opcional.
- Referidos manuales al inicio.
- Panel de administración pensado para computador, con aprobación de comentarios usable desde el celular.
- Hosting y dominio básicos.
- Entrega a domicilio en la zona norte de Bogotá (la cubre Julia) y recogida; fuera de la zona, el domicilio lo paga el cliente.

## Pendientes (los define Julia o ustedes)

- [ ] Logo en archivo original y buena resolución.
- [ ] Fotos mejoradas (luz natural, fondo limpio) de los productos principales.
- [ ] Descripción e ingredientes reales de cada producto (solo ella puede darlos).
- [ ] Zona de cobertura definida por barrios o localidades.
- [ ] Cuántas tortas puede hacer por semana (para el aviso de capacidad).
- [ ] Confirmar si el dominio deseado está disponible y comprarlo a nombre de Julia.
- [ ] Decidir si los comentarios llevan estrellas.
- [ ] Decidir qué beneficio recibe quien refiere a otro cliente.
- [ ] Revisar el aviso de privacidad y la autorización de publicación.
- [ ] Definir si aparecen los nombres de los cinco en la página o solo la idea de los cinco.
- [ ] Estrategia para que las primeras opiniones sean específicas y no solo "todo muy rico".

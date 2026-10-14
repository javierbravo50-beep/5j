// Catálogo de la Fase 1.
// Los productos marcados con esEjemplo: true son datos de prueba.
// Reemplazar por el contenido real de Julia antes de publicar.

export type OcasionSlug = "cumpleanos" | "bautizos-celebraciones" | "navidad";

export const OCASIONES: { slug: OcasionSlug; nombre: string }[] = [
  { slug: "cumpleanos", nombre: "Cumpleaños" },
  { slug: "bautizos-celebraciones", nombre: "Bautizos y celebraciones religiosas" },
  { slug: "navidad", nombre: "Navidad" },
];

export interface Producto {
  slug: string;
  nombre: string;
  tipo: "torta" | "postre";
  ocasiones: OcasionSlug[];
  descripcion: string;
  ingredientes: string[];
  foto: string;
  esEjemplo: boolean;
}

const FOTO_PROVISIONAL = "/productos/placeholder.svg";

export const productos: Producto[] = [
  {
    slug: "torta-chocolate-frambuesa",
    nombre: "Torta de chocolate y frambuesa",
    tipo: "torta",
    ocasiones: ["cumpleanos"],
    descripcion: "Bizcocho húmedo de cacao con relleno de frambuesa.",
    ingredientes: ["Harina", "Cacao", "Huevos", "Frambuesa", "Crema de chocolate"],
    foto: FOTO_PROVISIONAL,
    esEjemplo: true,
  },
  {
    slug: "torta-vainilla-crema",
    nombre: "Torta de vainilla con crema",
    tipo: "torta",
    ocasiones: ["cumpleanos", "bautizos-celebraciones"],
    descripcion: "Vainilla suave con crema de mantequilla y un toque de almíbar.",
    ingredientes: ["Harina", "Vainilla", "Mantequilla", "Azúcar", "Huevos"],
    foto: FOTO_PROVISIONAL,
    esEjemplo: true,
  },
  {
    slug: "torta-tres-leches",
    nombre: "Torta de tres leches",
    tipo: "torta",
    ocasiones: ["cumpleanos", "bautizos-celebraciones"],
    descripcion: "Bizcocho empapado en tres leches, cubierto con crema batida.",
    ingredientes: ["Harina", "Huevos", "Leche", "Leche condensada", "Crema de leche"],
    foto: FOTO_PROVISIONAL,
    esEjemplo: true,
  },
  {
    slug: "torta-frutas-bautizo",
    nombre: "Torta de frutas para bautizo",
    tipo: "torta",
    ocasiones: ["bautizos-celebraciones"],
    descripcion: "Torta clara con frutas frescas de temporada.",
    ingredientes: ["Harina", "Huevos", "Crema de leche", "Frutas de temporada"],
    foto: FOTO_PROVISIONAL,
    esEjemplo: true,
  },
  {
    slug: "mini-cheesecakes-maracuya",
    nombre: "Mini cheesecakes de maracuyá",
    tipo: "postre",
    ocasiones: ["cumpleanos", "navidad"],
    descripcion: "Base de galleta y cremoso de queso con cobertura de maracuyá.",
    ingredientes: ["Galleta", "Queso crema", "Azúcar", "Huevos", "Maracuyá"],
    foto: FOTO_PROVISIONAL,
    esEjemplo: true,
  },
  {
    slug: "galletas-navidenas",
    nombre: "Galletas navideñas decoradas",
    tipo: "postre",
    ocasiones: ["navidad"],
    descripcion: "Galletas de mantequilla decoradas a mano en temporada navideña.",
    ingredientes: ["Harina", "Mantequilla", "Azúcar", "Huevo", "Glasé"],
    foto: FOTO_PROVISIONAL,
    esEjemplo: true,
  },
];

// ============================================================
// CONFIGURACIÓN GLOBAL DEL SITIO
// Editar estas variables para personalizar el sitio
// ============================================================

export const SITE = {
  /** Nombre de la tienda */
  name: "Joyería Salomé",
  /** Eslogan que aparece debajo del nombre */
  tagline: "Joyería de Acero Inoxidable | Quito, Ecuador",
  /** Descripción para SEO (meta description de la página principal) */
  description: "Joyería de acero inoxidable quirúrgico 316L en Quito, Ecuador. Collares, anillos, aretes y pulseras que no se oxidan, no se ennegrecen y duran años. Joyas resistentes al agua de buena calidad.",
  /** URL del sitio — debe coincidir con astro.config.mjs */
  url: "https://joyeriasalome.site",
  /** Número de WhatsApp en formato internacional SIN + ni espacios */
  phone: "593996796114",
  /** ID de Google Analytics — dejar vacío si no tienes */
  analytics: "",
  /** Datos de ubicación */
  city: "Quito",
  country: "Ecuador",
  locale: "es_EC",
  currency: "USD",
  /** Imagen por defecto para Open Graph (ruta relativa a /public) */
  ogImage: "/og-default.jpg",
};

// ============================================================
// MENSAJES DE WHATSAPP POR PÁGINA
// ============================================================
export const WA_MESSAGES = {
  general:  "Hola, vi su catálogo de joyería de acero inoxidable y me interesa un producto. ¿Me pueden dar más información?",
  collares: "Hola, estaba viendo sus collares de acero inoxidable y quisiera saber más sobre alguno. ¿Tienen disponibilidad?",
  anillos:  "Hola, vi sus anillos de acero inoxidable en la web y me gustaría consultar sobre uno. ¿Tienen stock?",
  aretes:   "Hola, me interesaron sus aretes de acero inoxidable. ¿Podrían contarme más sobre los materiales y precios?",
  pulseras: "Hola, vi sus pulseras de acero inoxidable y quisiera consultar sobre disponibilidad y precios.",
  nosotros: "Hola, vi su página de Joyería Salomé y quisiera ponerme en contacto con ustedes.",
  contacto: "Hola, me gustaría obtener más información sobre la joyería de acero inoxidable que ofrecen.",
};

// ============================================================
// CATEGORÍAS
// ============================================================
export const CATEGORIAS = [
  {
    slug: "collares",
    nombre: "Collares",
    descripcion: "Collares de acero inoxidable quirúrgico 316L en Quito, Ecuador. Diseños elegantes que no se oxidan ni pierden el brillo.",
    imagen: "/images/og-collares.jpg",
  },
  {
    slug: "anillos",
    nombre: "Anillos",
    descripcion: "Anillos de acero inoxidable en Quito. No se ennegrecen, no se oxidan y mantienen su color por años.",
    imagen: "/images/og-anillos.jpg",
  },
  {
    slug: "aretes",
    nombre: "Aretes",
    descripcion: "Aretes y pendientes de acero inoxidable en Quito, Ecuador. Modelos colgantes, argollas y más que duran años.",
    imagen: "/images/og-aretes.jpg",
  },
  {
    slug: "pulseras",
    nombre: "Pulseras",
    descripcion: "Pulseras de acero inoxidable en Quito. Resistentes al agua, no se oxidan y mantienen su brillo original.",
    imagen: "/images/og-pulseras.jpg",
  },
];

// ============================================================
// CONFIGURACIÓN GLOBAL DEL SITIO
// Editar estas variables para personalizar el sitio
// ============================================================

export const SITE = {
  /** Nombre de la tienda — dejar vacío si aún no tienes */
  name: "",
  /** Eslogan que aparece debajo del nombre */
  tagline: "Bisutería y Accesorios | Quito, Ecuador",
  /** Descripción para SEO (meta description de la página principal) */
  description: "Descubre nuestra colección de bisutería y accesorios en Quito, Ecuador. Collares, anillos, aretes y pulseras de moda. Consulta por WhatsApp.",
  /** URL del sitio — debe coincidir con astro.config.mjs */
  url: "https://tusitio.com",
  /** Número de WhatsApp en formato internacional SIN + ni espacios */
  phone: "",
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
// Permiten identificar de qué página proviene el cliente
// ============================================================
export const WA_MESSAGES = {
  general:  "Hola, me interesa un producto de su catálogo. ¿Me pueden dar más información?",
  collares: "Hola, estaba viendo sus collares y quisiera saber más sobre alguno. ¿Tienen disponibilidad?",
  anillos:  "Hola, vi sus anillos en la web y me gustaría consultar sobre uno. ¿Tienen stock?",
  aretes:   "Hola, me interesaron sus aretes. ¿Podrían contarme más sobre los materiales y precios?",
  pulseras: "Hola, vi sus pulseras y quisiera consultar sobre disponibilidad y precios.",
  nosotros: "Hola, ví su página y quisiera ponerme en contacto con ustedes.",
  contacto: "Hola, me gustaría obtener más información sobre su tienda y productos.",
};

// ============================================================
// CATEGORÍAS
// ============================================================
export const CATEGORIAS = [
  {
    slug: "collares",
    nombre: "Collares",
    descripcion: "Collares de bisutería de moda en Quito, Ecuador. Diseños elegantes y modernos para toda ocasión.",
    imagen: "/images/og-collares.jpg",
  },
  {
    slug: "anillos",
    nombre: "Anillos",
    descripcion: "Anillos de bisutería y accesorios en Quito. Amplia variedad de estilos para complementar tu look.",
    imagen: "/images/og-anillos.jpg",
  },
  {
    slug: "aretes",
    nombre: "Aretes",
    descripcion: "Aretes y pendientes de bisutería en Quito, Ecuador. Modelos colgantes, argollas y más.",
    imagen: "/images/og-aretes.jpg",
  },
  {
    slug: "pulseras",
    nombre: "Pulseras",
    descripcion: "Pulseras de bisutería y accesorios en Quito. Diseños únicos para cada estilo.",
    imagen: "/images/og-pulseras.jpg",
  },
];

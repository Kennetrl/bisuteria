import { SITE } from '../config/site.ts';

const pages = [
  { url: '/',          priority: '1.0', changefreq: 'weekly'  },
  { url: '/collares',  priority: '0.9', changefreq: 'weekly'  },
  { url: '/anillos',   priority: '0.9', changefreq: 'weekly'  },
  { url: '/aretes',    priority: '0.9', changefreq: 'weekly'  },
  { url: '/pulseras',  priority: '0.9', changefreq: 'weekly'  },
  { url: '/nosotros',  priority: '0.6', changefreq: 'monthly' },
  { url: '/contacto',  priority: '0.7', changefreq: 'monthly' },
];

const date = new Date().toISOString().split('T')[0];
const base = SITE.url.replace(/\/$/, '');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${base}${p.url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

export function GET() {
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

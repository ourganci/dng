// sitemap-generator.ts (im root)
import { CITY_CONFIG } from './app/features/city/city.config';
import { writeFileSync } from 'fs';

const BASE_URL = 'https://www.dng-nahe-glan.de';

const SERVICES = [
  'dachsanierung',
  'dachfenster',
  'dachreparatur',
  'regenrinnen',
  'flachdachpruefung',
  'photovoltaik',
  'pv-indach',
  'hallenbeleuchtung'
];

const STATIC_PAGES = [
  '',
  'leistungen',
  'ueber-uns',
  'kontakt',
  'impressum',
  'datenschutz'
];

function generateSitemap() {
  const urls: string[] = [];

  // Statische Seiten
  STATIC_PAGES.forEach(page => {
    urls.push(`${BASE_URL}/${page}`);
  });

  // Service-Seiten ohne Stadt
  SERVICES.forEach(service => {
    urls.push(`${BASE_URL}/leistungen/${service}`);
  });

  // Service-Seiten mit Stadt (alle Kombinationen)
  SERVICES.forEach(service => {
    Object.keys(CITY_CONFIG).forEach(cityKey => {
      urls.push(`${BASE_URL}/leistungen/${service}/${cityKey}`);
    });
  });

  // XML generieren
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === BASE_URL ? '1.0' : url.includes('/leistungen/') && !url.split('/').pop()?.includes('-') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  writeFileSync('./src/sitemap.xml', xml);
  console.log(`✅ Sitemap generiert mit ${urls.length} URLs`);
}

generateSitemap();

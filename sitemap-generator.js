// sitemap-generator.js (im Root-Verzeichnis)
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.dng-nahe-glan.de';

// City-Config direkt hier (kein Import!)
const CITY_CONFIG = {
  'bad-kreuznach': { name: 'Bad Kreuznach', region: 'Nahe-Glan' },
  'mainz': { name: 'Mainz', region: 'Rheinhessen' },
  'kaiserslautern': { name: 'Kaiserslautern', region: 'Westpfalz' },
  'bingen': { name: 'Bingen am Rhein', region: 'Rhein-Nahe' },
  'kirn': { name: 'Kirn', region: 'Nahe-Glan' },
  'idar-oberstein': { name: 'Idar-Oberstein', region: 'Nahe-Glan' },
  'birkenfeld': { name: 'Birkenfeld', region: 'Nahe-Glan' },
  'meisenheim': { name: 'Meisenheim', region: 'Nahe-Glan' },
  'sobernheim': { name: 'Sobernheim', region: 'Naheland' },
  'wiesbaden': { name: 'Wiesbaden', region: 'Rhein-Main' },
  'ingelheim': { name: 'Ingelheim am Rhein', region: 'Rheinhessen' },
  'alzey': { name: 'Alzey', region: 'Rheinhessen' },
  'worms': { name: 'Worms', region: 'Rheinhessen' },
  'worrstadt': { name: 'Wörrstadt', region: 'Rheinhessen' },
  'zweibruecken': { name: 'Zweibrücken', region: 'Westpfalz' },
  'pirmasens': { name: 'Pirmasens', region: 'Westpfalz' },
  'kirchheimbolanden': { name: 'Kirchheimbolanden', region: 'Donnersbergkreis' },
  'rockenhausen': { name: 'Rockenhausen', region: 'Donnersbergkreis' },
  'ludwigshafen': { name: 'Ludwigshafen', region: 'Vorderpfalz' },
  'neustadt': { name: 'Neustadt an der Weinstraße', region: 'Weinstraße' },
  'speyer': { name: 'Speyer', region: 'Vorderpfalz' },
  'landau': { name: 'Landau in der Pfalz', region: 'Südpfalz' },
  'bad-duerkheim': { name: 'Bad Dürkheim', region: 'Weinstraße' },
  'simmern': { name: 'Simmern', region: 'Hunsrück' },
  'koblenz': { name: 'Koblenz', region: 'Mittelrhein' },
  'trier': { name: 'Trier', region: 'Moseltal' },
  'saarbruecken': { name: 'Saarbrücken', region: 'Saarland' },
  'homburg': { name: 'Homburg', region: 'Saarpfalz' },
  'st-wendel': { name: 'St. Wendel', region: 'Saarland' }
};

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
  'datenschutz',
  'agb'
];

function generateSitemap() {
  const urls = [];
  const today = new Date().toISOString().split('T')[0];

  // Statische Seiten
  STATIC_PAGES.forEach(page => {
    const priority = page === '' ? '1.0' : '0.8';
    urls.push({
      loc: `${BASE_URL}/${page}`,
      lastmod: today,
      changefreq: 'monthly',
      priority
    });
  });

  // Service-Seiten ohne Stadt
  SERVICES.forEach(service => {
    urls.push({
      loc: `${BASE_URL}/leistungen/${service}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  // Service-Seiten mit Stadt
  SERVICES.forEach(service => {
    Object.keys(CITY_CONFIG).forEach(cityKey => {
      urls.push({
        loc: `${BASE_URL}/leistungen/${service}/${cityKey}`,
        lastmod: today,
        changefreq: 'monthly',
        priority: '0.6'
      });
    });
  });

  // XML generieren
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Stelle sicher, dass der public-Ordner existiert
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Sitemap speichern
  const outputPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  
  console.log(`\n✅ Sitemap erfolgreich generiert!`);
  console.log(`📊 Anzahl URLs: ${urls.length}`);
  console.log(`📍 Gespeichert unter: ${outputPath}\n`);
}

generateSitemap();

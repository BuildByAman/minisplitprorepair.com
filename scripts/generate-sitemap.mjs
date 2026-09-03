// scripts/generate-sitemap.mjs
// Generates a master sitemap.xml (Sitemap Index) + sitemap-core.xml + sitemap-[state].xml
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
const states = require('../data/states.js').default;
const services = require('../data/services.js').default;

const DOMAIN = 'https://minisplitprorepair.com';
const today = new Date().toISOString().split('T')[0];

const publicDir = path.join(process.cwd(), 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

console.log('🚀 Generating Split Sitemap Index & State Sitemaps...\n');

// 1. Generate sitemap-core.xml
const coreUrls = [
  `  <url>\n    <loc>${DOMAIN}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
  `  <url>\n    <loc>${DOMAIN}/about/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
  `  <url>\n    <loc>${DOMAIN}/contact/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
  `  <url>\n    <loc>${DOMAIN}/services/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`,
  `  <url>\n    <loc>${DOMAIN}/privacy-policy/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n  </url>`,
  `  <url>\n    <loc>${DOMAIN}/terms/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n  </url>`
];

services.forEach(svc => {
  coreUrls.push(
    `  <url>\n    <loc>${DOMAIN}/services/${svc.slug}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`
  );
});

const coreXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${coreUrls.join('\n')}
</urlset>`;

writeFileSync(path.join(publicDir, 'sitemap-core.xml'), coreXml, 'utf8');
console.log(`✓ Generated sitemap-core.xml (${coreUrls.length} URLs)`);

// 2. Generate per-state sitemaps: sitemap-[state].xml
const sitemapIndexEntries = [
  `  <sitemap>\n    <loc>${DOMAIN}/sitemap-core.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`
];

let totalStateUrls = 0;

states.forEach(state => {
  const stateUrls = [];
  
  // State root URL
  stateUrls.push(
    `  <url>\n    <loc>${DOMAIN}/${state.slug}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  );
  
  // City URLs for this state
  if (state.cities && Array.isArray(state.cities)) {
    state.cities.forEach(city => {
      stateUrls.push(
        `  <url>\n    <loc>${DOMAIN}/${state.slug}/${city.slug}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
      );
    });
  }

  totalStateUrls += stateUrls.length;

  const stateXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${stateUrls.join('\n')}
</urlset>`;

  writeFileSync(path.join(publicDir, `sitemap-${state.slug}.xml`), stateXml, 'utf8');

  // Add to index
  sitemapIndexEntries.push(
    `  <sitemap>\n    <loc>${DOMAIN}/sitemap-${state.slug}.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`
  );
});

console.log(`✓ Generated ${states.length} state sitemaps (${totalStateUrls} state & city URLs)`);

// 3. Generate master sitemap.xml (Sitemap Index)
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapIndexEntries.join('\n')}
</sitemapindex>`;

writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndexXml, 'utf8');
console.log(`\n🎉 Generated master sitemap.xml index with ${sitemapIndexEntries.length} sitemaps containing ${coreUrls.length + totalStateUrls} total URLs!\n`);

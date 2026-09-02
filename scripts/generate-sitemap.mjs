// scripts/generate-sitemap.mjs
// Run after `next build` to produce public/sitemap.xml
import { writeFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const states = require('../data/states.js').default;
const services = require('../data/services.js').default;

const DOMAIN = 'https://minisplitprorepair.com';
const today = new Date().toISOString().split('T')[0];

const urls = [];

// Static pages
const staticPages = ['', 'about', 'contact', 'services', 'privacy-policy', 'terms'];
staticPages.forEach(page => {
  urls.push(`  <url><loc>${DOMAIN}/${page ? page + '/' : ''}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${page === '' ? '1.0' : '0.8'}</priority></url>`);
});

// Service pages
services.forEach(svc => {
  urls.push(`  <url><loc>${DOMAIN}/services/${svc.slug}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
});

// State & City pages
states.forEach(state => {
  urls.push(`  <url><loc>${DOMAIN}/${state.slug}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  
  if (state.cities && Array.isArray(state.cities)) {
    state.cities.forEach(city => {
      urls.push(`  <url><loc>${DOMAIN}/${state.slug}/${city.slug}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
    });
  }
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

writeFileSync('./public/sitemap.xml', xml, 'utf8');
console.log(`✓ Sitemap generated with ${urls.length} URLs`);

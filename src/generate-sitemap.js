// const sitemap = require('sitemap');
// const fs = require('fs');

// const serviceIds = ['unity', 'unreal'];
// const bonusIds = ['game-vs-game-engine', 'unity-vs-unreal'];

// const urls = [
//   { url: '/', changefreq: 'daily', priority: 1 },
//   { url: '/services', changefreq: 'weekly', priority: 0.8 },
//   ...serviceIds.map(id => ({ url: `/services/${id}`, changefreq: 'weekly', priority: 0.7 })),
//   { url: '/bonus', changefreq: 'weekly', priority: 0.8 },
//   ...bonusIds.map(id => ({ url: `/bonus/${id}`, changefreq: 'weekly', priority: 0.7 })),
//   { url: '/faq', changefreq: 'monthly', priority: 0.5 },
//   { url: '/book', changefreq: 'monthly', priority: 0.5 },
//   { url: '/about', changefreq: 'monthly', priority: 0.5 },
//   { url: '/nfc', changefreq: 'monthly', priority: 0.5 },
//   { url: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
// ];

// const sitemapInstance = sitemap.createSitemap({
//   hostname: 'https://www.guildofbeginnings.com',
//   urls: urls,
// });

// fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());

// @ts-check
import { defineConfig } from 'astro/config';
import { resolve } from 'path';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://konopelko.com/',
  base: '/',
  trailingSlash: 'always',
    redirects: {
          // Исправление одной буквы в адресе статьи (y -> j)
    '/articles/lovushki-finskoy-shkoly/': '/articles/lovushki-finskoj-shkoly/',

    // Русскоязычные страницы переводчика -> в новый раздел /translation/
    '/apostille-ru.html': '/translation/apostille/',
    '/certification-ru.html': '/translation/certification/',
    '/contacts-ru.html': '/translation/contact/',
    '/cv-ru.html': '/translation/',
    '/interpreting-ru.html': '/translation/interpreting/',
    '/translation-ru.html': '/translation/written/',
    '/price-ru.html': '/translation/price/',
    '/questions-ru.html': '/translation/faq/',
    '/notes-ru.html': '/articles/?cat=translation',
    '/map-ru.html': '/translation/',

    // Старые страницы обучения на основном домене -> в корень /
    '/teaching.html': '/',
    '/teaching-Kristina.html': '/',
    '/teaching-ru.Irina.html': '/',

  // Финские страницы
'/index-fi.html': '/translation/fi/',
'/contacts-fi.html': '/translation/fi/contact/',
'/cv-fi.html': '/translation/fi/',
'/interpreting-fi.html': '/translation/fi/interpreting/',
'/translation-fi.html': '/translation/fi/written/',
'/questions-fi.html': '/translation/fi/faq/',
'/toimeksiannot-fi.html': '/translation/fi/assignments/',

// Английские страницы
'/index-en.html': '/translation/en/',
'/contacts-en.html': '/translation/en/contact/',
'/interpreting-en.html': '/translation/en/interpreting/',
'/translation-en.html': '/translation/en/written/',
'/price-en.html': '/translation/en/price/',


  },

  vite: {
    resolve: {
      alias: {
        '@assets': resolve('./src/assets'),
        '@scripts': resolve('./src/scripts'),
      },
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  integrations: [react(), sitemap()],
  output: 'static',
});
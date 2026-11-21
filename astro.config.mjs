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

    // Временные редиректы для EN и FI версий -> на главную раздела переводов
    '/index-en.html': '/translation/',
    '/contacts-en.html': '/translation/contact/',
    '/interpreting-en.html': '/translation/interpreting/',
    '/translation-en.html': '/translation/written/',
    '/price-en.html': '/translation/price/',

    '/index-fi.html': '/translation/',
    '/contacts-fi.html': '/translation/contact/',
    '/cv-fi.html': '/translation/',
    '/interpreting-fi.html': '/translation/interpreting/',
    '/translation-fi.html': '/translation/written/',
    '/questions-fi.html': '/translation/faq/',
    '/toimeksiannot-fi.html': '/translation/',

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
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
    '/apostille-ru/': '/translation/apostille/',

    '/certification-ru.html': '/translation/certification/',
    '/certification-ru/': '/translation/certification/',

    '/contacts-ru.html': '/translation/contact/',
    '/contacts-ru/': '/translation/contact/',

    '/cv-ru.html': '/translation/',
    '/cv-ru/': '/translation/',

    '/interpreting-ru.html': '/translation/interpreting/',
    '/interpreting-ru/': '/translation/interpreting/',

    '/translation-ru.html': '/translation/written/',
    '/translation-ru/': '/translation/written/',

    '/price-ru.html': '/translation/price/',
    '/price-ru/': '/translation/price/',

    '/questions-ru.html': '/translation/faq/',
    '/questions-ru/': '/translation/faq/',

    '/notes-ru.html': '/articles/?cat=translation',
    '/notes-ru/': '/articles/?cat=translation',

    '/map-ru.html': '/translation/',
    '/map-ru/': '/translation/',

    // Финские страницы
    '/index-fi.html': '/translation/fi/',
    '/index-fi/': '/translation/fi/',

    '/contacts-fi.html': '/translation/fi/contact/',
    '/contacts-fi/': '/translation/fi/contact/',

    '/cv-fi.html': '/translation/fi/',
    '/cv-fi/': '/translation/fi/',

    '/interpreting-fi.html': '/translation/fi/interpreting/',
    '/interpreting-fi/': '/translation/fi/interpreting/',

    '/translation-fi.html': '/translation/fi/written/',
    '/translation-fi/': '/translation/fi/written/',

    '/questions-fi.html': '/translation/fi/faq/',
    '/questions-fi/': '/translation/fi/faq/',

    '/toimeksiannot-fi.html': '/translation/fi/assignments/',
    '/toimeksiannot-fi/': '/translation/fi/assignments/',

    // Английские страницы
    '/index-en.html': '/translation/en/',
    '/index-en/': '/translation/en/',

    '/contacts-en.html': '/translation/en/contact/',
    '/contacts-en/': '/translation/en/contact/',

    '/interpreting-en.html': '/translation/en/interpreting/',
    '/interpreting-en/': '/translation/en/interpreting/',

    '/translation-en.html': '/translation/en/written/',
    '/translation-en/': '/translation/en/written/',

    '/price-en.html': '/translation/en/price/',
    '/price-en/': '/translation/en/price/',


        // Корневые разделы и index.php
    '/index.php': '/',
    '/index.php/fi/': '/translation/fi/',
    '/index.php/en/': '/translation/en/',
    '/ru/': '/',
    '/en/': '/translation/en/',
    '/fi/': '/translation/fi/',

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

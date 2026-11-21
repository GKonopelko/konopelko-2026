export interface NavLink {
  href: string;
  label: string;
  isHome?: boolean;
}

export const tutorLinks: NavLink[] = [
  { href: '/', label: 'Обучение', isHome: true },
  { href: '/about/', label: 'Обо мне' },
  { href: '/articles/?cat=learning', label: 'Материалы' },
  { href: '/faq/', label: 'Вопросы' },
  { href: '/contact/', label: 'Контакты' },
];

export const translationLinks: NavLink[] = [
  { href: '/translation/', label: 'Перевод', isHome: true },
  { href: '/translation/interpreting/', label: 'Устный' },
  { href: '/translation/written/', label: 'Письменный' },
  { href: '/translation/price/', label: 'Цена' },
  { href: '/translation/faq/', label: 'Вопросы' },
  { href: '/translation/contact/', label: 'Контакты' },
];

export const translationLinksFi: NavLink[] = [
  { href: '/translation/fi/', label: 'Etusivu', isHome: true },
  { href: '/translation/fi/interpreting/', label: 'Tulkkaus' },
  { href: '/translation/fi/written/', label: 'Käännökset' },
  { href: '/translation/fi/price/', label: 'Hinnasto' },
  { href: '/translation/fi/faq/', label: 'Kysymykset' },
  { href: '/translation/fi/contact/', label: 'Yhteys' },
];

export const translationLinksEn: NavLink[] = [
  { href: '/translation/en/', label: 'Translation', isHome: true },
  { href: '/translation/en/interpreting/', label: 'Interpreting' },
  { href: '/translation/en/written/', label: 'Written' },
  { href: '/translation/en/price/', label: 'Pricing' },
  { href: '/translation/en/faq/', label: 'FAQ' },
  { href: '/translation/en/contact/', label: 'Contact' },
];

export function getNavigationState(pathname: string) {
  const isFi = pathname.startsWith('/translation/fi');
  const isEn = pathname.startsWith('/translation/en');
  const isTranslation = pathname.startsWith('/translation');

  const lang: 'ru' | 'fi' | 'en' = isFi ? 'fi' : isEn ? 'en' : 'ru';

  let links = tutorLinks;
  if (isFi) links = translationLinksFi;
  else if (isEn) links = translationLinksEn;
  else if (isTranslation) links = translationLinks;

  const switchText = {
    ru: isTranslation ? '← Преподавание финского языка' : 'Услуги перевода →',
    fi: '← Kielen opetus (RU)',
    en: '← Language Tutoring (RU)',
  }[lang];

  return {
    lang,
    isTranslation,
    links,
    switchHref: isTranslation ? '/' : '/translation/',
    switchText,
  };
}

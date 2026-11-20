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

// Временно оставляем для совместимости со старыми файлами до Шага 2 и 3
// export const navigationLinks = tutorLinks;

export const CONTACTS = {
  phone: {
    display: '+7 911 777 02 97',
    href: 'tel:+79117770297',
    hours: '9:00 – 21:00 (МСК)',
  },
  email: {
    display: 'grigori.konopelko@mail.ru',
    href: 'mailto:grigori.konopelko@mail.ru',
    note: 'Отвечаю в течение 24 часов',
  },
  messengers: [
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      href: 'https://wa.me/79117770297',
    },
    {
      name: 'Telegram',
      icon: 'telegram',
      href: 'https://t.me/GrigoriKonopelko',
    },
    {
      name: 'Max',
      icon: 'max',
      href: 'https://max.ru/u/f9LHodD0cOIlZL05Afu8TsfFS8mVlkt1nFSApyy1oWrkJg3Yx8xqxlGuTgM',
    },
  ],
} as const;

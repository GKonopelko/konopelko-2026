export const TRANSLATION_PRICES_I18N = {
  ru: {
    writtenPerWord: 'от 5 руб / слово',
    writtenPerPage: 'от 1200 руб / страница (1800 знаков)',
    interpretingPerHour: 'от 2000 руб / час',
    simultaneousPerHour: 'от 3500 руб / час',
    notaryCertification: 'от 1000 руб / документ',
    standardDoc: 'от 1000 руб / документ',
  },
  fi: {
    writtenPerWord: 'alk. 5 RUB / sana',
    writtenPerPage: 'alk. 1200 RUB / sivu (1800 merkkiä)',
    interpretingPerHour: 'alk. 2000 RUB / tunti',
    simultaneousPerHour: 'alk. 3500 RUB / tunti',
    notaryCertification: 'alk. 1000 RUB / asiakirja',
    standardDoc: 'alk. 1000 RUB / asiakirja',
  },
  en: {
    writtenPerWord: 'from 5 RUB / word',
    writtenPerPage: 'from 1200 RUB / page (1800 characters)',
    interpretingPerHour: 'from 2000 RUB / hour',
    simultaneousPerHour: 'from 3500 RUB / hour',
    notaryCertification: 'from 1000 RUB / document',
    standardDoc: 'from 1000 RUB / document',
  },
};

// Сохраняем обратную совместимость для всех русских страниц
export const TRANSLATION_PRICES = TRANSLATION_PRICES_I18N.ru;

export const TUTOR_PRICES = {
  onlineLesson: '2000₽ / 60 мин',
  pairLesson: '1200₽ / 60 мин с человека',
};

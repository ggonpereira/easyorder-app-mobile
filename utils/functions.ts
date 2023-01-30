export const formatToLocalePrice = (
  value: number,
  locale = 'pt-BR',
  currency = 'BRL',
) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);

export const trimLongText = (text: string) =>
  text.length > 75 ? text.substring(0, 75) + '...' : text;

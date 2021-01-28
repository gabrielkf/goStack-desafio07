export const formatValue = (value: number): string =>
  Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const formatDate = (date: string): string => {
  const dateText = new Date(date).toLocaleDateString();

  return dateText.length < 10 ? `0${dateText}` : dateText;
};

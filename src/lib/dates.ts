const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export function formatPostDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  const monthName = MONTHS[Number(month) - 1];
  if (!(year && monthName && day)) {
    return isoDate;
  }

  return `${monthName} ${Number(day)}, ${year}`;
}

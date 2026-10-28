export const formatNumber = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
export const formatPrice = (n: number) => `${formatNumber(n)} so‘m`;

export function formatPhone(value: string): string {
  let d = value.replace(/\D/g, '');
  if (d.startsWith('998')) d = d.slice(3);
  d = d.slice(0, 9);
  let out = '+998';
  if (d.length) out += ' ' + d.slice(0, 2);
  if (d.length > 2) out += ' ' + d.slice(2, 5);
  if (d.length > 5) out += ' ' + d.slice(5, 7);
  if (d.length > 7) out += ' ' + d.slice(7, 9);
  return out;
}

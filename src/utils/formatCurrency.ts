export function formatCurrency(amount: number): string {
  const formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB'
  });

  return formatter.format(amount);
}
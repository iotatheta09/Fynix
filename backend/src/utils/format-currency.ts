// Convert rupees to paise when saving
export function convertToPaise(amount: number) {
  return Math.round(amount * 100);
}

// Convert paise to rupees when retrieving
//convertFromPaise
export function convertToRupees(amount: number) {
  return amount / 100;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
}


// export function formatCompactCurrency(amount: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     notation: "compact",
//     maximumFractionDigits: 1,
//   }).format(amount);
// }
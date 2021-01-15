export function formatPrice(price) {
  return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
}

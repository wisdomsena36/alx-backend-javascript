export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object' || !(set instanceof Set)) return '';
  return [...set]
    .filter((el) => typeof el === 'string' && el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}

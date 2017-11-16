/**
 * Returns the sum of an unbounded array of integers
 */
export function sum(...numbers) {
  const parsed = numbers.map(num => parseInt(num, 10));

  if (parsed.some(num => isNaN(num))) {
    throw new Error('Invalid numbers passed to `sum`');
  }

  return parsed.reduce((a, b) => a + b);
}

/**
 * Returns the difference of an unbounded array of integers
 */
export function difference(...numbers) {
  const parsed = numbers.map(num => parseInt(num, 10));

  if (parsed.some(num => isNaN(num))) {
    throw new Error('Invalid numbers passed to `difference`');
  }
  return parsed.reduceRight((a, b) => a - b);
}

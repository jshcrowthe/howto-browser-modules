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
 * Returns the difference of 2 integers
 */
export function difference(...numbers) {
  if (numbers.length !== 2) {
    throw new Error('Incorrect number of parameters passed to `difference`');
  }
  let [start, end] = numbers;
  if (start === undefined || start === null || end === undefined || end === null) {
    throw new Error('`start` and `end` values not properly passed');
  }

  start = parseInt(start, 10);
  end = parseInt(end, 10);

  if (isNaN(start)) throw new Error('`start` is not a valid integer');
  if (isNaN(end)) throw new Error('`end` is not a valid integer');

  return Math.abs(end - start);
}

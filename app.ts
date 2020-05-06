console.log('Put your freaking code here');

// TypeScript types.
// TS can help us up to development time.

/**
 * Adds two basic numbers.
 * @param {number} firsty - The first element to do math.
 * @param {number} secondy - The second element to do math.
 * @return {number} The math result from parameters.
 */
function add(firsty: number, secondy: number) {
  let message: string; // No type assignment when assigning it at the same time.
  if (firsty % 2 == 0) {
    message = 'Odd';
  } else {
    message = 'Even';
  }

  console.log(message, firsty + secondy);

  return firsty + secondy;
};

// TS number is a float by default.
const number1 = 12; // == 12.0
const number2 = 5;
// Inline object definition.
const developer: {
  language: string,
  nick: string,
  experience: number
} = {
  language: 'python',
  nick: 'efmcuiti',
  experience: 10,
};

console.log('Faquin result: ', add(number1, number2));
console.log('My devy: ', developer.nick);

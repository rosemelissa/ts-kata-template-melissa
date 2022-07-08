/*
Given n, take the sum of the digits of n. If that value has 
more than one digit, continue reducing in this way until a 
single-digit number is produced. The input will be a non-negative integer.
*/

/**
 * Finds the digital root of n (recursively sums it's digits until a single-digit number is produced).
 * @param n input number
 * @returns digital root of n
 */
function digitalRoot(n: number): number {
  const digitsToStrArr: string[] = n.toString().split("");
  const digitsToNumArr: number[] = digitsToStrArr.map((digit) =>
    parseInt(digit),
  );
  let currentSumOfDigits = 0;
  if (digitsToNumArr.length === 1) {
    currentSumOfDigits = n;
  } else if (digitsToNumArr.length > 1) {
    currentSumOfDigits = digitsToNumArr.reduce((num1, num2) => num1 + num2);
    currentSumOfDigits = digitalRoot(currentSumOfDigits);
  }
  return currentSumOfDigits;
}

export default digitalRoot;

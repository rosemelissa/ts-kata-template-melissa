/**
 * Given two numbers, return a tuple with the [smaller, larger] of the numbers.
 * @param numA first number
 * @param numB second number
 * @returns number[]
 */
function tupleSmallLarge(numA: number, numB: number): number[] {
  if (numA > numB) {
    return [numB, numA];
  } else {
    return [numA, numB];
  }
}

export default tupleSmallLarge;

/**
 * Returns the smaller of two numbers (or just the nuber if the two numbers are equal)
 * @param numA first number
 * @param numB secondnumber
 * @returns the smaller of the two numbers
 */
function smallerOfTwoNumbers(numA: number, numB: number): number {
  return numA < numB ? numA : numB;
}

export default smallerOfTwoNumbers;

/**
 * Returns tuple of [minimum number in array, maximum number in array]
 * @param inputArray input array of numbers
 * @returns tuple of [min, max]
 */
function minAndMax(inputArray: number[]): number[] {
  let min = inputArray[0];
  let max = inputArray[0];
  for (let number of inputArray) {
    if (number < min) {
      min = number;
    } else if (number > max) {
      max = number;
    }
  }
  return [min, max];
}

export default minAndMax;

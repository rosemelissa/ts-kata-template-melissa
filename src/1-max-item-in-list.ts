/**
 * Returns the max number in a list
 * @param inputArray list of numbers
 * @returns maximum number
 */
function maxItem(inputArray: number[]): number {
  let currentMax = inputArray[0];
  for (let item of inputArray) {
    if (item > currentMax) {
      currentMax = item;
    }
  }
  return currentMax;
}

export default maxItem;

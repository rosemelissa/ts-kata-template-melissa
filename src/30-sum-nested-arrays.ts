/*
Write a function `sumNested` which takes a (possibly infinitely deeply) 
nested array of numbers and returns the sum of all numbers in the structure.  

Here’s an example input.
`[10, [2, 3, 6], [1, [100, [3, 4], 5]]]`
Expected output: `134` (because 10 + 2 + 3 + 6 + 1 + 100 + 3 + 4 + 5 is 134)

pseudocode

add each item in input array to stack
while stack has items in:
    pop item from stack
        if it's a number, console.log it
        if its an array, add each item to stack

*/

type Item = number | Item[];

function sumNested(inputArray: Item[]): number {
  const itemStack: Item[] = [...inputArray];
  let total = 0;
  while (itemStack.length > 0) {
    const currentItem: Item = itemStack.pop()!;
    if (typeof currentItem === "number") {
      total += currentItem;
    } else {
      for (let item of currentItem) {
        itemStack.push(item);
      }
    }
  }
  return total;
}

export default sumNested;

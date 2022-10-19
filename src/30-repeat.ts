/*
Write a function `repeat` which takes a number, `n`, and a function, 
`callbackFn`, and calls the `callbackFn` that number of times (`n` times), passing no arguments.

The `callbackFn` need be given to arguments.  Its return value - if it has any - need not be collected.
`repeat` should return undefined.

pseudocode

for loop 0 -> n
    run callbackFn()
*/

function repeat(n: number, callbackFn: () => void): void {
  for (let i = 0; i < n; i++) {
    callbackFn();
  }
}

function drawRandomShape() {
  console.log("drawing...");
}

repeat(10, drawRandomShape);

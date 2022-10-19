/*
Write a function, `filter` which takes two arguments: 

- `inputArray`, an array (of anything)
- `predicateFn`, a function

It should return a new array of zero or more elements from `inputArray`
 which individually pass the test represented by `predicateFn`.  

To do this it should call `predicateFn` on each element of `inputArray` 
and collect the ones for which `predicateFn` returns true - eventually 
returning the collected array.

 `predicateFn` should be any function which will return true or false 
 when given a single element of the array as an argument.

 pseudocode:

 function filter(INPUTARRAY, PREDICATEFN):

 create OUTPUTARRAY = []
 for each VALUE of INPUTARRAY:
    if PREDICATEFN(VALUE) is true:
        add VALUE to OUTPUTARRAY
return OUTPUTARRAY
*/

function filter(inputArray, predicateFn) {
  const outputArray = [];
  for (let value of inputArray) {
    if (predicateFn(value) === true) {
      outputArray.push(value);
    }
  }
  return outputArray;
}

//test cases

// console.log(filter([10, 50, -20, -10, 100], v => v < 11));
// console.log('expect [10, -20, -10]');

// console.log(filter("AbcDeFgHI".split(""), ch => ch.toUpperCase() === ch));
// console.log('expect ["A", "D", "F", "H", "I"]');

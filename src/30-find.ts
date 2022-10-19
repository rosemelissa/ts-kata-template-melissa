/*
Write a function, `find` which takes two arguments: 

- `inputArray`, an array (of anything)
- `predicateFn`, a function

It should return either the first element of the inputArray which passes the 
test represented by the `predicateFn` or undefined, if no element passes the test.

To do this it should call `predicateFn` on each element of `inputArray` , observing 
the return value, and continuing until one returns true, and return that element.

 `predicateFn` should be any function which will return true or false when given a s
 ingle element of the array as an argument.

 PSEUDOCODE
 for each element of array
    if predicateFn(element) returns true
        return element
return undefined
*/

function find(
  inputArray: any[],
  predicateFn: (arg: any) => boolean,
): any | undefined {
  for (let element of inputArray) {
    if (predicateFn(element)) {
      return element;
    }
  }
  return undefined;
}

export default find;

//test cases
console.log(find([10, 50, -20, -10, 100], (v) => v < 0));
//expect -20
console.log(find([10, 50, -20, -10, 100], (v) => v < -500));
//expect undefined

function isUpperCase(ch: string): boolean {
  return ch.toUpperCase() === ch;
}
console.log(find("abcDeFgHI".split(""), isUpperCase));
//expect "D"

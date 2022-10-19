/*
Write a function, `every`, which checks if all elements of an array pass a given test.
  It should have two parameters:

- `inputArray`, an array of anything
- `predicateFn` a function

It should return true if calling `predicateFn` on every element of 
`inputArray` returns true in every case.

The `predicateFn` should be a function which returns a boolean when 
passed a single element of the array as argument.

function every(array, predicateFn)
-params: array = any[], predicateFn = Function
-return: boolean

pseudocode:
for each item in array
    run predicateFn on item
        if preciateFn(item) returns false
            return false
return true;

*/

export default function every<Type>(
  array: Type[],
  predicateFn: (arg: Type) => boolean,
): boolean {
  for (const item of array) {
    if (predicateFn(item) === false) {
      return false;
    }
  }
  return true;
}

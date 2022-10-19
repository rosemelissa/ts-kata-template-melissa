/*
Write a function  called `map` which takes two arguments:

- `inputArray` : an array (of anything)
- `callbackFn`: a function

It should return a new array with the collected results of calling 
`callbackFn` on every element of `inputArray`.

`callbackFn` should be a function which takes a single argument and 
returns a transformed value based on that argument.  (e.g. takes a number 
    and returns its double, or takes a string and returns its length)

pseudocode:

function map(INPUTARRAY, CALLBACKFN):
make new array OUTPUTARRAY
for each VALUE of INPUTARRAY:
    const TRANSFORMEDVALUE = CALLBACKFN(VALUE)
    add TRANSFORMEDVALUE to the end of OUTPUTARRAY
return OUTPUTARRAY
*/

function map(inputArray, callbackFn) {
  const outputArray = [];
  for (let value of inputArray) {
    const transformedValue = callbackFn(value);
    outputArray.push(transformedValue);
  }
  return outputArray;
}

//test cases
console.log(map([10, 30, 20], (v) => v * 2));
console.log("should return [20, 60, 40]");
console.log(map("hello".split(""), (char) => char.toUpperCase()));
console.log('should return ["H", "E", "L", "L", "O"]');

const spells = [
  {
    incantation: "Accio",
    effect: "Summons an object",
    type: "Charm",
  },
  {
    incantation: "Aguamenti",
    effect: "Shoots water from wand",
    type: "Charm",
  },
  {
    incantation: "Alohomora",
    effect: "Opens locked objects",
    type: "Charm",
  },
];

function myFunction(spell) {
  return spell.incantation;
}
console.log(map(spells, myFunction));
console.log('should return ["Accio", "Aguamenti", "Alohomora"]');

function makeDetails(str) {
  return {
    original: str,
    backwards: str.split("").reverse().join(""),
  };
}

console.log(map(["Fola", "Roshni", "Soso"], makeDetails));
console.log(`should return [
    { original: 'Fola', backwards: 'aloF' },
    { original: 'Roshni', backwards: 'inhsoR' },
    { original: 'Soso', backwards: 'osoS' }
  ]`);

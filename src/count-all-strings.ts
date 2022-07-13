/*
Return the count of all strings in an array of numbers and strings.  Use array functions, not a loop. (TypeScript)

Use typescript, ideally.
use array functions - don’t use a loop

Example
=======
countStrings([**”old”**, 10, 20, **“pond”**, -5, -3]) should return 2

PSEUDOCODE:

make a new array called STRINGARRAY by filtering INPUTARRAY by type to remove all numbers and keep strings
return the length of STRINGARRAY

*/

function countAllStrings(inputArray: any[]): number {
    let stringArray: string[] = inputArray.filter(item => typeof item === 'string');
    return stringArray.length;
}

export default countAllStrings;
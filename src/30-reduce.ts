/*
The reduce() method executes a user-supplied "reducer" callback 
function on each element of the array, in order, passing in the 
return value from the calculation on the preceding element. The 
final result of running the reducer across all elements of the 
array is a single value.

reduce
params: input array - array reduce is called on
        callbackFn - function called on each element, using result from all previous elements as argument
return: result from callbackFn on all elements

PSEUDOCODE

let RESULTFROMPREVIOUS = INPUTARRAY[0];
for each ITEM of INPUTARRAY (not including INPUTARRAY[0])
        let CURRENTRESULT = callbackFn(RESULTFROMPREVIOUS, ITEM)
        RESULTFROMPREVIOUS = CURRENTRESULT
return RESULTFROMPREVIOUS
*/

// function reduceWithInitial<T, returnT>(inputArray: T[], initialValue: returnT, callbackFn: ((calcFromPrev: returnT, current: T) => returnT)): returnT{
//         let resultFromPrevious: returnT = initialValue;
//         for (let i = 0; i < inputArray.length; i++) {
//                 let currentResult: returnT = callbackFn(resultFromPrevious, inputArray[i]);
//                 resultFromPrevious = currentResult;
//         }
//         return resultFromPrevious;
// }

function reduce<T, returnT>(
  inputArray: T[],
  callbackFn: (calcFromPrev: returnT | T, current: T) => returnT,
  initialValue: returnT | undefined = undefined,
): returnT | T | undefined {
  let resultFromPrevious: returnT | T | undefined = initialValue;
  if (resultFromPrevious) {
    for (let i = 0; i < inputArray.length; i++) {
      let currentResult: returnT = callbackFn(
        resultFromPrevious,
        inputArray[i],
      );
      resultFromPrevious = currentResult;
    }
    return resultFromPrevious;
  } else {
    resultFromPrevious = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
      let currentResult: returnT = callbackFn(
        resultFromPrevious,
        inputArray[i],
      );
      resultFromPrevious = currentResult;
    }
    return resultFromPrevious;
  }
}

export default reduce;

/*
example

const array1 = [1, 2, 3, 4];
const callbackFn = (sumFromPrev, current) => sumFromPrev + current;
reduce(array1, callbackFn)

expected return of 10
*/

/*
Write a function `collect` which repeatedly calls a given `callbackFn` 
function `numTimes`and collects up and returns an array of the return values from `callbackFn`

The `callbackFn` should require no arguments and should return a value 
of any type, we’ll call it `T`.  `collect` should return an array of elements of this type, T.

PSEUDOCODE:

make empty OUTPUTARRAY
Do the following NUMTIMES:
    run CALLBACKFN
    push result of CALLBACKFN to OUTPUTARRAY
return OUTPUTARRAY

*/
// type T = any;

function collect<T>(numTimes: number, callbackFn: () => T): T[] {
  const outputArray: T[] = [];
  for (let i = 0; i < numTimes; i++) {
    outputArray.push(callbackFn());
  }
  return outputArray;
}

export default collect;

/*
Example:

function createStar(){
  return { 
    pos: { x: Math.random(), y: Math.random() },
    speed: Math.random()
  }
}

const stars = collect(1000, createStar);
*/

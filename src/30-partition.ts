/*
Write partition(arr, callback).  It does a similar job to array.filter 
but instead of returning just one array of selected elements it returns 
two (wrapped in an array or tuple).  
The first array should contain the elements that pass the test represented 
by the callback function, and the second should contain those that fail that same test.  

function partition
-params: arr = input array, callback = function
-return: [array of item that pass callback, array of items that fail callback]

pseudocode
PASSARR = []
FAILARR = []
for each ITEM of ARR
    if ITEM passes CALLBACK
        PASSARR.push(ITEM)
    else
        FAILARR.push(ITEM)
return [PASSARR, FAILARR]


*/

export default function partition<Type>(
  arr: Type[],
  callback: (arg: Type) => boolean,
): Type[][] {
  const passArr = [];
  const failArr = [];
  for (const item of arr) {
    if (callback(item)) {
      passArr.push(item);
    } else {
      failArr.push(item);
    }
  }
  return [passArr, failArr];
}

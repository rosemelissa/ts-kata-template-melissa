function filter<Type>(
  inputArray: Type[],
  predicateFn: (arg: Type) => boolean,
): Type[] {
  const outputArray = [];
  for (let value of inputArray) {
    if (predicateFn(value) === true) {
      outputArray.push(value);
    }
  }
  return outputArray;
}

export default filter;

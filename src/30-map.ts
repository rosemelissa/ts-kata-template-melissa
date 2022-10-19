function map<Type, returnType>(
  inputArray: Type[],
  callbackFn: (arg: Type) => returnType,
): returnType[] {
  const outputArray = [];
  for (let value of inputArray) {
    const transformedValue = callbackFn(value);
    outputArray.push(transformedValue);
  }
  return outputArray;
}
// ??? https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

export default map;

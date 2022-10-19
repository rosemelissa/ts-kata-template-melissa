import tupleSmallLarge from "./tuple-smallest-largest";

test("Returns [smallest, largest] tuple for different numbers", () => {
  expect(tupleSmallLarge(3, 7)).toStrictEqual([3, 7]);
  expect(tupleSmallLarge(5, 2)).toStrictEqual([2, 5]);
});

test("Returns tuple of number for equal numA and numB", () => {
  expect(tupleSmallLarge(3, 3)).toStrictEqual([3, 3]);
});

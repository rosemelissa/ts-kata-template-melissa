import sumNested from "./30-sum-nested-arrays";

test("Returns the sum of a nested array", () => {
  expect(sumNested([10, [2, 3, 6], [1, [100, [3, 4], 5]]])).toBe(134);
  expect(sumNested([1, 2, 3, 4])).toBe(10);
  expect(sumNested([1, [2, [3, [4], 5], 6], 7.5])).toBe(28.5);
});

import minAndMax from "./1-min-and-max";

test("Returns min and max", () => {
  expect(minAndMax([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
  expect(minAndMax([7, 4, 8.5, 2, 8.4])).toStrictEqual([2, 8.5]);
  expect(minAndMax([-4, 5, 2, 0])).toStrictEqual([-4, 5]);
  expect(minAndMax([1])).toStrictEqual([1, 1]);
  expect(minAndMax([])).toStrictEqual([undefined, undefined]);
});

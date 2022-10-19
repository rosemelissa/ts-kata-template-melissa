import every from "./30-every";

test('function "every" returns true if all items of array pass predicateFn or false if any fail', () => {
  expect(every([2, 6, 8, 2, 7], (el) => el % 2 === 0)).toBe(false);
  expect(every([2, 6, 8, 2], (el) => el % 2 === 0)).toBe(true);
  expect(every([5, 7], (el) => el % 2 === 0)).toBe(false);
  expect(every([], (el) => el % 2 === 0)).toBe(true);
});

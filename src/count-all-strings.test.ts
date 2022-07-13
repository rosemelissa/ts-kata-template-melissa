import countAllStrings from "./count-all-strings";

test("returns number of strings from mixed string/number array", () => {
  expect(countAllStrings(["old", 10, 20, "pond", -5, -3])).toBe(2);
});

test("returns 0 if there are no strings", () => {
  expect(countAllStrings([10, 20, -5, -3])).toBe(0);
});

test("returns 0 if input is an empty array", () => {
  expect(countAllStrings([])).toBe(0);
});

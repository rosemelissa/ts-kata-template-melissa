import find from "./30-find";

test("Returns first element that passes predicateFn", () => {
  expect(find([10, 50, -20, -10, 100], (v) => v < 0)).toBe(-20);
  expect(find([10, 50, -40, -50, 100], (v) => v < 0)).toBe(-40);
  expect(find("abcDeFgHI".split(""), isUpperCase)).toBe("D");
});

test("Returns undefined if no element passes predicateFn", () => {
  expect(find([10, 50, -20, -10, 100], (v) => v < -100)).toBe(undefined);
  expect(find([], (v) => v < 0)).toBe(undefined);
  expect(find("abcdef".split(""), isUpperCase)).toBe(undefined);
});

function isUpperCase(ch: string): boolean {
  return ch.toUpperCase() === ch;
}

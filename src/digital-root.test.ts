import digitalRoot from "./digital-root";

test("Single digit input returns itself", () => {
  expect(digitalRoot(7)).toBe(7);
});

test("Multi-digit input, where digits sum to a single-digit number, returns that sum", () => {
  expect(digitalRoot(111)).toBe(3);
});

test("Multi-digit input, where digits sum to a multi-digit number, returns the digital root", () => {
  expect(digitalRoot(4567)).toBe(4);
});

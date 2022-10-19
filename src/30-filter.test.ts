import filter from "./30-filter";

test("Filters array", () => {
  expect(filter([10, 50, -20, -10, 100], (v) => v < 11)).toStrictEqual([
    10, -20, -10,
  ]);
  expect(
    filter("AbcDeFgHI".split(""), (ch) => ch.toUpperCase() === ch),
  ).toStrictEqual(["A", "D", "F", "H", "I"]);
});

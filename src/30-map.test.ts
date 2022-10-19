import map from "./30-map";

test("Maps values", () => {
  expect(map([10, 30, 20], (v) => v * 2)).toStrictEqual([20, 60, 40]);
  expect(
    map(["h", "e", "l", "l", "o"], (char) => char.toUpperCase()),
  ).toStrictEqual(["H", "E", "L", "L", "O"]);
});

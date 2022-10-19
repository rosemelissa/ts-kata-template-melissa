import collect from "./30-collect";

test("Collect collects an array of the results of a callbackFn executes numTimes times", () => {
  expect(collect(7, () => 1)).toStrictEqual([1, 1, 1, 1, 1, 1, 1]);
  expect(collect(3, () => "hello")).toStrictEqual(["hello", "hello", "hello"]);
});

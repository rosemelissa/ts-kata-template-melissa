import firstItemOfList from "./0-first-item-of-list";

test("Returns first item of list regardless of list type", () => {
  expect(firstItemOfList([1, 2, 3, 4])).toStrictEqual(1);
  expect(firstItemOfList(["one", "two", "three"])).toStrictEqual("one");
  expect(firstItemOfList([true, false])).toStrictEqual(true);
  expect(
    firstItemOfList([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toStrictEqual([1, 2, 3]);
  expect(firstItemOfList(["seventeen", 17, false, [1, 2, 3]])).toStrictEqual(
    "seventeen",
  );
});
test("Returns undefined if list is empty", () => {
  expect(firstItemOfList([])).toStrictEqual(undefined);
  expect(firstItemOfList([[]])).toStrictEqual([]);
});

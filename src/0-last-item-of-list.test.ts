import lastItemOfList from "./0-last-item-of-list";

test("Returns last item of list regardless of list type", () => {
  expect(lastItemOfList([1, 2, 3, 4])).toStrictEqual(4);
  expect(lastItemOfList(["one", "two", "three"])).toStrictEqual("three");
  expect(lastItemOfList([true, false])).toStrictEqual(false);
  expect(
    lastItemOfList([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toStrictEqual([7, 8, 9]);
  expect(lastItemOfList(["seventeen", 17, false, [1, 2, 3]])).toStrictEqual([
    1, 2, 3,
  ]);
  expect(lastItemOfList([7])).toStrictEqual(7);
});
test("Returns undefined if list is empty", () => {
  expect(lastItemOfList([])).toStrictEqual(undefined);
  expect(lastItemOfList([[]])).toStrictEqual([]);
});

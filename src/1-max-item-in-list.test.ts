import maxItem from "./1-max-item-in-list";

test("Returns the maximum item", () => {
  expect(maxItem([2, 4, 1, -7, 4.5])).toStrictEqual(4.5);
  expect(maxItem([1, 1, 1])).toStrictEqual(1);
  expect(maxItem([])).toStrictEqual(undefined);
});

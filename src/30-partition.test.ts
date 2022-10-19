import partition from "./30-partition";

function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

test("Partitions items into pass and fail arrays", () => {
  expect(partition([1, 7, 2, 40, 5, 800, 40], isOdd)).toStrictEqual([
    [1, 7, 5],
    [2, 40, 800, 40],
  ]);
  expect(partition([1, 7], isOdd)).toStrictEqual([[1, 7], []]);
  expect(partition([2, 40, 800, 40], isOdd)).toStrictEqual([
    [],
    [2, 40, 800, 40],
  ]);
  expect(partition([], isOdd)).toStrictEqual([[], []]);
});

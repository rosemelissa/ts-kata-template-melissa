import reduce from "./30-reduce";

test("Reduce works with initial value where types T and returnT are the same", () => {
  expect(
    reduce([1, 2, 3, 4], (sumFromPrev, current) => sumFromPrev + current, 1),
  ).toBe(11);
  expect(
    reduce(
      ["b", "c", "d"],
      (concatFromPrev, current) => concatFromPrev + current,
      "a",
    ),
  ).toBe("abcd");
  expect(reduce([], (sumFromPrev, current) => sumFromPrev + current, 1)).toBe(
    1,
  );
});

// test('Reduce works with initial value where types T and returnT are different', () => {
//     expect(reduce([1, 2, 3, 4], 'abc', (concatFromPrev, current) => `${concatFromPrev}${current}`)).toBe('abc1234');
//     expect(reduce(['a', 'bc', 'def'], 1, (lengthFromPrev, current) => lengthFromPrev + current.length)).toBe(7);
//     expect(reduce([[1], [2, 3], [4]], 7, (lengthFromPrev, current) => lengthFromPrev + current.length)).toBe(11);
// })

test.skip("Reduce works where no initialValue is supplied", () => {
  expect(
    reduce([1, 2, 3, 4], (sumFromPrev, current) => sumFromPrev + current),
  ).toBe(10);
});

// const array1 = [1, 2, 3, 4];
// const callbackFn = (sumFromPrev, current) => sumFromPrev + current;
// reduce(array1, callbackFn)

// expected return of 10

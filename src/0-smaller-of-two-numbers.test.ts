import smallerOfTwoNumbers from "./0-smaller-of-two-numbers";

test("Returns smaller of two numbers", () => {
  expect(smallerOfTwoNumbers(1, 5)).toStrictEqual(1);
  expect(smallerOfTwoNumbers(9, 5)).toStrictEqual(5);
  expect(smallerOfTwoNumbers(8, 8)).toStrictEqual(8);
});

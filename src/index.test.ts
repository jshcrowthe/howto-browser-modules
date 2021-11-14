import { sum, difference } from "./index";

test("3 + 5 = 8", () => {
  expect(sum(3, 5)).toEqual(8);
});
test("3 + 5 + 4 = 12", () => {
  expect(sum(3, 5, 4)).toEqual(12);
});
test("Should handle incorrect inputs", () => {
  expect(() => {
    sum("one", 2, 3);
  }).toThrow();
});

test("difference of 3 and 5 is 2", () => {
  expect(difference(3, 5)).toEqual(2);
  expect(difference(5, 3)).toEqual(2);
});
test("cannot find difference of more than 2 values", () => {
  expect(() => {
    difference(3, 5, 4);
  }).toThrow();
});
test("Should handle incorrect inputs", () => {
  expect(() => {
    difference("one", 2);
  }).toThrow();
});

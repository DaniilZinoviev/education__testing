import { test, expect } from "@jest/globals";
import { sum, divide } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("divide 6 / 3 to equal 2", () => {
  expect(divide(6, 3)).toBe(2);
});

test("divide any by zero to equal Infinity", () => {
  expect(divide(1, 0)).toBe(Infinity);
  expect(divide(7, 0)).toBe(Infinity);
});

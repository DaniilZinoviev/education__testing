import Calc from "@/webpack-test/Calc";
import { describe, test, jest, expect } from "@jest/globals";

describe("Calc module", () => {
  test("should return 0 if no argument supplied", () => {
    expect(Calc.sum()).toBe(0);
  });
  test("should return same value if there is only one argument", () => {
    expect(Calc.sum(1)).toBe(1);
  });
  test("should return the type number", () => {
    expect(typeof Calc.sum(1, 2)).toBe("number");
  });
  test("should return (number) 5 if add 2 and 3", () => {
    expect(Calc.sum(2, 3)).toBe(5);
  });
  test("should return 23 if add 2, 3, 7, 11", () => {
    expect(Calc.sum(2, 3, 7, 11)).toBe(23);
  });
  test("should return 4 if square 2", () => {
    expect(Calc.square(2)).toBe(4);
  });
  test("should return 81 if square 9", () => {
    expect(Calc.square(9)).toBe(81);
  });
});

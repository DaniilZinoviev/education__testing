import { expect, test } from "@jest/globals";

test("object assignment (toEqual)", () => {
  const data = { one: 1 };
  data["two"] = { value: 2 };
  expect(data).toEqual({ one: 1, two: { value: 2 } });
});

test("opposite of matche (.not.)", () => {
  expect(5).not.toBe(2);
});

test("null", () => {
  const n = null;
  expect(n).toBeNull;
  expect(n).toBeDefined;
  expect(n).not.toBeUndefined;
  expect(n).not.toBeTruthy;
  expect(n).toBeFalsy;
});

test("numbers", () => {
  const value = 2 + 0.5;
  expect(value).toBeGreaterThan(2);
  expect(value).toBeGreaterThanOrEqual(2.5);
  expect(value).toBeLessThan(3);
  expect(value).toBeLessThanOrEqual(2.7);
  // expect(value).toBe(2.5);
});

test("float numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);     This won't work because of rounding error
  expect(value).toBeCloseTo(0.3);
});

test('there is no "I" letter in "team"', () => {
  expect("team").not.toMatch(/I/);
});

test('there is a "stop" in "Christoph"', () => {
  expect("Cristoph").toMatch("stop");
});

test("array contain a value (toContain)", () => {
  const iterable = [1, 2, 3];
  expect(iterable).toContain(2);
  expect(new Set(iterable)).toContain(3);
});

test("error was thrown", () => {
  function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
  }
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

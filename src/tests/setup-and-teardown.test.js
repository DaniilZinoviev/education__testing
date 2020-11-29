import { test, describe, expect, beforeAll, beforeEach, afterAll, afterEach } from '@jest/globals'

let a;

describe("increment", () => {
  beforeAll(() => {
    a = 0;
  });

  beforeEach(() => {
    a++;
  });

  test("first test", () => {
    expect(a).toBe(1);
  });

  test("second test", () => {
    expect(a).toBe(2);
  });

  afterAll(() => {
    a = 0;
  });
});

describe("decrement", () => {
  beforeAll(() => {
    a = 10;
  });

  beforeEach(() => {
    a--;
  });

  test("first test", () => {
    expect(a).toBe(9);
  });

  test("second test", () => {
    expect(a).toBe(8);
  });

  afterAll(() => {
    a = 0;
  });
});
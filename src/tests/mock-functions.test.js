import { describe, test, expect, jest } from "@jest/globals";

describe("using mock functions", () => {
  const mockCallback = jest.fn((x) => Number(x) + 42);
  [1, 2].forEach(mockCallback);

  test("mackCallback was called 2 times", () => {
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test("mackCallback was called with argumnet 1 in first call", () => {
    expect(mockCallback.mock.calls[0][0]).toBe(1);
  });

  test("mackCallback was called with argumnet 2 in second call", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(2);
  });

  test("mackCallback returned 43 from first call", () => {
    expect(mockCallback.mock.results[0].value).toBe(43);
  });
});

describe("mock function return values", () => {
  const mock = jest.fn();

  mock
    .mockReturnValueOnce(23)
    .mockReturnValueOnce("tercio")
    .mockReturnValue(true);

  for (let i = 0; i < 4; i++) {
    mock();
  }

  test("First call should return 23", () => {
    expect(mock.mock.results[0].value).toBe(23);
  });

  test('Second call should return "tercio"', () => {
    expect(mock.mock.results[1].value).toBe("tercio");
  });

  test("Third and later calls should return true", () => {
    expect(mock.mock.results[2].value).toBe(true);
    expect(mock.mock.results[3].value).toBe(true);
  });
});

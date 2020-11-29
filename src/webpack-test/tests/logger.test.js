import { describe, test, expect, jest } from "@jest/globals";
import Logger from "../Logger";

describe("Logger testing", () => {
  test("should have static log function", () => {
    expect(typeof Logger.log).toBe("function");
  });

  test("should use console.log for log function", () => {
    const originalLog = console.log;
    console.log = jest.fn();

    Logger.log();
    expect(console.log).toBeCalled();

    console.log = originalLog;
  });

  test("should use console.log 3 times for log", () => {
    const originalLog = console.log;
    console.log = jest.fn();

    Logger.log();
    expect(console.log).toHaveBeenCalledTimes(3);

    console.log = originalLog;
  });

  test("should use argument in the third console.log call", () => {
    const originalLog = console.log;
    console.log = jest.fn();
    const args = ["a", "b", "c"];

    Logger.log(...args);
    expect(console.log.mock.calls[1]).toEqual(args);

    console.log = originalLog;
  });
});

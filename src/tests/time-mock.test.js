"use strict";
import { jest, describe, test, expect } from "@jest/globals";

jest.useFakeTimers();
const fnWithTimeout = (cb, ms) => {
  setTimeout(() => cb && cb(), ms);
};

describe("time testing", () => {

  test('should be inited after 1000 ms', () => {
    const callback = jest.fn();

    fnWithTimeout(callback, 1000);
  
    expect(callback).not.toBeCalled();

    // jest.advanceTimersByTime(1000)
    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
  
});

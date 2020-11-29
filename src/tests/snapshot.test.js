import { describe, test, expect } from "@jest/globals";

describe("snaphsots testing", () => {

  test("object", () => {
    const object = {
      a: 12,
      b: "testing snapshot"
    };
    expect(object).toMatchSnapshot();
  });

  test("array", () => {
    const array = [1, 2, true, { a: 15 }, "test"];
    expect(array).toMatchSnapshot();
  })
});

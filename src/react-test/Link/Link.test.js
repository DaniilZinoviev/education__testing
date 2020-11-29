import { describe, test, expect } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";
import Link from "./Link";

describe("component Link", () => {
  test("should test", () => {
    const component = renderer.create(
      <Link page="https://example.com/">Example</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

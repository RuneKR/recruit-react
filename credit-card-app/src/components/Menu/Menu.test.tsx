import React from "react";
import renderer from "react-test-renderer";
import Menu from "./Menu";

describe("Menu Component", () => {
  test("menu rendered correctly", () => {
    const component = renderer.create(<Menu />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

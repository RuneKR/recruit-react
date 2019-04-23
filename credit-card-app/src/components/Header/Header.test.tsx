import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header Component", () => {
  test("header rendered correctly", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("show and hide menu", () => {
    const wrapper = mount(<Header />);

    wrapper.find("Icon").simulate("click");
    expect(wrapper.state("isMenuVisible")).toEqual(true);

    wrapper.find("i.header-menuClose").simulate("click");
    expect(wrapper.state("isMenuVisible")).toEqual(false);
  });
});

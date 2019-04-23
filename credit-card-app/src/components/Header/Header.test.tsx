import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header Component", () => {
  test("header rendered correctly", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("show menu", () => {
    /* 
    Should really be testing for the visibility prop of <Drawer> - but apparently enzyme cannot fine elements 
    rendered outside of render tree https://github.com/airbnb/enzyme/issues/1697. 
    So testing for components' state change instead. I guess needs to be further covered in e2e?
  */

    const component = shallow(<Header />);

    component.find("Icon").simulate("click");
    expect(component.state("isMenuVisible")).toEqual(true);
  });
});

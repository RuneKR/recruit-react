import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import { User } from "./models/user.model";
import Adapter from "enzyme-adapter-react-16";

describe("App Component", () => {
  Enzyme.configure({ adapter: new Adapter() });

  let wrapper: ShallowWrapper;
  const mockSetCurrentUserFunction = jest.fn();
  const currentUser: User = {
    firstName: "Jack"
  };

  beforeEach(() => {
    wrapper = shallow(
      <App
        setCurrentUser={mockSetCurrentUserFunction}
        currentUser={currentUser}
      />
    );
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <App
        setCurrentUser={mockSetCurrentUserFunction}
        currentUser={currentUser}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test("should call mock setCurrentUser function", () => {
    const mockSetCurrentUserFunction = jest.fn();
    shallow(
      <App
        setCurrentUser={mockSetCurrentUserFunction}
        currentUser={currentUser}
      />
    );
    expect(mockSetCurrentUserFunction.mock.calls.length).toBe(1);
  });

  test("should display welcome message with current users name", () => {
    expect(wrapper.find("h2").text()).toEqual("Welcome, Jack");
  });
});

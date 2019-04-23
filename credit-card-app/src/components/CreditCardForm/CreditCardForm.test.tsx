import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CreditCardForm from "./CreditCardForm";

Enzyme.configure({ adapter: new Adapter() });

describe("CreditCardForm Component", () => {
  test("form renders correctly", () => {
    const component = renderer.create(<CreditCardForm onSubmit={() => {}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("required messages appear", () => {
    const component = mount(<CreditCardForm onSubmit={() => {}} />);

    component.find("Button").simulate("click");

    expect(
      component
        .find(".creditCardForm-cardNumberFormItem .has-error .ant-form-explain")
        .text()
    ).toEqual("Required");

    expect(
      component
        .find(".creditCardForm-cvcFormItem .has-error .ant-form-explain")
        .text()
    ).toEqual("Required");

    expect(
      component
        .find(".creditCardForm-expiryFormItem .has-error .ant-form-explain")
        .text()
    ).toEqual("Required");
  });

  test("too short messages appear", () => {
    const component = mount(<CreditCardForm onSubmit={() => {}} />);

    component
      .find(".creditCardForm-cardNumberFormItem input")
      .simulate("change", { target: { value: "0" } });

    component
      .find(".creditCardForm-cvcFormItem input")
      .simulate("change", { target: { value: "0" } });

    component
      .find(".creditCardForm-expiryFormItem input")
      .simulate("change", { target: { value: "0" } });

    component.find("Button").simulate("click");

    expect(
      component
        .find(".creditCardForm-cardNumberFormItem .has-error .ant-form-explain")
        .text()
    ).toEqual("Too short");

    expect(
      component
        .find(".creditCardForm-cvcFormItem .has-error .ant-form-explain")
        .text()
    ).toEqual("Too short");

    expect(
      component
        .find(".creditCardForm-expiryFormItem .has-error .ant-form-explain")
        .text()
    ).toEqual("Too short");
  });

  test("card number field formatting", () => {
    const component = mount(<CreditCardForm onSubmit={() => {}} />);
    const selector = ".creditCardForm-cardNumberFormItem input";

    component
      .find(selector)
      .simulate("change", { target: { value: "1234123412341234" } });
    expect(component.find(selector).props().value).toEqual(
      "1234 1234 1234 1234"
    );

    component
      .find(selector)
      .simulate("change", { target: { value: "fdasklfj" } });
    expect(component.find(selector).props().value).toEqual("");

    component
      .find(selector)
      .simulate("change", { target: { value: "12xxx341234#123&&." } });
    expect(component.find(selector).props().value).toEqual("1234 1234 123");
  });

  test("cvc field formatting", () => {
    const component = mount(<CreditCardForm onSubmit={() => {}} />);
    const selector = ".creditCardForm-cvcFormItem input";

    component
      .find(selector)
      .simulate("change", { target: { value: "1#@!  2 ##...3" } });
    expect(component.find(selector).props().value).toEqual("123");

    component.find(selector).simulate("change", { target: { value: "dasds" } });
    expect(component.find(selector).props().value).toEqual("");
  });

  test("expiry field formatting", () => {
    const component = mount(<CreditCardForm onSubmit={() => {}} />);
    const selector = ".creditCardForm-expiryFormItem input";

    component.find(selector).simulate("change", { target: { value: "3/" } });
    expect(component.find(selector).props().value).toEqual("03/");

    component.find(selector).simulate("change", { target: { value: "11" } });
    expect(component.find(selector).props().value).toEqual("11/");

    component.find(selector).simulate("change", { target: { value: "13" } });
    expect(component.find(selector).props().value).toEqual("01/3");

    component.find(selector).simulate("change", { target: { value: "1/11" } });
    expect(component.find(selector).props().value).toEqual("01/11");

    component.find(selector).simulate("change", { target: { value: "0/" } });
    expect(component.find(selector).props().value).toEqual("0");

    component.find(selector).simulate("change", { target: { value: "00" } });
    expect(component.find(selector).props().value).toEqual("0");

    component.find(selector).simulate("change", { target: { value: "a" } });
    expect(component.find(selector).props().value).toEqual("");

    component.find(selector).simulate("change", { target: { value: "01//" } });
    expect(component.find(selector).props().value).toEqual("01/");
  });
});

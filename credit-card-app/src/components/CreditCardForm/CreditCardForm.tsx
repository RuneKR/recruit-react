import React, { Component } from "react";
import { Input, Button } from "antd/lib";
import Form, { FormComponentProps } from "antd/lib/form";

import "./CreditCardForm.scss";
import {
  formatCardExpiryDate,
  formatCardNumber,
  formatCvc
} from "../../common/formatters";
import { CreditCard } from "../../models/creditCard.model";

type State = typeof initialState;
type OwnProps = {
  onSubmit: (creditCard: CreditCard) => void;
};
type Props = FormComponentProps & OwnProps;

const initialState = {
  submitClicked: false
};

class CreditCardForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  formatCvcField = (e: React.ChangeEvent<HTMLInputElement>) => {
    return formatCvc(e.target.value);
  };

  formatCardNumberField = (e: React.ChangeEvent<HTMLInputElement>) => {
    return formatCardNumber(e.target.value);
  };

  formatExpiryDateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if ((e.nativeEvent as any).inputType != "deleteContentBackward") {
      value = formatCardExpiryDate(value);
    }
    return value;
  };

  handleSubmit = () => {
    this.setState({ submitClicked: true });
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="creditCardForm-form">
        <Form.Item
          label="Card Number"
          className="creditCardForm-cardNumberFormItem"
        >
          {getFieldDecorator("number", {
            getValueFromEvent: this.formatCardNumberField,
            rules: [
              { required: true, message: "Required" },
              { len: 19, message: "Too short" }
            ],
            validateTrigger: this.state.submitClicked ? "onChange" : "onSubmit"
          })(<Input placeholder="1234 1234 1234 1234" maxLength={19} />)}
        </Form.Item>
        <div className="creditCardForm-cvcExpiryRow">
          <Form.Item label="CVC" className="creditCardForm-cvcFormItem">
            {getFieldDecorator("cvc", {
              getValueFromEvent: this.formatCvcField,
              rules: [
                { required: true, message: "Required" },
                { len: 3, message: "Too short" }
              ],
              validateTrigger: this.state.submitClicked
                ? "onChange"
                : "onSubmit"
            })(<Input placeholder="123" maxLength={3} />)}
          </Form.Item>
          <Form.Item label="Expiry" className="creditCardForm-expiryFormItem">
            {getFieldDecorator("expiry", {
              getValueFromEvent: this.formatExpiryDateField,
              rules: [
                { required: true, message: "Required" },
                { len: 5, message: "Too short" }
              ],
              validateTrigger: this.state.submitClicked
                ? "onChange"
                : "onSubmit"
            })(<Input placeholder="12/34" maxLength={5} />)}
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            className="creditCardForm-submitButton"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(CreditCardForm);

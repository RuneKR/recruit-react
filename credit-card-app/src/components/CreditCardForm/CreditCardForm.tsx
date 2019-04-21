import React, { Component } from "react";
import { Input, Button } from "antd/lib";
import Form, { FormComponentProps } from "antd/lib/form";

import "./CreditCardForm.scss";
import {
  formatCardExpiryDate,
  formatCardNumber
} from "../../common/formatters";

type Props = FormComponentProps;

class CreditCardForm extends Component<Props> {
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

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form>
        <Form.Item label="Card Number">
          {getFieldDecorator("cardNumber", {
            getValueFromEvent: this.formatCardNumberField
          })(<Input placeholder="1234 1234 1234 1234" maxLength={19} />)}
        </Form.Item>
        <div className="creditCardForm-cvcExpiryRow">
          <Form.Item label="CVC">
            {getFieldDecorator("cvc", {})(
              <Input placeholder="123" maxLength={3} />
            )}
          </Form.Item>
          <Form.Item label="Expiry">
            {getFieldDecorator("expiry", {
              getValueFromEvent: this.formatExpiryDateField
            })(<Input placeholder="12/34" maxLength={5} />)}
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(CreditCardForm);

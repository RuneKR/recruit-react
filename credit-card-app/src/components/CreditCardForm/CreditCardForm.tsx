import React, { Component } from "react";
import { Input, Button } from "antd/lib";
import Form, { FormComponentProps } from "antd/lib/form";

import "./CreditCardForm.scss";

type Props = FormComponentProps;

class CreditCardForm extends Component<Props> {
  formatCardNumberField = (e: React.ChangeEvent<HTMLInputElement>) => {
    var cardNumber = e.target.value.replace(/\D/g, "");

    var parts = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
      parts.push(cardNumber.substring(i, i + 4));
    }
    if (parts.length) {
      cardNumber = parts.join(" ");
    }
    return cardNumber;
  };

  formatExpiryDateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if ((e.nativeEvent as any).inputType != "deleteContentBackward") {
      value = value
        .replace(
          /^([1-9]\/|[2-9])$/g,
          "0$1/" // To handle 3/ > 03/
        )
        .replace(
          /^(0[1-9]{1}|1[0-2]{1})$/g,
          "$1/" // 11 > 11/
        )
        .replace(
          /^([0-1]{1})([3-9]{1})$/g,
          "0$1/$2" // 13 > 01/3
        )
        .replace(
          /^(\d)\/(\d\d)$/g,
          "0$1/$2" // To handle 1/11 > 01/11
        )
        .replace(
          /^(0?[1-9]{1}|1[0-2]{1})([0-9]{2})$/g,
          "$1/$2" // 141 > 01/41
        )
        .replace(
          /^([0]{1,})\/|[0]{1,}$/g,
          "0" // To handle 0/ > 0 and 00 > 0
        )
        .replace(
          /[^\d\/]|^[\/]{0,}$/g,
          "" // To allow only numbers and /
        )
        .replace(
          /\/\//g,
          "/" // Prevent entering more than 1 /
        );
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

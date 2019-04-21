import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import CreditCardForm from "./components/CreditCardForm/CreditCardForm";

class App extends Component {
  render() {
    return (
      <div>
        <CreditCardForm />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import CreditCardForm from "./components/CreditCardForm/CreditCardForm";
import Header from "./components/Header/Header";
import { Layout } from "antd";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout.Content>
          <CreditCardForm />
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;

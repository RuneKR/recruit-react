import React, { Component } from "react";
import "./App.scss";
import CreditCardForm from "./components/CreditCardForm/CreditCardForm";
import { Layout } from "antd";
import Header from "./components/Header/Header";
import { RootState } from "./store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as userActions from "./store/user/actions";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.getCurrentUser();
  }

  render() {
    return (
      <Layout>
        <Header />
        <Layout.Content>
          <h2 style={{ textAlign: "center" }}>
            Welcome, {this.props.currentUser.firstName}
          </h2>
          <CreditCardForm />
        </Layout.Content>
      </Layout>
    );
  }
}

const mapStateToProps = ({ user }: RootState) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCurrentUser: () => dispatch(userActions.getCurrentUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

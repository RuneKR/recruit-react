import React, { Component } from "react";
import "./App.scss";
import CreditCardForm from "./components/CreditCardForm/CreditCardForm";
import { Layout } from "antd";
import Header from "./components/Header/Header";
import { RootState } from "./store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as userActions from "./store/user/actions";
import { CreditCard } from "./models/creditCard.model";
import { User } from "./models/user.model";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

export class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
    /*
      Demonstrative purpose: Ideally, this wouldn't be necessary as the current user should already be set in the store.
      Just wanted to create at least one dispatchable action that will lead to store change 
      without over-killing for this assessment.
    */
    this.props.setCurrentUser({
      firstName: "Rookie"
    });
  }

  registerCard(creditCard: CreditCard) {
    console.log(creditCard);
  }

  render() {
    return (
      <Layout>
        <Header />
        <Layout.Content>
          <h2 style={{ textAlign: "center" }}>
            Welcome, {this.props.currentUser.firstName}
          </h2>
          <CreditCardForm onSubmit={this.registerCard} />
        </Layout.Content>
      </Layout>
    );
  }
}

const mapStateToProps = ({ user }: RootState) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: User) => dispatch(userActions.setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

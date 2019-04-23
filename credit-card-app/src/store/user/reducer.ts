import { UserState, UserActions } from "./types";
import { Constants } from "./constants";
import { bindActionCreators } from "redux";

const initialState: UserState = {
  currentUser: {
    firstName: "Guest"
  }
};

export default (state: UserState = initialState, action: UserActions) => {
  switch (action.type) {
    case Constants.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

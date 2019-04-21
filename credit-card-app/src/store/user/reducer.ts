import { UserState, UserActions } from "./types";
import { Constants } from "./constants";

const initialState: UserState = {
  currentUser: {
    firstName: "Guest"
  }
};

export default (state: UserState = initialState, action: UserActions) => {
  switch (action.type) {
    case Constants.GET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          firstName: "Rookie"
        }
      };
    default:
      return state;
  }
};

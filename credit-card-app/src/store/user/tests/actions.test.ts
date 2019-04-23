import { Constants } from "../constants";
import * as actions from "../actions";
import { User } from "../../../models/user.model";

describe("User Actions", () => {
  test("should create an action to set current user", () => {
    const user: User = {
      firstName: "Luke"
    };
    const expectedAction = {
      type: Constants.SET_CURRENT_USER,
      payload: user
    };
    expect(actions.setCurrentUser(user)).toEqual(expectedAction);
  });
});
